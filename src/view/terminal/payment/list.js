import { getPayments } from '../../../controllers/payment-controller.js';

export function listPaymentCommand() {
  const payments = getPayments();
  if (!payments.length) {
    console.log('No payments found.');
    return;
  }
  payments.forEach(p =>
    console.log(`${p.id}: ${p.client} - ${p.amount} - ${p.status}`)
  );
}
