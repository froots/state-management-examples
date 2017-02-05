import React, { Component, PropTypes } from 'react'

class TextInput extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: 'input input--inline'
  }

  handleChange(ev) {
    ev.preventDefault()
    this.props.onChange(this.props.name, ev.target.value, ev)
  }

  render() {
    return (
      <input
        {...this.props}
        type="text"
        onChange={this.handleChange}
      />
    )
  }
}

export default TextInput