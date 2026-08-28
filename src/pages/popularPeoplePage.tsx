import React, { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PersonListPageTemplate from "../components/templatePersonListPage";
import { getPopularPeople } from "../api/tmdb-api";
import { PopularPeople } from "../types/interfaces";
import TextField from "@mui/material/TextField";

const PopularPeoplePage: React.FC = () => {
  const [nameFilter, setNameFilter] = useState("");

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
  const displayedPeople = people.filter((person) =>
    person.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  const sortedPeople = [...displayedPeople].sort(
    (a, b) => b.popularity - a.popularity
  );

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(e.target.value);
  };

  return (
  <>
    <TextField
      label="Filter actors"
      variant="filled"
      value={nameFilter}
      onChange={handleNameChange}
      sx={{ margin: 2 }}
    />
<PersonListPageTemplate title="Popular Actors" people={sortedPeople} />  </>
);
};

export default PopularPeoplePage;
