import React from "react";
import usePagination from "../hooks/usePagination";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const UpcomingMoviesPage: React.FC = () => {
  const {
    page,
    handlePreviousPage,
    handleNextPage,
    disablePrevious,
  } = usePagination();

  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["upcoming", page],
    () => getUpcomingMovies(page),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];
  const totalPages = data ? data.total_pages : 1;

    return (
    <PageTemplate
      title={`Upcoming Movies - Page ${page}`}
      movies={movies}
      onPrevious={handlePreviousPage}
      onNext={() => handleNextPage(totalPages)}
      disablePrevious={disablePrevious}
      disableNext={page >= totalPages}
      action={(movie: BaseMovieProps) => {
        return <AddToPlaylistIcon {...movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;