import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './pages/Root/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
  },
  // {
  //   path: "/footer",
  //   Component:Footer,
  // },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
