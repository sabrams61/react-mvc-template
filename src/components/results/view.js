import React from 'react'
import { Restaurant } from '../restaurant/index'

/**
 * returns the filtered results
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {HTML} HTML component
 */
export const ResultsView = ({ sortedResults }) => {
    return (
        <ul>
            {sortedResults().map(restaurant => (
                <Restaurant
                    key={restaurant.id}
                    restaurant={restaurant}
                />
            ))}
        </ul>
    )
}
