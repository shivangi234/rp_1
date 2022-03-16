import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const top100Films = [
  { label: 'kick', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)',p:4 }}
  >
    •
  </Box>
);


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 575 }}>
      
      <CardContent >
      <Typography
                  sx={{ fontSize: 30 }}
                  color="text.secondary"
                  align="center"
                >
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
          <TextField
          id="outlined-uncontrolled"
          label="FirsttName"
          defaultValue="enter valid input"
          />
      </div>
       <div>
          <TextField
            id="outlined-uncontrolled"
            label="LastName"
            defaultValue="enter valid input"
          />
      </div>
      <div>
          <TextField
              id="outlined-uncontrolled"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
        </div>
       
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    </Box>
    </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" position="center">login</Button>
      </CardActions>
    </Card>
  );
}