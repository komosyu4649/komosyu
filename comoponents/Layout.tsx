import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Children = {
  children: React.ReactNode | null
}

const Layout = ({ children }: Children) => {
  return (
    <div className="wrapper" id="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
