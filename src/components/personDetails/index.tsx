import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRateIcon from "@mui/icons-material/StarRate";
import WorkIcon from "@mui/icons-material/Work";
import { PersonDetailsProps } from "../../types/interfaces";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
};

const PersonDetails: React.FC<PersonDetailsProps> = (person) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography || "No biography available."}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<WorkIcon />} label={person.known_for_department} sx={styles.chipLabel} />
        <Chip icon={<StarRateIcon />} label={person.popularity.toFixed(1)} sx={styles.chipLabel} />
        <Chip label={`Born: ${person.birthday || "Unknown"}`} sx={styles.chipLabel} />
        <Chip label={person.place_of_birth || "Place of birth unknown"} sx={styles.chipLabel} />
      </Paper>
    </>
  );
};

export default PersonDetails;