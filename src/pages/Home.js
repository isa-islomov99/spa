import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api";
import CategoryList from "../components/CategoryList";
import Loader from "../components/Loader";
import Search from "../components/Search";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [filterCategory, setfilterCategory] = useState([]);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setfilterCategory(
      category.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({
      pathname: pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategory(data.categories);
      setfilterCategory(
        search
          ? data.categories.filter((list) =>
              list.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLocaleLowerCase())
            )
          : data.categories
      );
    });

    if (search && !filterCategory.length) navigate("/NotFound");
  }, [search]);

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
