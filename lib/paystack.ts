// app/lib/paystack.ts
type PaystackSetupOptions = {
  key: string;
  email: string;
  amount: number;
  currency: string;
  metadata?: Record<string, unknown>;
  callback: (response: { reference: string }) => void;
  onClose: () => void;
};

type PaystackWindow = Window & {
  PaystackPop?: {
    setup: (options: PaystackSetupOptions) => { openIframe: () => void };
  };
};

export function initializePaystack({
  email,
  amount, // in kobo (₦1 = 100 kobo)
  metadata,
  onSuccess,
  onClose,
}: {
  email: string;
  amount: number;
  metadata?: Record<string, unknown>;
  onSuccess: (reference: string) => void;
  onClose: () => void;
}) {
  const key = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  const paystack = (window as PaystackWindow).PaystackPop;

  if (!key || !paystack) {
    onClose();
    return;
  }

  const handler = paystack.setup({
    key,
    email,
    amount,
    currency: "NGN",
    metadata,
    callback: (response: { reference: string }) => {
      onSuccess(response.reference);
    },
    onClose,
  });

  handler.openIframe();
}