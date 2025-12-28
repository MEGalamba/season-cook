import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/receitas">Receitas</Link></li>
      <li><Link to="/produtos">Produtos da Época</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/sobre">Sobre</Link></li>
    </ul>
  );
}

export default NavLinks;
