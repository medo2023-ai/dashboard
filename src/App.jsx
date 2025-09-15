import './App.css'
import ContractPage from './components/ui/Contractpage';
import { Dialog } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { Con } from './js/context';
import { Toaster } from 'react-hot-toast';
import UserManagementtPage from './components/ui/UserManagement';
import ActivityTable from './components/ui/activity';
import Setting from './components/ui/setting';
function App() {
   const [data,setData]=useState([]);
     const [file, setFile] = useState(null); 
       const [users,setUsers]=useState([]);
       const [activities, setActivities ]= useState([]);
  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    <Con.Provider value={{data,setData,file,setFile,users,setUsers,activities,setActivities}}>
     <Setting/>
    </Con.Provider>
   

    </>
  )
}

export default App
