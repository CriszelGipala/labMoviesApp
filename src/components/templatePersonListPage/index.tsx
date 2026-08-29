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
  onPrevious?: () => void;
  onNext?: () => void;
  disablePrevious?: boolean;
  disableNext?: boolean;
}

const PersonListPageTemplate: React.FC<PersonListPageTemplateProps> = ({ people, title, onPrevious, onNext, disablePrevious, disableNext }) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header
          title={title}
          onPrevious={onPrevious}
          onNext={onNext}
          disablePrevious={disablePrevious}
          disableNext={disableNext}/>
      </Grid>
      <Grid item container spacing={5}>
        <PersonList people={people}></PersonList>
      </Grid>
    </Grid>
  );
};

export default PersonListPageTemplate;
