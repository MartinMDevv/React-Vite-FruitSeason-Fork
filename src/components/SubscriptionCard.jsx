import { Card, Button, ListGroup } from 'react-bootstrap';

const SubscriptionCard = ({ plan, onSubscribe, className = "", disabled = false }) => {
  return (
    <Card className={`shadow-sm text-center ${className}`}>
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="text-success">{plan.title}</Card.Title>
        <ListGroup variant="flush" className="my-4">
          {plan.features.map((feature, index) => (
            <ListGroup.Item key={index} className="border-0 px-0">
              ✅ {feature}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <h4 className="card-price mb-4">{plan.price}</h4>
        <Button variant="primary" className="mt-auto" onClick={onSubscribe} disabled={disabled}>
          Suscribirse
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SubscriptionCard;