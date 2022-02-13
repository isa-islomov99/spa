import React from "react";
import CatogoryItem from "./CatogoryItem";

const CategoryList = ({ catalog = [] }) => {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CatogoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};

export default CategoryList;
