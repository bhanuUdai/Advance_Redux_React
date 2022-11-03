import { cartActions } from "./cart-reducer";
import { cartItemActions } from "./cartitem-reducer";
import axios from "axios";

export const ActionCreator = (cart) => {
    return async (dispatch) => {
      dispatch(
        cartActions.setNotification({
          status: "pending",
          title: "processing",
          message: "sending",
        })
      );
  
      const sendRequest = async () => {
        try {
          console.log("putting");
  
          let res = await axios.put(
            "https://react-http-90afb-default-rtdb.firebaseio.com/cart.json",
            {items:cart.items,totalQuantity:cart.totalQuantity}
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
              status: "error",
              title: "ERROR",
              message: "Request Fail :(",
            })
          );
          console.log(err);
        }
      };
      sendRequest();
    };
  };
  
  export const fetchData = () => {
    return async (dispatch) => {
      dispatch(
        cartActions.setNotification({
          status: "pending",
          title: "processing",
          message: "sending",
        })
      );
  
      const getData = async () => {
        try {
          let res = await axios.get(
            "https://react-http-90afb-default-rtdb.firebaseio.com/cart.json"
          );
          console.log(res, "fetching data");
  
          dispatch(
            cartItemActions.addFetchedDataToCart({
              items: res.data.items ? res.data.items : [],
              totalQuantity: res.data.totalQuantity,
            })
          );
  
          dispatch(
            cartActions.setNotification({
              status: "success",
              title: "sent",
              message: "Successfull :)",
            })
          );
        } catch (err) {
          console.log(err);
          dispatch(
            cartActions.setNotification({
              status: "error",
              title: "ERROR",
              message: "Request Fail :(",
            })
          );
        }
      };
      getData();
    };
  };