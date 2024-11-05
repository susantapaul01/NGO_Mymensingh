import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Component/footer';
import TopNavbar from '../Component/TopNavbar';

const Layout = () => {
  return (
    <>
      <TopNavbar />
          <Outlet />
      <Footer />
    </>
  )
}

export default Layout;