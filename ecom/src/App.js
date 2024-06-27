import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.js'
import Category from './Pages/Category.jsx'
import Product from './Pages/ProductPage.jsx'
import Carts from './Pages/Carts.js'
import WishListPage from './Pages/WishListPage.jsx'
import MessageComponent from './Component/MessageComponent.jsx'
import AppState from "./context/AppContext/AppState.js";
import { Toaster } from "react-hot-toast";
import CartComponent from "./Component/CartComponent.js";

function App() {
  const [openCart, setOpenCart] = useState(false);
  // const [openWishList, setOpenWishList] = useState(false);
  return (
    <div>
      <AppState>
        <Toaster />
        <CartComponent openCart={openCart} setOpenCart={setOpenCart} />

        <NavBar  setOpenCart={setOpenCart} />
        <MessageComponent />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='category/:id' element={<Category />} />
          <Route path='product/:id' element={<Product />} />
          <Route path="cart" element={<Carts />} />
          <Route path="wishList" element={<WishListPage />} />

        </Routes>
      </AppState>
    </div>
  );
}

export default App;
