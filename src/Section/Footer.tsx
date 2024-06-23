import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { MdMarkEmailRead } from 'react-icons/md';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialLinks = [
        { label: 'YouTube', icon: FaYoutube },
        { label: 'Instagram', icon: FaInstagram },
        { label: 'Twitter', icon: FaTwitter },
        { label: 'LinkedIn', icon: CiLinkedin },
        { label: 'Email', icon: MdMarkEmailRead }
    ];

    return (
        <footer className='bg-gray-50 dark:bg-gray-900 text-white py-8 mt-auto'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                    <div className='flex gap-4 items-center mb-4 md:mb-0'>
                        {socialLinks.map((value) => {
                            const Icon = value.icon;
                            return (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a
                                    key={value.label}
                                    href='#'
                                    className='flex items-center gap-2 hover:text-gray-400'
                                >
                                    <Icon size={24} />
                                    <span>{value.label}</span>
                                </a>
                            );
                        })}
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 text-center md:text-left'>
                        <Link to='/about' className='hover:text-gray-400'>
                            About Us
                        </Link>
                        <Link to='/contact' className='hover:text-gray-400'>
                            Contact Us
                        </Link>
                        <Link to='/privacy' className='hover:text-gray-400'>
                            Privacy Policy
                        </Link>
                        <Link to='/terms' className='hover:text-gray-400'>
                            Terms of Service
                        </Link>
                    </div>
                </div>
                <div className='text-center text-sm'>
                    &copy; {new Date().getFullYear()} MyCommerce. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
