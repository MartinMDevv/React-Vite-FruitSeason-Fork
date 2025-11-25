const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

// Helper function to get auth header
const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// Helper function to handle API responses
const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
        throw new Error(error.message || `Error: ${response.status}`);
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
            const response = await fetch(`${API_BASE_URL}/cart`, {
                headers: getAuthHeader()
            });
            return handleResponse(response);
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
    }
};

export default api;
