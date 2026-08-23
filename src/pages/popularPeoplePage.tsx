import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PersonListPageTemplate from "../components/templatePersonListPage";
import { getPopularPeople } from "../api/tmdb-api";
import { PopularPeople } from "../types/interfaces";

const PopularPeoplePage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<PopularPeople, Error>(
    "popularPeople",
    getPopularPeople
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const people = data ? data.results : [];

  return <PersonListPageTemplate title="Popular Actors" people={people} />;
};

export default PopularPeoplePage;