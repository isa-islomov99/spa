import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api";
import CategoryList from "../components/CategoryList";
import Loader from "../components/Loader";
import Search from "../components/Search";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [filterCategory, setfilterCategory] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleSearch = (str) => {
    setfilterCategory(
      category.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({
      pathname: location.pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategory(data.categories);
      setfilterCategory(data.categories);
    });
  }, []);

  return (
    <div>
      <Search cb={handleSearch} />
      {!category.length ? (
        <Loader />
      ) : (
        <CategoryList catalog={filterCategory} />
      )}
    </div>
  );
};

export default Home;
