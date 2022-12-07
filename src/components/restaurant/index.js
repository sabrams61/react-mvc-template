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
        // console.log('edit to this restaurant', key, value);
        setSelectedRestaurant({...selectedRestaurant, [key]: value});
    }

    /**
     * save edits to restaurant
     */
    const handleSaveRestaurant = () => {
        let thisRestaurant = {...selectedRestaurant}
        delete thisRestaurant.isNew;
        console.log('save edits to this restaurant', thisRestaurant);
        if (thisRestaurant.name) {
            let pos = restaurants.findIndex(e => e.id === thisRestaurant.id);
            let newRestaurants = [...restaurants];
            newRestaurants[pos] = thisRestaurant
            setRestaurants(newRestaurants);
            setSelectedRestaurant({});
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
        setSelectedRestaurant({});
    }

    /**
     * cancel edits
     * or delete if newly added
     */
    const handleCancelEditRestaurant = (restaurant) => {
        if (restaurant.isNew) {
            handleDeleteRestaurant(restaurant)
        } else {
            setSelectedRestaurant({});
        }
    }

    return (
        <RestaurantView
            restaurant={restaurant}
            handleSelectRestaurant={handleSelectRestaurant}
            handleUpdateSelectedRestaurant={handleUpdateSelectedRestaurant}
            handleSaveRestaurant={handleSaveRestaurant}
            handleDeleteRestaurant={handleDeleteRestaurant}
            handleCancelEditRestaurant={handleCancelEditRestaurant}
        />
    )
}

