import React from 'react';

import Todo from './Components/Todo';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Link
} from "react-router-dom";
import Header from './Components/Header'


export default class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      </>
    )
  }
}
