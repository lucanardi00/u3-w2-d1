import CommentArea from "./CommentArea";

function BookCard({ book, selected }) {
  const borderStyle = selected ? { border: '2px solid blue' } : {};

  return (
    <div className="card" style={{ width: '18rem', margin: '10px', ...borderStyle }}> {/* Apply borderStyle object */}
      <img src={book.img} className="card-img-top" alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">${book.price}</p>
        <p className="card-text"><span className="text-muted">Category: {book.category}</span></p>
      </div>
      {selected && <CommentArea comments={book.comments} />}
    </div>
  );
}

export default BookCard