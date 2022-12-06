import React from "react";

/**
 * returns the filter options
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {*} HTML component
 */
export const UserActionsView = ({ handleReset, handleSetEditMode, handleAddRestaurant }) => {

    return (
        <div className="app-actions">
            {/* reset */}
            <button
                className="button"
                onClick={handleReset}>
                Reset
            </button>

            {/* edit */}
            <button
                className="button"
                onClick={handleSetEditMode}
            >
                Edit Mode
            </button>

            {/* add */}
            <button
                className="button"
                onClick={handleAddRestaurant}
            >
                Add Restaurant
            </button>
        </div>
    );
}
