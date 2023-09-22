import React from 'react'
import Navbar from "./components/modecule/navbar"
import RegisterSection from './components/page/register/registerSection'

const Register = () => {
  return (
    <div className="w-full min-h-screen overflow-x-clip">
      <div className="hidden lg:block">
        <Navbar register={true} />
      </div>
      <RegisterSection />
    </div>
  )
}

export default Register