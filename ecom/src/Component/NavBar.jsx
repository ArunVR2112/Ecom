import React, { useEffect, useState } from 'react';
import { MdOutlineHome } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = ({ setOpenCart, setOpenWishList }) => {
    let apiUrl = 'https://fakestoreapi.com/products/categories';
    const [categories, setCategories] = useState([]);
    const [nav, setNav] = useState(false);
    const [received, setReceived] = useState(false);

    useEffect(() => {
        getAllResponses();
    }, []);

    async function getAllResponses() {
        let res = await fetch(apiUrl);
        let data = await res.json();
        setCategories(data);
    }

    return (
        <div className='flex justify-between h-16 w-full bg-gray-50 dark:bg-gray-900 items-center'>
            <Link to="/" className='flex items-center gap-6 text-white ml-10 cursor-pointer'>
                <MdOutlineHome size={24} />
                <h2 className='text-xl font-semibold'>MyCommerce</h2>
            </Link>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center gap-6 text-white mr-20'>
                {categories.map((category) => (
                    <Link to={`category/${category}`} key={category} className='capitalize'>
                        {category}
                    </Link>
                ))}
                <Link to='/login' className='capitalize'>
                    Sign in
                </Link>
                {received &&
                    (<div><IoIosCart className='hover:scale-150 py-2 text-xl' size={24} onClick={() => { setOpenCart(true); setNav(false); } } />
                    <FaRegHeart className='hover:scale-150 py-2 text-xl' size={24} onClick={() => { setOpenWishList(true); setNav(false); } } />
                    </div>
                    )}
            </div>

            {/* Mobile Menu Icon */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <div className='absolute top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center'>
                    {categories.map((category) => (
                        <Link to={`category/${category}`} key={category} className='capitalize py-2 text-xl' onClick={() => setNav(false)}>
                            {category}
                        </Link>
                    ))}
                    <Link to='/login' className='capitalize py-2 text-xl' onClick={() => setNav(false)}>
                        Sign in
                    </Link>
                    {received &&
                        (<div><IoIosCart className='hover:scale-150 py-2 text-xl' size={24} onClick={() => { setOpenCart(true); setNav(false); } } />
                        <FaRegHeart className='hover:scale-150 py-2 text-xl' size={24} onClick={() => { setOpenWishList(true); setNav(false); } } />
                        </div>
                        )}
                </div>
            )}


        </div>
    );
};

export default NavBar;
