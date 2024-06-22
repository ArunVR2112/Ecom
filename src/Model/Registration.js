/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {sendData} from '../Hooks/FetchLinks'
import { Link, useNavigate } from "react-router-dom";
const Registration = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAccepted:false
    })

    const navigate=useNavigate();

    const [error,setError]=useState("");
    // Data related handling here like adding data and so on
    const handleChange = (event) => {
        const { name, value,type,checked } = event.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    // Submit Changes calling axios hook and 
    const handleSubmit = (event) => {
        event.preventDefault();
        if(data.confirmPassword!==data.password){
            setError("The password entered is not matching !");
            return;
        } 
        sendData(data).then((result) => {
            if(result.status===200){
                navigate("/home")
            }
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <section className='bg-gray-50 dark:bg-gray-900 min-h-screen max-md:max-h-screen'>
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            
  
            <div key={data.id} className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                  Create an account
                </h1>
                <form  className='space-y-2 md:space-y-4' onSubmit={handleSubmit}>
                  
                <div >
                    <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your name</label>
                    <input
                      type='name'
                      name='name'
                     
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='John Cena'
                      required
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your Email</label>
                  <input
                    type='email'
                    name='email'
                   
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                  <div>
                    <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                    <input
                      type='password'
                      name='password'
                      
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required
                      value={data.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor='confirmPassword' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Confirm password</label>
                    <input
                      type='password'
                      name='confirmPassword'
                      
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required
                      value={data.confirmPassword}
                      // eslint-disable-next-line no-undef
                      onChange={handleChange}

                    />
                  </div>
                  {error && <p className="text-sm text-red-600 dark:text-red-500">{error}</p>}
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='terms'
                        aria-describedby='terms'
                        type='checkbox'
                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                        required
                        name='termsAccepted'
                        checked={data.termsAccepted}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label htmlFor='terms' className='font-light text-gray-500 dark:text-gray-300'>
                        I accept the <a className='font-medium text-primary-600 hover:underline dark:text-primary-500' href='#'>Terms and Conditions</a>
                      </label>
                    </div>
                  </div>
                  <button type='submit' className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                    Create an account
                  </button>
                  <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                    Already have an account? <Link to={`/login`} className='font-medium text-primary-600 hover:underline dark:text-primary-500'>Login here </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
export default Registration
