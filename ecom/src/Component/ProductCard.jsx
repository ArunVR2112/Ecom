import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import MessageComponent from './MessageComponent';

const ProductCard = ({ product }) => {
    const [check, setCheck] = useState(true);
    const addToCart = (check) => {
        <MessageComponent />
        setCheck(!check)
    }
    return (

        <div key={product.id} className='w-1/4 border-transparent border shadow-lg mr-4 mt-4  p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-500'>


            <img src={product.image} className='h-64 mx-auto' alt='img' />
            <Link to={`/product/${product.id}`}><h3 className='mt-4'>{product.title}</h3></Link>
            <div className='mt-4 flex justify-between'>

                <div className=''>
                    <p>${product.price}</p>
                </div>

                <div className='cursor-pointer mr-4'>
                    <FaRegHeart onClick={() => { addToCart(check) }} />
                </div>

            </div>

        </div>
    )
}

export default ProductCard
