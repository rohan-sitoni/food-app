import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";
import {useContext, useState} from 'react';
import { useEffect } from "react";
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const {items  } = cartCtx;
    
    const numberOfCartItem = items.reduce((curNumber, item)=>{
        return curNumber+item.amount;
    },0);
    
    const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);


    const btnClasses = `${classes.button} ${btnIsHighlighted === true ? classes.bump: ''}`


    useEffect(()=>{
        if (items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        },300)

        return ()=> {
            clearTimeout(timer);
        }
    },[items])

    return <button className = {btnClasses} onClick = {props.onClick} >
        <span className = {classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className = {classes.badge}>
            {numberOfCartItem}
        </span>
    </button>
}

export default HeaderCartButton;