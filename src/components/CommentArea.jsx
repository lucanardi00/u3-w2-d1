function CommentArea({ comments }) {
    if (!comments || comments.length === 0) {
      return null;
    }
  
    return (
      <div className="comment-area">
        <h4>Comments</h4>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              {comment.text} - {comment.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CommentArea;