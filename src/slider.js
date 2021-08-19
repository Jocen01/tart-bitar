import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});



export default function DiscreteSlider(props) {
  const classes = useStyles();


  function valuetext(value) {
    props.callback(value)
  return `${value}`;
}

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Höjd
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={5}
        max={35}
      />
    </div>
  );
}