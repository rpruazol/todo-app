import Todo from '../Todo';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Link
} from "react-router-dom";
import SettingsForm from '../SettingsForm';


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
      </nav>
    </header>
  )
}

export default Header;