import Todo from '../Todo';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Link
} from "react-router-dom";
import {Settings} from '../../Context/Settings';


const Header = (props) => {
  return(
    <header data-testid="todo-header">
      <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/settings">Settings</Link>
        </li>
      </ul>

        <Routes>
          <Route path="/">
            <Route index element={<Todo/>}/>
            <Route path="settings" element={<Settings/>} />
          </Route>
        </Routes>
      </nav>
    </header>
  )
}

export default Header;