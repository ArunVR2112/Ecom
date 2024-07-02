import React from 'react'
import { CiSettings } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FcSupport } from "react-icons/fc";
const Sidebar = () => {

    let menuItem = [{
        path: "",
        name: "Profile",
        icon: <CgProfile />
    }, {
        path: "",
        name: "Home",
        icon: <FaHome />
    }, {
        path: "",
        name: "Orders",
        icon: <MdOutlineShoppingBag />
    }, {
        path: "",
        name: "Carts",
        icon: <FaShoppingCart />
    },
    {
        path: "",
        name: "Setting",
        icon: <CiSettings />
    },
    {
        path: "",
        name: "Support",
        icon: <FcSupport />
    }];

    return (
        <div className='flex fixed top-0'>
            <div className="bg-gray-700 lg:w-60 md:w-40 sm:w- text-white min-h-screen  ">
                <div className="flex items-center">
                    <h1 className="text-2xl">Logo</h1>
                    <div className="text-xl">bars</div>
                </div>
                <div className='pt-24'>{
                    menuItem.map((items, index) => (
                        <div className='cursor-pointer' key={index}>
                            <div className='flex items-center mt-10 lg:gap-4   pl-4 active:bg-blue-300 active:text-white text-xl'>
                                <p className='mt-1'>{items.icon}</p>
                                <p className=''>{items.name}</p>


                            </div>

                        </div>
                    ))
                }</div>
            </div>
        </div>
    )
}

export default Sidebar
