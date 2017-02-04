import { combineReducers } from 'redux'
import transactions from './transactions'

const transactionsApp = combineReducers({
  transactions
})

export default transactionsApp