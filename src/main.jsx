import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogPage from './Pages/BlogPage.jsx'
import ContactPage from './Pages/Contact.jsx'


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/blog",
//     element: <BlogPage />,
//   },
//   {
//     path: "/contact",
//     element: <ContactPage />,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  // // <StrictMode>
  //   <RouterProvider router={router} />
  // </StrictMode>,
  <App/>
)
