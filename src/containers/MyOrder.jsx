import React from 'react';

const MyOrder = () => {
    return (
        <aside className="MyOrder">
        <div className="title-container">
            <img src="./icons/flechita.svg" alt="arrow"/>
            <p>Shopping cart</p>
        </div>
        <div className="my-order-content">
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>
                    $560.00
                </p>
            </div>
        </div>
        <button className="primary-button">Checkout</button>
    </aside>
    );
}

export default MyOrder;