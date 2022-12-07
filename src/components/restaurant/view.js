import React, { useContext} from "react";
import { RestaurantContext } from '../../state/Provider';
import { ratings, prices } from '../../data';

/**
 * writes out individual restaurant listing
 * @param {obj} { restaurant }
 * @return {HTML}
 */
export const RestaurantView = ({ restaurant, handleSelectRestaurant, handleUpdateSelectedRestaurant, handleSaveRestaurant, handleDeleteRestaurant }) => {
    const { selectedRestaurant, editMode } = useContext(RestaurantContext);

    return (
        <>
            {/* selected restaurant to edit */}
            {selectedRestaurant.id === restaurant.id ? (
                <li
                    className="active"
                >
                    <button
                        className="button action save"
                        onClick={handleSaveRestaurant}
                    >
                        Save
                    </button>
                    <button
                        className="button action"
                        onClick={() => handleSelectRestaurant({})}
                    >
                        Cancel
                    </button>

                    <input type="text"
                        value={selectedRestaurant.name}
                        placeholder="enter name..."
                        name="name"
                        onChange={(e) => handleUpdateSelectedRestaurant('name', e.target.value)}
                    />

                    <p>
                        {ratings.map(num => (
                            <button
                                key={num}
                                onClick={() => {
                                    handleUpdateSelectedRestaurant('rating', num);
                                }}
                                className={num === selectedRestaurant.rating ? "selected" : ""}
                            >
                                <span role="img" aria-label={`${num} star`}>
                                    ⭐️
                                </span>
                            </button>
                        ))}
                        <br />
                        {prices.map(num => (
                            <button
                                key={num}
                                onClick={() => {
                                    handleUpdateSelectedRestaurant('price', num);
                                }}
                                className={num === selectedRestaurant.price ? "selected" : ""}
                            >
                                <span role="img" aria-label={`${num} money bag`}>
                                    💰
                                </span>
                            </button>
                        ))}
                    </p>
                </li>
            ) : (
                <li>
                    {editMode && !selectedRestaurant.id &&
                        <>
                            <button
                                className="button action"
                                onClick={() => handleSelectRestaurant(restaurant)}
                            >
                                Edit
                            </button>
                            <button
                                className="button action delete"
                                onClick={() => handleDeleteRestaurant(restaurant)}
                            >
                                Delete
                            </button>
                        </>                    }
                    <h3>
                        {restaurant.name}
                    </h3>
                    <p>
                    {[...Array(restaurant.rating)].map((_, n) => (
                        <span role="img" aria-label="star" key={n}>
                            ⭐️
                        </span>
                    ))}
                    <br />
                    {[...Array(restaurant.price)].map((_, n) => (
                        <span role="img" aria-label="money bag" key={n}>
                            💰
                        </span>
                    ))}
                    </p>
                </li>
            )}
        </>
    )
}

