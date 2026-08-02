// Cloudflare Pages Function — POST /api/crear-referencia
// Genera una referencia única de compra y la firma de integridad que exige Wompi
// (SHA-256 de referencia + monto en centavos + moneda + secreto de integridad),
// para que el widget de pago no pueda ser manipulado desde el navegador.
// Requiere la variable de entorno WOMPI_INTEGRITY_SECRET configurada en el
// proyecto de Cloudflare Pages (Functions > Environment variables).

const AMOUNT_IN_CENTS = 2990000; // $29.900 COP
const CURRENCY = 'COP';

export async function onRequestPost(context) {
  const { env } = context;
  const integritySecret = env.WOMPI_INTEGRITY_SECRET;

  if (!integritySecret) {
    return new Response(
      JSON.stringify({ error: 'Los pagos todavía no están configurados en este sitio.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const reference = `TTM-DP-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;

  const encoder = new TextEncoder();
  const payload = encoder.encode(`${reference}${AMOUNT_IN_CENTS}${CURRENCY}${integritySecret}`);
  const hashBuffer = await crypto.subtle.digest('SHA-256', payload);
  const signature = Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');

  return new Response(
    JSON.stringify({
      reference,
      amountInCents: AMOUNT_IN_CENTS,
      currency: CURRENCY,
      signature,
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
}
