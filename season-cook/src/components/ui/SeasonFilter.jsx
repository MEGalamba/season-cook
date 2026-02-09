import { Form } from "react-bootstrap";

export default function SeasonFilterBar({ seasonValue, onSeasonChange }) {
  return (
    <Form className="mb-3">
      <Form.Select
        value={seasonValue}
        onChange={(e) => onSeasonChange(e.target.value)}
        style={{
          borderRadius: "1rem",
          borderColor: "#16a34a",
          maxWidth: "300px",
        }}
      >
        <option value="">Todas as épocas</option>
        <option value="Primavera">Primavera</option>
        <option value="Verão">Verão</option>
        <option value="Outono">Outono</option>
        <option value="Inverno">Inverno</option>
      </Form.Select>
    </Form>
  );
}
