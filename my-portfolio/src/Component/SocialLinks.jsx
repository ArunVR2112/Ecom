import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'





const SocialLinks = () => {

    const links=[

        {
            id:1,
            link:'https://linkedin.com/',
            nameofTag:'Linkedin',
            icon:<FaLinkedin size={30}/>,
            style:"rounded-tr-md"
        },

        {
            id:2,
            link:'https://github.com/ArunVR2112',
            nameofTag:'Github',
            icon:<FaGithub size={30}/>
        }
        ,
        {
            id:3,
            link:'mailto:arunvrathod@gmail.com',
            nameofTag:'Gmail',
            icon:<HiOutlineMail size={30}/>,
            send:true,
        },
        {
            id:4,
            link:'/Java_Developer.pdf',
            nameofTag:"PortFolio",
            icon:<BsFillPersonLinesFill size={30} />,
            dounload:true
        }
    ]
    return (
        <div className="hidden  lg:flex flex-col  left-0 fixed" style={{ top: "35%" }}>
            <ul>
            {
                links.map(({id,link,nameofTag,icon,download})=>(
                    <li key={id} className='flex justify-center items-center h-10 w-40 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500'>
                    <a href={link}  download={download} target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white rounded-md' >
                        <>
                            {nameofTag}{icon}
                        </>
                    </a>
                </li>
                ))
            }


            </ul>

        </div>
    )
}

export default SocialLinks
