import React, { Component } from 'react'
import Transaction from './Transaction'
import TransactionEntry from './TransactionEntry'
import TransactionTotals from './TransactionTotals'
import './TransactionsTable.css'
import transactions from '../fixtures/transactions.json';

class TransactionsTable extends Component {
  constructor() {
    super();
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.handleDeleteTransaction = this.handleDeleteTransaction.bind(this);
  }

  state = {
    transactions
  }

  handleAddTransaction(data) {
    const transaction = {...data, id: Date.now() };

    this.setState({
      transactions: [...this.state.transactions, transaction]
    });
  }

  handleDeleteTransaction(id) {
    const transactions = this.state.transactions.filter(transaction => {
      return transaction.id !== id;
    });

    this.setState({
      transactions
    });
  }

  render() {
    const { transactions } = this.state;

    if (!transactions.length) {
      return (
        <p>No transactions</p>
      )
    }

    const transactionRows = transactions.map(transaction => (
      <Transaction
        key={`transaction_${transaction.id}`}
        transaction={transaction}
        onDelete={this.handleDeleteTransaction}
      />
    ))

    return (
      <table className="TransactionsTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>In</th>
            <th>Out</th>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <TransactionTotals transactions={transactions} />
        </tfoot>
        <tbody>
          { transactionRows }
          <TransactionEntry onSubmit={this.handleAddTransaction} />
        </tbody>
      </table>
    );
  }
}

export default TransactionsTable;