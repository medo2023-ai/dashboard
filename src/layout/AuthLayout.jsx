import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
  
 <div className="dark:bg-slate-900 flex flex-col  h-screen">
    <Navbar className=" " />

    <main className="flex-1 px-3  dark:bg-slate-900">
      <Outlet />
    </main>
  </div>

    </>
  )
}
