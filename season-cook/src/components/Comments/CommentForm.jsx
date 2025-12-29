import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { addCommentToRecipe } from "../../services/recipeSevice";

export default function CommentForm({ recipe }) {
  const [text, setText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { user, loading } = useAuthContext();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) {
      setError("O comentário não pode estar vazio.");
      return;
    }

    setLoading(true);

    try {
      const newComment = {
        text,
        userId: user.uid,
        userName: user.displayName,
        userPhoto: user.photoURL,
      };

      // guarda no Firestore
      await addCommentToRecipe(recipe.id, newComment);

      setText(""); // limpa o formulário
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Deixe o seu comentário..."
        rows={5}
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? "A enviar..." : "Adicionar comentário"}
      </button>
    </form>
  );
}
