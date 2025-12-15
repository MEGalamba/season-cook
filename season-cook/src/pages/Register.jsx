import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../services/firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleRegister(event) {
    event.preventDefault(); 

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Utilizador criado:", userCredential.user);
    
    } catch (error) {
      console.error(error.code, error.message);
    }
  }

  return (
    <div>
      <h2>Registo</h2>

      <form onSubmit={handleRegister}>
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

        <button type="submit">Registo</button>
      </form>
    </div>
  );
}

export default Register;
