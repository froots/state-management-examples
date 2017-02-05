import React, { Component, PropTypes } from 'react'
import TextInput from './TextInput'

class TransactionEntry extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor() {
    super()
    this.state = this.getInitialState()
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  getInitialState() {
    return {
      date: new Date().toISOString(),
      name: '',
      inAmount: 0,
      outAmount: 0
    }
  }

  handleClick(ev) {
    ev.preventDefault()
    const { date, name, inAmount, outAmount } = this.state
    this.props.onSubmit({
      date,
      name,
      inAmount: parseFloat(inAmount),
      outAmount: parseFloat(outAmount)
    })
    this.setState(this.getInitialState())
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <tr>
        <td>
          <TextInput
            name="date"
            placeholder="2017-01-01"
            defaultValue={this.state.date}
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <TextInput
            name="name"
            placeholder="Widgets"
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <TextInput
            name="inAmount"
            placeholder="20.00"
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <TextInput
            name="outAmount"
            placeholder="20.00"
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <button
            className="button button--additive"
            onClick={(ev) => this.handleClick(ev)}
          >
          +
          </button>
        </td>
      </tr>
    )
  }
}

export default TransactionEntry

