import React, { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import CategoryList from "../components/CategoryList";
import Loader from "../components/Loader";

const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategory(data.categories);
    });
  }, []);

  return (
    <div>
      {!category.length ? <Loader /> : <CategoryList catalog={category} />}
    </div>
  );
};

export default Home;
