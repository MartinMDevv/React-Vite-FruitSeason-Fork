import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, ListGroup, Spinner } from 'react-bootstrap';
import Alert from '../components/Alert';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import api from '../services/api';

const planes = {
  basic: { nombre: 'Plan Básico', precio: '$12.990/mes', items: ['Caja pequeña (1-2 personas)', '3-4 variedades de frutas', '4 kg aprox.'] },
  familiar: { nombre: 'Plan Familiar', precio: '$19.990/mes', items: ['Caja mediana (3-4 personas)', '6-7 variedades de frutas', '8 kg aprox.'] },
  premium: { nombre: 'Plan Premium', precio: '$28.990/mes', items: ['Caja grande (+4 personas)', '10-12 variedades premium', '12 kg aprox.'] }
};

const PagarPlanesPage = () => {
  const [searchParams] = useSearchParams();
  const { cart, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const planId = searchParams.get('plan');

    // Validate cart has data
    if (!cart || !cart.selectedPlan) {
      toast.error('Debes agregar un plan al carrito antes de pagar.');
      navigate('/suscripciones');
      return;
    }

    // Validate plan matches URL
    const cartPlanId = cart.selectedPlan.toLowerCase();
    const urlPlanId = planId.toLowerCase();

    if (cartPlanId !== urlPlanId) {
      toast.error('El plan del carrito no coincide.');
      navigate('/suscripciones');
      return;
    }

    if (!cart.selectedFruits || cart.selectedFruits.length === 0) {
      toast.error('El plan seleccionado no tiene frutas. Por favor configúralo nuevamente.');
      navigate('/suscripciones');
      return;
    }

    // Check if complete
    if (!cart.isComplete) {
      toast.error('Debes completar la selección de frutas antes de pagar.');
      navigate('/suscripciones');
      return;
    }

    // Set plan details
    let planDetails = planes[urlPlanId];
    if (planDetails) {
      planDetails = {
        ...planDetails,
        selectedFruits: cart.selectedFruits.map(f => f.name)
      };
      setSelectedPlan(planDetails);
    } else {
      toast.error('Plan no válido.');
      navigate('/suscripciones');
    }

    setIsLoading(false);
  }, [searchParams, cart, isAuthenticated, navigate]);

  // Manejador para el nombre en la tarjeta (solo letras y espacios)
  const handleCardNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) {
      setCardName(value);
    }
  };

  // Manejador para el número de tarjeta (solo números, max 19 dígitos)
  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 19) {
      setCardNumber(value);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!cardName.trim() || !cardNumber.trim()) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    if (cardNumber.length < 13) {
      toast.error('El número de tarjeta debe tener al menos 13 dígitos');
      return;
    }

    setIsProcessing(true);

    try {
      const paymentData = {
        cardHolderName: cardName.trim(),
        cardNumber: cardNumber.trim()
      };

      const response = await api.orders.checkout(paymentData);

      // Success - Limpiar carrito después de pago exitoso
      await clearCart();

      setPaymentSuccess(true);
      toast.success('¡Pago procesado exitosamente!');
    } catch (error) {
      toast.error(error.message || 'Error al procesar el pago. Intenta nuevamente.');
    } finally {
      setIsProcessing(false);
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
                <p>Muchas gracias por tu compra. Tu pedido del <strong>{selectedPlan?.nombre}</strong> ya está siendo procesado.</p>
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

          {selectedPlan ? (
            <Card className="shadow-sm">
              <Card.Header as="h5">Resumen de tu pedido</Card.Header>
              <Card.Body>
                <h3 className="text-success">{selectedPlan.nombre}</h3>
                <ListGroup variant="flush">
                  {selectedPlan.items.map(item => <ListGroup.Item key={item} className="px-0 border-0">{item}</ListGroup.Item>)}
                  {selectedPlan.selectedFruits && selectedPlan.selectedFruits.length > 0 && (
                    <ListGroup.Item className="px-0 border-0">
                      <strong className="text-success">Frutas elegidas:</strong> {selectedPlan.selectedFruits.join(', ')}
                    </ListGroup.Item>
                  )}
                </ListGroup>
                <h4 className="text-end mt-3">{selectedPlan.precio}</h4>
                <hr />
                <h5 className="card-title mt-4">Ingresa tus datos de pago</h5>
                <Form onSubmit={handlePayment}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="cardName">Nombre en la tarjeta</Form.Label>
                    <Form.Control
                      id="cardName"
                      name="cardName"
                      type="text"
                      placeholder="Jose Miguel"
                      value={cardName}
                      onChange={handleCardNameChange}
                      required
                      disabled={isProcessing}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="cardNumber">Número de la tarjeta</Form.Label>
                    <Form.Control
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      placeholder="4111111111111111"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      required
                      disabled={isProcessing}
                      maxLength={19}
                    />
                    <Form.Text className="text-muted">
                      Ingresa entre 13 y 19 dígitos sin espacios
                    </Form.Text>
                  </Form.Group>
                  <Button
                    type="submit"
                    className="w-100"
                    variant="primary"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Procesando...' : 'Pagar ahora'}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          ) : (
            <Alert type="danger" message="No se encontró el plan seleccionado." />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PagarPlanesPage;