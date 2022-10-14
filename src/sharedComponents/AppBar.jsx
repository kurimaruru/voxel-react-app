import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

export const NavBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#24140e',
          opacity: 0.5,
        }}
      >
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography variant='h6' color='white' component='div'>
            Kurimaru
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
