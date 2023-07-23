import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart;

    const { cart } = props; //option2

    console.log(cart);

    let total = 0;
    for (const product of cart){
        total = product.price + total
    }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:{total}</p>
            <p>Tax:</p>
            <h6>Grand total:</h6>
        </div>
    );
};

export default Cart;