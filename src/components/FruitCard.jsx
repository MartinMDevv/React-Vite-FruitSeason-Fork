import { Card } from 'react-bootstrap';
import './FruitCard.css';

const FruitCard = ({ fruit = {} }) => {
  const { name = '', image = '', description = '' } = fruit;

  return (
    <Card className="h-100 shadow-sm">
      {image && (
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className="fruit-card-img"
        />
      )}
      <Card.Body className="p-2 text-center">
        <Card.Text className="mb-0 fw-medium">
          {name}
        </Card.Text>
        {description && <Card.Text className="mt-1">{description}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default FruitCard;