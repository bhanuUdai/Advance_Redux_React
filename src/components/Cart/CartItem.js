import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../store/cartitem-reducer";
const CartItem = (props) => {
  const { title, quantity, total, price ,id} = props.item;
  const dispatch=useDispatch();
  console.log(props, "cartitems");

  const removeItemHandler=()=>
  {
    dispatch(cartItemActions.removeFromCart(id))
  }

  const addItemToCartHandler=()=>
  {
    dispatch(cartItemActions.addToCart({
      quantity,
      price,
      id
    }))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total} <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemToCartHandler} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
