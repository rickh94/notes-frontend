import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Auth } from 'aws-amplify'

import config from '../../config'

import Routes from '../../Routes'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    }
  }

  async componentDidMount() {
    try {
      await Auth.currentSession()
      this.userHasAuthenticated(true)
    } catch (e) {
      if (e !== 'No current user') {
        alert(e)
      }
    }
    this.setState({ isAuthenticating: false })
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated })
  }

  handleLogout = async event => {
    await Auth.signOut()
    this.userHasAuthenticated(false)
    this.props.history.push('/login')
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }

    return (
      !this.state.isAuthenticating && (
        <div className="App container">
          {config.stage === 'dev' && (
            <React.Fragment>
              <h4 className="dev-title">Development Mode</h4>
              <div className="dev-marker" />
            </React.Fragment>
          )}
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Scratch</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                {this.state.isAuthenticated ? (
                  <React.Fragment>
                    <LinkContainer to="/settings">
                      <NavItem>Settings</NavItem>
                    </LinkContainer>
                    <NavItem onClick={this.handleLogout}>Logout</NavItem>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </React.Fragment>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes childProps={childProps} />
        </div>
      )
    )
  }
}

App.propTypes = {}

export default withRouter(App)
