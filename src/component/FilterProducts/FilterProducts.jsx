import { useState } from "react";
import "./FilterProducts.css";
import { useNavigate } from "react-router-dom";
import useCategory from "../../hooks/useCategory";

export default function FilterProducts({
  search,
  setSearch,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  clearFilters,
}) {
  const [categories] = useCategory();
  const navigate = useNavigate();

  const minOptions = [0, 10, 50, 100, 500, 1000];
  const maxOptions = [10, 50, 100, 500, 1000, 5000, 10000];

  const handleCategoryNavigation = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <aside className="product-list-sidebar">

      <h5 className="sidebar-title">Search Products</h5>

      <div className="sidebar-search">
        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h5 className="sidebar-title mt-3">Categories</h5>

      <div id="category">
        {categories?.map((category) => (
          <button
            key={category}
            className="category-btn"
            onClick={() => handleCategoryNavigation(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <h5 className="sidebar-title mt-4">Price</h5>

      <div className="price-filter-select">

        <select
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        >
          {minOptions.map((price) => (
            <option key={price} value={price}>
              Min ₹{price}
            </option>
          ))}
        </select>

        <select
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        >
          {maxOptions.map((price) => (
            <option key={price} value={price}>
              Max ₹{price}
            </option>
          ))}
        </select>

      </div>

     <div className="filter-btn-group">
  <button
    type="button"
    className="btn btn-warning filter-btn"
    onClick={() => setSearch("")}
  >
    <i className="ri-search-line"></i>
    <span>Clear Search</span>
  </button>

  <button
    type="button"
    className="btn btn-danger filter-btn"
    onClick={clearFilters}
  >
    <i className="ri-filter-off-line"></i>
    <span>Clear Filters</span>
  </button>
</div>
    </aside>
  );
}