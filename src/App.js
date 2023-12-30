import * as React from 'react';
import { Typography, CssBaseline, Box, Paper, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RoundButton from './components/RoundButton.js';
import Chart from './components/Chart.js';

//main theme
const theme = createTheme({
  palette: {
    primary: {
      light: '#a7ffeb',
      main: '#1de9b6',
      dark: '#00bfa5',
      contrastText: '#e0f2f1',
    },
    background: {
      paper: '#1C2833',
      default: '#17202A',
    },
  },
});

export default function MainPage() {
  //states
  const [state, setState] = React.useState('initial');
  const [speedata, setData] = React.useState({});

  //get request
  async function getData() {
    setState('loading');
    const response = await fetch(
      'https://mockly.app/api/38534cce-0c18-4043-94a6-21b0ae62f48a/speed'
    );
    const data = await response.json();
    setState('done');
    setData(data);
  }

  //content according its state
  let content;
  switch (state) {
    case 'initial':
      content = (
        <>
          <RoundButton onClickHandler={getData}></RoundButton>
        </>
      );
      break;
    case 'loading':
      content = (
        <>
          <Typography color="white"> Loading</Typography>
        </>
      );
      break;
    case 'done':
      content = (
        <>
          <Chart data={speedata}> </Chart>
        </>
      );
      break;
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Paper
        elevation={10}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '600px',
          width: '600px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography color="#cfd8dc" variant="h2">
          Speed Test
        </Typography>
        {content}
      </Paper>
    </ThemeProvider>
  );
}
