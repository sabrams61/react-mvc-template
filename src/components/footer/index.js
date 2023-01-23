import React from 'react'
import PropTypes from 'prop-types'
import { FooterView } from './view'

/**
 * returns the footer
 * useContext is necessary to pull down state and actions from parent Provider
 * declare all used values
 * @export
 * @return {*} HTML component
 */
export const Footer = () => {
    return (
        <FooterView
        />
    )
}

Footer.propTypes = {
    children: PropTypes.any,
}
