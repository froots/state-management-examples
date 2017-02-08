import React, { Component } from 'react'
import connectToStores from 'alt-utils/lib/connectToStores'
import TransactionStore from '../stores/TransactionStore'
import TransactionActions from '../actions/TransactionActions'
import TransactionsTable from '../components/TransactionsTable'

class TransactionsTableContainer extends Component {
  static getStores() {
    return [TransactionStore]
  }

  static getPropsFromStores() {
    return TransactionStore.getState()
  }
  
  handleDeleteTransaction(transactionId) {
    TransactionActions.deleteTransaction(transactionId);
  }

  render() {
    return (
      <TransactionsTable
        transactions={this.props.transactions}
        onDeleteTransaction={this.handleDeleteTransaction}
      />
    )
  }
}

export default connectToStores(TransactionsTableContainer);