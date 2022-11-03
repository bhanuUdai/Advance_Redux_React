import { Fragment } from 'react';
import MainHeader from './MainHeader';
import { useSelector } from 'react-redux';
import classes from "./Layout.module.css"


const Layout = (props) => {
  const notification=useSelector((state)=>state.cart.notification)
  return (
    <Fragment>
      <MainHeader />
      {notification==='sending' && <h2 className={classes.heading} style={{color:'blue'}}>REQUEST SENDING..</h2>}
      {notification==='sent' && <h2 className={classes.heading} style={{color:'green'}} >REQUEST SENT !! :)</h2>}
      {notification==='fail' && <h2 className={classes.heading} style={{color:'red'}} >ERROR !!  :(</h2>}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
