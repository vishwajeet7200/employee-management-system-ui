import axios from 'axios';
const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1";

class EmployeeService{
    
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+"/createEmployee",employee);
    }

    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/allEmployee");
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/deleteEmployee/"+id);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"/getEmpById/"+id);
    }

    updateEmployee(id,employee){
        return axios.put(EMPLOYEE_API_BASE_URL+"/editEmployee/"+id,employee)
    }
}

export default new EmployeeService();