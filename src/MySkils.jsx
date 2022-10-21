import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import styled, { keyframes } from 'styled-components';

export const MySkiles = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={10}>
        <Box sx={{ marginTop: '30px' }}>
          <Typography variant='h5' color='white'>
            My Skils
          </Typography>

          <Typography variant='h5' color='white'>
            My Skils
          </Typography>
          <Typography variant='h5' color='white'>
            My Skils
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
