import { Link } from "react-router-dom";
function RegisterButton() {
  return (
    <Link to="/Register">
      <button className="Register-btn">Register</button>
    </Link>
  );
}

export default RegisterButton;
