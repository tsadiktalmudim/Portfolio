import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "mui/material";

export default function Header() {
  return (
    <Grid container spacing={3}>
      <Grid item justifyContent="flex-start" xs={2} classname="title">
        <h1>Xan Hamilton</h1>
      </Grid>
      <Grid item justifyContent="flex-end" xs={2} classname="nav">
        <Button variant="contained">
          <Link to="/">Home</Link>
        </Button>
      </Grid>
      <Grid item justifyContent="flex-end" xs={2} classname="nav">
        <Button variant="contained">
          <Link to="/projects">Projects</Link>
        </Button>
      </Grid>
      <Grid item justifyContent="flex-end" xs={2} classname="nav">
        <Button variant="contained">
          <Link to="/links">Links</Link>
        </Button>
      </Grid>
      <Grid item justifyContent="flex-end" xs={2} classname="nav">
        <Button variant="contained">
          <Link to="/contact">Contact</Link>
        </Button>
      </Grid>
    </Grid>
  );
}
