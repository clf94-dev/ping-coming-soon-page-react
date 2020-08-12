import React from 'react';
import { useForm } from "react-hook-form";
import { Grid, Button, TextField } from "@material-ui/core/";
import ErrorMessage from './ErrorMessage';

function Form(){
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => console.log(values);

    return (

        
        <Grid container direction="row">
          <Grid item md={9} xs={12}>
           <form onSubmit={handleSubmit(onSubmit)}>
               <input className="email-input" placeholder="Your email address..." name="email" ref={register({
                   required:true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            
                 
               })}
               />
            
               <ErrorMessage error={errors.email} />
           </form>
          </Grid>
          <Grid item md={3} xs={12}>
            <Button variant="contained" className="notify-btn" type="submit" onClick={handleSubmit(onSubmit)}>
              {" "}
              Notify Me
            </Button>
          </Grid>
        </Grid>
    )
}

export default Form;