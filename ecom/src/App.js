import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.js'
import Category from './Pages/Category.jsx'
import Product from './Pages/ProductPage.jsx'
import MessageComponent from './Component/MessageComponent.jsx'
import AppState from "./context/AppContext/AppState.js";
import { Toaster } from "react-hot-toast";
import CartComponent from "./Component/CartComponent.js";
import WishListComponent from './Component/WishListComponent.js'
function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  return (
    <div>
      <AppState>
        <Toaster />
        <CartComponent openCart={openCart} setOpenCart={setOpenCart} />
        <WishListComponent openWishList={openWishList} setOpenWishList={setOpenWishList}/>
        <NavBar  setOpenCart={setOpenCart} setOpenWishList={setOpenWishList} />
        <MessageComponent />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='category/:id' element={<Category />} />
          <Route path='product/:id' element={<Product />} />

        </Routes>
      </AppState>
    </div>
  );
}

export default App;
