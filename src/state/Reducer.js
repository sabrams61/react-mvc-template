
import { actions } from './Actions';
import { initialState } from './Provider';

/**
 * update state values based on action type
 * action.value is the new value
 * @export
 * @param {*} state
 * @param {*} action
 * @return {*}
 */
export function reducer(state, action) {
    console.log('reducer action', action);
    switch (action.type) {
        case actions.SET_RESTAURANTS:
            return { ...state, restaurants: action.value };
        case actions.SET_RATING:
            return { ...state, rating: action.value, selectedRestaurant: {} };
        case actions.SET_PRICE:
            return { ...state, price: action.value, selectedRestaurant: {} };
        case actions.SET_SELECTED_RESTAURANT:
            return { ...state, selectedRestaurant: action.value };
        case actions.SET_EDIT_MODE:
            return { ...state, editMode: action.value };
        case actions.RESET:
            return initialState;
        default:
            return state;
    }
}