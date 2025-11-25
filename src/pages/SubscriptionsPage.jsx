import Subscriptions from '../components/Subscriptions';
import { Container } from 'react-bootstrap';

export default function SubscriptionsPage() {
    return (
        <Container className="my-5 pt-5 mt-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-success">Nuestras Suscripciones</h1>
                <p className="lead text-muted">Elige el plan que mejor se adapte a ti y disfruta de frutas y verduras frescas cada semana.</p>
            </div>
            <Subscriptions showFruitSelector={true} />
        </Container>
    );
}
