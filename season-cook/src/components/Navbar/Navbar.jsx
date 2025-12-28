import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <NavLinks />
      <LoginButton />
      <RegisterButton />
    </nav>
  );
}

export default Navbar;
