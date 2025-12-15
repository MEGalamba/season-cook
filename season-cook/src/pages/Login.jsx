import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleLogin(event) {
    event.preventDefault(); // 🔴 MUITO IMPORTANTE

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Login com sucesso:", userCredential.user);
    } catch (error) {
      console.error(error.code, error.message);
    }
  }

  return (
    <div>
      <h2>Login</h2>

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
