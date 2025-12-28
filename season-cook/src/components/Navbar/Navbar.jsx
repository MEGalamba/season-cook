import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <NavLinks />
      <LoginButton />
    </nav>
  );
}

export default Navbar;
