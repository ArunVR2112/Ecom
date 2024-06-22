/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../Component/ProductCard';
import { DataContext } from '../context/dataContext/DataContext.tsx';

const HomePage = () => {
  let apiUrl = 'https://fakestoreapi.com/products/';
  const [product, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { user } = useContext(DataContext);
  async function getAllResponses() {

    setLoading(true)
    let response = await fetch(apiUrl);
    let data = await response.json();
    setProducts(data)
    setLoading(false)

  }
  useEffect(() => {
    getAllResponses()

  }, [])
  return (
    <div className='max-w-7xl mx-auto flex flex-wrap justify-between' >
      {
        loading ? "Fetching Data ..... " : (product.map((data) => {
          return (
            <ProductCard product={data} />

          )
        }))
      }
      {

      }
    </div>
  )
}

export default HomePage
