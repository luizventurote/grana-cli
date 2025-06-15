import { getPayments } from '../../../controllers/payment-controller.js';
import { renderTable } from '../ui.js';

export function listPaymentCommand() {
  const payments = getPayments();
  if (!payments.length) {
    console.log('No payments found.');
    return;
  }
  const headers = ['ID', 'Client', 'Amount', 'Status'];
  const rows = payments.map(p => [
    String(p.id),
    p.client,
    String(p.amount),
    p.status
  ]);
  console.log(renderTable(headers, rows));
}
