import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { v4 as uuid } from 'uuid';

const List = (props) => {
  const display = 3;
  const [lastTaskIndex, setLastTaskIndex] = useState(display-1)
  const [currentList, setCurrentList] = useState(props.list.slice(0, display))
  let pages = Math.ceil(props.list.length / display);

  const handleChange = (e) => {
    setCurrentList(props.list.slice(lastTaskIndex + 1, lastTaskIndex + display))
  }

  return(
    <>
    {currentList.map(item => (
      <div key={item.id}>
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        <hr />
      </div>
    ))}
    <Pagination count={pages} onChange={handleChange} />
    </>
  )
}

export default List;