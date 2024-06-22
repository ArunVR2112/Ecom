import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.js'
import Category from './Pages/Category.jsx'
import Product from './Pages/ProductPage.jsx'
import AppState from "./context/AppContext/AppState.js";
import { Toaster } from "react-hot-toast";
import CartComponent from "./Component/CartComponent.js";
import WishListComponent from './Component/WishListComponent.js'
import LogIn from "./Model/LogIn.js";
import Registration from "./Model/Registration.js";
import { UserProvider } from "../src/context/dataContext/DataContext.tsx";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  return (
    <div>
    <UserProvider>
      <AppState>
        <Toaster />
        <CartComponent openCart={openCart} setOpenCart={setOpenCart} />
        <WishListComponent openWishList={openWishList} setOpenWishList={setOpenWishList}/>
        <NavBar  setOpenCart={setOpenCart} setOpenWishList={setOpenWishList} />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path='home/' element= {<HomePage /> }/>
          <Route path='category/:id' element={<Category />} />
          <Route path='product/:id' element={<Product />} />
          <Route path="login" element={<LogIn/>} />
          <Route path="registration" element={<Registration/>}/>
        </Routes>
      </AppState>
      </UserProvider>
    </div>
  );
}

export default App;
