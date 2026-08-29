import React, { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PersonListPageTemplate from "../components/templatePersonListPage";
import { getPopularPeople } from "../api/tmdb-api";
import { PopularPeople } from "../types/interfaces";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import usePagination from "../hooks/usePagination";

const PopularPeoplePage: React.FC = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [sortOption, setSortOption] = useState("popularity");
  const {
    page,
      handlePreviousPage,
      handleNextPage,
      disablePrevious,
    } = usePagination();
      const { data, error, isLoading, isError } = useQuery<PopularPeople, Error>(
      ["popularPeople", page],
      () => getPopularPeople(page),
      { keepPreviousData: true }
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
  const sortedPeople = [...displayedPeople].sort((a, b) => {
  if (sortOption === "name") {
    return a.name.localeCompare(b.name);
  }

  return b.popularity - a.popularity;
});

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(e.target.value);
  };
  const handleSortChange = (e: SelectChangeEvent) => {
  setSortOption(e.target.value);
};

  const totalPages = data ? data.total_pages : 1;

    return (
    <>
      <TextField
        label="Filter actors"
        variant="filled"
        value={nameFilter}
        onChange={handleNameChange}
        sx={{ margin: 2 }}
      />

      <FormControl variant="filled" sx={{ margin: 2, minWidth: 180 }}>
        <InputLabel id="actor-sort-label">Sort actors</InputLabel>
        <Select
          labelId="actor-sort-label"
          value={sortOption}
          onChange={handleSortChange}
        >
          <MenuItem value="popularity">Popularity</MenuItem>
          <MenuItem value="name">Name</MenuItem>
        </Select>
      </FormControl>

      <PersonListPageTemplate
        title={`Popular Actors - Page ${page}`}
        people={sortedPeople}
        onPrevious={handlePreviousPage}
        onNext={() => handleNextPage(totalPages)}
        disablePrevious={disablePrevious}
        disableNext={page >= totalPages}
      />
    </>
  );
};

export default PopularPeoplePage;