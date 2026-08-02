// Cloudflare Pages Function — GET /api/descargar?id=<transaction_id>
// Vuelve a verificar la transacción contra la API de Wompi (nunca confíes en que
// alguien "ya pagó" solo porque llegó a esta URL) y, si está aprobada, entrega el
// documento como una página HTML lista para imprimir o guardar como PDF desde el
// navegador (Ctrl+P > Guardar como PDF).
//
// El contenido va embebido aquí a propósito (no como import de archivo) para
// evitar problemas de bundling de Cloudflare Pages Functions. Si actualizas
// src/data/templates/derecho-de-peticion.md, actualiza también este archivo.

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response('Falta el id de la transacción.', { status: 400 });
  }

  const apiBase = env.WOMPI_ENV === 'sandbox' ? 'https://sandbox.wompi.co' : 'https://production.wompi.co';

  let wompiResponse;
  try {
    wompiResponse = await fetch(`${apiBase}/v1/transactions/${id}`);
  } catch {
    return new Response('No se pudo contactar a Wompi. Intenta de nuevo en unos minutos.', { status: 502 });
  }

  if (!wompiResponse.ok) {
    return new Response('No se pudo verificar la transacción.', { status: 502 });
  }

  const body = await wompiResponse.json();
  const status = body?.data?.status;

  if (status !== 'APPROVED') {
    return new Response(
      `Tu pago todavía no aparece como aprobado (estado: ${status ?? 'desconocido'}). Si ya pagaste, espera unos minutos y recarga, o escríbenos a contacto@tumbatumulta.co con tu número de transacción (${id}).`,
      { status: 402 },
    );
  }

  return new Response(DOCUMENT_HTML, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': 'inline; filename="plantillas-derecho-de-peticion-tumbatumulta.html"',
    },
  });
}

const DOCUMENT_HTML = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<title>Plantillas de derecho de petición — TumbaTuMulta</title>
<style>
  body { font-family: Georgia, 'Times New Roman', serif; max-width: 720px; margin: 2rem auto; padding: 0 1.5rem; line-height: 1.6; color: #1e293b; }
  h1 { font-size: 1.6rem; border-bottom: 3px solid #16a34a; padding-bottom: 0.5rem; }
  h2 { font-size: 1.2rem; color: #15803d; margin-top: 2.5rem; }
  .aviso { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 1rem; font-size: 0.9rem; }
  .plantilla { white-space: pre-wrap; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem; font-family: 'Courier New', monospace; font-size: 0.85rem; }
  .legal { font-size: 0.8rem; color: #64748b; margin-top: 3rem; border-top: 1px solid #e2e8f0; padding-top: 1rem; }
  @media print { body { margin: 0; padding: 1cm; } }
</style>
</head>
<body>
<h1>Plantillas de derecho de petición para tu multa de tránsito</h1>
<p class="aviso">Producto digital de TumbaTuMulta. Reemplaza todo lo que está entre corchetes
[ASÍ] con tus datos reales antes de radicar. Esto no es asesoría legal individual — ver el
aviso al final.</p>

<h2>Cómo usar estas plantillas</h2>
<ol>
<li>Elige la plantilla que corresponda a tu situación.</li>
<li>Reemplaza todo lo que está entre corchetes con tus datos reales.</li>
<li>Confirma el nombre y la dirección exacta de la entidad (revisa el directorio de secretarías de tránsito en tumbatumulta.co si no la tienes).</li>
<li>Imprime dos copias, o guarda el comprobante si radicas virtualmente.</li>
<li>Anota la fecha de radicación — desde ahí corren los 15 días hábiles de respuesta.</li>
</ol>

<h2>Plantilla 1: Solicitar copia del expediente de cobro coactivo</h2>
<div class="plantilla">[Ciudad], [fecha]

Señores
[NOMBRE DE LA ENTIDAD]
[Dirección de la entidad]
[Ciudad]

Referencia: Derecho de petición — solicitud de copia de expediente de cobro coactivo

Yo, [NOMBRE COMPLETO], identificado(a) con cédula de ciudadanía No. [NÚMERO], con domicilio en
[DIRECCIÓN DE NOTIFICACIÓN], acudo respetuosamente ante su despacho para, en ejercicio del
derecho de petición consagrado en el artículo 23 de la Constitución Política y regulado por la
Ley 1437 de 2011 (CPACA), modificada por la Ley 1755 de 2015, solicitar:

1. Copia completa del expediente del proceso de cobro coactivo adelantado en mi contra respecto
   del comparendo No. [NÚMERO DE COMPARENDO, si lo tienes], incluyendo:
   a. El mandamiento de pago.
   b. El título ejecutivo (resolución que impuso la sanción).
   c. La constancia de ejecutoria de dicha resolución.
   d. Las constancias de notificación tanto de la resolución sancionatoria como del mandamiento
      de pago, con indicación de fecha y medio de notificación.

Fundamento esta solicitud en el artículo 5 del CPACA, que reconoce el derecho de toda persona a
conocer el estado de cualquier actuación que la afecte y a obtener copias de los documentos que
reposan en el respectivo expediente.

Solicito respuesta dentro de los términos que establece la ley (artículo 14 CPACA), y que la
respuesta se envíe a la siguiente dirección de notificación: [DIRECCIÓN FÍSICA Y/O CORREO
ELECTRÓNICO].

Adjunto: [cédula de ciudadanía / pantallazo del SIMIT / otro documento que tengas].

Cordialmente,

[FIRMA]
[NOMBRE COMPLETO]
C.C. [NÚMERO]</div>

<h2>Plantilla 2: Solicitar declaratoria de prescripción</h2>
<div class="plantilla">[Ciudad], [fecha]

Señores
[NOMBRE DE LA ENTIDAD]
[Dirección de la entidad]
[Ciudad]

Referencia: Derecho de petición — solicitud de declaratoria de prescripción de la acción de cobro

Yo, [NOMBRE COMPLETO], identificado(a) con cédula de ciudadanía No. [NÚMERO], con domicilio en
[DIRECCIÓN DE NOTIFICACIÓN], acudo respetuosamente ante su despacho para solicitar, en ejercicio
del derecho de petición (artículo 23 Constitución Política, Ley 1437 de 2011 modificada por la
Ley 1755 de 2015):

1. Que se declare la PRESCRIPCIÓN de la acción de cobro de la multa de tránsito identificada con
   el comparendo No. [NÚMERO DE COMPARENDO], impuesta el día [FECHA DE LA INFRACCIÓN], con
   fundamento en el artículo 159 de la Ley 769 de 2002 (Código Nacional de Tránsito), que fija en
   tres (3) años el término de prescripción de la acción de cobro, contado desde la fecha de la
   infracción.

2. Que se actualice mi registro ante el SIMIT y el RUNT en consecuencia, retirando cualquier
   bloqueo asociado a esta obligación.

Sustento esta solicitud en que, desde la fecha de la infracción ([FECHA]) hasta la fecha de este
escrito, han transcurrido más de tres (3) años sin que se me haya notificado válidamente un
mandamiento de pago que interrumpiera dicho término.

Solicito respuesta dentro de los términos de ley, enviada a: [DIRECCIÓN FÍSICA Y/O CORREO
ELECTRÓNICO].

Adjunto: [pantallazo del SIMIT, cédula de ciudadanía].

Cordialmente,

[FIRMA]
[NOMBRE COMPLETO]
C.C. [NÚMERO]</div>

<h2>Plantilla 3: Solicitar certificado de calibración de una fotomulta</h2>
<div class="plantilla">[Ciudad], [fecha]

Señores
[NOMBRE DE LA ENTIDAD]
[Dirección de la entidad]
[Ciudad]

Referencia: Derecho de petición — solicitud de certificado de calibración de equipo de fotodetección

Yo, [NOMBRE COMPLETO], identificado(a) con cédula de ciudadanía No. [NÚMERO], con domicilio en
[DIRECCIÓN DE NOTIFICACIÓN], en relación con el comparendo No. [NÚMERO DE COMPARENDO] impuesto el
día [FECHA] mediante sistema de detección electrónica, solicito respetuosamente:

1. Copia del certificado de calibración vigente, a la fecha de los hechos, del equipo que generó
   el comparendo de la referencia, incluyendo fecha de expedición, vigencia y entidad certificadora.
2. Indicación de si el equipo contaba, a la fecha de los hechos, con la autorización o
   certificación correspondiente ante la autoridad de metrología legal competente.
3. Copia del registro de señalización previa instalada en el punto donde se ubica el equipo,
   vigente a la fecha de los hechos.

Fundamento esta solicitud en la Ley 1843 de 2017, que regula los sistemas automáticos y
semiautomáticos de detección de infracciones, y en el artículo 23 de la Constitución Política.

Solicito respuesta dentro de los términos de ley, enviada a: [DIRECCIÓN FÍSICA Y/O CORREO
ELECTRÓNICO].

Adjunto: [pantallazo del comparendo o del SIMIT, cédula de ciudadanía].

Cordialmente,

[FIRMA]
[NOMBRE COMPLETO]
C.C. [NÚMERO]</div>

<h2>Plantilla 4: Solicitar declaratoria de caducidad</h2>
<div class="plantilla">[Ciudad], [fecha]

Señores
[NOMBRE DE LA ENTIDAD]
[Dirección de la entidad]
[Ciudad]

Referencia: Derecho de petición — solicitud de declaratoria de caducidad de la facultad sancionatoria

Yo, [NOMBRE COMPLETO], identificado(a) con cédula de ciudadanía No. [NÚMERO], con domicilio en
[DIRECCIÓN DE NOTIFICACIÓN], solicito respetuosamente que se declare la CADUCIDAD de la facultad
sancionatoria de la autoridad respecto del comparendo No. [NÚMERO DE COMPARENDO], impuesto el día
[FECHA DE LA INFRACCIÓN].

Fundamento esta solicitud en el artículo 161 de la Ley 769 de 2002 (Código Nacional de Tránsito),
que otorga a la autoridad de tránsito un (1) año, contado desde la fecha de la infracción, para
proferir la resolución que imponga la sanción. A la fecha de este escrito, ha transcurrido más de
un (1) año desde la infracción sin que se me haya notificado resolución sancionatoria alguna que
haya quedado en firme dentro de dicho término.

Solicito, en consecuencia, que se declare la caducidad de la facultad sancionatoria y se
actualice mi registro ante el SIMIT y el RUNT.

Solicito respuesta dentro de los términos de ley, enviada a: [DIRECCIÓN FÍSICA Y/O CORREO
ELECTRÓNICO].

Adjunto: [pantallazo del SIMIT, cédula de ciudadanía].

Cordialmente,

[FIRMA]
[NOMBRE COMPLETO]
C.C. [NÚMERO]</div>

<h2>Plantilla 5: Reiterar una petición que fue respondida de forma evasiva</h2>
<div class="plantilla">[Ciudad], [fecha]

Señores
[NOMBRE DE LA ENTIDAD]
[Dirección de la entidad]
[Ciudad]

Referencia: Reiteración de derecho de petición radicado el [FECHA DE RADICACIÓN ORIGINAL],
número de radicado [NÚMERO SI LO TIENES]

Yo, [NOMBRE COMPLETO], identificado(a) con cédula de ciudadanía No. [NÚMERO], me permito reiterar
la petición radicada el [FECHA], mediante la cual solicité [RESUME AQUÍ QUÉ PEDISTE].

La respuesta recibida el [FECHA DE LA RESPUESTA] no resuelve de fondo lo solicitado, por las
siguientes razones concretas:

1. [Ej.: No se adjuntaron los documentos pedidos.]
2. [Ej.: La fecha citada en la respuesta no coincide con la registrada en mi caso.]
3. [Ej.: La respuesta se limita a una fórmula genérica que no se refiere a los hechos concretos.]

De acuerdo con la jurisprudencia constante de la Corte Constitucional (entre otras, Sentencia
C-951 de 2014), "responder" no equivale a "resolver de fondo": una respuesta debe ser clara,
precisa, congruente con lo pedido y consistente para satisfacer el derecho de petición.

Solicito, por tanto, que se dé respuesta de fondo a mi solicitud original dentro de los términos
de ley, enviada a: [DIRECCIÓN FÍSICA Y/O CORREO ELECTRÓNICO]. De no obtener respuesta de fondo,
me veré en la necesidad de acudir a la acción de tutela para la protección de mi derecho
fundamental de petición.

Cordialmente,

[FIRMA]
[NOMBRE COMPLETO]
C.C. [NÚMERO]</div>

<p class="legal">Estas plantillas son un punto de partida redactado con base en la normativa
general (Ley 769 de 2002, CPACA, jurisprudencia citada) y deben adaptarse a los hechos concretos
de tu caso. No constituyen asesoría legal individual ni garantizan un resultado favorable. Para
casos de alto valor, riesgo de perder la licencia, o procesos judiciales ya iniciados, consulta
con un abogado. Si tu comparendo es por alcoholemia o embriaguez, estas plantillas no aplican de
la misma forma — consulta directamente con un abogado.</p>
</body>
</html>`;
