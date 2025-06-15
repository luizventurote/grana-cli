import { getPayments } from '../../../controllers/payment-controller.js';
import { renderTable } from '../ui.js';

export function pendingPaymentsCommand() {
  const payments = getPayments({ status: 'Pending' });
  if (!payments.length) {
    console.log('No pending payments.');
    return;
  }
  const headers = ['ID', 'Client', 'Amount', 'Due'];
  const rows = payments.map(p => [
    String(p.id),
    p.client,
    String(p.amount),
    p.due_date
  ]);
  console.log(renderTable(headers, rows));
}
