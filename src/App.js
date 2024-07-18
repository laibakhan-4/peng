import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Registration from './components/Registration';
import NavBar from './components/NavBar';



function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <><NavBar /><Home /></>,
  },
  {
    path: "/registration",
    element: <><NavBar /> <Registration /> </>,
  },
]);
  return (
    <RouterProvider router={router}/>

  );
}

export default App;
