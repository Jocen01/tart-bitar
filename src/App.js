import './App.css';
import React, { Component } from "react";
import { useState } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DiscreteSlider from "./slider";
import BeräknaBitar from "./BeraknaBitar"

function App() {

  const [form, setForm] = useState("");
  const [bitar, setBitar] = useState(0);
  const [hojd, setHojd] = useState(0);
  const [bredd, setBredd] = useState(0);
  const [langd, setLangd] = useState(0);
  const [radie, setRadie] = useState(0);
  const [metod, setMetod] = useState("storlek");
  const [höjdslider, setHöjdslider] = useState(0)
  const [visaResultat, setvisaResultat] = useState(false)



  function RenderInputStorlekRek () {
    return(
      <div>
        <h3>Höjden</h3>
        <Grid item xs={12} align="center">
          
          <TextField 
            lable="Höjd"
            placeholder="Höjden"
            value={hojd}
            variant="outlined"
            onChange={(e) => {setHojd(e.target.value)}}
          />
        </Grid>
        <h3>Bredden</h3>
        <Grid item xs={12} align="center">
          <TextField 
            lable="Bredd"
            placeholder="Bredd"
            value={bredd}
            variant="outlined"
            onChange={(e) => {setBredd(e.target.value)}}
          />
        </Grid>
        <h3>Längden</h3>
        <Grid item xs={12} align="center">
          <TextField 
            lable="Längd"
            placeholder="Längd"
            value={langd}
            variant="outlined"
            onChange={(e) => {setLangd(e.target.value)}}
          />
        </Grid>
      </div>
    )
  }

  function RenderInputStorlekRund () {
    return(
      <div>
        <h3>Höjden</h3>
        <Grid item xs={12} align="center">
          
          <TextField 
            lable="Höjd"
            placeholder="Höjden"
            value={hojd}
            variant="outlined"
            onChange={(e) => {setHojd(e.target.value)}}
          />
        </Grid>
        <h3>Radien</h3>
        <Grid item xs={12} align="center">
          <TextField 
            lable="Radie"
            placeholder="Radie"
            value={radie}
            variant="outlined"
            onChange={(e) => {setRadie(e.target.value)}}
          />
        </Grid>

      </div>
    )
  }


  function RenderResultat() {
    return(
      <BeräknaBitar höjd={hojd} bredd={bredd} längd={langd} radie={radie} beräknaRek={form === "Rektangular" ? true : false } />
    )
  }


  function RenderRundEllerRektangel () {
    return(
      <div>
        {form === "Rund" ? RenderInputStorlekRund() : RenderInputStorlekRek()}
      </div>
      
    )

  }

  function RenderInputBitar () {
    return(
      <div>
        <Grid item xs={12} align="center">
          <TextField 
            lable="Bitar"
            placeholder="Antalet Bitar"
            value={bitar}
            variant="outlined"
            onChange={(e) => {setBitar(e.target.value)}}
          />
        </Grid>
      </div>
    )
  }


  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText component='div'>
              <div align="center">Form på tårtan</div>
            </FormHelperText>
            <RadioGroup row defaultValue="true" onChange={(e) => {e.target.value === "true" ? setForm("Rektangular") : setForm("Rund")}}>
              <FormControlLabel value="true" control ={<Radio color="primary" />} label="Rektangulär" labelPlacement="bottom">

              </FormControlLabel>
              <FormControlLabel value="false" control ={<Radio color="secondary" />} label="Rund" labelPlacement="bottom">

              </FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText component='div'>
              <div align="center">Beräkna utifrån storlek eller bitar</div>
            </FormHelperText>
            <RadioGroup row defaultValue="true" onChange={(e) => {e.target.value === "true" ? setMetod("storlek") : setMetod("Bitar")}}>
              <FormControlLabel value="true" control ={<Radio color="primary" />} label="storlek" labelPlacement="bottom">

              </FormControlLabel>
              <FormControlLabel value="false" control ={<Radio color="secondary" />} label="Bitar" labelPlacement="bottom">

              </FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center" >
          {metod === "Bitar" ? RenderInputBitar() : false }
          {metod === "storlek" ? RenderRundEllerRektangel () : false}
        </Grid>
        <Grid item xs={12} align="center" >
          <Button variant="contained" color="secondary" onClick={() => {setvisaResultat(true)}}>
              Beräkna Storleken
            </Button>
        </Grid>
        <Grid item xs={12} align="center" >
          {visaResultat && metod === "storlek" ? <RenderResultat /> : null} 
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
