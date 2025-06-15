export function createPayment(db, { client, amount, dueDate }) {
  db.insertPayment({ client, amount, dueDate });
}

export function listPayments(db, filters = {}) {
  return db.getPayments(filters);
}

export function markPaymentPaid(db, { paymentId }) {
  db.updatePaymentStatus(paymentId, 'Paid');
}

export function linkPayment(db, { paymentId, transactionId }) {
  db.linkPaymentTransaction(paymentId, transactionId);
}
