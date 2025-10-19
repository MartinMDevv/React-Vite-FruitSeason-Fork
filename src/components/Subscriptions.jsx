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
/*import React from 'react'

export default function Subscriptions() {
  return (
    <section id="suscripciones" className="text-center">
      <h2 className="display-5 fw-bold text-success mb-4">SUSCRIPCIONES</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-success">Plan Básico</h3>
              <ul className="list-unstyled my-4">
                <li>✅ Caja pequeña (1-2 personas)</li>
                <li>✅ 3-4 variedades de frutas</li>
                <li>✅ 4 kg aprox.</li>
              </ul>
              <h4 className="card-price mb-4">$12.990/mes</h4>
              <a href="/pagar_planes?plan=basico" className="btn btn-primary mt-auto">Suscribirse</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-success">Plan Familiar</h3>
              <ul className="list-unstyled my-4">
                <li>✅ Caja mediana (3-4 personas)</li>
                <li>✅ 6-7 variedades de frutas</li>
                <li>✅ 8 kg aprox.</li>
              </ul>
              <h4 className="card-price mb-4">$19.990/mes</h4>
              <a href="/pagar_planes?plan=familiar" className="btn btn-primary mt-auto">Suscribirse</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-success">Plan Premium</h3>
              <ul className="list-unstyled my-4">
                <li>✅ Caja grande (+4 personas)</li>
                <li>✅ 10-12 variedades premium</li>
                <li>✅ 12 kg aprox.</li>
              </ul>
              <h4 className="card-price mb-4">$28.990/mes</h4>
              <a href="/pagar_planes?plan=premium" className="btn btn-primary mt-auto">Suscribirse</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}*/
