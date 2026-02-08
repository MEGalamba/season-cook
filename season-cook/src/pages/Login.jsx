import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirebaseErrorMessage } from "../services/firebaseErrors";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //setEmail("");
      //setPassword("");
      const tokenResult = await userCredential.user.getIdTokenResult();

      console.log("tokenResult:", tokenResult.claims.admin);
      if (tokenResult.claims.admin) {
        navigate("/backoffice");
      } else {
        navigate("/");
      }
      //debug
      console.log("Login:", userCredential.user);
    } catch (error) {
      setError(getFirebaseErrorMessage(error.code));
      //setPassword("");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
          required
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
