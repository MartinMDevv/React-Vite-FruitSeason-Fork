// src/components/FruitCard.jsx

import React from 'react';
import { Card } from 'react-bootstrap';
import './FruitCard.css'; // No olvides crear este archivo

const FruitCard = ({ fruit }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={fruit.image} 
        alt={fruit.name} 
        className="fruit-card-img"
      />
      <Card.Body className="p-2 text-center">
        <Card.Text className="mb-0 fw-medium">
          {fruit.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FruitCard;