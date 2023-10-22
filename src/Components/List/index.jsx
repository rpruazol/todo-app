import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { v4 as uuid } from 'uuid';
import DisplayContext from '../../Context/Settings/index';


const List = (props) => {
  console.log(props.list)
  // const filteredArray = 
  // console.log('filteredArray', filteredArray)
  
  const [currentPage, setCurrentPage] = useState(1);
  const display = useContext(DisplayContext).display;

  const indexofLastTask = currentPage * display; // starting value 3
  const indexofFirstTask = indexofLastTask - display; // starting value 0

  const pages = Math.ceil(props.list.length / display)
  const handleChange = (e, value) => {
    console.log(e, value)
    setCurrentPage(value)

  }

  const currentList = props.list.slice(indexofFirstTask, indexofLastTask)

  return(
    <>
    {currentList.length ? currentList.map(item => {
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