import { Offcanvas, Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartOffcanvas = ({ show, handleClose }) => {
    const { formattedCart, clearCart } = useCart();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (!isAuthenticated) {
            toast.error('Debes iniciar sesión para pagar tu suscripción.');
            navigate('/login');
            handleClose();
            return;
        }

        if (formattedCart.length > 0) {
            const plan = formattedCart[0];
            navigate(`/PagarPlanes?plan=${plan.id}`);
            handleClose();
        } else {
            toast.warning('Tu carrito está vacío. Selecciona un plan primero.');
            navigate('/suscripciones');
            handleClose();
        }
    };

    const handleRemove = async () => {
        const result = await clearCart();
        if (result.success) {
            toast.success('Carrito limpiado');
        } else {
            toast.error('Error al limpiar el carrito');
        }
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Tu Carrito 🛒</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {formattedCart.length === 0 ? (
                    <p className="text-center text-muted">Tu carrito está vacío.</p>
                ) : (
                    <>
                        <ListGroup variant="flush">
                            {formattedCart.map((item) => (
                                <ListGroup.Item key={item.cartId} className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="mb-0">{item.title}</h6>
                                        <small className="text-muted">{item.price}</small>
                                        {item.selectedFruits && item.selectedFruits.length > 0 && (
                                            <div className="mt-1">
                                                <small className="text-success d-block">Frutas seleccionadas:</small>
                                                <small className="text-muted">
                                                    {item.selectedFruits.map(f => f.charAt(0).toUpperCase() + f.slice(1)).join(', ')}
                                                </small>
                                            </div>
                                        )}
                                    </div>
                                    <Button variant="outline-danger" size="sm" onClick={handleRemove}>
                                        🗑️
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <div className="mt-4 d-grid gap-2">
                            <Button variant="success" onClick={handleCheckout}>
                                Ir a Pagar
                            </Button>
                        </div>
                    </>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartOffcanvas;
