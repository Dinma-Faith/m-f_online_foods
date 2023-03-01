import React from 'react';
import PropTypes from 'prop-types';
// import orderData from './orderData';

const Order = ({
  name, price, image, quality,
}) => (
  <section className="order-table">
    <div>

      <table className="center">
        <tr>
          <th>
            Name
          </th>
          <th>
            Image
          </th>
          <th>
            <h4>Qua</h4>
          </th>
          <th>
            Price
          </th>
        </tr>
        <tr>
          <td>{ name}</td>
          <td>
            <img
              src={image}
              alt="orderprofile"
              className="order-profile"
            />

          </td>
          <td>{quality}</td>
          <td>{price}</td>
        </tr>
      </table>
    </div>
  </section>
);

Order.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quality: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Order;
