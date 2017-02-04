import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionsTable from '../components/TransactionsTable'
import { deleteTransaction } from '../actions/transactions'

class TransactionsTableContainer extends Component {
  render() {
    const { transactions, onDeleteTransaction } = this.props
    return (
      <TransactionsTable
        transactions={transactions}
        onDeleteTransaction={onDeleteTransaction}
      />
    )
  }
}

const mapStateToProps = state => ({ transactions: state.transactions })

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTransaction: (id) => {
      dispatch(deleteTransaction(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTableContainer);