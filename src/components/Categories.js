import React from "react";
import { FaSearch } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Double Mantul",
    route: "double-mantul",
  },
  {
    id: 2,
    name: "King's Chicken [ Rasa Baru ]",
    route: "king-chicken",
  },
  {
    id: 3,
    name: "3-Cheese [ Limited Time ]",
    route: "3-cheese",
  },
  {
    id: 4,
    name: "Bk App Exclusive",
    route: "bk-app-exclusive",
  },
  {
    id: 5,
    name: "Cheese Burger Favorit",
    route: "cheese-burger-favorit",
  },
  {
    id: 6,
    name: "Cheese Whopper®",
    route: "cheese-whooper",
  },
  {
    id: 7,
    name: "Gold Collection",
    route: "gold-collection",
  },
  {
    id: 8,
    name: "Kids Meal",
    route: "kids-meal",
  },
  {
    id: 9,
    name: "Side & Dessert",
    route: "side-dessert",
  },
  {
    id: 10,
    name: "Beverages",
    route: "beverages",
  },
  {
    id: 11,
    name: "King Deals",
    route: "king-deals",
  },
  {
    id: 12,
    name: "September Ceria 9.9",
    route: "september-ceria",
  },
];

const Categories = () => {
  const params = useParams();

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="mb-4">
        <div className="position-relative">
          <input
            type="text"
            className="search-input w-100"
            placeholder="Search menu..."
          />
          <button type="submit" className="btn btn-search">
            <FaSearch color="#fff" size={15} className="mb-1" />
          </button>
        </div>
      </form>
      {categories.map((item) => (
        <Link
          to={`/menus/${item.route}`}
          key={`category-${item.id}`}
          className={`category-card ${
            item.route === params?.menu && "active"
          } mb-2`}
        >
          <h3>{item.name}</h3>
        </Link>
      ))}
      <small className="text-xs color-gray">* Harga belum termasuk pajak</small>
    </>
  );
};

export default Categories;
