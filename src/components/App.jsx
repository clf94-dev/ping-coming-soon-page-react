import React from "react";
import { Grid, Button, TextField } from "@material-ui/core/";

import Logo from "../images/logo.svg";
import Illustration from "../images/illustration-dashboard.png";

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

        <Grid container direction="row">
          <Grid item md={9} xs={12}>
            <TextField
              id="outlined-basic"
              label="Your email address..."
              variant="outlined"
              className="email-input"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <Button variant="contained" className="notify-btn">
              {" "}
              Notify Me
            </Button>
          </Grid>
        </Grid>
        <img src={Illustration} alt="illustration" className="illust" />
      </Grid>
    </div>
  );
}

export default App;
