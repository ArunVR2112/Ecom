import React from 'react'
import { useState } from 'react';
const Carts = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className={`fixed top-0 left-0 h-full bg-white w-64 shadow-lg transition-transform duration-300 ease-in-out transform ${isCartOpen ? 'translate-x-0' : '-translate-x-full'}`}>
  </div>
  )
}

export default Carts
