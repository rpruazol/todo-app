import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form';
import List from '../List/index.jsx'
import Header from '../Header/';
import { v4 as uuid } from 'uuid';
import Footer from '../Footer/';

const Todo = () => {

  const defaultArray = [
    { difficulty: 4, text: "aaa", assignee: "ray", id: "4fa8239b-5e3a-4bc3-8001-97ec982a57c7", complete: false },
    { difficulty: 1, text: "bbb", assignee: "adfs", id: "1fa84d9b-5e3a-4bc3-8001-97ec982a57c7", complete: false },
    { difficulty: 2, text: "ccc", assignee: "fhh", id: "8fa84d9b-5e3a-4bc3-8001-97ec982a57c7", complete: false },
    { difficulty: 1, text: "ddd", assignee: "jjj", id: "0fa84d9b-5e3a-4bc3-8001-97ec982a57c7", complete: false }
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
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);  

  return (
    <>
      <Header incomplete={incomplete} />

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
        list={list}      
      />

      <Footer/>
    </>
  );
};

export default Todo;
