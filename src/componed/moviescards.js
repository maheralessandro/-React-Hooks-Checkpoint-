import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({movie}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} alt = "film" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
          <br/>
          {movie.rating}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

  
  export default Cards;
  