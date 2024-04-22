import React, { useEffect, useState } from 'react';
import { getAllEmployee } from '../Service/Service'; 
import {useNavigate} from 'react-router-dom';
import './List.css'
function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
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
  return (
    <div className="employee-list">
      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <div>
            <div className='subcontainer'>
                <h2>Employee List</h2>
                <button className='btn' onClick={addEmployee}>Add Employee</button>
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
