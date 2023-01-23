import React from 'react'

/**
 * returns the footer
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {*} HTML component
 */
export const FooterView = () => {
    return (
        <footer>
            <p>&copy;2023 MassMutual</p>
        </footer>
    )
}
