import { Button, Row, Col } from 'react-bootstrap';

const FruitSelector = ({ selectedFruits, onToggle, maxSelection = 4, availableFruits = [], disabled = false }) => {
    const isSelected = (id) => selectedFruits.includes(id);

    return (
        <div className="mt-3 p-3 border rounded bg-light">
            <h6 className="text-success mb-2">Elige tus frutas (Máx. {maxSelection})</h6>
            <p className="small text-muted mb-3">
                Seleccionadas: {selectedFruits.length}/{maxSelection}
            </p>
            <Row className="g-2 justify-content-center">
                {availableFruits.map((fruit) => (
                    <Col xs={4} sm={3} key={fruit.name}>
                        <Button
                            variant={isSelected(fruit.name) ? "success" : "outline-secondary"}
                            size="sm"
                            className="w-100 d-flex flex-column align-items-center justify-content-center p-1"
                            onClick={() => onToggle(fruit.name)}
                            disabled={disabled || (!isSelected(fruit.name) && selectedFruits.length >= maxSelection)}
                            style={{ minHeight: '70px', borderRadius: '4px' }}
                        >
                            {fruit.image ? (
                                <img
                                    src={fruit.image}
                                    alt={fruit.name}
                                    style={{ width: '35px', height: '35px', objectFit: 'cover', borderRadius: '5px', marginBottom: '2px' }}
                                />
                            ) : (
                                <span className="fs-5">{fruit.icon || '🍎'}</span>
                            )}
                            <span className="text-nowrap" style={{ fontSize: '0.65rem', lineHeight: '1' }}>{fruit.name}</span>
                        </Button>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default FruitSelector;
