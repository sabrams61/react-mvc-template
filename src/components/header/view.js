import React from 'react'

/**
 * returns the header
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {*} HTML component
 */
export const HeaderView = () => {
  return (
        <header>
            <h3>
                Filter Restaurants by Rating and Price
            </h3>
        </header>
  )
}
