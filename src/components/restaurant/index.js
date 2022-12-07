import React, { useContext} from 'react';
import { RestaurantContext } from '../../state/Provider';
import { RestaurantView } from './view'

/**
 * writes out individual restaurant listing
 * @param {obj} { restaurant }
 * @return {HTML}
 */
export const Restaurant = ({ restaurant }) => {
    const { selectedRestaurant, setSelectedRestaurant, restaurants, setRestaurants } = useContext(RestaurantContext);

    /**
     * select restaurant
     * @param {obj} restaurant
     */
    const handleSelectRestaurant = (restaurant) => {
        setSelectedRestaurant(restaurant);
    }

    /**
     * update values of selectedRestaurant
     * @param {obj} restaurant
     */
    const handleUpdateSelectedRestaurant = (key, value) => {
        console.log('edit to this restaurant', key, value);
        setSelectedRestaurant({...selectedRestaurant, [key]: value});
    }

    /**
     * save edits to restaurant
     */
    const handleSaveRestaurant = () => {
        console.log('save edits to this restaurant', selectedRestaurant);
        if (selectedRestaurant.name) {
            let pos = restaurants.findIndex(e => e.id === selectedRestaurant.id);
            let newRestaurants = [...restaurants];
            newRestaurants[pos] = selectedRestaurant
            setRestaurants(newRestaurants);
            handleCancelEditRestaurant();
        }
    }

    /**
     * delete restaurant
     */
    const handleDeleteRestaurant = (restaurant) => {
        console.log('delete this restaurant', restaurant);
        let newRestaurants = [...restaurants].filter(e => e.id !== restaurant.id);
        console.log('restaurants after deletion', newRestaurants);
        setRestaurants(newRestaurants);
        handleCancelEditRestaurant();
    }

    /**
     * cancel edits
     */
    const handleCancelEditRestaurant = () => {
        setSelectedRestaurant({});
    }

    return (
        <RestaurantView
            restaurant={restaurant}
            handleSelectRestaurant={handleSelectRestaurant}
            handleUpdateSelectedRestaurant={handleUpdateSelectedRestaurant}
            handleSaveRestaurant={handleSaveRestaurant}
            handleDeleteRestaurant={handleDeleteRestaurant}
        />
    )
}

