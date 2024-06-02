import React, { useEffect, useState } from 'react'
import { MdOutlineHome } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
const NavBar = ({ setOpenCart, setOpenWishList }) => {
    let apiUrl = 'https://fakestoreapi.com/products/categories';
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllResponses()
    }, [])

    async function getAllResponses() {
        let res = await fetch(apiUrl);
        let data = await res.json();
        setCategories(data)
    }


    return (
        <div className='flex justify-between h-16 w-full bg-gradient-to-b from-black  to-gray-700'>
            <Link to="/">
                <div className='items-center gap-6 pt-4 text-white flex pb-4 ml-10 cursor-pointer' >

                    <MdOutlineHome />
                    <h2>MyCommoerce</h2>

                </div>
            </Link>
            <div className='  items-center gap-6 pt-4 text-white flex pb-4 mr-20 cursor-pointer'>
                {

                    categories.map((category) => {
                        return (
                            <Link to={`category/${category}`} > <p key={category} className='capitalize'>{category}</p></Link>
                        )
                    })
                }

                <IoIosCart className='hover:scale-150' onClick={() => { setOpenCart(true) }} />

                <FaRegHeart className='hover:scale-150' onClick={()=>setOpenWishList(true)} />
            </div>
        </div>
    )
}

export default NavBar
