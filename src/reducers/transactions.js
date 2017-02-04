import transactionsFixture from '../fixtures/transactions.json'
import { DELETE_TRANSACTION, ADD_TRANSACTION } from '../actions/transactions'
import _ from 'lodash'

function transactions(state = transactionsFixture, action) {
  switch(action.type) {
  case DELETE_TRANSACTION:
    return _.reject(state, ({ id }) => id === action.payload.id)
  case ADD_TRANSACTION:
    return [
      ...state,
      {
        id: Date.now().toString(),
        ...action.payload
      }
    ]
  default:
    return state
  }
}

export default transactions