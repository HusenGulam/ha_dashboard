import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            '#e0eb0c',
        }}
        size={40}
        thickness={5}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#5f8fd2' : '#edf4ff'),
          animationDuration: '500ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}
function FacebookCircularProgress1(props) {
    return (
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              '#819eff',
          }}
          size={70}
          thickness={5}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) => (theme.palette.mode === 'light' ? '#61bb00' : '#edf4ff'),
            animationDuration: '500ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          size={70}
          thickness={4}
          {...props}
        />
      </Box>
    );
  }

export const  CustomizedProgressBars = () => {
  return (
      <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <FacebookCircularProgress />
      </div>
  );
}

export const  CustomizedProgressBars2 = () =>  {
    return (
        <div style={{width:'350px',height:'368px',display:'flex',justifyContent:'center',alignItems:'center'}}>

          <FacebookCircularProgress1 />
        </div>
    );
  }