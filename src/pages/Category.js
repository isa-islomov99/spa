import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilterCategory } from "../api";
import Loader from "../components/Loader";
import MealList from "../components/MealList";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilterCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, []);

  return <div>{!meals.length ? <Loader /> : <MealList meals={meals} />}</div>;
};

export default Category;
