import { CanvasArea } from './CanvasArea';
import { NavBar } from '../sharedComponents/AppBar';
import { Profile } from '../profile';
import { Grid } from '@mui/material';
import { MySkiles } from '../MySkils';

export const Home = () => {
  return (
    <>
      <Grid container sx={{ backgroundColor: 'black' }}>
        <NavBar />
        <CanvasArea />
        <Profile />
        <MySkiles />
      </Grid>
    </>
  );
};
