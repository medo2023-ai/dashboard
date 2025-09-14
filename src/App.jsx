import './App.css'

import Sales from './Pages/Sales/Sales';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { RouterProvider } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Navbar/Navbar';
import { NotificationProvider } from './context/Notification.context';
import Layout from './layout/Layout';
import Signin from './components/auth/Signin';
import { LoginForm } from './components/login-form';

function App() {
  const router = createBrowserRouter([
      {
      path: "/",
      element: <Layout />,   
      children: [
        { index: true, element: <Home /> },       
        { path: "sales", element: <Sales /> },   
        { path: "LoginForm", element: <LoginForm /> },   
    
      ],
    },
    { path: "*", element: <NotFound /> },        
    { path: "signin", element: <Signin /> },        
  ]);



  return (
     <>
     <NotificationProvider>
 <RouterProvider router={router} /> 
 
 </NotificationProvider>  
 
 {/* <Signin /> */}
   </>
  )
}

export default App
