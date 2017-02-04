import React, { Component, PropTypes } from 'react'

class TransactionEntry extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor() {
    super()
    this.state = this.getInitialState()
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

  handleInputChange(ev) {
    const { name, value } = ev.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="date"
            placeholder="2017-01-01"
            className="input--inline"
            onChange={(ev) => this.handleInputChange(ev)}
            value={this.state.date}
          />
        </td>
        <td>
          <input
            type="text"
            name="name"
            placeholder="Widgets"
            className="input--inline"
            onChange={(ev) => this.handleInputChange(ev)}
            value={this.state.name}
          />
        </td>
        <td>
          <input
            type="text"
            name="inAmount"
            placeholder="20.00"
            className="input--inline"
            onChange={(ev) => this.handleInputChange(ev)}
            value={this.state.inAmount}
          />
        </td>
        <td>
          <input
            type="text"
            name="outAmount"
            placeholder="20.00"
            className="input--inline"
            onChange={(ev) => this.handleInputChange(ev)}
            value={this.state.outAmount}
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

