import React, { useEffect, useState } from 'react';
import { getAllEmployee } from '../Service/Serivice'; 
import './List.css'
function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="employee-list">
      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <div>
          <h2>Employee List</h2>
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
