import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const UpdateEmployee = () => {

    const {id}=useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id:id,
        firstName:"",
        lastName:"",
        emailId:"",
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setEmployee({...employee,[name]:value});
    };

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.data);
            }catch(error){
                console.log(error);
                navigate('/ErrorPage',{state:{error:(error.toString())}});
            }
        };
        fetchData();
    }, []);
    
    
    const updateEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.updateEmployee(id,employee).then((response) => {
            console.log(response);
            navigate('/');
        }).catch((error) => {
            console.log(error);
            navigate("/errorPage",{state:{error:(error.toString())}});
        });
    }


  return (
    <div className="flex shadow mx-auto max-w-2xl border-b ">
        <div className="px-8 py-8 ">
            <p className="font-thin text-2xl">
                <h1>Update Employee</h1>
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
                 onClick={updateEmployee}
                 className="rounded text-white bg-green-400 sm:bg-yellow-400 hover:bg-green-800 px-4 py-2">update</button>
                <button 
                onClick={() => navigate('/')}
                className="rounded text-white bg-red-400 hover:bg-red-800 px-4 py-2">cancel</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployee