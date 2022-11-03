import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { cartActions } from "./components/store/cart-reducer";
import axios from "axios";
import Notification from "./components/UI/Notification";
function App() {
  const cartStatus = useSelector((state) => state.cart.opencart);
  const cart = useSelector((state) => state.cartitem);
  const notification=useSelector((state)=>state.cart.notification)
  console.log(cart, "INSIDE APP");

  const dispatch = useDispatch();
  useEffect(() => {
    const addToFireBase = async () => {
      dispatch(
        cartActions.setNotification({
          status: "pending",
          title: "processing",
          message: "sending",
        })
      );
      try {
        let res = await axios.put(
          "https://react-http-90afb-default-rtdb.firebaseio.com/cart.json",
          cart
        );
        dispatch(
          cartActions.setNotification({
            status: "success",
            title: "sent",
            message: "Successfull :)",
          })
        );
        console.log(res);
      } catch (err) {
        dispatch(
          cartActions.setNotification({
            status: 'error',
            title: "ERROR",
            message: "Request Fail :(",
          })
        );
        console.log(err);
      }
    };
    if (cart.items.length > 0) {
      addToFireBase();
    }
  }, [cart, dispatch]);
  console.log(cart, "inside APP");
  return (
    <React.Fragment>
      <Notification title={notification.title} status={notification.status} message={notification.message} />
      <Layout>
        {cartStatus && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
