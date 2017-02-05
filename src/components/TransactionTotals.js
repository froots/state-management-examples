import React from 'react'
import _ from 'lodash'

function keyTotal(collection, key) {
  return _(collection)
    .map(item => parseFloat(item[key]))
    .reduce(_.add)
}

const TransactionTotals = ({ transactions }) => {
  const inTotal = keyTotal(transactions, 'inAmount')
  const outTotal = keyTotal(transactions, 'outAmount')
  const total = inTotal - outTotal

  return (
    <tr>
      <td></td>
      <td>TOTALS</td>
      <td>{inTotal}</td>
      <td>{outTotal}</td>
      <td>{total}</td>
    </tr>
  )
}

export default TransactionTotals