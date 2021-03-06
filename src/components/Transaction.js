import React from 'react'

const Transaction = ({ transaction, onDelete }) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.name}</td>
      <td>{transaction.inAmount}</td>
      <td>{transaction.outAmount}</td>
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