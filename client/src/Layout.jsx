import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const  Layout = (Component) => ({...props})  =>{
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Component {...props} />
    </div>
  )
}

export default Layout