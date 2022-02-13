import React from "react";
import { Link } from "react-router-dom";

const CatogoryItem = (props) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{strCategory}</h3>
        <p>{strCategoryDescription.slice(0, 120)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          Watch Category
        </Link>
      </div>
    </div>
  );
};

export default CatogoryItem;
