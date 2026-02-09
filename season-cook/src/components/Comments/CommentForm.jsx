import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { addCommentToRecipe } from "../../services/recipeSevice";

export default function CommentForm({ recipe }) {
  const [text, setText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuthContext();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) {
      setError("O comentário não pode estar vazio.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const newComment = {
        text,
        userId: user.uid,
        userName: user.email,
      };

      await addCommentToRecipe(recipe.docId, newComment);
      setText("");
    } catch (err) {
      console.error(err);
      setError("Ocorreu um erro ao enviar o comentário.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="my-4">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="commentText" className="form-label">
          Comentário
        </label>
        <textarea
          id="commentText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          rows={5}
          placeholder="Deixe o seu comentário..."
          disabled={isLoading}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-success" disabled={isLoading}>
        {isLoading ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            A enviar...
          </>
        ) : (
          "Adicionar comentário"
        )}
      </button>
    </form>
  );
}
