import React, { useState } from 'react';
import './FormCss.css';
import { createEmp } from '../Service/Service';
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const navigator = useNavigate();
  const { id } = useParams();

  const [error, setError] = useState({
    name: '',
    email: '',
    pswd: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setPswd(value);
    }
  };

  const saveEmp = (e) => {
    e.preventDefault();
    const employee = { name, email, pswd };

    if (validate()) {
      createEmp(employee)
        .then((response) => {
          console.log('Employee created:', response.data);
          navigator('/employee');
        })
        .catch((error) => {
          console.error('Error creating employee:', error);
        });
    }
  };

  const validate = () => {
    let valid = true;
    const errorCopy = { ...error };

    if (name.trim()) {
      errorCopy.name = '';
    } else {
      errorCopy.name = 'Name is required';
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = '';
    } else {
      errorCopy.email = 'Email is required';
      valid = false;
    }

    if (pswd.trim()) {
      errorCopy.pswd = '';
    } else {
      errorCopy.pswd = 'Password is required';
      valid = false;
    }

    setError(errorCopy);
    return valid;
  };

  const pageTitle = id ? 'Update Employee' : 'Add Employee';

  return (
    <div className="employee-form">
      <h2>{pageTitle}</h2>
      <form onSubmit={saveEmp}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            className={error.name ? 'error' : ''}
            required
          />
          {error.name && <small className="error-text">{error.name}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={error.email ? 'error' : ''}
            required
          />
          {error.email && <small className="error-text">{error.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="pswd">Password:</label>
          <input
            type="password"
            id="pswd"
            name="pswd"
            value={pswd}
            onChange={handleChange}
            className={error.pswd ? 'error' : ''}
            required
          />
          {error.pswd && <small className="error-text">{error.pswd}</small>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeComponent;
