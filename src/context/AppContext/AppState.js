import { useState } from "react";
import AppContext from "./AppContext";
import toast from "react-hot-toast";
export default function AppState({ children }) {
  let appName = "My New Ecommerce";

  let [cartItems, setCartItems] = useState([]);
  let [wishListItem,setWishListItem]=useState([]);

  // Cart Related Context
  let addProductToCart = (product) => {

    const exisitingProduct = cartItems.find((p) => p.id === product.id);
    if (exisitingProduct) {
      const updatedCart = cartItems.map((p) =>
        p.id === product.id ? { ...p, quantity: Number(p.quantity) + 1 } : p
      
      );

      setCartItems(updatedCart);
      toast.success("Product added to Cart");


    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };



  let handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cartItems.map(product =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    )
    setCartItems(updatedCart)
    toast.success("Product Quantity Changed")
  }

  let removeProductFromCart = (product) => {
    let updatedCartItems = cartItems.filter((item) => {
      return item.id !== product.id;
    });
    setCartItems(updatedCartItems);
    toast.success("Item Removed From Cart");
  };

  function greetUser() {
    console.log("Hey!! How are you??");
  }



  

// Add product to wish-list Wish List Related  Context Here On

let addProductToWishList = (product) => {

  const exisitingProduct = wishListItem.find((p) => p.id === product.id);
  if (exisitingProduct) {
    const updatedCart = wishListItem.map((p) =>
      p.id === product.id ? { ...p, quantity: Number(p.quantity) + 1 } : p
    
    );

    setWishListItem(updatedCart);
    toast.success("Product added to WishList");


  } else {
    setWishListItem([...wishListItem, { ...product, quantity: 1 }]);
  }
};
let removeProductFromWishList= (product) => {
  let updatedWishListItem = wishListItem.filter((item) => {
    return item.id !== product.id;
  });
  setWishListItem(updatedWishListItem);
  toast.success("Item Removed From Cart");
};

let handleQuantityChangeWishList = (productId, newQuantity) => {
  const updatedWishListItem = wishListItem.map(product =>
    product.id === productId ? { ...product, quantity: newQuantity } : product
  )
  setWishListItem(updatedWishListItem)
  toast.success("Product Quantity Changed in wishList")
}


  return (
    <AppContext.Provider
      value={{
        appName,
        cartItems,
        wishListItem,
        addProductToWishList,
        greetUser,
        addProductToCart,
        removeProductFromCart,
        handleQuantityChange,
        removeProductFromWishList,
        handleQuantityChangeWishList
      }}
    >
      {children}
    </AppContext.Provider>
  );
}