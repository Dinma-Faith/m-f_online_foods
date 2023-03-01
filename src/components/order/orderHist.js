import React from 'react';
import Order from './Order';
import orderData from './orderData';
import './orderHost.css';

const orderHist = () => (
  <section>
    <div className="order-title">
      <h1> Order History </h1>
    </div>
    <div className="order-amount">
      <h4>
        Numbers of Orders: 2
      </h4>
      <h4>
        Amount Spent: $300
      </h4>
    </div>
    <div className="main-pg">
      {
      orderData.map((order) => (
        <Order
          name={order.name}
          image={order.image}
          quality={order.quality}
          price={order.price}
          key={order.id}
        />
      ))
    }
    </div>

  </section>
);

export default orderHist;
