import React from "react";
import { Grid, Button } from "@mui/material";

export default function Footer() {
  return (
    <Grid container className="footer">
      <Grid container justifyContent="space-between">
        <h3>
          © All code by
          <p>Xan Hamilton</p>
        </h3>
      </Grid>
    </Grid>
  );
}
