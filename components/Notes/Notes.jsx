import React, { Component } from 'react'
import { API, Storage } from 'aws-amplify'

class Notes extends Component {
  constructor(props) {
    super(props)

    this.file = null
    this.state = {
      note: null,
      content: '',
      attachmentURL: null,
    }
  }

  async componentDidMount() {
    try {
      let attachmentURL
      const note = await this.getNote()
      const { content, attachment } = note

      if (attachment) {
        attachmentURL = await Storage.vault.get(attachment)
      }

      this.setState({
        note,
        content,
        attachmentURL,
      })
    } catch (e) {
      alert(e)
    }
  }

  getNote() {
    return API.get('notes', `/notes/${this.props.match.params.id}`)
  }

  validateForm() {
    return this.state.content.length > 0
  }

  formatFilename(str) {
    return str.replact(/^\w+-/, '')
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleFileChange = event => {
    this.file = event.target.files[0]
  }

  handleSubmit = async event => {
    event.preventDefault()

    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE / 1000000} MB.`
      )
    }

    this.setState({ isLoading: true })
  }

  render() {
    return <div className="Notes" />
  }
}

Notes.propTypes = {}

export default Notes
