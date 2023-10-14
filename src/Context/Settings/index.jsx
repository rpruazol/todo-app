
import React, { useEffect, useState, useContext, createContext } from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DisplayContext = createContext({
  display: 3,
  hideCompleted: true,
  sort: 'difficulty'
}
)


export default DisplayContext;