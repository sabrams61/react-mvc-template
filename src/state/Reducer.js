
import { actions } from './Actions'
import { initialState } from './Provider'

/**
 * update state values based on action type
 * action.payload is the new value
 * @export
 * @param {*} state
 * @param {*} action
 * @return {*}
 */
export function reducer (state, action) {
    console.log('reducer action', action)
    switch (action.type) {
        case actions.SET_RESTAURANTS:
            return { ...state, restaurants: action.payload }
        case actions.SET_RATING:
            return { ...state, rating: action.payload, selectedRestaurant: {} }
        case actions.SET_PRICE:
            return { ...state, price: action.payload, selectedRestaurant: {} }
        case actions.SET_SELECTED_RESTAURANT:
            return { ...state, selectedRestaurant: action.payload }
        case actions.SET_EDIT_MODE:
            return { ...state, editMode: action.payload }
        case actions.RESET:
            return initialState
        default:
            return state
    }
}
