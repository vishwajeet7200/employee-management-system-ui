import React, { useState } from 'react'
import EmployeeService from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setEmployee({...employee,[name]:value});
    };

    const navigate=useNavigate();

    const saveEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((Response) => {
            console.log(Response);
            navigate("/allEmployee");
        }).catch((error)=>{
            console.log(error);
            navigate("/errorPage",{state:{error:(error.toString())}});
        });
        console.log(employee,"Employee");
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id:"",
        firstName:"",
        lastName:"",
        emailId:"",
        });
    };

  return (
    <div className="flex shadow mx-auto max-w-2xl border-b ">
        <div className="px-8 py-8 ">
            <p className="font-thin text-2xl">
                <h1>Add New Employee</h1>
            </p>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-800 text-sm font-normal">First Name</label>
                <input
                 type="text"
                 name="firstName"
                 value={employee.firstName} 
                 onChange={(e)=> handleChange(e)}
                 className="shadow border h-10 w-full px-2 py-2 "></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-800 text-sm font-normal">Last Name</label>
                <input 
                 type="text" 
                 name="lastName"
                 value={employee.lastName}
                 onChange={handleChange}
                 className="shadow border h-10 w-96 px-2 py-2 "></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-800 text-sm font-normal">Email</label>
                <input 
                 type="Email" 
                 name="emailId"
                 value={employee.emailId}
                 onChange={(e)=> handleChange(e)}
                 className="shadow border h-10 w-96 px-2 py-2 "></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-2 pt-4">
                <button 
                 onClick={saveEmployee}
                 className="rounded text-white bg-green-400 sm:bg-yellow-400 hover:bg-green-800 px-4 py-2">save</button>
                <button 
                onClick={reset}
                className="rounded text-white bg-red-400 hover:bg-red-800 px-4 py-2">clear</button>
            </div>
        </div>
    </div>
  )
};

export default AddEmployee;