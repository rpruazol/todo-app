import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { v4 as uuid } from 'uuid';
import DisplayContext from '../../Context/Settings/index';


const List = (props) => {
  
  const display = useContext(DisplayContext).display;

  const [lastTaskIndex, setLastTaskIndex] = useState(display-1)
  const [currentList, setCurrentList] = useState(filteredArray.slice(0, display));
  
  let pages = Math.ceil(props.list.length / display);

  const handleChange = (e) => {
    if(parseInt(e.target.textContent) === 1){setCurrentList(props.list.slice(0, display))} 
    else {
      setCurrentList((props.list.slice(lastTaskIndex + 1, lastTaskIndex + display)));
    }

  }

  return(
    <>
    {
    currentList.map(item => {
    
      if(!item.complete){
        return (
          <div key={item.id}>
            <p>{item.text}</p>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
            <hr />
          </div>
        )
      }
    })}
    <Pagination count={pages} onChange={handleChange} />
    </>
  )
}

export default List;