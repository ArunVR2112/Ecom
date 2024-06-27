import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-gray-800 to-black h-screen w-full md:h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 inline '>Contact Me</p>
                <p className='pt-6'>Submit the form below to get in touch with Me... </p>

            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/pbnvwkqb' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input name='name' type="text" placeholder=' Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input name='email' type="email" placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <textarea name='message' rows="10" placeholder='Enter The Message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='py-3 my-8 mx-auto rounded-md hover:scale-105 text-white bg-gradient-to-b from-cyan-400 to-blue-400 '>Let's Talk</button>

                
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
