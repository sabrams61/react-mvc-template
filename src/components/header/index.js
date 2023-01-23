import React from 'react'
import PropTypes from 'prop-types'
import { HeaderView } from './view'

/**
 * returns the header
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {*} HTML component
 */
export const Header = () => {
    return (
        <HeaderView
        />
    )
}

Header.propTypes = {
    children: PropTypes.any,
}
