import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


const Layout = () => {
  return (
    <>
      <Header />
      <Suspense  fallback={<div>Loading...</div>}>
        <div  style={{ backgroundColor: "#EAE0ED" }}>
          <Outlet />
        </div>
      </Suspense>
    </>
  )
}

export default Layout