import { Box, Grid, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const RadiusBox = styled.div`
  width: 200px;
  height: 200px;
  line-height: 200px;
  background-image: url(${process.env.PUBLIC_URL}/pich.png);
  background-size: contain;
  border-radius: 50%;
  color: #fff;
  text-align: center;
`;
export const Profile = () => {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={10} sm={8} md={6}>
        <Box>
          <RadiusBox />
          <FadeInStr>
            <Typography variant='h5' color='white'>
              Riku Kurihara
            </Typography>
            <Typography variant='h6' color='white'>
              I'm a Web Developer in Tokyo.
            </Typography>
          </FadeInStr>
        </Box>
      </Grid>
    </Grid>
  );
};
const fadeIn = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

const FadeInStr = styled.div`
  h4 {
    color: white;
    animation: ${fadeIn} 1s 0s ease;
  }
  ,
  h5 {
    color: white;
    animation: ${fadeIn} 2s 0s ease;
  }
`;
