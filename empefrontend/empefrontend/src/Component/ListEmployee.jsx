import React, { useEffect, useState } from 'react';
import { getAllEmployee } from '../Service/Service'; 
// import { Link } from 'react-router-dom';
function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    getAllEmployee() // Fetching employee list from the backend
      .then((response) => {
        setEmployees(response.data); // Assuming the response contains the employee list
        setLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
        setLoading(false);
      });
  };
// {                    {<Link to={`/employee/edit/${emp.id}`}>Edit</Link>
//                     <Link to={`/employee/delete/${emp.id}`}>Delete</Link>}
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
                    {/* Assuming you have routing setup for Edit and Delete actions */}

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
