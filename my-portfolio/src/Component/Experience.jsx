import React from 'react'
import java from '../Assets/java.png'
import JavaScript from '../Assets/javaScript.jpeg'
import MySql from '../Assets/MySql.png'
import ReactImg from '../Assets/React.png'
import SpringBoot from '../Assets/Spring_Framework-Logo.wine.png'
import HtmlImg from '../Assets/HTML.png'
import CssImg from '../Assets/CSS.png'
import Tailwindimg from '../Assets/Tailwind.png'


const Experience = () => {

  const img = [
    {
      id: 1,
      link: java,
      title:'java',
      style:'shadow-red-400'
    },
    {
      id: 2,
      link: ReactImg,
      title:'ReactJs',
      style:'shadow-blue-500'
    },
    {
      id: 3,
      link: MySql,
      title:'MySql',
      style:'shadow-lime-300'
    },
    {
      id: 4,
      link: SpringBoot,
      title:'SpringBoot',
      style:'shadow-green-500'
    },
    {
      id: 5,
      link: JavaScript,
      title:'JavaScript',
      style:'shadow-yellow-500'
    },
    {
      id: 6,
      link: HtmlImg,
      title:'Html',
      style:'shadow-orange-500'
    },
    {
      id: 7,
      link: CssImg,
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id: 8,
      link: Tailwindimg,
      title:'TailWind',
      style:'shadow-sky-500'
    }
  ]

  return (
    <div name='experience' className='pb-2 bg-gradient-to-b pt-8 from-black to-gray-800 md:h-screen w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6 text-xl'>These are the technology i have worked on</p>
        </div>



        <div className='grid  grid-cols-2 w-full sm:grid-cols-3 gap-4   gap-x-8 text-center py-0 px-12 sm:px-0 '>
          {
            img.map(({ id, link,title,style }) => (
              <div key={id} className={`cursor-pointer b shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={link} alt='java' className='w-20 mx-auto' />
                <p>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience
