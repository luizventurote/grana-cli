export class DBAdapter {
  getWallets() {
    throw new Error('Not implemented');
  }
  insertWallet(data) {
    throw new Error('Not implemented');
  }
  updateWalletBalance(id, balance) {
    throw new Error('Not implemented');
  }
  adjustWalletBalance(id, amount) {
    throw new Error('Not implemented');
  }
  insertTransaction(data) {
    throw new Error('Not implemented');
  }
  getTransactions(filters) {
    throw new Error('Not implemented');
  }
  insertPayment(data) {
    throw new Error('Not implemented');
  }
  getPayments(filters) {
    throw new Error('Not implemented');
  }
  updatePaymentStatus(id, status) {
    throw new Error('Not implemented');
  }
  linkPaymentTransaction(paymentId, transactionId) {
    throw new Error('Not implemented');
  }
  insertProfile(data) {
    throw new Error('Not implemented');
  }
  getProfiles() {
    throw new Error('Not implemented');
  }
  insertCategory(data) {
    throw new Error('Not implemented');
  }
  getCategories() {
    throw new Error('Not implemented');
  }
  setConfig(key, value) {
    throw new Error('Not implemented');
  }
  getConfig(key) {
    throw new Error('Not implemented');
  }
}
