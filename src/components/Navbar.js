import React from 'react'
import AddEmployee from './AddEmployee';

const Navbar = () => {
  return (
    <>
    <div className="bg-gray-800 flex ">
    <div  className="h-16 px-8 flex items-center">
      <p className=" text-white font-semibold">
        Employee Management System
      </p>
    </div>    
    </div>
    </>
  )
};

export default Navbar;