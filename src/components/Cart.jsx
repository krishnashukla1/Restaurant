//components/Cart.js

import React, { useContext } from 'react';
import { RestaurantContext } from '../contexts/RestaurentContext';


const Cart = () => {
    const { totalPrice } = useContext(RestaurantContext);

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <div className="cart-content">
                <span style={{ color: "brown" }}>Total Price: </span> ${totalPrice}
                {/* Add other cart items here */}
            </div>
        </div>
    );
};

export default Cart;
