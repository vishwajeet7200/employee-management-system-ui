import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
import EmployeesTableContent from './EmployeesTableContent';
 
 const EmployeeList = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);
    
    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try {
                const response = await EmployeeService.getEmployee();
                setEmployees(response.data);
            } catch (error) {
                console.log(error);
                navigate('/ErrorPage',{state:{error:(error.toString())}});
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteEmployee = (e,id) =>{
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res) => {
            if(employees){
                setEmployees((prevElement) => {
                    return prevElement.filter((employee) => employee.id != id);
                });
            }
        });
    };
    
   return (
     <div className=' mx-4 py-8'>
        <div className='h-12'>
            <button 
            onClick={() => navigate("/addEmployee")}
            className='rounded bg-green-800 text-white py-2 px-6'>
                Add Employee
            </button>
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead>
                    <tr>
                        <th className='text-left bg-cyan-100 text-gray-500 uppercase tracking-wider py-3 px-6'>
                            FirstName</th>
                        <th className='text-left bg-cyan-100 text-gray-500 uppercase tracking-wider py-3 px-6'>
                            LastName</th>
                        <th className='text-left bg-cyan-100 text-gray-500 uppercase tracking-wider py-3 px-6'>
                            EmialId</th>
                        <th className='text-right bg-cyan-100 text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Actions</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody>
                    {employees.map((employee) => (
                        <EmployeesTableContent employee={employee} deleteEmployee={deleteEmployee} key={employee.id}/>
                    ))}
                </tbody>
                )}
            </table>
        </div>
     </div>
   )
 }
 
 export default EmployeeList