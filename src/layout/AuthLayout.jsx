import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
  
 <div className="dark:bg-slate-900 flex flex-col  h-screen">
    <Navbar className="relative z-[9999] " />

    <main className="flex-1  px-3 h-screen md:h-auto flex  md:block  justify-center items-center dark:bg-slate-900">
      <Outlet />
    </main>
  </div>

    </>
  )
}
