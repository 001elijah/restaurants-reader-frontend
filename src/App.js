import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
// import { ShoppingCartPage } from "./pages/ShoppingCartPage";
import { ShopsPage } from "./pages/ShopsPage";
import { useState } from "react";
// import { ShopsList } from "./components/ShopsList/ShopsList";
// import { DishesList } from "./components/DishesList/DishesList";
import { postOrder, searchRestaurantById } from "./services/foodAPI";
import { Wrapper } from "./components/Wrapper/Wrapper";

const ShopsList = lazy(() => import('./components/ShopsList/ShopsList'));
const DishesList = lazy(() => import('./components/DishesList/DishesList'));
const ShoppingCartPage = lazy(() => import("./pages/ShoppingCartPage"));

export const App = () => {
  const [dishes, setDishes] = useState([]);
  const [cart, setCart] = useState([]);

  const showToastMessage = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
        });
  };
  
  const showToastWarningMessage = (message) => {
    toast.warning(message, {
      position: toast.POSITION.TOP_LEFT
    });
  };
  const showToastInfoMessage = (message) => {
    toast.info(message, {
    position: toast.POSITION.BOTTOM_CENTER
});
  };
  const handleClick = (item, foodURL, restaurant) => {
    item['photo'] = foodURL;
    item['restaurant'] = restaurant;
    // Update cart item quantity if already in cart
    if (cart.some((cartItem) => cartItem._id === item._id)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.productCode === item.productCode
            ? {
              ...cartItem,
              amount: cartItem.amount + 1
            }
            : cartItem
        )
      );
      return;
    }

    // Add to cart
    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 } // <-- initial amount 1
    ]);
    showToastMessage('Added to cart!');
  };

  const handleAmountChange = (productCode, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) => {
        return cartItem._id === productCode
          ? cartItem.amount + d < 1
            ? [] // <-- remove item if amount will be less than 1
            : [
              {
                ...cartItem,
                amount: cartItem.amount + d
              }
            ]
          : [cartItem]
      }
      )
    );
  };
  const handleRestaurantClick = (e, id) => {
    // console.log(e.target.text);
    if (cart.length === 0) {
      if (e.target.nodeName === 'A') {
        searchRestaurantById(id)
          .then(result => setDishes(result))
          .catch(error => console.log(error));
      }
    } else {
      if (e.target.nodeName === 'A' && cart[0].restaurant === `${e.target.text}`) {
        searchRestaurantById(id)
          .then(result => setDishes(result))
          .catch(error => console.log(error));
      } else {
        showToastWarningMessage('Select a dish from one restaurant per order!');
        showToastInfoMessage('Proceed within the restaurant or remove items from cart to acess others.');
      }
    }
  };
  const handleSubmitOrder = (orderDeatails) => {
    postOrder(orderDeatails);
    showToastMessage('Your order has been submitted!');
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path='/' element={<ShopsPage />}>
            <Route index element={
              <>
                <Wrapper>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ShopsList cart={cart} handleRestaurantClick={handleRestaurantClick} />
                    <DishesList dishes={dishes} handleClick={handleClick} />
                  </Suspense>
                </Wrapper>
              </>} />
          </Route>
          <Route path="cart" element={<Suspense fallback={<div>Loading...</div>}><ShoppingCartPage cart={cart} setCart={setCart} handleAmountChange={handleAmountChange} handleSubmitOrder={handleSubmitOrder} /></Suspense>}>
            {/* <Route index element={<Suspense fallback={<div>Loading...</div>}><SearchMovies /></Suspense>} />
            <Route path=":movieId" element={<Suspense fallback={<div>Loading...</div>}><MovieDetails /></Suspense>}>
              <Route path="cast" element={<Suspense fallback={<div>Loading...</div>}><Cast /></Suspense>} />
              <Route path="reviews" element={<Suspense fallback={<div>Loading...</div>}><Reviews /></Suspense>} />
            </Route> */}
          </Route>
          <Route path="*" element={<ShopsPage />} />
        </Route> 
      </Routes>
    </>
  );
};