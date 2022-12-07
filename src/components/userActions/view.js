import React, { useContext } from "react";
import { RestaurantContext } from '../../state/Provider';

/**
 * returns the filter options
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {*} HTML component
 */
export const UserActionsView = ({ handleReset, handleSetEditMode, handleAddRestaurant }) => {
    const { editMode } = useContext(RestaurantContext);

    return (
        <div className="app-actions">
            {/* reset */}
            <button
                className="button"
                onClick={handleReset}>
                Reset
            </button>

            {/* add */}
            <button
                className="button"
                onClick={handleAddRestaurant}
            >
                Add Restaurant
            </button>

            {/* edit */}
            <button
                className="button"
                onClick={handleSetEditMode}
            >
                {!editMode ? (
                    <>Edit Mode</>
                ) : (
                    <>View Mode</>
                )}
            </button>
        </div>
    );
}
