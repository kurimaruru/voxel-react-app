import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

export const CanvasArea = () => {
  return (
    <Grid container justifyContent='center'>
      {/* sm以上、md以上、sm以下はxsが適用 */}
      <Grid item xs={12} sm={12} md={6}>
        <Box
          style={{
            height: '50vh',
            backgroundColor: 'black',
            marginTop: '5px',
          }}
        >
          <Canvas
            camera={{
              fov: 40,
              near: 1,
              far: 2000,
              position: [50, 80, 50],
            }}
          >
            <hemisphereLight
              color='white'
              // groundColor='white'
              intensity={0.75}
            />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            {/* <OrbitControls /> */}
            <Model />
          </Canvas>
        </Box>
      </Grid>
    </Grid>
  );
};
