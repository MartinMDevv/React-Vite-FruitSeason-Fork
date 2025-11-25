// Mapeo de nombres de frutas del frontend a FruitType del backend
export const FRUIT_TYPE_MAP = {
    'Alcachofa': 'ALCACHOFA',
    'Esparrago': 'ESPARRAGO',
    'Espárrago': 'ESPARRAGO',
    'Frutilla': 'FRUTILLA',
    'Lechuga': 'LECHUGA',
    'Níspero': 'NISPERO',
    'Nispero': 'NISPERO',
    'Durazno': 'DURAZNO',
    'Melón': 'MELON',
    'Melon': 'MELON',
    'Sandía': 'SANDIA',
    'Sandia': 'SANDIA',
    'Tomate': 'TOMATE',
    'Zapallo Italiano': 'ZAPALLO_ITALIANO',
    'Zapallo italiano': 'ZAPALLO_ITALIANO',
    'Brócoli': 'BROCOLI',
    'Brocoli': 'BROCOLI',
    'Manzana': 'MANZANA',
    'Pera': 'PERA',
    'Uvas': 'UVAS',
    'Zapallo': 'ZAPALLO',
    'Coliflor': 'COLIFLOR',
    'Kiwi': 'KIWI',
    'Mandarina': 'MANDARINA',
    'Naranja': 'NARANJA',
    'Repollo': 'REPOLLO'
};

// Mapeo inverso de FruitType a nombre para mostrar
export const FRUIT_NAME_MAP = {
    'ALCACHOFA': 'Alcachofa',
    'ESPARRAGO': 'Espárrago',
    'FRUTILLA': 'Frutilla',
    'LECHUGA': 'Lechuga',
    'NISPERO': 'Níspero',
    'DURAZNO': 'Durazno',
    'MELON': 'Melón',
    'SANDIA': 'Sandía',
    'TOMATE': 'Tomate',
    'ZAPALLO_ITALIANO': 'Zapallo italiano',
    'BROCOLI': 'Brócoli',
    'MANZANA': 'Manzana',
    'PERA': 'Pera',
    'UVAS': 'Uvas',
    'ZAPALLO': 'Zapallo',
    'COLIFLOR': 'Coliflor',
    'KIWI': 'Kiwi',
    'MANDARINA': 'Mandarina',
    'NARANJA': 'Naranja',
    'REPOLLO': 'Repollo'
};

// Mapeo de plan del frontend al backend
export const PLAN_MAP = {
    'basico': 'BASIC',
    'familiar': 'FAMILY',
    'premium': 'PREMIUM'
};

// Mapeo inverso de plan del backend al frontend
export const PLAN_REVERSE_MAP = {
    'BASIC': 'basico',
    'FAMILY': 'familiar',
    'PREMIUM': 'premium'
};

// Configuración de planes
export const PLAN_CONFIG = {
    'BASIC': {
        id: 'basico',
        title: 'Plan Básico',
        price: '$12.990/mes',
        features: ['Caja pequeña (1-2 personas)', '3-4 variedades de frutas', '4 kg aprox.'],
        maxFruits: 4
    },
    'FAMILY': {
        id: 'familiar',
        title: 'Plan Familiar',
        price: '$19.990/mes',
        features: ['Caja mediana (3-4 personas)', '6-7 variedades de frutas', '8 kg aprox.'],
        maxFruits: 8
    },
    'PREMIUM': {
        id: 'premium',
        title: 'Plan Premium',
        price: '$28.990/mes',
        features: ['Caja grande (+4 personas)', '10-12 variedades premium', '12 kg aprox.'],
        maxFruits: 12
    }
};

// Helper functions
export const fruitToBackend = (fruitName) => {
    return FRUIT_TYPE_MAP[fruitName] || fruitName.toUpperCase().replace(/ /g, '_');
};

export const fruitToFrontend = (fruitType) => {
    return FRUIT_NAME_MAP[fruitType] || fruitType;
};

export const planToBackend = (planId) => {
    return PLAN_MAP[planId] || planId.toUpperCase();
};

export const planToFrontend = (planName) => {
    return PLAN_REVERSE_MAP[planName] || planName.toLowerCase();
};
