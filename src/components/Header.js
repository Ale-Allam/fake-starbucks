import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const watchWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (showHeader && windowWidth <= 790) {
      document.body.style.overflowY = "hidden";
      console.log("yes");
    } else if (windowWidth >= 790 || !showHeader) {
      document.body.style.overflowY = "scroll";
      setShowHeader(false);
    }
    window.addEventListener("resize", watchWidth);
    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, [showHeader, windowWidth]);

  return (
    <header className="header"  style={{overflow: showHeader ? "visible" : "hidden"}}>
      <div onClick={() => setShowHeader(!showHeader)}>
      <img
          src="../../images/burger-menu.svg"
          alt="burger"
          className="burger-menu"
        />
      </div>
      <nav className="header__nav container">
        <div className="header__logo">
        <Link to="/">
          <img
            className="header__img"
            src="https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1633439375"
            alt="img"
          />
        </Link>
        </div>
        <div
          className="header__links"
          style={{ right: showHeader ? "0px" : "-1000px", transition: ".3s" }}
        >
          <ul className="header__list header__list--one">
            <li className="header__list--link">
              <Link to="/menu">MENU</Link>
            </li>
            <li className="header__list--link">
              <Link to="/rewards">REWARDS</Link>
            </li>
            {/* <li className="header__list--link">
              <a href="google.com">GIFT CARDS</a>
            </li> */}
          </ul>
          <ul className="header__list header__list--two">
            {/* <li className="header__list--link header__location">
              <FaMapMarkerAlt
              className="header__location--icon"
              />
              <a className="header__find" href="google.com">
                Find a store
              </a>
            </li> */}
            <li className="header__list-link header__btns">
              <button className="header__signbtn"><Link to="/singIn">Sing in</Link></button>
              <button className="header__joinbtn"><Link to="/joinNow">Join now</Link></button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
