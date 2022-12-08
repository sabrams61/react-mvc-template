import React, { useContext } from 'react';
import { RestaurantContext } from '../../state/Provider';
import { ResultsView } from './view';

/**
 * returns the filtered results
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {HTML} HTML component
 */
export const Results = () => {
    const { restaurants, rating, price } = useContext(RestaurantContext);

    /**
     * filters restaurants where rating is greater or equal to selected value
     * and price is less than or equal to selected value
     */
    const filtered = restaurants.filter(
        restaurant => restaurant.rating >= rating && restaurant.price <= price
    );

    /**
     * sort filtered alphabetically by name
     */
    const sortedResults = () => {
        return filtered.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
    }

    return (
        <ResultsView
            sortedResults={sortedResults}
        />
    );
}
