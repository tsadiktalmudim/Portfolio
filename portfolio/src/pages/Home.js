import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
} from "@mui/material";
import Gahjus from "../assets/images/GAHJUS.jpg";

export default function Home() {
  return (
    <>
      <Grid container justifyContent="center">
        <Card>
        <CardMedia
        component="img"
        height="425"
        image={Gahjus}
        alt="Paella dish"
      />
        </Card>
      </Grid>
    </>
  );
}
