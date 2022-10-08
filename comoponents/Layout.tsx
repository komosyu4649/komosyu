import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Children = {
  children: React.ReactNode | null
}

const Layout = ({ children }: Children) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
