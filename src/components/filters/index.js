import React, { useContext } from 'react'
import { RestaurantContext } from '../../state/Provider'
import { FiltersView } from './view'

/**
 * returns the filter options
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {*} HTML component
 */
export const Filters = () => {
    const { setRating, setPrice } = useContext(RestaurantContext)

    /**
     * update the rating value for filter     *
     * @param {number} num
     */
    const handleSetRating = (num) => {
        setRating(num)
    }

    /**
     * update the price value for filter     *
     * @param {number} num
     */
    const handleSetPrice = (num) => {
        setPrice(num)
    }

    return (
        <FiltersView
            handleSetRating={handleSetRating}
            handleSetPrice={handleSetPrice}
        />
    )
}
