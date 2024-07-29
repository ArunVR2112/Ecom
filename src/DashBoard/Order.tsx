import React, { useEffect, useState } from "react";

const Order: React.FC = () => {
    const apiUrl = 'https://fakestoreapi.com/products/';

    let [product, setProduct] = useState<any[]>([]);

    async function getDetails() {
        let response = await fetch(apiUrl + 2);
        let data = await response.json();
        setProduct([data]); // Wrapping in an array to handle as an array
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className='flex flex-col items-center mt-16'>
            <div className='w-full max-w-3xl overflow-hidden mb-8'>
                <div className="flex">
                    {product.map((data) => (

                        <div key={data.id} className=" w-full">
                            <div className="pl-12">
                                <img src={data.image} className="h-64 mx-auto pb-4" alt="image"/>
                            </div>
                            <div className="ml-12 mt-16 gap-4 pb-4" >
                                <h1 className="text-xl mb-4">{data.title}</h1>
                                <p className="mb-2 ">{data.description}</p>
                                <div className="flex justify-between mt-6">
                                    <p className="mb-2 text-xl">${data.price}</p>
                                    <button className="mb-2 text-xl">Button</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Order;
