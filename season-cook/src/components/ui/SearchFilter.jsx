import { Form } from "react-bootstrap";

export default function SearchFilterBar({ searchValue, onSearchChange }) {
  return (
    <Form className="mb-3">
      <Form.Control
        type="text"
        placeholder="Pesquisar por nome"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          borderRadius: "1rem",
          padding: "0.5rem 1rem",
          borderColor: "#16a34a",
          maxWidth: "300px",
        }}
      />
    </Form>
  );
}
