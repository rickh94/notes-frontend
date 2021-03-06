import React, { Component } from 'react'
import { PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

import { API } from 'aws-amplify'

import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      notes: []
    }
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return
    }

    try {
      const notes = await this.notes()
      this.setState({ notes })
    } catch (e) {
      alert(e)
    }

    this.setState({ isLoading: false })
  }

  notes() {
    return API.get('notes', '/notes')
  }

  renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
        <LinkContainer key={note.Id} to={`/notes/${note.noteId}`}>
          <ListGroupItem header={note.content.trim().split('\n')[0]}>
            {'Created: ' + new Date(note.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/notes/new">
          <ListGroupItem>
            <h4>
              <b>{'\uFF0B'}</b> Create a new note
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    )
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
        <Link to="/login" className="btn btn-info btn-lg lander-button">
          Login
        </Link>
        <Link to="/signup" className="btn btn-success btn-lg lander-button">
          Signup
        </Link>
      </div>
    )
  }

  renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          {!this.state.loading && this.renderNotesList(this.state.notes)}
        </ListGroup>
      </div>
    )
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    )
  }
}

export default Home
