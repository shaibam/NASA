import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider  
} from "react-router-dom";
import About from './Pages/About/About';
import Images from './Pages/Images/Images';
import WeatherPoints from './Pages/WeatherPoints/WeatherPoints';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<About />),
  },
  {
    path: "about",
    element: (<About />),
  },
  {
    path: "images",
    element: (<Images />),
  },
  {
    path: "weather-points",
    element: (<WeatherPoints />),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
