import React, { useEffect, useState, useContext } from 'react';
import Switch from '@mui/material/Switch';
import {DisplayContext} from '../../Context/Settings';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SettingsForm = (props) => {
  const settings = useContext(DisplayContext);

  

  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
    <DisplayContext.Provider>
      <FormGroup>
        <FormControlLabel 
        control={<Switch 
          onChange={handleChange}
          defaultChecked />} 
        label="Hide Completed Tasks"/>
        
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tasks Per Page</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={settings.page}
            label="Pages per page"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>

    </DisplayContext.Provider>
    </>
  )
}


export default Settings;