import { Grid } from '@mui/material';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { Home } from './Canvas/Home';
export const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <Grid container>
        <Home />
      </Grid>
    </>
  );
};
