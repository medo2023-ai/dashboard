import './App.css'

import Sales from './Pages/Sales/Sales';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { RouterProvider } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import { NotificationProvider } from './context/Notification.context';
import Layout from './layout/Layout';
import Signin from './Pages/auth/Signin';
import { LoginForm } from './components/login-form';
import AuthLayout from './layout/AuthLayout';
import Signup from './Pages/auth/Signup';
import { Toaster } from 'react-hot-toast';

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
    { path: "AuthLayout", element: <AuthLayout /> ,
       children: [
        // { index: true, element: <Home /> },       
        { path: "Signup", element: < Signup /> },   
        { path: "signin", element: <Signin/> },   
],
    },        
  ]);



  return (
     <>
     <NotificationProvider>
 <RouterProvider router={router} /> 
    <Toaster position="top-right" reverseOrder={false} />
 </NotificationProvider>  
 

   </>
  )
}

export default App
