import React from 'react'

const About = () => {
    return (
        <div name="about" className='pt-3 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pb-4'>
            <div className='max-w-screen-lg flex flex-col mx-auto justify-center w-full h-full'>
                <div className='pb-4'>
                    <p className='text-5xl text-orange-400 font-bold inline border-b-4 border-b-green-400'>About</p>
                </div>

                <p className='md:p-2 md:text-xl'>
                    I am a seasoned Java developer with two years of hands-on experience specializing in Java programming and related technologies.
                    My expertise extends to building robust applications using Spring Boot, Hibernate, and MySQL databases.
                </p>
                <p className='md:p-2 md:text-xl'>
                    In addition to my proficiency in core Java concepts, I have a strong command of the Spring framework,
                    particularly Spring Boot, leveraging its features to rapidly develop scalable and maintainable applications.
                    My experience with Hibernate allows me to efficiently manage database interactions,
                    ensuring optimal performance and data integrity in MySQL environments.
                </p>
                <p className='md:p-2 md:text-xl'>
                    I am well-versed in version control systems, particularly Git and GitHub,
                    using them extensively to manage codebase changes and collaborate effectively with team members.
                    My experience in utilizing Git enables me to streamline the development workflow and maintain code quality throughout the project lifecycle.
                </p>
                <p className='md:p-2 md:text-xl'> 
                    With a solid foundation in software development best practices and a passion for continuous learning,
                    I am dedicated to delivering high-quality solutions that exceed expectations.
                    I thrive in dynamic environments where I can leverage my technical skills and collaborative mindset to contribute meaningfully to the success of projects and teams.
                </p>
            </div>
        </div>
    )
}

export default About
