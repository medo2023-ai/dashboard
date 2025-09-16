import sampleNotifications from "@/data/SampleNotifications";
import { createContext,  useContext,  useState } from "react";
const  NotificationContext = createContext()
export function NotificationProvider({ children }) {
  // const [notifications, setNotifications] = useState([]);
  const [notifications, setNotifications] = useState(sampleNotifications);
  const addNotification = (message) => {
    setNotifications(prev => [...prev, { message }]);
  };

 return (
    <NotificationContext.Provider  value={{ notifications, addNotification }} >
         {children}
    </NotificationContext.Provider >
 )
}
  export const useNotifications = () => useContext(NotificationContext);


