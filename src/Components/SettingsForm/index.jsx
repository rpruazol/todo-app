import React, { useEffect, useState, useContext } from 'react';
import Switch from '@mui/material/Switch';
import DisplayContext from '../../Context/Settings';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; 

const SettingsForm = () => {
  const settings = useContext(DisplayContext);

  return (
    <>
      <FormGroup>
        <FormControlLabel 
        control={<Switch 
          value={settings.hideCompleted}
          onChange={() => {
            let setting =  settings.hideCompleted === true ? false : true
            settings.toggleHideCompleted(setting)
            console.log(setting)
            }}
          defaultChecked />}
          
        label="Hide Completed Tasks"/>
        
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tasks Per Page</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={settings.page}
            label="Tasks per page"
            // onChange={settings.setDisplay((e) => e.target.value)}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
    </>
  )
}


export default SettingsForm;