import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Movie from './pages/Movies';
import Aboutus from './pages/Aboutus';
import Signup from './pages/Signup';
import Review from './pages/Review';
import Adrian from './pages/Adrian';
import Ron from './pages/Ron';
import Kevin from './pages/Kevin';
import Sam from './pages/Sam';
import Login from './pages/Login' ;


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Movie",
    element: <Movie />,
  },
  {
    path: "/Aboutus",
    element: <Aboutus />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Review",
    element: <Review />,
  },
  {
    path: "/Adrian",
    element: <Adrian />,
  },
  {
    path: "/Ron",
    element: <Ron />,
  },
  {
    path: "/Kevin",
    element: <Kevin />,
  },
  {
    path: "/Sam",
    element: <Sam />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
