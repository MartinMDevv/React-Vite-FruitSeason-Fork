import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, ListGroup, Spinner } from 'react-bootstrap';
import Alert from '../components/Alert';

const planes = {
    basico: { nombre: "Plan Básico", precio: "$12.990/mes", items: ["Caja pequeña (1-2 personas)", "3-4 variedades de frutas", "4 kg aprox."] },
    familiar: { nombre: "Plan Familiar", precio: "$19.990/mes", items: ["Caja mediana (3-4 personas)", "6-7 variedades de frutas", "8 kg aprox."] },
    premium: { nombre: "Plan Premium", precio: "$28.990/mes", items: ["Caja grande (+4 personas)", "10-12 variedades premium", "12 kg aprox."] }
};

const PagarPlanesPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    const planId = searchParams.get('plan');
    const planDetails = planes[planId];
    if (planDetails) {
      setSelectedPlan(planDetails);
    }
    setIsLoading(false);
  }, [searchParams]);

  // Manejador para el nombre en la tarjeta (solo letras y espacios)
  const handleCardNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setCardName(value);
    }
  };

  // Manejador para el número de tarjeta (solo números)
  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    // La expresión regular /^\d*$/ asegura que solo se ingresen dígitos.
    if (/^\d*$/.test(value)) {
      setCardNumber(value);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (cardName.trim() && cardNumber.trim()) {
      setPaymentSuccess(true);
    }
  };

  if (isLoading) {
    return <Container className="text-center my-5"><Spinner animation="border" variant="success" /></Container>;
  }

  
  if (paymentSuccess) {
    return (
      <Container className="my-5 pt-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Alert type="success" message={(
              <div>
                <h4>¡Todo fue correcto!</h4>
                <p>Muchas gracias por tu compra. Tu pedido del <strong>{selectedPlan.nombre}</strong> ya está siendo procesado.</p>
                <hr />
                <Link to="/" className="btn btn-outline-success mb-0">Volver al Inicio</Link>
              </div>
            )} />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="my-5 pt-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="display-4 fw-bold text-success text-center">Proceso de Pago</h1>
          <p className="lead text-center mb-4">Estás a un paso de recibir las mejores frutas y verduras.</p>

          <Card className="shadow-sm">
            <Card.Header as="h5">Resumen de tu pedido</Card.Header>
            <Card.Body>
              <h3 className="text-success">{selectedPlan.nombre}</h3>
              <ListGroup variant="flush">
                {selectedPlan.items.map(item => <ListGroup.Item key={item} className="px-0 border-0">{item}</ListGroup.Item>)}
              </ListGroup>
              <h4 className="text-end mt-3">{selectedPlan.precio}</h4>
              <hr />
              <h5 className="card-title mt-4">Ingresa tus datos de pago</h5>
              <Form onSubmit={handlePayment}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="cardName">Nombre en la tarjeta</Form.Label>
                  {/* Se usa el nuevo manejador handleCardNameChange */}
                  <Form.Control id="cardName" name="cardName" type="text" placeholder="Jose Miguel" value={cardName} onChange={handleCardNameChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="cardNumber">Número de la tarjeta</Form.Label>
                  {/* Se usa el nuevo manejador handleCardNumberChange */}
                  <Form.Control id="cardNumber" name="cardNumber" type="text" placeholder="1234 1234 1234 1234" value={cardNumber} onChange={handleCardNumberChange} required />
                </Form.Group>
                <Button type="submit" className="w-100" variant="primary">Pagar ahora</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PagarPlanesPage;