import React, { useContext } from 'react'
import { RestaurantContext } from '../../state/Provider'
import { getId, newRestaurant } from '../../data'
import { UserActionsView } from './view'

/**
 * returns the filter options
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {*} HTML component
 */
export const UserActions = () => {
    const { reset, editMode, setEditMode, setRestaurants, setSelectedRestaurant, restaurants, setPrice, setRating } = useContext(RestaurantContext)

    /**
     * turn on/off edit mode
     */
    const handleSetEditMode = () => {
    // console.log('editMode', editMode);
        setEditMode(!editMode)
    }

    /**
     * reset all data
     */
    const handleReset = () => {
        reset()
    }

    /**
     * add new restaurant (imported as newRestaurant) to restaurants
     * set filters to lowest rating (1) and highest price (3) so all show up
     * set to edit mode
     * set new restaurant as selectedRestaurant
     */
    const handleAddRestaurant = () => {
        const addedRestaurant = { ...newRestaurant, id: getId(), isNew: true }
        const newRestaurants = [...restaurants, addedRestaurant]
        console.log('new set of restaurants', newRestaurants)
        setRestaurants(newRestaurants)
        setPrice(3)
        setRating(1)
        setEditMode(true)
        setSelectedRestaurant(addedRestaurant)
    }

    return (
        <UserActionsView
            handleSetEditMode={handleSetEditMode}
            handleReset={handleReset}
            handleAddRestaurant={handleAddRestaurant}
        />
    )
}
