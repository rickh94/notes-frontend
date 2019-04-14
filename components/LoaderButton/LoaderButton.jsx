import React from 'react'
import PropTypes from 'prop-types'

import { Button, Glyphicon } from 'react-bootstrap'

import './LoaderButton.scss'

const LoaderButton = ({
  isLoading,
  text,
  loadingText,
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
      {!isLoading ? text : loadingText}
    </Button>
  )
}

LoaderButton.propTypes = {}

export default LoaderButton
