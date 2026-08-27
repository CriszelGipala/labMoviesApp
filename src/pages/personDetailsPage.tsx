import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";
import Spinner from "../components/spinner";
import PersonDetails from "../components/personDetails";
import PersonMovieCredits from "../components/personMovieCredits";
import { getPerson, getPersonMovieCredits } from "../api/tmdb-api";
import { PersonDetailsProps, PersonMovieCredit } from "../types/interfaces";
import img from "../images/film-poster-placeholder.png";

const PersonDetailsPage: React.FC = () => {
  const { id } = useParams();

  const {
    data: person,
    error: personError,
    isLoading: personLoading,
    isError: personIsError,
  } = useQuery<PersonDetailsProps, Error>(["person", id], () => getPerson(id || ""));

  const {
    data: credits,
    error: creditsError,
    isLoading: creditsLoading,
    isError: creditsIsError,
  } = useQuery<PersonMovieCredit[], Error>(
    ["personMovieCredits", id],
    () => getPersonMovieCredits(id || "")
  );

  if (personLoading || creditsLoading) {
    return <Spinner />;
  }

  if (personIsError) {
    return <h1>{personError?.message}</h1>;
  }

  if (creditsIsError) {
    return <h1>{creditsError?.message}</h1>;
  }

  if (!person || !credits) {
    return <p>Waiting for actor details</p>;
  }

  const profileImage = person.profile_path
    ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
    : img;

  return (
    <>
      <Header title={person.name} />
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <img src={profileImage} alt={person.name} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={9}>
          <PersonDetails {...person} />
          <PersonMovieCredits credits={credits} />
        </Grid>
      </Grid>
    </>
  );
};

export default PersonDetailsPage;