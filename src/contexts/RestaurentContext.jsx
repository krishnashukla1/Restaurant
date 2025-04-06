// contexts/RestaurantContext.js

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// ✅ Correct context declaration
export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get("http://localhost:5000/restaurants");
                setRestaurants(response.data);
            } catch (error) {
                console.error("Error fetching restaurants:", error.message);
            }
        };

        fetchRestaurants();
    }, []);

    const handleAddItems = (dish) => {
        const existingItemIndex = cartItems.findIndex((item) => item._id === dish._id);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...dish, quantity: 1 }]);
        }
        setTotalPrice((prev) => prev + dish.price);
    };

    const handleRemoveItems = (dish) => {
        const existingItemIndex = cartItems.findIndex((item) => item._id === dish._id);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            if (updatedCartItems[existingItemIndex].quantity > 1) {
                updatedCartItems[existingItemIndex].quantity -= 1;
            } else {
                updatedCartItems.splice(existingItemIndex, 1);
            }
            setCartItems(updatedCartItems);
            setTotalPrice((prev) => prev - dish.price);
        }
    };

    return (
        <RestaurantContext.Provider
            value={{
                restaurants,
                selectedRestaurant,
                setSelectedRestaurant,
                cartItems,
                handleAddItems,
                handleRemoveItems,
                totalPrice,
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};
