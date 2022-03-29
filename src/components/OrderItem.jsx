import React from 'react';
import '../styles/OrderItem.scss';

const OrderItem = () => {
    return (
        <div className="OrderItem">
            <figure>
                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30.00</p>
        </div>
    );
}

export default OrderItem;