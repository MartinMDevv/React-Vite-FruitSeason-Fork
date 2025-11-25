import { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';
import api from '../services/api';
import { fruitToBackend, fruitToFrontend, planToBackend } from '../utils/mappings';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch cart from backend when authenticated
    useEffect(() => {
        if (isAuthenticated) {
            fetchCart();
        } else {
            setCart(null);
        }
    }, [isAuthenticated]);

    const fetchCart = async () => {
        if (!isAuthenticated) return;

        try {
            setLoading(true);
            const cartData = await api.cart.get();
            setCart(cartData);
        } catch (error) {
            console.error('Error fetching cart:', error);
        } finally {
            setLoading(false);
        }
    };

    const selectPlan = async (planId) => {
        try {
            const backendPlan = planToBackend(planId);
            await api.cart.selectPlan(backendPlan);
            await fetchCart();
            return { success: true };
        } catch (error) {
            console.error('Error selecting plan:', error);
            return { success: false, error: error.message };
        }
    };

    const addFruit = async (fruitName) => {
        try {
            const backendFruit = fruitToBackend(fruitName);
            await api.cart.addFruit(backendFruit);
            await fetchCart();
            return { success: true };
        } catch (error) {
            console.error('Error adding fruit:', error);
            return { success: false, error: error.message };
        }
    };

    const removeFruit = async (fruitName) => {
        try {
            const backendFruit = fruitToBackend(fruitName);
            await api.cart.removeFruit(backendFruit);
            await fetchCart();
            return { success: true };
        } catch (error) {
            console.error('Error removing fruit:', error);
            return { success: false, error: error.message };
        }
    };

    const clearCart = async () => {
        try {
            await api.cart.clear();
            await fetchCart();
            return { success: true };
        } catch (error) {
            console.error('Error clearing cart:', error);
            return { success: false, error: error.message };
        }
    };

    // Convert backend cart format to frontend format
    const getFormattedCart = () => {
        if (!cart || !cart.selectedPlan) return [];

        return [{
            id: cart.selectedPlan.toLowerCase().replace('_', ''),
            title: cart.selectedPlan === 'BASIC' ? 'Plan Básico' :
                cart.selectedPlan === 'FAMILY' ? 'Plan Familiar' : 'Plan Premium',
            price: cart.selectedPlan === 'BASIC' ? '$12.990/mes' :
                cart.selectedPlan === 'FAMILY' ? '$19.990/mes' : '$28.990/mes',
            selectedFruits: cart.selectedFruits?.map(f => fruitToFrontend(f.type)) || [],
            cartId: Date.now()
        }];
    };

    const value = {
        cart,
        loading,
        formattedCart: getFormattedCart(),
        fetchCart,
        selectPlan,
        addFruit,
        removeFruit,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
