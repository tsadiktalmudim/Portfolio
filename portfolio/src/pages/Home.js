import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Gahjus from "../assets/images/GAHJUS.jpg"

export default function Home() {
  return (
  <Grid container justifyContent="center">
    <Card>
      <CardCover sx={{ minWidth: 300, minHeight: 400, flexGrow: 2 }}>
        <img src={Gahjus} alt="IT'S YA BOI"></img>
      </CardCover>
    </Card>
  </Grid>
  );
}
