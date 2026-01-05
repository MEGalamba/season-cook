import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { getFirebaseErrorMessage } from "../services/firebaseErrors";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      //mensagem de sucesso
      alert("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      setError(getFirebaseErrorMessage(error.code));
    }
  }

  return (
    <div>
      <h2>Registo</h2>
      {error && <p>{error}</p>}
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
