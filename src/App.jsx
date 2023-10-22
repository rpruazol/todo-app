import {React, useState} from 'react';
import Todo from './Components/Todo';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Link
} from "react-router-dom";
import Header from './Components/Header'
import DisplayContext from './Context/Settings';
import SettingsForm from './Components/settingsForm';

function App() {
  const [display, setDisplay] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [sort, setSort] = useState('difficulty');
  console.log('hideCompleted', hideCompleted)

    return (
      <>
        <DisplayContext.Provider
          value={{
            display,
            hideCompleted,
            sort,
            changeTasksPerPage: () => setDisplay(display),
            toggleHideCompleted: (e) => setHideCompleted(e)
            // setSort
          }}>
          <Header/>
          <Routes>
            <Route path="/">
              <Route exact path='/' element={<Todo />} />
              <Route exact path="/settings" element={<SettingsForm />} />
            </Route>
          </Routes>
        </DisplayContext.Provider>
      </>
    )
  }

  export default App;