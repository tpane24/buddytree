import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Box from '@material-ui/core/Box';

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Box style={{ marginTop: '15px' }}>
            <Typography variant="h6" gutterBottom>
                <span>Slider - Continuous Slider</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            <span>Sliders allow users to make selections from a range of values. Continuous sliders allow users to select a value along a subjective range.</span>
            </Typography>
            <Typography id="continuous-slider" gutterBottom>
            Volume
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <VolumeUp />
                </Grid>
            </Grid>
        </Box>
    </div>
  );
}