import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import AppContext from '../context/AppContext/AppContext.js';
import { DataContext } from '../context/dataContext/DataContext.tsx';



const ProductCard = ({ product }) => {

    let { addProductToWishList, logInFirst } = useContext(AppContext)
    const { user } = useContext(DataContext);

    return (
        <div key={product.id} className=' w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-transparent border shadow-lg m-2 p-4 sm:p-6 md:p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-500'>
            <img src={product.image} className='h-48 sm:h-56 md:h-64 mx-auto' alt='img' />
            <Link to={`/product/${product.id}`}>
                <h3 className='mt-4 text-base sm:text-lg md:text-xl'>{product.title}</h3>
            </Link>
            <div className='mt-4 flex justify-between items-center '>
                <div>
                    <p className='text-sm sm:text-base md:text-lg'>${product.price}</p>
                </div>
                {
                    user.status === 200 && <div className='cursor-pointer'>
                        <FaRegHeart onClick={() => { addProductToWishList(product) }} className='text-xl hover:scale-125 transition-transform duration-200' />
                    </div>
                }
                {
                    user.status !== 200 &&
                    <div className='cursor-pointer'>
                        <FaRegHeart onClick={() => { logInFirst() }} className='text-xl hover:scale-125 transition-transform duration-200' />
                    </div>
                }
            </div>
            <div className=''>

            </div>
        </div>
    );
};

export default ProductCard;
