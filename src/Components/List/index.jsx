import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { v4 as uuid } from 'uuid';
import DisplayContext from '../../Context/Settings/index';


const List = (props) => {
  const filteredArray = props.list.filter(item => item.complete === false)
  console.log('filteredArray', filteredArray)
  const display = useContext(DisplayContext).display;
  const [lastTaskIndex, setLastTaskIndex] = useState(display-1)
  // const [currentList, setCurrentList] = useState(filteredArray);

  const pages = Math.ceil(filteredArray.length / display)

  const handleChange = (e, value) => {
    console.log(e, value)
    if(parseInt(value) === 1){setCurrentList(props.list.slice(0, display))} 
    else {
      setCurrentList((props.list.slice(lastTaskIndex + 1, lastTaskIndex + display)));
    }

  }

  return(
    <>
    {filteredArray.length ? filteredArray.map(item => {
        return (
          <div key={item.id}>
            <p>{item.text}</p>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
            <hr />
          </div>
        )
    }) : <p>No items!</p>}
    <Pagination count={pages} onChange={handleChange} />
    </>
  )
}

export default List;