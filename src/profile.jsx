import { Grid, Typography } from '@mui/material';

export const Profile = () => {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={10} sm={8} md={6}>
        <Typography variant='h4' color='white'>
          Riku Kurihara
        </Typography>
        <Typography variant='h5' color='white'>
          I'm a Web Developer in Tokyo .
        </Typography>
      </Grid>
    </Grid>
  );
};
