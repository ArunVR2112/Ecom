/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import QucikCart from '../Assets/Screenshot 2024-06-27 at 13-45-08 E-commmerse.png';
import snapShot from '../Assets/Screenshot 2024-05-15 051829.png' 
import empImg from '../Assets/strategic-planning-for-success-through-people-business-development-concept-by-choosing-professional-leaders-employee-competency-businessman-holding-magnifying-glass-hrm-or-human-resource-management-photo.jpg'


const Portfolio = () => {
    const portPhotos = [
        { id: 1, title:'QucikCart', src: QucikCart, gitLinks:'https://github.com' ,codeDemo:'https://' },
        { id: 2, title:'Photo Gallery', src: snapShot, gitLinks:'https://github.com/ArunVR2112/snapshot-' ,codeDemo:'https://snapshotofimgae.netlify.app/' },
        { id: 3, title:'Employee Managgemnet', src: empImg, gitLinks:'https://github.com/ArunVR2112/Employee-Managemnet' ,codeDemo:'https://github.com/ArunVR2112/Employee-Managemnet' },
        // { id: 4, src: HeroImg, githubLink:'https://github.com' ,codeDemo:'https://' },
        // { id: 5, src: HeroImg, githubLink:'https://github.com' ,codeDemo:'https://' },
        // { id: 6, src: HeroImg, githubLink:'https://github.com' ,codeDemo:'https://' },
    ];

    return (
        <div name="portfolio" className="  bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen">
            <div className='max-w-screen-lg justify-center h-full flex flex-col px-4 mx-auto w-full'>
                <div className='pb-6'>
                    <p className='text-4xl  text-orange-400  font-bold inline border-b-4 border-gray-400'>Portfolio</p>
                    <p className='py-6 text-xl '>Check Out Some of my work right here...</p>
                </div>

                <div className='grid grid-cols-1 pb-2  sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0 md:px-2 w-full'>
                    {portPhotos.map(({ id, src,gitLinks,codeDemo,title }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-md'>
                            <img src={src} alt='HeroImg' className='rounded-md  duration-200 h-[220px] w-full  hover:scale-105' />
                            <div className='flex justify-center items-center'>
                                <button className='w-1/4 px-6 py-2 m-4 duration-200 hover:scale-105'><a href={codeDemo}> Demo</a></button>
                                <button className='w-1/4 px-6 py-2 m-4 duration-200 hover:scale-105'><a href={gitLinks}>Code</a> </button>
                            </div>
                            <div className='flex justify-center items-center mt-0 mb-2'>
                                <p className='text-sm '>{title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
