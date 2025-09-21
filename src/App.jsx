import { useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Con } from "@/js/context";
import { NotificationProvider } from "./context/Notification.context";
import Layout from "./layout/Layout";
import Home from "./Pages/Home/Home";
import Sales from "./Pages/Sales/Sales";
import { LoginForm } from "./components/login-form";
import UserManagementPage from "./components/ui/UserManagement";
import ContractPage from "./components/ui/Contractpage";
import Setting from "./components/ui/setting";
import Catalog from "./components/ui/catalog";
import NotFound from "./Pages/NotFound/NotFound";
import AuthLayout from "./layout/AuthLayout";
import ReportsPage from"./components/ui/reports"
import Signup from "./Pages/auth/Signup";
import Signin from "./Pages/auth/Signin";
function App() {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [packages, setPackage] = useState([]);
  const [features, setFeature] = useState([]);
  const [services, setServices] = useState([]);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/auth/signin" replace />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "sales", element: <Sales /> },
        { path: "LoginForm", element: <LoginForm /> },
        { path: "users", element: <UserManagementPage /> },
        { path: "contracts", element: <ContractPage /> },
        { path: "setting", element: <Setting /> },
        { path: "reports", element: <ReportsPage /> },
        { path: "catalog", element: <Catalog /> },
      ],
    },
    { path: "*", element: <NotFound /> },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { index: true, element: <Signin /> },
        { path: "signup", element: <Signup /> },
        { path: "signin", element: <Signin /> },
      ],
    },
  ]);

  return (
    <Con.Provider
      value={{
        data,
        setData,
        invoiceItems,
        setInvoiceItems,
        discount,
        setDiscount,
        services,
        setServices,
        file,
        setFile,
        users,
        setUsers,
        activities,
        setActivities,
        industry,
        setIndustry,
        packages,
        setPackage,
        features,
        setFeature,
      }}
    >
      <NotificationProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </NotificationProvider>
    </Con.Provider>
  );
}

export default App;
