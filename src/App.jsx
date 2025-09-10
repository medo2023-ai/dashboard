import './App.css'

import Sales from './Pages/Sales/Sales';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { RouterProvider } from 'react-router';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Navbar/Navbar';
import { NotificationProvider } from './context/Notification.context';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/sales', element: <Sales/>},
    // {path: '/Navbar', element: },
    { path: '*', element: <NotFound /> }

])

  return (
     <>
     <NotificationProvider>
 <RouterProvider router={router} /> 
 
 </NotificationProvider>    </>
  )
}

export default App
