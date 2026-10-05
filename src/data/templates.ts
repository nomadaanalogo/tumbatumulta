import type { IconName } from '../components/Icon.astro';

export interface DocTemplate {
  slug: string;
  title: string;
  shortTitle: string;
  icon: IconName;
  summary: string;
  whoFor: string;
  requisitos: string[];
  tipo: 'Derecho de petición' | 'Acción de tutela';
  content: string;
}

export const TEMPLATES: DocTemplate[] = [
  {
    slug: 'comparendo-prescrito',
    title: 'Comparendo prescrito (más de 3 años)',
    shortTitle: 'Prescripción',
    icon: 'clock',
    tipo: 'Derecho de petición',
    summary:
      'Para cuando ya pasaron más de 3 años desde la infracción y nunca te notificaron válidamente un mandamiento de pago.',
    whoFor:
      'Úsala si tu comparendo tiene más de 3 años desde la fecha de la infracción (no de la notificación) y no te han notificado un mandamiento de pago, o si el único mandamiento que conoces también tiene ya más de 3 años sin que haya pasado nada más. El artículo 159 de la Ley 769 de 2002 le da a la autoridad 3 años para cobrar la multa; pasado ese plazo sin una notificación válida que lo interrumpa, la acción de cobro prescribe.',
    requisitos: [
      'La fecha exacta de la infracción (la del hecho, no la de notificación).',
      'El número del comparendo, si lo tienes a la mano.',
      'Idealmente, un pantallazo del SIMIT que confirme la fecha.',
    ],
    content: `[Ciudad], [fecha]

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
C.C. [NÚMERO]`,
  },
  {
    slug: 'cobro-coactivo-prescrito',
    title: 'Comparendo con cobro coactivo y prescrito (más de 6 años)',
    shortTitle: 'Cobro coactivo + prescripción',
    icon: 'lock',
    tipo: 'Derecho de petición',
    summary:
      'Para cuando ya te notificaron un mandamiento de pago, pero entre eso y hoy han pasado tantos años que, aun con la interrupción, la prescripción ya operó.',
    whoFor:
      'Úsala si ya existe un proceso de cobro coactivo en tu contra (te notificaron un mandamiento de pago) pero, contando desde la notificación de ese mandamiento, también han pasado más de 3 años sin ninguna otra actuación válida — o si, en general, desde la infracción original ya pasaron más de 6 años. El mandamiento de pago interrumpe la prescripción una sola vez (art. 818 Estatuto Tributario): el conteo se reinicia desde el día siguiente a su notificación, pero si desde ahí también pasaron 3 años más sin novedad, prescribe otra vez — y esta vez para terminar el proceso.',
    requisitos: [
      'Fecha de la infracción original.',
      'Fecha en que te notificaron el mandamiento de pago (revísala en el SIMIT o en la propia notificación).',
      'Si has recibido alguna actuación posterior al mandamiento (otra notificación, un embargo), la fecha de esa también.',
    ],
    content: `[Ciudad], [fecha]

Señores
[NOMBRE DE LA ENTIDAD]
[Dirección de la entidad]
[Ciudad]

Referencia: Derecho de petición — solicitud de declaratoria de prescripción y terminación del
proceso de cobro coactivo

Yo, [NOMBRE COMPLETO], identificado(a) con cédula de ciudadanía No. [NÚMERO], con domicilio en
[DIRECCIÓN DE NOTIFICACIÓN], acudo respetuosamente ante su despacho en relación con el proceso de
cobro coactivo adelantado en mi contra por el comparendo No. [NÚMERO DE COMPARENDO], impuesto el
día [FECHA DE LA INFRACCIÓN], para solicitar:

1. Que se declare la PRESCRIPCIÓN de la acción de cobro, con fundamento en el artículo 159 de la
   Ley 769 de 2002 y el artículo 818 del Estatuto Tributario (aplicable por remisión al cobro
   coactivo de obligaciones de tránsito).

2. Que, como consecuencia, se declare la TERMINACIÓN y el ARCHIVO del proceso de cobro coactivo
   identificado con el expediente No. [NÚMERO DE EXPEDIENTE, si lo tienes].

3. Que se levante cualquier medida cautelar (embargo, retención) que se haya decretado dentro de
   este proceso, si la hay.

4. Que se actualice mi registro ante el SIMIT y el RUNT, retirando el bloqueo asociado.

Sustento esta solicitud en los siguientes hechos: la infracción ocurrió el día [FECHA DE LA
INFRACCIÓN]. El mandamiento de pago me fue notificado el día [FECHA DE NOTIFICACIÓN DEL
MANDAMIENTO], fecha desde la cual, según el artículo 818 del Estatuto Tributario, el término de
prescripción se interrumpió y comenzó a correr de nuevo. Desde esa fecha hasta hoy han
transcurrido más de tres (3) años sin que se me haya notificado válidamente ninguna otra
actuación dentro del proceso que vuelva a interrumpir dicho término.

En consecuencia, incluso tomando como punto de partida la notificación del mandamiento de pago
—y no la fecha original de la infracción, que es aún más antigua—, la acción de cobro se
encuentra prescrita.

Solicito respuesta dentro de los términos de ley, enviada a: [DIRECCIÓN FÍSICA Y/O CORREO
ELECTRÓNICO].

Adjunto: [pantallazo del SIMIT, copia de la notificación del mandamiento de pago si la tienes,
cédula de ciudadanía].

Cordialmente,


[FIRMA]
[NOMBRE COMPLETO]
C.C. [NÚMERO]`,
  },
  {
    slug: 'solicitar-expediente',
    title: 'Solicitar el expediente del comparendo',
    shortTitle: 'Expediente completo',
    icon: 'document',
    tipo: 'Derecho de petición',
    summary:
      'Para verificar que todo esté en orden antes de pelear nada: pide la resolución, las notificaciones y, si aplica, el certificado de calibración.',
    whoFor:
      'Úsala cuando todavía no sabes con certeza en qué estado está tu caso: si la resolución sancionatoria quedó bien notificada, si ya hay mandamiento de pago, o si la fotomulta tenía todo en regla. Es el punto de partida razonable antes de alegar prescripción, caducidad o cualquier otro defecto — primero pides el expediente completo, y con esa información decides cuál de las otras plantillas usar.',
    requisitos: [
      'El número del comparendo (o al menos la fecha y el organismo de tránsito).',
      'Tu cédula de ciudadanía.',
      'Si es una fotomulta, vale la pena pedir también el certificado de calibración del equipo en el mismo escrito (ya está incluido abajo).',
    ],
    content: `[Ciudad], [fecha]

Señores
[NOMBRE DE LA ENTIDAD]
[Dirección de la entidad]
[Ciudad]

Referencia: Derecho de petición — solicitud de copia del expediente completo del comparendo

Yo, [NOMBRE COMPLETO], identificado(a) con cédula de ciudadanía No. [NÚMERO], con domicilio en
[DIRECCIÓN DE NOTIFICACIÓN], acudo respetuosamente ante su despacho para, en ejercicio del
derecho de petición consagrado en el artículo 23 de la Constitución Política y regulado por la
Ley 1437 de 2011 (CPACA), modificada por la Ley 1755 de 2015, solicitar copia completa del
expediente correspondiente al comparendo No. [NÚMERO DE COMPARENDO, si lo tienes], impuesto el
día [FECHA, si la sabes], incluyendo específicamente:

1. La resolución que impuso la sanción, con indicación de su fecha de expedición.
2. La constancia de notificación de dicha resolución (fecha y medio empleado).
3. La constancia de ejecutoria de la resolución (fecha en que quedó en firme).
4. Si existe, el mandamiento de pago, con su respectiva constancia de notificación.
5. Si el comparendo proviene de un sistema de detección electrónica (fotomulta), copia del
   certificado de calibración del equipo vigente a la fecha de los hechos, y del registro de
   señalización previa instalada en el punto.

Fundamento esta solicitud en el artículo 5 del CPACA, que reconoce el derecho de toda persona a
conocer el estado de cualquier actuación que la afecte y a obtener copias de los documentos que
reposan en el respectivo expediente.

Solicito respuesta dentro de los términos que establece la ley (artículo 14 CPACA), enviada a la
siguiente dirección de notificación: [DIRECCIÓN FÍSICA Y/O CORREO ELECTRÓNICO].

Adjunto: [cédula de ciudadanía, pantallazo del SIMIT si lo tienes].

Cordialmente,


[FIRMA]
[NOMBRE COMPLETO]
C.C. [NÚMERO]`,
  },
  {
    slug: 'tutela-derecho-de-peticion',
    title: 'Tutela por no respuesta o respuesta evasiva',
    shortTitle: 'Tutela',
    icon: 'scale',
    tipo: 'Acción de tutela',
    summary:
      'Para cuando ya radicaste un derecho de petición y la autoridad no respondió, o respondió sin resolver realmente lo que pediste.',
    whoFor:
      'Úsala solo después de haber intentado la vía normal: ya radicaste una petición (con cualquiera de las otras plantillas, o una propia) y pasó uno de estos dos casos: (1) se vencieron los 15 días hábiles sin ninguna respuesta, o (2) te respondieron, pero de forma evasiva, genérica o incompleta, sin referirse realmente a lo que pediste. El derecho de petición es un derecho fundamental, así que la tutela procede directamente ante un juez, sin necesidad de agotar más trámites antes. El juez falla en máximo 10 días hábiles.',
    requisitos: [
      'La fecha en que radicaste tu petición original y, si lo tienes, el número de radicado.',
      'Si te respondieron: la fecha de la respuesta y una idea clara de por qué no resuelve de fondo lo que pediste.',
      'Copia de la petición original (y de la respuesta, si la hay) para anexar.',
    ],
    content: `Señor(a) Juez (Reparto)
[Ciudad]

Referencia: ACCIÓN DE TUTELA para la protección del derecho fundamental de petición

Accionante: [NOMBRE COMPLETO], C.C. [NÚMERO]
Accionado: [NOMBRE DE LA ENTIDAD]

Yo, [NOMBRE COMPLETO], mayor de edad, identificado(a) con la cédula de ciudadanía citada al pie
de mi firma, obrando en nombre propio, con fundamento en el artículo 86 de la Constitución
Política y el Decreto 2591 de 1991, acudo ante su despacho para instaurar ACCIÓN DE TUTELA en
contra de [NOMBRE DE LA ENTIDAD], por la violación de mi derecho fundamental de petición
(artículo 23 C.P.), con base en los siguientes:

HECHOS

1. El día [FECHA DE RADICACIÓN], radiqué ante [NOMBRE DE LA ENTIDAD] un derecho de petición
   mediante el cual solicité [RESUME AQUÍ, EN UNA FRASE, QUÉ PEDISTE], identificado con el
   radicado No. [NÚMERO, SI LO TIENES].

2. [Si no hubo respuesta, usa este párrafo:] A la fecha de este escrito han transcurrido más de
   quince (15) días hábiles sin que la entidad haya dado respuesta alguna, superando el término
   que establece el artículo 14 del CPACA (Ley 1437 de 2011, modificado por la Ley 1755 de 2015).

   [Si hubo respuesta evasiva, usa este párrafo en su lugar:] El día [FECHA DE LA RESPUESTA]
   recibí respuesta de la entidad, la cual no resuelve de fondo lo solicitado, por cuanto
   [EXPLICA CON CLARIDAD: por ejemplo, no se pronuncia sobre lo pedido, es una fórmula genérica
   que no se refiere a los hechos de mi caso, o no adjunta los documentos solicitados].

3. [Opcional, bórralo si no aplica:] El día [FECHA], reiteré la petición señalando expresamente
   lo anterior, sin obtener a la fecha una respuesta de fondo.

DERECHO FUNDAMENTAL VULNERADO

El derecho de petición, consagrado en el artículo 23 de la Constitución Política y desarrollado
por la Ley 1755 de 2015. La Corte Constitucional ha señalado de forma reiterada (entre otras,
Sentencia C-951 de 2014) que "responder" no equivale a "resolver de fondo": toda respuesta debe
ser clara, precisa, de fondo, congruente con lo pedido, y dada a conocer efectivamente al
peticionario.

FUNDAMENTOS DE DERECHO

- Artículos 23 y 86 de la Constitución Política.
- Decreto 2591 de 1991.
- Artículo 14 del CPACA (Ley 1437 de 2011, modificado por la Ley 1755 de 2015).

PRETENSIONES

Respetuosamente solicito:

1. TUTELAR mi derecho fundamental de petición.
2. ORDENAR a [NOMBRE DE LA ENTIDAD] que, dentro de las cuarenta y ocho (48) horas siguientes a la
   notificación del fallo, dé respuesta de fondo, clara, precisa y congruente a mi petición
   radicada el [FECHA DE RADICACIÓN], con radicado No. [NÚMERO].

ANEXOS

- Copia de la petición radicada el [FECHA] (y de su reiteración, si aplica).
- Copia de la respuesta recibida, si la hay.
- Copia de mi cédula de ciudadanía.

JURAMENTO

Manifiesto bajo la gravedad del juramento que no he presentado otra acción de tutela por los
mismos hechos y derechos ante ninguna otra autoridad judicial.

NOTIFICACIONES

Al accionante, en: [DIRECCIÓN FÍSICA Y/O CORREO ELECTRÓNICO]
Al accionado, en: [DIRECCIÓN DE LA ENTIDAD, SI LA CONOCES]

Cordialmente,


[FIRMA]
[NOMBRE COMPLETO]
C.C. [NÚMERO]`,
  },
];
