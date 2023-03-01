import React from 'react';
import PropTypes from 'prop-types';

const SingleFood = ({
  image, name, description, amount,
}) => (
  <article className="list-food">
    <img src={image} alt="food" className="food-image" />
    <div className="details-food">
      <h1 className="food-name">{name}</h1>
      <p className="food-desrc">{description}</p>
      <h3 className="food-amount">
        $
        {amount}
      </h3>
    </div>
    <div className="btn-field">
      <button type="submit" className="btn-order">
        Order Now
      </button>
    </div>
  </article>
);
SingleFood.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default SingleFood;
