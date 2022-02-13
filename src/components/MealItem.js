import React from "react";
import { Link } from "react-router-dom";

const MealItem = ({ strMeal, strMealThumb, idMeal }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{strMeal}</h3>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch Recipe
        </Link>
      </div>
    </div>
  );
};

export default MealItem;
