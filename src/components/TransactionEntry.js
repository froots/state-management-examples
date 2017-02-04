import React from 'react'

function TransactionEntry() {
  return (
    <tr>
      <td>
        <input type="text" name="date" placeholder="2017-01-01" className="input--inline" />
      </td>
      <td>
        <input type="text" name="name" placeholder="Widgets" className="input--inline" />
      </td>
      <td>
        <input type="text" name="in" placeholder="20.00" className="input--inline" />
      </td>
      <td>
        <input type="text" name="out" placeholder="20.00" className="input--inline" />
      </td>
      <td>
        <button className="button button--additive">+</button>
      </td>
    </tr>
  )
}

export default TransactionEntry

