import React from 'react'

const Transaction = ({ transaction, onDelete }) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.name}</td>
      <td>{transaction.in}</td>
      <td>{transaction.out}</td>
      <td>
        <button
          onClick={() => onDelete(transaction.id)}
          className="button button--destructive"
        >
        X
        </button>
      </td>
    </tr>
  )
}

export default Transaction