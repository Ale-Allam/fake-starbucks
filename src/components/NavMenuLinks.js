import { Link, Outlet } from "react-router-dom";

const NavMenuLinks = () => {
  return (
    <>
      <div>
        <Link style={{color:"red"}} to="one">One</Link>
        <Link to="two">Two</Link>
        <Link to="three">Three</Link>
      </div>
      <Outlet />
    </>
  );
};

export default NavMenuLinks;
