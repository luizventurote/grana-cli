import { addPayment } from '../../controllers/payment-controller.js';
import { parseDate } from '../../core/date.js';

export function addPaymentCommand({ client, amount, dueDate }) {
  addPayment({ client, amount: parseFloat(amount), dueDate: parseDate(dueDate) });
  console.log('Payment added.');
}
