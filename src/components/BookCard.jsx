import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BookCard({ book, onClick, isSelected }) {
  const [comments, setComments] = useState(book.comments || []);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(1);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const updatedComments = [...comments, { comment: newComment, rating: rating }];
    setComments(updatedComments);
    setNewComment("");
    setRating(1);
  };

  const cardStyle = {
    width: '18rem',
    margin: '10px',
    border: isSelected ? '3px solid blue' : ''
  };

  return (
    <Card style={cardStyle} onClick={() => onClick(book)}>
      <Image variant="top" src={book.img} alt={book.title} fluid />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>${book.price}</Card.Text>
        <Card.Text className="text-muted">Category: {book.category}</Card.Text>
      </Card.Body>
      {isSelected && (
        <>
          <ListGroup variant="flush">
            {comments.map((c, index) => (
              <ListGroup.Item key={index}>Rating: {c.rating} - {c.comment}</ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Add Comment</Form.Label>
                <Form.Control as="textarea" rows={3} value={newComment} onChange={(e) => setNewComment(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Select value={rating} onChange={(e) => setRating(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" onClick={handleAddComment}>Add Comment</Button>
            </Form>
          </Card.Body>
        </>
      )}
    </Card>
  );
}

export default BookCard;
