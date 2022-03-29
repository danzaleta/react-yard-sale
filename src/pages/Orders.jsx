import React from 'react';
import Order from '../components/Order';
import '../styles/Orders.scss'

const Orders = () => {
    return (
        <div class="Orders">
        <div class="Orders-container">
            <h1 class="title">
                My orders
            </h1>

            <div class="Orders-content">
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
            </div>

        </div>
    </div>
    );
}

export default Orders;