import alt from '../alt';
import transactions from '../fixtures/transactions.json';
import TransactionActions from '../actions/TransactionActions';

class TransactionStore {
  constructor() {
    this.state = {
      transactions
    }

    this.bindListeners({
      deleteTransaction: TransactionActions.deleteTransaction
    })
  }

  deleteTransaction(transactionId) {
    const transactions = this.state.transactions.filter((transaction) => {
      return transaction.id !== transactionId
    })

    this.setState({transactions})
  }
}

export default alt.createStore(TransactionStore, 'TransactionStore');