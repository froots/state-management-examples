import transactionsFixture from '../fixtures/transactions.json'
import { DELETE_TRANSACTION } from '../actions/transactions'
import _ from 'lodash'

function transactions(state = transactionsFixture, action) {
  switch(action.type) {
  case DELETE_TRANSACTION:
    return _.reject(state, ({ id }) => id === action.payload.id)
  default:
    return state
  }
}

export default transactions