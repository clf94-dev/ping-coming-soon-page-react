
import React from "react";
import { Grid, Button, TextField } from "@material-ui/core/";
import Form from './Form';
import Logo from "../images/logo.svg";
import Illustration from "../images/illustration-dashboard.png";

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import '../styles/App.scss';

function App() {
  return (
    <div>
      <Grid container direction="column" className="content-col">
        <Grid container className="logo-cont">
        <img src={Logo} alt="logo" className="logo" />
        </Grid><h1>
          {" "}
          We are launching <strong>soon!</strong>
        </h1>
        <h4> Subscribe and get notified</h4>
         <Form/>
        <img src={Illustration} alt="illustration" className="illust" />
        <Grid container direction="row" className="social-cont">
<FacebookIcon  className="social-icon"/>
<TwitterIcon   className="social-icon"/>
<InstagramIcon className="social-icon"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
