import './App.css'

import Sales from './Pages/Sales/Sales';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { RouterProvider } from 'react-router';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Navbar/Navbar';
import { NotificationProvider } from './context/Notification.context';
import Layout from './layout/Layout';

function App() {
  const router = createBrowserRouter([
    // {path: '/', element: <Home/>},
    // {path: '/sales', element: <Sales/>},
    // // {path: '/Navbar', element: },
    // { path: '*', element: <NotFound /> }

     {
      path: "/",
      element: <Layout />,   // 👈 هنا بقى فيه Layout ثابت
      children: [
        { index: true, element: <Home /> },       // /
        { path: "sales", element: <Sales /> },    // /sales
      ],
    },
    { path: "*", element: <NotFound /> },          // 404
  ]);



  return (
     <>
     <NotificationProvider>
 <RouterProvider router={router} /> 
 
 </NotificationProvider>    </>
  )
}

export default App
