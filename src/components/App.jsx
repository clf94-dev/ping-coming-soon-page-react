
import React from "react";
import { Grid, Button, TextField } from "@material-ui/core/";
import Form from './Form';
import Logo from "../images/logo.svg";
import Illustration from "../images/illustration-dashboard.png";

import '../styles/App.scss';

function App() {
  return (
    <div>
      <Grid container direction="column" className="content-col">
        <img src={Logo} alt="logo" className="logo" />
        <h1>
          {" "}
          We are launching <strong>soon!</strong>
        </h1>
        <h4> Subscribe and get notified</h4>
         <Form/>
        <img src={Illustration} alt="illustration" className="illust" />
      </Grid>
    </div>
  );
}

export default App;
