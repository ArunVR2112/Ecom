import React, { useEffect, useState } from 'react';
import { deleteEmployee, getAllEmployee } from '../Service/Service'; 
import {useNavigate} from 'react-router-dom';
import './List.css'
function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();
  useEffect(() => {
    fetchEmployees();
  }, []);

  function fetchEmployees()  {
    getAllEmployee() 
      .then((response) => {
        setEmployees(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
        setLoading(false);
      });
  };
  function addEmployee(){
    navigator('/add-employee');
  }
  function updateEmp(id){
    navigator(`/update-employee/${id}`)
  }

  function deleteEmp(id){
    deleteEmployee(id).then((response)=>{
      fetchEmployees();
    }).catch(error=>{console.log(error)})
  }
  return (
    <div className="employee-list">
      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <div>
            <div className='subcontainer'>
                <h2>Employee List</h2>
                <button className='btn' onClick={() =>{addEmployee()}}>Add Employee</button>
            </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>
                    {emp.pswd}
                  </td>
                  <td className='button-flex'>
                    <button className='btn2' onClick={()=> { updateEmp(emp.id)}}>Update</button>
                    <button className='delBtn' onClick={()=>{deleteEmp(emp.id)}}>Delete</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ListEmployee;
