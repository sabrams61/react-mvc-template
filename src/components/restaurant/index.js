import React, { useContext } from 'react'
import { RestaurantContext } from '../../state/Provider'
import { RestaurantView } from './view'

/**
 * writes out individual restaurant listing
 * @param {obj} { restaurant }
 * @return {HTML}
 */
export const Restaurant = ({ restaurant }) => {
  const { selectedRestaurant, setSelectedRestaurant, restaurants, setRestaurants, setEditMode } = useContext(RestaurantContext)

  /**
     * select restaurant
     * @param {obj} restaurant
     */
  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant)
  }

  /**
     * update values of selectedRestaurant property
     * @param {string} key - the property being updated
     * @param {string or number} value
     */
  const handleUpdateSelectedRestaurant = (key, value) => {
    // console.log('edit to this restaurant', key, value);
    setSelectedRestaurant({ ...selectedRestaurant, [key]: value })
  }

  /**
     * save edits to restaurant
     * update full list of restaurants
     * reset selectedRestaurant
     */
  const handleSaveRestaurant = () => {
    const thisRestaurant = { ...selectedRestaurant }
    if (thisRestaurant.isNew) {
      setEditMode(false)
      delete thisRestaurant.isNew
    }
    console.log('save edits to this restaurant', thisRestaurant)
    if (thisRestaurant.name) {
      const pos = restaurants.findIndex(e => e.id === thisRestaurant.id)
      const newRestaurants = [...restaurants]
      newRestaurants[pos] = thisRestaurant
      setRestaurants(newRestaurants)
      setSelectedRestaurant({})
    }
  }

  /**
     * delete restaurant from restaurants
     * update full list of restaurants
     * reset selectedRestaurant
     */
  const handleDeleteRestaurant = (restaurant) => {
    console.log('delete this restaurant', restaurant)
    const newRestaurants = [...restaurants].filter(e => e.id !== restaurant.id)
    console.log('restaurants after deletion', newRestaurants)
    setRestaurants(newRestaurants)
    setSelectedRestaurant({})
  }

  /**
     * cancel edits
     * or delete if newly added and not saved
     */
  const handleCancelEditRestaurant = (restaurant) => {
    if (restaurant.isNew) {
      setEditMode(false)
      handleDeleteRestaurant(restaurant)
    } else {
      setSelectedRestaurant({})
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
