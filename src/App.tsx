import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import style from './App.module.css';

// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
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
