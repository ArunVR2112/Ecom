import { useContext, useState } from "react";
import AppContext from "./AppContext";
import toast from "react-hot-toast";
import { addProductTocartBackend } from './Fetchhook'
import { DataContext } from '../dataContext/DataContext.tsx';

export default function AppState({ children }) {

  const [data, setData] = useState({
    cartItemId: "",
    itemQuantity: "",
    price: 0,
    createDateTime: "",
    userInfo: {
      userinfoid: 0
    }
  })
  const { user } = useContext(DataContext);
  let appName = "My New Ecommerce";

  let [cartItems, setCartItems] = useState([]);
  let [wishListItem, setWishListItem] = useState([]);


  let addProductToCart = (product, date) => {

    const exisitingProduct = cartItems.find((p) => p.id === product.id);
    if (exisitingProduct && user.status === 200) {
      const updatedCart = cartItems.map((p) =>
        p.id === product.id ? { ...p, quantity: Number(p.quantity) + 1 } : p,
        setData({
          cartItemId: product.id,
          itemTitle: product.title,
          itemQuantity: product.itemQuantity,
          price: product.price,
          createDateTime: date.toISOString(),
          userInfo: {
            userinfoid: user.data.userinfoid
          }
        })
      );

      addProductTocartBackend(data).then((result) => {
        setCartItems(updatedCart);
        toast.success("Product added to Cart");

      }).catch((err) => {
        console.log(err)
        toast.error("there is some error from back");
      });

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


  let logInFirst = () => {
    toast.success("Log IN to Account");
  }

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
  let removeProductFromWishList = (product) => {
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
        handleQuantityChangeWishList,
        logInFirst
      }}
    >
      {children}
    </AppContext.Provider>
  );
}