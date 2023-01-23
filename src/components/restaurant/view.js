import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { RestaurantContext } from '../../state/Provider'
import { ratings, prices } from '../../data'

/**
 * writes out individual restaurant listing
 * @param {obj} { restaurant }
 * @return {HTML}
 */
export const RestaurantView = ({ restaurant, handleSelectRestaurant, handleUpdateSelectedRestaurant, handleSaveRestaurant, handleDeleteRestaurant, handleCancelEditRestaurant }) => {
    const { selectedRestaurant, editMode } = useContext(RestaurantContext)

    return (
        <>
            {/* EDIT MODE: selected restaurant to edit */}
            {selectedRestaurant.id === restaurant.id
                ? (
                    <li
                        className="active"
                    >
                        {/* save */}
                        <button
                            className="button action save"
                            onClick={handleSaveRestaurant}
                        >
                        Save
                        </button>
                        {/* cancel */}
                        <button
                            className="button action"
                            onClick={() => handleCancelEditRestaurant(restaurant)}
                        >
                        Cancel
                        </button>

                        {/* edit name */}
                        <input type="text"
                            value={selectedRestaurant.name}
                            placeholder="enter name..."
                            name="name"
                            onChange={(e) => handleUpdateSelectedRestaurant('name', e.target.value)}
                        />

                        <p>
                            {ratings.map(num => (
                            // edit rating
                                <button
                                    key={num}
                                    onClick={() => {
                                        handleUpdateSelectedRestaurant('rating', num)
                                    }}
                                    className={num <= selectedRestaurant.rating ? 'selected' : ''}
                                >
                                    <span role="img" aria-label={`${num} star`}>
                                    ⭐️
                                    </span>
                                </button>
                            ))}
                            <br />
                            {prices.map(num => (
                            // edit price
                                <button
                                    key={num}
                                    onClick={() => {
                                        handleUpdateSelectedRestaurant('price', num)
                                    }}
                                    className={num <= selectedRestaurant.price ? 'selected' : ''}
                                >
                                    <span role="img" aria-label={`${num} money bag`}>
                                    💰
                                    </span>
                                </button>
                            ))}
                        </p>
                    </li>
                )
                : (
                    <li>
                        {/* EDIT MODEL: no selected restaurant */}
                        {editMode && !selectedRestaurant.id &&
                        <>
                            {/* edit */}
                            <button
                                className="button action"
                                onClick={() => handleSelectRestaurant(restaurant)}
                            >
                                Edit
                            </button>
                            {/* delete */}
                            <button
                                className="button action delete"
                                onClick={() => handleDeleteRestaurant(restaurant)}
                            >
                                Delete
                            </button>
                        </>
                        }
                        <h3>
                            {restaurant.name}
                        </h3>

                        <p>
                            {/* rating */}
                            {[...Array(restaurant.rating)].map((_, n) => (
                                <span role="img" aria-label="star" key={n}>
                                ⭐️
                                </span>
                            ))}
                            <br />
                            {/* price */}
                            {[...Array(restaurant.price)].map((_, n) => (
                                <span role="img" aria-label="money bag" key={n}>
                                💰
                                </span>
                            ))}
                        </p>
                    </li>
                )
            }
        </>
    )
}

RestaurantView.propTypes = {
    restaurant: PropTypes.object,
    handleSelectRestaurant: PropTypes.func,
    handleUpdateSelectedRestaurant: PropTypes.func,
    handleSaveRestaurant: PropTypes.func,
    handleDeleteRestaurant: PropTypes.func,
    handleCancelEditRestaurant: PropTypes.func,
}
