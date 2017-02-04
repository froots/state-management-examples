import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionsTable from '../components/TransactionsTable'
import { deleteTransaction, addTransaction } from '../actions/transactions'

class TransactionsTableContainer extends Component {
  render() {
    const { transactions, onDeleteTransaction, onAddTransaction } = this.props
    return (
      <TransactionsTable
        transactions={transactions}
        onDeleteTransaction={onDeleteTransaction}
        onAddTransaction={onAddTransaction}
      />
    )
  }
}

const mapStateToProps = state => ({ transactions: state.transactions })

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTransaction: (id) => {
      dispatch(deleteTransaction(id))
    },
    onAddTransaction: (transaction) => {
      dispatch(addTransaction(transaction))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTableContainer);