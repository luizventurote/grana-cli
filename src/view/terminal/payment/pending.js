import { getPayments } from '../../../controllers/payment-controller.js';

export function pendingPaymentsCommand() {
  const payments = getPayments({ status: 'Pending' });
  if (!payments.length) {
    console.log('No pending payments.');
    return;
  }
  payments.forEach(p =>
    console.log(`${p.id}: ${p.client} - ${p.amount} - due ${p.due_date}`)
  );
}
