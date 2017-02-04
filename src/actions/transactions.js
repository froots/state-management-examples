export const DELETE_TRANSACTION = 'DELETE_TRANSACTION'
export const ADD_TRANSACTION = 'ADD_TRANSACTION'

export function deleteTransaction(id) {
  return {
    type: DELETE_TRANSACTION,
    payload: { id }
  }
}

export function addTransaction({ date, name, inAmount, outAmount }) {
  return {
    type: ADD_TRANSACTION,
    payload: { date, name, inAmount, outAmount }
  }
}