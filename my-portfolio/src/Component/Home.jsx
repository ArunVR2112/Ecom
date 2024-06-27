import React from 'react'
import Heroimg from '../Assets/heroimgae.JPG'
import { RiArrowRightWideFill } from "react-icons/ri";
import { Link } from 'react-scroll'

function Home() {
    return (
        <div name='home' className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl font-bold text-white  sm:text-6xl md:pt-6'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have 2 years of experience building and designing
                        software.
                        Currently, I love to wok on web application using technologies like Java,SQL,SpringBoot,JavaScript,React.
                    </p>
                    <Link to={"portfolio"}
                        smooth duration={500}
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 via-cyan-400 to-blue-500 cursor-pointer '>
                        Portfolio
                        <span
                            className='group-hover:rotate-90 duration-300'>
                            <RiArrowRightWideFill size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
                <div>
                    <img src={Heroimg} alt='My Profile Pic' className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>

        </div>
    )
}

export default Home