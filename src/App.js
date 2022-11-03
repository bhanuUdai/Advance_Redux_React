import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { ActionCreator } from "./components/store/cart-actions";
import { fetchData } from "./components/store/cart-actions";
let isInitial = true;
function App() {
  const cartStatus = useSelector((state) => state.cart.opencart);
  const cart = useSelector((state) => state.cartitem); // selecting the whole state slice
  const notification = useSelector((state) => state.cart.notification);

  const dispatch = useDispatch();
  useEffect(() => {
    const addToFireBase = async () => {
      dispatch(ActionCreator(cart));
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.change) {
      addToFireBase();
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Notification
        title={notification.title}
        status={notification.status}
        message={notification.message}
      />
      <Layout>
        {cartStatus && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
