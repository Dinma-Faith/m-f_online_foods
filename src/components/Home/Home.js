import React from 'react';
import data from './FoodData';
import SingleFood from './SingleFood';
import './singlefood.css';

function Home() {
  return (
    <div className="main-food">
      <div className="food-heading">
        <h1 className="headerTitle"> Our Foods </h1>
        <p className="headerTitle"> You Can Order Your Food Here</p>
      </div>

      <div className="foods-list">
        {data.map((food) => (
          <SingleFood
            image={food.image}
            name={food.name}
            description={food.description}
            amount={food.amount}
            id={food.id}
            key={food.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
