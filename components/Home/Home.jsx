import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Home.scss'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
        </div>
      </div>
    )
  }
}

Home.propTypes = {}

export default Home
