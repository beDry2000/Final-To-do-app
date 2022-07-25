import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '../../context/hooks';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useMediaQuery } from '@mui/material';

const ThemeBtn = () => {
  const { light, handleLight } = useTheme();

  return (
    <>
      <Button variant='outline' 
        onClick={handleLight}
        sx={{backgroundColor: light ? '' : '#000'}}
        startIcon={light ? <LightModeIcon /> : <DarkModeIcon />} >
        {light ? 'Light' : 'Dark'}
      </Button>
    </>

  );
}

export default ThemeBtn