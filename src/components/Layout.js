import React from 'react'
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout