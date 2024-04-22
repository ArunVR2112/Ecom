import axios from 'axios'
const base_url="http://localhost:8080/api/employee";

export const getAllEmployee = () => axios.get(base_url);

export const createEmp =(employee)=>axios.post(base_url,employee);

export const getEmployee =(id) =>axios.get(base_url+'/'+id)

export const updateEmployee =(employeeId,employee)=>axios.put(base_url+'/'+employeeId,employee);

export const deleteEmployee =(employeeId) =>axios.delete(base_url+'/'+employeeId);