import {
  createPayment,
  listPayments,
  markPaymentPaid,
  linkPayment
} from '../models/payment.js';
import { getAdapter } from '../config/db.js';

export function addPayment(data) {
  const db = getAdapter();
  createPayment(db, data);
}

export function getPayments(filters = {}) {
  const db = getAdapter();
  return listPayments(db, filters);
}

export function markPaid({ paymentId }) {
  const db = getAdapter();
  markPaymentPaid(db, { paymentId });
}

export function linkPaymentToTransaction({ paymentId, transactionId }) {
  const db = getAdapter();
  linkPayment(db, { paymentId, transactionId });
}
