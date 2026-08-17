import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import PersonList from "../personList";
import { PersonProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  }
};

interface PersonListPageTemplateProps {
  people: PersonProps[];
  title: string;
}

const PersonListPageTemplate: React.FC<PersonListPageTemplateProps> = ({ people, title }) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <PersonList people={people}></PersonList>
      </Grid>
    </Grid>
  );
};

export default PersonListPageTemplate;
