import React, { createContext, useReducer } from "react";
import { actions } from './Actions';
import { reducer } from './Reducer';
import { restaurants } from '../data';

/**
 * context which needs to be imported into all children components
 */
export const RestaurantContext = createContext();

/**
 * set up initial (default) values of all state variables
 */
export const initialState = {
    restaurants,
    rating: 3,
    price: 1,
    selectedRestaurant: {},
    editMode: false,
};

/**
 * the Provider allows state values and actions to update state values
 * to be passed down to all children generations
 * @export
 * @param {*} { children }
 * @return {*}
 */
export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        restaurants: state.restaurants,
        rating: state.rating,
        price: state.price,
        selectedRestaurant: state.selectedRestaurant,
        editMode: state.editMode,
        setRestaurants: value => {
            dispatch({ type: actions.SET_RESTAURANTS, value });
        },
        setRating: value => {
            dispatch({ type: actions.SET_RATING, value });
        },
        setPrice: value => {
            dispatch({ type: actions.SET_PRICE, value });
        },
        setSelectedRestaurant: value => {
            dispatch({ type: actions.SET_SELECTED_RESTAURANT, value });
        },
        setEditMode: value => {
            dispatch({ type: actions.SET_EDIT_MODE, value });
        },
        reset: () => {
            dispatch({ type: actions.RESET });
        },
    }

    return (
        <RestaurantContext.Provider value={value}>
            {children}
        </RestaurantContext.Provider>
    );
}