// Cloudflare Pages Function — GET /api/estado-pago?id=<transaction_id>
// Consulta el estado real de una transacción directamente en la API de Wompi
// (nunca confíes solo en los parámetros de la URL de retorno: alguien podría
// editarlos a mano). Por defecto usa el ambiente de producción; define
// WOMPI_ENV = "sandbox" mientras hagas pruebas.

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response(JSON.stringify({ error: 'Falta el id de la transacción.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiBase = env.WOMPI_ENV === 'sandbox' ? 'https://sandbox.wompi.co' : 'https://production.wompi.co';

  let wompiResponse;
  try {
    wompiResponse = await fetch(`${apiBase}/v1/transactions/${id}`);
  } catch {
    return new Response(JSON.stringify({ error: 'No se pudo contactar a Wompi.' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!wompiResponse.ok) {
    return new Response(JSON.stringify({ error: 'No se pudo verificar la transacción.' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await wompiResponse.json();
  const status = body?.data?.status ?? 'UNKNOWN';
  const reference = body?.data?.reference ?? null;

  return new Response(JSON.stringify({ status, reference, id }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
