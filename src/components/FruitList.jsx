// src/components/FruitList.jsx

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FruitCard from './FruitCard';

const FruitList = ({ season }) => {
  return (
    <div className="mb-5">
      <h2 className="text-start fw-bold text-success border-start border-5 border-warning ps-3 mb-4">
        {season.icon} {season.title}
      </h2>
      <Row xs={2} sm={3} md={4} lg={5} className="g-4">
        {season.products.map((fruit) => (
          <Col key={fruit.name}>
            <FruitCard fruit={fruit} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FruitList;