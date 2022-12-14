import React, { useContext } from "react";
import { RestaurantContext } from '../../state/Provider';
import { ratings, prices } from '../../data';

/**
 * returns the filter options
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {*} HTML component
 */
export const FiltersView = ({ handleSetRating, handleSetPrice }) => {
    const { rating, price } = useContext(RestaurantContext);

    return (
        <div className="filters">
            {/* ratings */}
            <div className="ratings">
                <h3>
                    Filter Restaurants by Rating and Price
                </h3>
                {ratings.map(num => (
                    <button
                        key={num}
                        onClick={() => {
                            handleSetRating(num);
                        }}
                        className={rating >= num ? "selected" : ""}
                    >
                        <span role="img" aria-label={`${num} star`}>
                            ⭐️
                        </span>
                    </button>
                    ))}
            </div>

            {/* prices */}
            <div className="prices">
                {prices.map(num => (
                    <button
                        key={num}
                        onClick={() => {
                            handleSetPrice(num);
                        }}
                        className={price >= num ? "selected" : ""}
                    >
                        <span role="img" aria-label={`${num} money bag`}>
                            💰
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
