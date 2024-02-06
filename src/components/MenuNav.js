import React from "react";
import headImg from "./data/meanuHeadImg";
import { Link } from "react-router-dom";
const MenuNav = () => {
  const navHeaders = headImg.map((el, ind) => {
    return (
      <Link to={`/menu/${el.category}`} key={ind} className="menu__nav--links">
        {el.category}
      </Link>
    );
  });
  return <>{navHeaders}</>;
};

export default MenuNav;
