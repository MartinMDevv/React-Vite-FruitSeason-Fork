// src/components/Subscriptions.jsx
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SubscriptionCard from './SubscriptionCard';

const subscriptionPlans = [
  { id: 'basico', title: 'Plan Básico', price: '$12.990/mes', features: ['Caja pequeña (1-2 personas)', '3-4 variedades de frutas', '4 kg aprox.'] },
  { id: 'familiar', title: 'Plan Familiar', price: '$19.990/mes', features: ['Caja mediana (3-4 personas)', '6-7 variedades de frutas', '8 kg aprox.'] },
  { id: 'premium', title: 'Plan Premium', price: '$28.990/mes', features: ['Caja grande (+4 personas)', '10-12 variedades premium', '12 kg aprox.'] }
];

const Subscriptions = () => {
  return (
    <section id="suscripciones" className="text-center container my-5">
      <h2 className="display-5 fw-bold text-success mb-4">SUSCRIPCIONES</h2>
      <Row>
        {subscriptionPlans.map((plan) => (
          <Col md={6} lg={4} className="mb-4" key={plan.id}>
            <SubscriptionCard plan={plan} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Subscriptions;
