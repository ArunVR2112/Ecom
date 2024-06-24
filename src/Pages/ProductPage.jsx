/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import AppContext from '../context/AppContext/AppContext';
import { DataContext } from '../context/dataContext/DataContext.tsx';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiUrl = 'https://fakestoreapi.com/products/';
    let { addProductToCart, addProductToWishList, logInFirst } = useContext(AppContext);
    let { user } = useContext(DataContext);

    async function getDetails() {
        setLoading(true);
        let response = await fetch(apiUrl + id);
        let data = await response.json();
        setProduct(data);
        setLoading(false);
    }

    useEffect(() => {
        getDetails();
    }, [id]);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} style={{ color: 'gold', fontSize: '24px', marginLeft: '8px' }} />);
        }

        if (halfStar) {
            stars.push(<FaStarHalfAlt key="half" style={{ color: 'gold', fontSize: '24px', marginLeft: '8px' }} />);
        }

        return stars;
    };

    return (
        <div className='max-w-7xl mx-auto flex flex-wrap justify-center mt-8 px-4'>
            {
                loading ? "Loading Fetched Data" : (
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className='w-full lg:w-1/4 mt-10 border-transparent border shadow-lg p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-500'>
                            <img src={product.image} className='h-64 mx-auto' alt={product.title} />
                            <div className='mt-4 flex justify-between'>
                                <div>
                                    <p>${product.price}</p>
                                </div>
                                <div className='cursor-pointer mr-4'>
                                    <FaRegHeart onClick={() => { addProductToWishList(product) }} className='hover:scale-150' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-2/3 mt-6 lg:ml-10'>
                            <div className='pt-4 capitalize text-gray-900 pb-4'>
                                <p className='text-xl pb-4'>Title:</p>
                                <p>{product.title}</p>
                            </div>
                            <div>
                                <p className='capitalize text-xl text-gray-900 pb-4'>Description:</p>
                                <p>{product.description}</p>
                            </div>
                            {product.rating && (
                                <div className='w-full flex flex-col lg:flex-row justify-between items-center mt-16'>
                                    <div className='flex'>
                                        {renderStars(product.rating.rate)}
                                    </div>
                                    <div className='mt-4 lg:mt-0'>
                                        {
                                            user.status !== 200 &&
                                            <div className='bg-gradient-to-b cursor-pointer justify-center items-center max-w-max from-cyan-400 to-blue-500 '>
                                                <button onClick={() => { logInFirst(product) }} className='text-xl m-1'>Add To Cart</button>
                                            </div>
                                        }
                                        {
                                            user.status === 200 &&
                                            <div className='bg-gradient-to-b cursor-pointer justify-center items-center max-w-max from-cyan-400 to-blue-500 '>
                                                <button onClick={() => { addProductToCart(product) }} className='text-xl m-1'>Add To Cart</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ProductPage;
