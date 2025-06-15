import { linkPaymentToTransaction } from '../../controllers/payment-controller.js';

export function linkPaymentCommand({ payment, transaction }) {
  linkPaymentToTransaction({ paymentId: payment, transactionId: transaction });
  console.log('Payment linked.');
}
