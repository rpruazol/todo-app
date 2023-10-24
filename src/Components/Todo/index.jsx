import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form';
import List from '../List/index.jsx'
import { v4 as uuid } from 'uuid';
import Footer from '../Footer/';
import DisplayContext from '../../Context/Settings';

const Todo = () => {
  const settings = useContext(DisplayContext)

  const defaultArray = [
    { difficulty: 4, text: "aaa", assignee: "aaa", id: uuid(), complete: false },
    { difficulty: 1, text: "bbb", assignee: "bbb", id: uuid(), complete: false },
    { difficulty: 2, text: "ccc", assignee: "ccc", id: uuid(), complete: false },
    { difficulty: 1, text: "ddd", assignee: "ddd", id: uuid(), complete: false },
    { difficulty: 4, text: "eee", assignee: "eee", id: uuid(), complete: false },
    { difficulty: 1, text: "fff", assignee: "fff", id: uuid(), complete: false },
    { difficulty: 2, text: "ggg", assignee: "ggg", id: uuid(), complete: false },
    { difficulty: 1, text: "hhh", assignee: "hhh", id: uuid(), complete: false }
  ]

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [incomplete, setIncomplete] = useState([]);
  const [list, setList] = useState(defaultArray);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);
    console.log('updated state')
  }


  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);  

  return (
    <>
    <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
      <List 
        toggleComplete={toggleComplete}
        list={list.filter(item => settings.hideCompleted === true ? !item.complete : item)}      
      />

      <Footer/>
    </>
  );
};

export default Todo;
