import React, { useEffect, useState, useContext } from 'react';
import Switch from '@mui/material/Switch';
import DisplayContext from '../../Context/Settings';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  const SettingsForm = () => {
  const settings = useContext(DisplayContext);
  const [changes, setChanges] = useState({});

  useEffect(() => {
    // console.log(changes)
  }, [changes])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid item xs={8} direction="row">
        <Item>
          <FormGroup>
            <FormControlLabel
              control={<Switch
                value={settings.hideCompleted}
                onChange={() => {
                  let setting = settings.hideCompleted === true ? false : true
                  settings.toggleHideCompleted(setting)
                  setChanges({...changes, 'hideCompleted': setting}) //async, this
                  console.log(changes)
                }}

                checked={settings.hideCompleted}
              />}

              label="Hide Completed Tasks" />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tasks Per Page</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={settings.display}
                label="Tasks per page"
                onChange={(e) => {
                  settings.changeTasksPerPage(e.target.value)
                  setChanges({...changes, 'display': e.target.value})
                  console.log('changes', changes)

                }
                }
              >
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
        </Item>
      </Grid>
      <Grid item xs={4} direction="row">
        <Item>
          <h2>Changes made:</h2>
                {Object.keys(changes).map((key, idx) => {
                  console.log(changes)
                  return (
                    <p key={idx}>{`${key} : ${changes[key]}`}</p>
                  )
                })}
        </Item>
      </Grid>
    </Box>
  )
}


export default SettingsForm;