import { Grid } from "@material-ui/core";
import React from "react";
import Header from "../Components/header";

export default function Home(props) {
  const user = JSON.parse(window.localStorage.getItem("user"));
  return (
    <div>
      <Header
        theme={props.theme}
        toggleHome={props.toggle}
        Authenticate={props.Authenticate}
      />
      <Grid container component="main">
        <h1>
          Hello {user["firstName"]} {user["lastName"]}
        </h1>
      </Grid>
    </div>
  );
}
