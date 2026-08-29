import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MovieDetailsProps } from "../../types/interfaces"; 

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

type MovieHeaderProps = Partial<MovieDetailsProps> & {
  title: string;
  onPrevious?: () => void;
  onNext?: () => void;
  disablePrevious?: boolean;
  disableNext?: boolean;
};

const MovieHeader: React.FC<MovieHeaderProps> = (movie) => {
  const favourites = JSON.parse(localStorage.getItem("favourites") || "[]") as { id: number }[];
  const isFavourite = movie.id !== undefined && favourites.some((favourite) => favourite.id === movie.id);
  
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton
        aria-label="go back"
        onClick={movie.onPrevious}
        disabled={movie.disablePrevious}
>       <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      {isFavourite ? (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar>
      ) : null}

      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        {movie.tagline ? (
          <>
            <br />
            <span>{movie.tagline} </span>
          </>
        ) : null}
      </Typography>
      <IconButton
        aria-label="go forward"
        onClick={movie.onNext}
        disabled={movie.disableNext}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
