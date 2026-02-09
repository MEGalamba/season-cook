import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { getFirebaseErrorMessage } from "../services/firebaseErrors";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();

    // Verifica se as passwords são iguais
    if (password !== confirmPassword) {
      setError("As passwords não coincidem!");
      return;
    }
    try {
      //cria o utilizador
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Conta criada com sucesso!");
      //redireciona para o login
      navigate("/login");
    } catch (error) {
      setError(getFirebaseErrorMessage(error.code));
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        className="p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center text-success mb-4">Registo</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: "1rem" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: "1rem" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Confirmação da password</Form.Label>
            <Form.Control
              type=" password"
              placeholder="confirme password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: "1rem" }}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="success"
            className="w-100 rounded-pill"
          >
            Criar Conta
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;
