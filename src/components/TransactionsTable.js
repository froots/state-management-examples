import React, { PropTypes } from 'react'
import Transaction from './Transaction'
import TransactionEntry from './TransactionEntry'
import './TransactionsTable.css'

const TransactionsTable = ({ transactions, onDeleteTransaction, onAddTransaction }) => {
  if (!transactions.length) {
    return (
      <p>No transactions</p>
    )
  }

  const transactionRows = transactions.map(transaction => (
    <Transaction
      key={`transaction_${transaction.id}`}
      transaction={transaction}
      onDelete={onDeleteTransaction}
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
      <tbody>
        { transactionRows }
        <TransactionEntry onSubmit={onAddTransaction} />
      </tbody>
    </table>
  )
}

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
  onDeleteTransaction: PropTypes.func.isRequired,
  onAddTransaction: PropTypes.func.isRequired
}

export default TransactionsTable