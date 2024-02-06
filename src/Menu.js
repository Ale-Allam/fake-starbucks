import { useEffect } from "react";
// import drinksMenu from "./components/data/menuOrder";
// import NavMenuLinks from "./components/NavMenuLinks";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import MenuNav from "./components/MenuNav";
import headImg from "./components/data/meanuHeadImg";

export default function Menu() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  const setHeaders = headImg.map((el) => {
    return (
      <div className="menu__drinks" key={el.category}>
        <Link to={`/menu/${el.category}`}>
          <img className="menu__imgs" src={el.drinkImg} alt={el.category} />
        </Link>
        <h3 className="menu__category--name">{el.category}</h3>
      </div>
    );
  });

  return (
    <>
      <Header />
      <div className="menu container">
        <nav className="menu__nav">
          <h2 className="menu__nav--header">Drinks</h2>
          <div className="menu__nav--link">
            <MenuNav />
          </div>
        </nav>

        <main className="menu__main">
          <h1 className="menu__header">Menu</h1>
          <div className="menu__category">{setHeaders}</div>
        </main>
      </div>
      
    </>
  );
}
