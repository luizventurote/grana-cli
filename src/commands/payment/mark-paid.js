import { markPaid } from '../../controllers/payment-controller.js';

export function markPaidCommand({ payment }) {
  markPaid({ paymentId: payment });
  console.log('Payment marked as paid.');
}
