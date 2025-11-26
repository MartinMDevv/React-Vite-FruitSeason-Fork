import { Row, Col } from 'react-bootstrap';
import SubscriptionCard from './SubscriptionCard';
import { useCart } from '../context/CartContext';
import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import FruitSelector from './FruitSelector';
import { seasonsData } from '../data/products';
import { planToBackend, fruitToBackend } from '../utils/mappings';
import api from '../services/api';

const subscriptionPlans = [
  { id: 'basico', title: 'Plan Básico', price: '$12.990/mes', features: ['Caja pequeña (1-2 personas)', '3-4 variedades de frutas', '4 kg aprox.'], maxFruits: 4 },
  { id: 'familiar', title: 'Plan Familiar', price: '$19.990/mes', features: ['Caja mediana (3-4 personas)', '6-7 variedades de frutas', '8 kg aprox.'], maxFruits: 8 },
  { id: 'premium', title: 'Plan Premium', price: '$28.990/mes', features: ['Caja grande (+4 personas)', '10-12 variedades premium', '12 kg aprox.'], maxFruits: 12 }
];

const Subscriptions = ({ showFruitSelector = false }) => {
  const { cart, selectPlan, addFruit, removeFruit, fetchCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // State for selected fruits for each plan (solo para UI local)
  const [localSelections, setLocalSelections] = useState({
    basico: [],
    familiar: [],
    premium: []
  });

  // Flatten all products from seasonsData
  const allProducts = useMemo(() => {
    const products = [];
    const seen = new Set();
    seasonsData.forEach(season => {
      season.products.forEach(product => {
        if (!seen.has(product.name)) {
          seen.add(product.name);
          products.push(product);
        }
      });
    });
    return products;
  }, []);

  // Sincronizar selecciones locales con el carrito del backend
  useEffect(() => {
    if (cart?.selectedFruits) {
      const planId = cart.selectedPlan?.toLowerCase().replace('_', '') || 'basico';
      const fruitNames = cart.selectedFruits.map(f => f.name);
      setLocalSelections(prev => ({
        ...prev,
        [planId]: fruitNames
      }));
    }
  }, [cart]);

  const handleFruitToggle = (planId, fruitName) => {
    const currentSelection = localSelections[planId];
    const max = subscriptionPlans.find(p => p.id === planId).maxFruits;

    if (currentSelection.includes(fruitName)) {
      // Remove locally
      setLocalSelections(prev => ({
        ...prev,
        [planId]: prev[planId].filter(name => name !== fruitName)
      }));
    } else {
      // Add locally if limit not reached
      if (currentSelection.length < max) {
        setLocalSelections(prev => ({
          ...prev,
          [planId]: [...prev[planId], fruitName]
        }));
      } else {
        toast.warning(`Máximo ${max} frutas para este plan`);
      }
    }
  };

  const handleSubscribe = async (plan) => {
    if (!isAuthenticated) {
      toast.info('Inicia sesión para suscribirte');
      navigate('/login');
      return;
    }

    if (!showFruitSelector) {
      toast.info('Por favor, personaliza tu caja seleccionando tus frutas.');
      navigate('/suscripciones');
      return;
    }

    const currentSelection = localSelections[plan.id];

    if (currentSelection.length < plan.maxFruits) {
      toast.warning(`Debes seleccionar ${plan.maxFruits} frutas para el ${plan.title}.`);
      return;
    }

    setIsLoading(true);

    try {
      // 1. Select Plan (clears previous cart)
      const backendPlan = planToBackend(plan.id);
      const planResult = await selectPlan(backendPlan);

      if (!planResult.success) {
        throw new Error(planResult.error || 'Error al seleccionar el plan');
      }

      // 2. Add all selected fruits
      // We use a loop to add them one by one (or could be batch if API supported it)
      for (const fruitName of currentSelection) {
        const fruitResult = await addFruit(fruitName);
        if (!fruitResult.success) {
          // If one fails, we should probably stop or warn
          console.error(`Error adding ${fruitName}:`, fruitResult.error);
        }
      }

      // 3. Refresh cart and notify
      await fetchCart();
      toast.success(`¡${plan.title} listo para el pago!`);
      navigate(`/PagarPlanes?plan=${plan.id}`);

    } catch (error) {
      toast.error(error.message || 'Error al procesar la suscripción');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="suscripciones" className="text-center container my-5">
      <h2 className="display-5 fw-bold text-success mb-4">SUSCRIPCIONES</h2>
      <Row>
        {subscriptionPlans.map((plan) => (
          <Col md={6} lg={4} className="mb-4 d-flex flex-column" key={plan.id}>
            <div className="d-flex flex-column h-100">
              <SubscriptionCard
                plan={plan}
                onSubscribe={() => handleSubscribe(plan)}
                className="h-100"
                disabled={isLoading}
              />
              {showFruitSelector && (
                <FruitSelector
                  selectedFruits={localSelections[plan.id]}
                  onToggle={(fruitName) => handleFruitToggle(plan.id, fruitName)}
                  maxSelection={plan.maxFruits}
                  availableFruits={allProducts}
                  disabled={isLoading}
                />
              )}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Subscriptions;
