import axios from 'axios'
const base_url="http://localhost:8080/api/employee";

export const getAllEmployee = () => axios.get(base_url);

export const createEmp =(employee)=>axios.post(base_url,employee);