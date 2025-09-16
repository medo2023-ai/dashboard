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
import { Con } from './js/context';
import { useState } from 'react';
import UserManagementtPage from './components/ui/UserManagement';
import ContractPage from './components/ui/Contractpage';
import Setting from './components/ui/setting';
import ReportsPage from './components/ui/reports';
function App() {
  const [data,setData]=useState([]);
     const [file, setFile] = useState(null); 
       const [users,setUsers]=useState([]);
       const [activities, setActivities ]= useState([]);
  const router = createBrowserRouter([
      {
      path: "/",
      element: <Layout />,   
      children: [
        { index: true, element: <Home /> },       
        { path: "sales", element: <Sales /> },   
        { path: "LoginForm", element: <LoginForm /> },
        {path:"users",element:<UserManagementtPage/>},
         {path:"contracts",element:<ContractPage/>},
          {path:"setting",element:<Setting/>} ,  
           {path:"users",element:<UserManagementtPage/>} ,
           {path:"reports",element:<ReportsPage/>} ,
    
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
     <Con.Provider value={{data,setData,file,setFile,users,setUsers,activities,setActivities}}>
       <NotificationProvider>
 <RouterProvider router={router} /> 
    <Toaster position="top-right" reverseOrder={false} />
 </NotificationProvider> 
     </Con.Provider>
     
 

   </>
  )
}

export default App