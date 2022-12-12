import React, { createContext, useReducer } from "react";
import { actions } from './Actions';
import { reducer } from './Reducer';
import { restaurants, defaultRating, defaultPrice } from '../data';

/**
 * context which needs to be imported into all children components
 */
export const RestaurantContext = createContext();

/**
 * set up initial (default) values of all state variables
 */
export const initialState = {
    restaurants,
    rating: defaultRating,
    price: defaultPrice,
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
        setRestaurants: payload => {
            dispatch({ type: actions.SET_RESTAURANTS, payload });
        },
        setRating: payload => {
            dispatch({ type: actions.SET_RATING, payload });
        },
        setPrice: payload => {
            dispatch({ type: actions.SET_PRICE, payload });
        },
        setSelectedRestaurant: payload => {
            dispatch({ type: actions.SET_SELECTED_RESTAURANT, payload });
        },
        setEditMode: payload => {
            dispatch({ type: actions.SET_EDIT_MODE, payload });
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