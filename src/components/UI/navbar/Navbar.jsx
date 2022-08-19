import { Link } from "react-router-dom";
import { NavbarBlock } from "./styled";

const Navbar = ({ pages }) => {
  return (
    <NavbarBlock>
      {pages.map((page) => (
        <Link key={page.to} to={page.to}>
          {page.name}
        </Link>
      ))}
    </NavbarBlock>
  );
};

export default Navbar;
