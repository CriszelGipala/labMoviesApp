import type React from "react";

export type FilterOption = "title" | "genre";

export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    genre_ids: number[];
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
  }

 export interface BaseMovieListProps { 
    movies: BaseMovieProps[];
    action: (m: BaseMovieProps) => React.ReactNode;
  }   

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
  onPrevious?: () => void;
  onNext?: () => void;
  disablePrevious?: boolean;
  disableNext?: boolean;
}

  export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];
  }

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; //some props are optional...
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export interface Review {
  author: string,
  content: string,
  agree: boolean,
  rating: number,
  movieId: number,
}

export interface GenreData {
  genres: {
    id: string;
    name: string
  }[];
}

export interface DiscoverMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

// Assignment actor/person types for the Popular Actors and Actor Details pages.
export interface PersonProps {
  id: number;
  name: string;
  profile_path?: string;
  popularity: number;
  known_for_department: string;
  known_for?: BaseMovieProps[];
}

export interface PopularPeople {
  page: number;
  total_pages: number;
  total_results: number;
  results: PersonProps[];
}

export interface PersonDetailsProps extends PersonProps {
  biography: string;
  birthday: string;
  place_of_birth: string;
}

export interface PersonMovieCredit {
  id: number;
  title: string;
  character: string;
  poster_path?: string;
  release_date: string;
}
