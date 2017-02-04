export const DELETE_TRANSACTION = 'DELETE_TRANSACTION'

export function deleteTransaction(id) {
  return {
    type: DELETE_TRANSACTION,
    payload: { id }
  }
}