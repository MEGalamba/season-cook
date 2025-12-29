function CommentsCard({ comment }) {
  const date = comment.createdAt?.toDate();
  return (
    <div>
      <ul>
        <li key={comment.id}>
          <img src={comment.userPhoto} alt="imagem do utilizador" width={40} />
          <strong>{comment.userName}</strong>
          <span> — {date?.toLocaleDateString("pt-PT")}</span>
          <p>{comment.text}</p>
        </li>
      </ul>
    </div>
  );
}

export default CommentsCard;
