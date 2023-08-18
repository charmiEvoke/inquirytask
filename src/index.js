import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThankyouPage from './ThankyouPage';
import LandingPage from "./LandingPage.js"
import AdminPage from './AdminPage.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<LandingPage />
      },
      {
        path:"/ThankyouPage",
        element:<ThankyouPage />
      }
    ]
  },
  {
    path:"/AdminPage",
    element:<AdminPage />
   }
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
