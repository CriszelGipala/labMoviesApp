import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../images/film-poster-placeholder.png";
import { PersonMovieCredit } from "../../types/interfaces";

interface PersonMovieCreditsProps {
  credits: PersonMovieCredit[];
}

const styles = {
  card: { maxWidth: 250 },
  media: { height: 350 },
};

const PersonMovieCredits: React.FC<PersonMovieCreditsProps> = ({ credits }) => {
  return (
    <>
      <Typography variant="h5" component="h3" sx={{ marginTop: 3 }}>
        Movie Credits
      </Typography>

      <Grid container spacing={2}>
        {credits.map((credit, index) => (
          <Grid key={`${credit.id}-${index}`} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={styles.card}>
              <CardMedia
                sx={styles.media}
                image={
                  credit.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${credit.poster_path}`
                    : img
                }
              />
              <CardContent>
                <Typography variant="h6" component="p">
                  {credit.title}
                </Typography>
                <Typography variant="body2" component="p">
                  Character: {credit.character || "Unknown"}
                </Typography>
                <Typography variant="body2" component="p">
                  Released: {credit.release_date || "Unknown"}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/movies/${credit.id}`} style={{ textDecoration: "none" }}>
                  <Button variant="outlined" size="small">
                    Movie Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PersonMovieCredits;