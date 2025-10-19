// src/components/SubscriptionCard.jsx
import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SubscriptionCard = ({ plan }) => {
  return (
    <Card className="h-100 shadow-sm text-center">
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
        <Button as={Link} to={`/PagarPlanes?plan=${plan.id}`} variant="primary" className="mt-auto">
          Suscribirse
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SubscriptionCard;