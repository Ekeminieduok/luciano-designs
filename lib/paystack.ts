// app/lib/paystack.ts
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
  const handler = (window as any).PaystackPop.setup({
    key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
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