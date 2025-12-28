import { Link } from "react-router-dom";
function LoginButton() {
  return (
    <Link to="/Login">
      <button className="login-btn">Login</button>
    </Link>
  );
}

export default LoginButton;
