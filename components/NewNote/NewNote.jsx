import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import LoaderButton from '../LoaderButton'
import config from '../../config'
import { API } from 'aws-amplify'

import { FilePond } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import { s3Upload } from '../../libs/awsLib'

import './NewNote.scss'

class NewNote extends Component {
  constructor(props) {
    super(props)

    this.file = null

    this.state = {
      isLoading: null,
      content: ''
    }
  }

  validateForm() {
    return this.state.content.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleFileChange = event => {
    this.file = event.target.files[0]
  }

  handleSubmit = async event => {
    event.preventDefault()

    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE / 10000000} MB.`
      )
      return
    }

    this.setState({ isLoading: true })

    try {
      const attachment = this.file ? await s3Upload(this.file) : null

      this.createNote({
        attachment,
        content: this.state.content
      })
      this.props.history.push("/")
    } catch (e) {
      alert(e)
      this.setState({isLoading: false})
    }
  }

  createNote(note) {
    return API.post("notes", "/notes", {
      body: note
    })
  }

  render() {
    return (
      <div className="NewNote">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="content">
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="file">
            <ControlLabel>Attachment</ControlLabel>
            {/* <FormControl onChange={this.handleFileChange} type="file" /> */}
            <FilePond file={this.state.file} allowMultiple={false} onupdatefiles={fileItems => this.setState({file: fileItems[0].file})} />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating..."
          />
        </form>
      </div>
    )
  }
}

export default NewNote
