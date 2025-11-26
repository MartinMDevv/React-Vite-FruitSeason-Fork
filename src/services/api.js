const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

// Helper function to get auth header
const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// Helper function to handle API responses
const handleResponse = async (response) => {
    if (!response.ok) {
        let error;
        try {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                error = await response.json();
            } else {
                error = { message: response.statusText || 'Error de conexión con el servidor' };
            }
        } catch (e) {
            error = { message: 'Error de conexión con el servidor' };
        }
        throw new Error(error.message || `Error: ${response.status}`);
    }

    // Algunos endpoints pueden retornar 204 No Content
    const contentType = response.headers.get('content-type');
    if (response.status === 204 || !contentType || !contentType.includes('application/json')) {
        return null;
    }

    return response.json();
};

const api = {
    // Authentication endpoints
    auth: {
        register: async (userData) => {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            return handleResponse(response);
        },

        login: async (credentials) => {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            return handleResponse(response);
        }
    },

    // Cart endpoints
    cart: {
        get: async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/cart`, {
                    headers: getAuthHeader()
                });

                // Si el carrito no existe (404) o hay error, retornar carrito vacío
                if (!response.ok) {
                    console.warn('Carrito no encontrado o error, retornando carrito vacío');
                    return {
                        selectedPlan: null,
                        selectedFruits: [],
                        isComplete: false,
                        selectedFruitsCount: 0,
                        requiredFruits: 0
                    };
                }

                return handleResponse(response);
            } catch (error) {
                console.error('Error al obtener el carrito:', error);
                // Retornar carrito vacío en caso de error
                return {
                    selectedPlan: null,
                    selectedFruits: [],
                    isComplete: false,
                    selectedFruitsCount: 0,
                    requiredFruits: 0
                };
            }
        },

        selectPlan: async (plan) => {
            const response = await fetch(`${API_BASE_URL}/cart/select-plan`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...getAuthHeader()
                },
                body: JSON.stringify({ plan })
            });
            return handleResponse(response);
        },

        addFruit: async (fruitType) => {
            const response = await fetch(`${API_BASE_URL}/cart/add-fruit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...getAuthHeader()
                },
                body: JSON.stringify({ fruitType })
            });
            return handleResponse(response);
        },

        removeFruit: async (fruitType) => {
            const response = await fetch(`${API_BASE_URL}/cart/remove-fruit`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    ...getAuthHeader()
                },
                body: JSON.stringify({ fruitType })
            });
            return handleResponse(response);
        },

        clear: async () => {
            const response = await fetch(`${API_BASE_URL}/cart/clear`, {
                method: 'DELETE',
                headers: getAuthHeader()
            });
            return handleResponse(response);
        },

        getAvailableFruits: async () => {
            const response = await fetch(`${API_BASE_URL}/cart/available-fruits`, {
                headers: getAuthHeader()
            });
            return handleResponse(response);
        }
    },

    // Orders endpoints
    orders: {
        checkout: async (paymentData) => {
            const response = await fetch(`${API_BASE_URL}/orders/checkout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...getAuthHeader()
                },
                body: JSON.stringify(paymentData)
            });
            return handleResponse(response);
        },

        getAll: async () => {
            const response = await fetch(`${API_BASE_URL}/orders`, {
                headers: getAuthHeader()
            });
            return handleResponse(response);
        }
    },

    // Comments endpoints
    comments: {
        create: async (commentData) => {
            try {
                const response = await fetch(`${API_BASE_URL}/comments`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(commentData)
                });
                return handleResponse(response);
            } catch (error) {
                console.error('Error en comments.create:', error);
                throw error;
            }
        },

        getAll: async () => {
            const response = await fetch(`${API_BASE_URL}/comments`);
            return handleResponse(response);
        },

        getRecent: async (limit = 10) => {
            const response = await fetch(`${API_BASE_URL}/comments/recent?limit=${limit}`);
            return handleResponse(response);
        }
    }
};

export default api;