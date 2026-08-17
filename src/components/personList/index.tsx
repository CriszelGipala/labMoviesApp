import React from "react";
import Grid from "@mui/material/Grid";
import PersonCard from "../personCard";
import { PersonProps } from "../../types/interfaces";

interface PersonListProps {
  people: PersonProps[];
}

const PersonList: React.FC<PersonListProps> = ({ people }) => {
  const personCards = people.map((person) => (
    <Grid key={person.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <PersonCard {...person} />
    </Grid>
  ));

  return personCards;
};

export default PersonList;
