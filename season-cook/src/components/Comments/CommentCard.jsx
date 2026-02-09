import { Card } from "react-bootstrap";

function CommentsCard({ comment }) {
  const date = comment.createdAt?.toDate();

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body className="d-flex gap-3">
        {/* Foto do usuário */}
        <img
          src={comment.userPhoto}
          alt={comment.userName}
          width={50}
          height={50}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />

        {/* Conteúdo do comentário */}
        <div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <strong>{comment.userName}</strong>
            <span className="text-muted" style={{ fontSize: "0.85rem" }}>
              — {date?.toLocaleDateString("pt-PT")}
            </span>
          </div>
          <p className="mb-0">{comment.text}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CommentsCard;
