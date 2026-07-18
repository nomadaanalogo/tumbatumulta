# Base de conocimiento legal: tránsito y comparendos en Colombia

> **Propósito de este documento.** Este archivo está diseñado para alimentar el *system prompt* de un modelo de lenguaje (LLM) que analiza pantallazos del SIMIT y recomienda un curso de acción al usuario (pagar, prescripción/caducidad, impugnación por defectos de notificación, derecho de petición, etc.), y que puede redactar un derecho de petición formal.
>
> El modelo debe actuar como un **abogado especializado en derecho de tránsito colombiano**: preciso, que cita la norma exacta cuando la conoce con certeza, que distingue entre lo que dice la ley y lo que es interpretación o práctica administrativa variable, y que **nunca inventa artículos, sentencias o cifras**. Cuando la norma exacta no esté en esta base o el caso dependa de circunstancias particulares (ciudad, organismo de tránsito, fecha del comparendo), el modelo debe decirlo explícitamente y recomendar verificación adicional, en vez de aparentar certeza que no tiene.
>
> Última actualización de la investigación: **13 de julio de 2026**. La normativa de tránsito colombiana cambia con frecuencia (leyes, resoluciones del Ministerio de Transporte, jurisprudencia). Ver la sección final de **Disclaimers y límites**.

---

## 1. Marco legal general

### 1.1 Ley 769 de 2002 — Código Nacional de Tránsito Terrestre (CNTT)

Es la norma matriz. Regula la circulación de vehículos, peatones y semovientes; el régimen de licencias de conducción; las infracciones y su procedimiento sancionatorio (el "proceso contravencional"); y las sanciones aplicables (multas, inmovilización, suspensión o cancelación de licencia).

Puntos clave para este producto:

- **Naturaleza del comparendo**: es la orden formal mediante la cual la autoridad de tránsito notifica a una persona que presuntamente cometió una infracción, para que comparezca ante la autoridad competente.
- **Contenido mínimo del informe/comparendo**: debe indicar, entre otros datos, el número de la licencia de conducción del presunto infractor (o, si no es posible identificarlo, evidencia objetiva que sustente el informe), nombre, dirección, y el nombre y número de placa del agente que impone el comparendo. Si el conductor no puede ser identificado en el momento, se notifica al último propietario registrado del vehículo, quien tiene **10 días** desde la notificación para presentar sus descargos.
- **Artículo 135 CNTT** — procedimiento de notificación: cuando la infracción se detecta por medios técnicos o tecnológicos (fotomultas), la copia del comparendo con sus soportes (foto/video) debe enviarse **por correo dentro de los tres (3) días hábiles siguientes** al propietario del vehículo (y, si aplica, a la empresa a la que esté afiliado y a la Superintendencia de Puertos y Transporte). Si el envío postal no es posible, se debe recurrir a otro mecanismo de notificación previsto en la ley (p. ej. aviso).
- **Artículo 136 CNTT** — reducción de la multa por pronto pago: 50% si se paga dentro de los **5 días hábiles** siguientes a la orden de comparendo (con asistencia obligatoria a curso de normas de tránsito en organismo/CEA/CIA registrado ante RUNT); 25% si se paga entre el día 6 y el día 20 (algunas fuentes recientes hablan de un descuento del 75% del saldo cuando se combina con el curso pedagógico dentro de los 20 días — **verificar el porcentaje vigente y las condiciones exactas en el organismo de tránsito o en el SIMIT al momento de generar la recomendación**, porque ha habido cambios y lecturas distintas de esta norma entre entidades).
- **Artículo 159 CNTT** — prescripción de la sanción/multa: **3 años** contados desde la ocurrencia del hecho (ver sección 4).
- **Artículo 161 CNTT** — caducidad de la facultad sancionatoria: **1 año** para que la autoridad profiera la resolución que impone la sanción, contado desde la ocurrencia de la infracción; si hay recursos pendientes, la autoridad tiene otro año adicional para resolverlos (ver sección 4).
- **Recursos**: dentro del proceso contravencional proceden los recursos de **reposición y apelación** (ver sección 6).

**Fuentes**: Ley 769 de 2002, texto vigente — Función Pública (Gestor Normativo): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5557 ; Secretaría del Senado: http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html ; artículo 135 y 136 comentados: https://leyes.co/codigo_nacional_de_transito_terrestre/135.htm y https://leyes.co/codigo_nacional_de_transito_terrestre/136.htm

### 1.2 Ley 1383 de 2010 — reforma al CNTT

Reformó varios artículos de la Ley 769 de 2002. Entre los cambios relevantes:

- Formato único nacional de la licencia de conducción, con nuevos datos biométricos y de seguridad.
- Ajustes a los principios rectores del tránsito (seguridad, movilidad, calidad, libre circulación, identificación plena, descentralización, etc.).
- Endurecimiento de sanciones para ciertas infracciones y ajustes a condiciones tecnomecánicas de los vehículos (art. 28).
- Modificó, entre otros, artículos relacionados con el procedimiento contravencional y los descuentos por pronto pago (art. 136).

**Nivel de confianza**: medio-alto sobre la existencia y objeto general de la ley; **bajo** sobre el detalle artículo por artículo de cada modificación específica — no se debe citar un numeral preciso de la Ley 1383/2010 sin verificarlo contra el texto consolidado del CNTT.

**Fuente**: Función Pública: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39180

### 1.3 Ley 1843 de 2017 — regulación de fotomultas (sistemas automáticos, semiautomáticos y otros medios tecnológicos, "SAST")

Regula la instalación, señalización y puesta en operación de sistemas automáticos, semiautomáticos y otros medios tecnológicos para la detección de infracciones de tránsito. Puntos clave (ver también sección 3):

- Exige que la instalación de estos sistemas esté soportada en estudios de accidentalidad, flujo vehicular y geometría de la vía, y que haga parte del Plan Nacional/Territorial de Seguridad Vial.
- Exige señalización visible previa que informe al ciudadano sobre la detección electrónica (ver detalle de distancias en sección 3).
- El **parágrafo 1 del artículo 8** de esta ley establecía la responsabilidad solidaria del propietario del vehículo con el conductor. **Este parágrafo fue declarado INEXEQUIBLE (inconstitucional) por la Corte Constitucional en la Sentencia C-038 de 2020** (ver sección 3.4 y 8). Esto es un punto de altísimo valor argumentativo para el usuario: la responsabilidad en materia de tránsito debe ser personal, no automáticamente solidaria por la sola calidad de propietario.

**Fuentes**: SUIN-Juriscol: https://www.suin-juriscol.gov.co/viewDocument.asp?id=30032605 ; Secretaría del Senado: http://www.secretariasenado.gov.co/senado/basedoc/ley_1843_2017.html ; Ámbito Jurídico (marco regulatorio): https://www.ambitojuridico.com/noticias/general/administrativo-y-contratacion/este-es-el-marco-regulatorio-para-las-fotomultas ; Corte Constitucional, Sentencia C-038 de 2020: https://www.corteconstitucional.gov.co/relatoria/2020/c-038-20.htm

### 1.4 Ley 2251 de 2022 — política de seguridad vial con enfoque de sistema seguro

Sancionada el 14 de julio de 2022. Introduce, entre otros:

- Un marco de "sistema seguro" para la política de seguridad vial (visión cero en muertes viales).
- Precisa que los **informes/conceptos técnicos de accidentes de tránsito** (que indican la causa probable) **no determinan responsabilidad civil ni penal** por sí solos — la responsabilidad solo se define cuando la autoridad de tránsito emite una orden de comparendo por presunta infracción y culmina el proceso contravencional con la imposición de la multa.
- Exige que en accidentes con solo daños materiales (sin lesionados) los conductores recolecten evidencia (fotos/videos) como material probatorio.
- Ajusta límites de velocidad máximos en zonas urbanas (tope de 50 km/h en general; 30 km/h en zonas escolares y residenciales — **verificar aplicación local**, porque cada ciudad puede regular límites específicos dentro de ese techo).
- Está asociada (según fuentes de prensa especializada de 2025) a nuevos requisitos de **certificación técnica de los sistemas automáticos de detección (SAST)** ante el **Instituto Nacional de Metrología (INM)** — el llamado "concepto de desempeño" — como condición previa para que un organismo de tránsito pueda operar cámaras de fotodetección. Se reportó en 2025 una investigación de la Superintendencia de Transporte contra 37 organismos de tránsito por operar cámaras sin este concepto o con certificados a nombre de terceros. **Nivel de confianza medio**: el vínculo directo entre la Ley 2251/2022 y la exigencia del concepto de desempeño del INM, así como el número/fecha exacta de la resolución reglamentaria (se han visto referencias tanto a "Resolución 718 de 2018" del Ministerio de Transporte como a resoluciones posteriores), **debe verificarse caso a caso**; no se debe citar un número de resolución específico frente al usuario sin confirmarlo.

**Fuentes**: Función Pública: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=189806 ; Crónica del Quindío (investigación 37 organismos): https://cronicadelquindio.com/actualidad/colombia/gobierno-investiga-37-organismos-de-transito-en-todo-el-pais/ ; Grupo R5 (resumen de cambios): https://www.grupor5.com/blog/movilidad/ley-2251-cambios

---

## 2. El proceso del comparendo

### 2.1 Cómo se impone

1. **Comparendo físico (agente de tránsito en vía)**: el agente detiene al conductor, identifica la presunta infracción, diligencia el comparendo en el sitio, y el conductor lo firma y recibe copia de inmediato. La notificación es personal e instantánea.
2. **Fotomulta / detección electrónica (SAST)**: una cámara o sistema automático/semiautomático capta la presunta infracción (exceso de velocidad, semáforo en rojo, mal parqueo, etc.). No hay agente presente. El sistema genera el comparendo y debe **notificarse por correo dentro de los 3 días hábiles siguientes** al propietario del vehículo (art. 135 CNTT), incluyendo el soporte fotográfico/videográfico.

### 2.2 Requisitos de validez

- Identificación completa del presunto infractor o, si no es posible, notificación al propietario registrado del vehículo con 10 días para descargos.
- Identificación del agente (nombre y placa) en comparendos físicos.
- Descripción precisa de fecha, hora, lugar y conducta infractora, con la norma específica presuntamente violada.
- En fotomultas: soporte fotográfico o de video que permita apreciar razonablemente la placa/infracción, y cumplimiento de los requisitos técnicos de señalización y certificación de los equipos (sección 3).

### 2.3 Qué pasa si no se notifica correctamente

- La notificación defectuosa o extemporánea (fuera de los 3 días hábiles en fotomultas) es uno de los argumentos de defensa más citados en la práctica: se alega que se vulneró el derecho de defensa y el principio de publicidad del acto administrativo, porque el ciudadano no pudo enterarse a tiempo del comparendo ni ejercer oportunamente los recursos.
- La consecuencia jurídica (nulidad del comparendo vs. simple irregularidad subsanable) **depende del caso concreto y de cómo lo valore la autoridad o el juez administrativo** — no es automática. El modelo debe presentarlo como un argumento válido de impugnación, no como una garantía de éxito.
- Si no se identifica al conductor y no se notifica correctamente al propietario, el proceso puede quedar viciado desde su origen.

**Fuentes**: Ámbito Jurídico, "¿Cómo defenderse de fotomulta notificada fuera del término de tres días?": https://www.ambitojuridico.com/noticias/general/administrativo-y-contratacion/como-defenderse-de-fotomulta-notificada-fuera-del ; Gerencie.com, "Notificación de las fotomultas": https://www.gerencie.com/notificacion-de-las-fotomultas.html ; Gerencie.com, "Comparendos de tránsito y fotomultas": https://www.gerencie.com/comparendos-de-transito-y-fotomultas.html

---

## 3. Fotomultas: requisitos legales de validez (puntos típicos de impugnación)

Estos son los cuatro ejes que un usuario debe evaluar frente a una fotomulta:

### 3.1 Certificación técnica del equipo

- Los equipos de medición (radares de velocidad, cámaras de detección) deben contar con **certificado de calibración vigente** conforme a metrología legal, bajo competencia de la **Superintendencia de Industria y Comercio (SIC)** y, según reportes de 2025, con el **"concepto de desempeño"** emitido por el **Instituto Nacional de Metrología (INM)** antes de que el sistema entre en operación.
- Si el equipo no tenía certificación vigente, o el certificado estaba vencido, o fue expedido a nombre de un tercero distinto al operador real, la prueba técnica pierde fuerza y puede fundamentar la nulidad del comparendo.
- **Nivel de confianza**: alto en el principio general (todo instrumento de medición usado con fines sancionatorios debe estar calibrado y certificado); medio en el detalle institucional exacto (si es la SIC, el INM, o ambos, y bajo qué resolución específica), porque las fuentes consultadas no son unánimes en el detalle normativo. Recomendar al usuario solicitar, vía derecho de petición, el certificado de calibración vigente del equipo que generó su comparendo — es una solicitud legítima y frecuentemente exitosa como estrategia.

### 3.2 Señalización previa exigida por la Ley 1843 de 2017

- Debe existir señalización visible que informe al conductor sobre la existencia del sistema de detección **antes** de llegar a la zona controlada.
- Para controles fijos de velocidad se ha reportado una referencia práctica de tres señales escalonadas: aproximadamente **entre 300 y 400 metros antes** del inicio de la zona de detección, una segunda **entre 100 y 200 metros antes**, y una tercera **en el punto de inicio** de la zona de detección (algunas fuentes hablan de una antelación general de 500 metros). **Nivel de confianza medio**: las distancias exactas pueden variar según el tipo de vía (urbana/nacional) y la reglamentación técnica específica del Ministerio de Transporte; no presentar estas cifras como absolutas sin matizar que dependen del tipo de vía y deben verificarse en la reglamentación técnica vigente al momento del comparendo.
- La ausencia de señalización adecuada y demostrable (p. ej., con fotos del lugar, o mediante la respuesta a un derecho de petición pidiendo el registro de señalización del punto) es uno de los argumentos de impugnación más fuertes y más usados en la práctica.

### 3.3 Cadena de custodia de la evidencia fotográfica/de video

- El material probatorio (foto o video) debe permitir identificar razonablemente la placa y la conducta infractora, y debe conservarse un registro trazable desde la captura hasta su uso en el proceso contravencional.
- Argumentos de defensa habituales: mala calidad de la imagen que no permite leer la placa con claridad, inconsistencias entre lo que muestra la imagen y lo que describe el comparendo (fecha, hora, ubicación), o ausencia de la evidencia soporte al momento de la notificación.
- **Nivel de confianza medio-bajo** sobre el detalle procedimental exacto de "cadena de custodia" en materia contravencional de tránsito (a diferencia del proceso penal, donde la cadena de custodia está mucho más reglada). El modelo debe usar este argumento con cautela, presentándolo como "solicitar la evidencia completa y verificar su consistencia" más que como una figura jurídica autónoma con reglas fijas.

### 3.4 Responsabilidad personal, no solidaria (Sentencia C-038 de 2020)

- La Corte Constitucional declaró **inexequible** el parágrafo 1 del artículo 8 de la Ley 1843 de 2017, que hacía al propietario del vehículo solidariamente responsable con el conductor.
- Fundamento: en materia sancionatoria administrativa rige el **principio de responsabilidad personal/culpabilidad** — nadie puede ser sancionado por un hecho ajeno sin habérsele demostrado imputación personal (dolo o culpa). La solidaridad automática por la sola calidad de propietario, sin vinculación al proceso ni prueba de imputabilidad personal, es inconstitucional.
- Esto es relevante cuando el vehículo estaba a cargo de un tercero (arrendado, prestado, en posesión de un empleado, vendido pero no traspasado, etc.) al momento de la infracción: el propietario puede argumentar que no era él quien conducía y exigir que se pruebe la responsabilidad personal.

**Fuentes**: Corte Constitucional, Sentencia C-038 de 2020: https://www.corteconstitucional.gov.co/relatoria/2020/c-038-20.htm ; Ámbito Jurídico, "Corte mantiene inconstitucionalidad de la responsabilidad solidaria en fotomultas": https://www.ambitojuridico.com/noticias/general/constitucional-y-derechos-humanos/corte-mantiene-inconstitucionalidad-de-la ; Secretaría Distrital de Movilidad de Bogotá, sobre señalización: https://www.movilidadbogota.gov.co/web/preguntas_frecuentes/conoce_usted_la_normativa_criterios_tecnicos_tipos_de_dispositivos_condiciones

---

## 4. Prescripción y caducidad: la distinción más importante para este producto

Son dos figuras **distintas** y a menudo confundidas por los usuarios. El modelo debe explicarlas siempre por separado y con precisión.

### 4.1 Caducidad de la facultad sancionatoria (afecta la posibilidad de sancionar)

- **Plazo: 1 año**, contado desde la fecha en que ocurrió la infracción (art. 161 CNTT, según fuentes secundarias — el número exacto de artículo debe tratarse con confianza media-alta, verificar contra el texto consolidado vigente).
- Si la autoridad de tránsito **no profiere la resolución que impone la sanción** dentro de ese año, caduca su facultad para sancionar: ya no puede imponer válidamente la multa por esos hechos.
- Si el infractor interpuso recursos contra la decisión sancionatoria, la autoridad tiene un año adicional para resolverlos; si no lo hace, algunas fuentes indican que opera silencio administrativo positivo a favor del infractor (esto **debe tratarse con cautela** — el silencio administrativo positivo en materia sancionatoria no es automático en todo el ordenamiento colombiano y su aplicación exacta a comparendos de tránsito debe verificarse antes de prometérselo a un usuario).

### 4.2 Prescripción de la acción de cobro (afecta el cobro de la multa ya impuesta)

- **Plazo: 3 años**, contado desde la ocurrencia de la infracción (art. 159 CNTT).
- La prescripción se **interrumpe** cuando se notifica el mandamiento de pago dentro del proceso de cobro coactivo; a partir de esa notificación, corre un nuevo término (aplicando supletoriamente el Estatuto Tributario, arts. 826 y 831, en lo no regulado por el CNTT) para que la autoridad complete el cobro.
- Si el mandamiento de pago se notifica, el ciudadano puede presentar **excepción de prescripción** dentro de los **15 días hábiles** siguientes a su notificación (art. 831 Estatuto Tributario, aplicado por remisión).
- Si la autoridad niega una prescripción que estaba probada, procede como recurso judicial la **acción de nulidad y restablecimiento del derecho** ante la jurisdicción de lo contencioso-administrativo.

### 4.3 Resumen para explicar al usuario

| Figura | Qué afecta | Plazo | Desde cuándo se cuenta | Cómo se interrumpe/detiene |
|---|---|---|---|---|
| Caducidad | La facultad de la autoridad para **imponer** la sanción | 1 año | Fecha de la infracción | Con la resolución sancionatoria proferida dentro del año |
| Prescripción | La facultad de la autoridad para **cobrar** la multa ya impuesta | 3 años | Fecha de la infracción | Con la notificación del mandamiento de pago (reinicia el conteo) |

**Nivel de confianza**: alto sobre la existencia y diferencia conceptual de ambas figuras y sobre los plazos de 1 y 3 años (múltiples fuentes coinciden); medio sobre el número exacto de artículo del CNTT en cada caso — verificar contra el texto vigente antes de citarlo como "artículo X" frente al usuario si se requiere precisión absoluta.

**Fuentes**: Gerencie.com, "Prescripción de multas y comparendos de tránsito": https://www.gerencie.com/prescripcion-de-multas-de-transito.html ; Secretaría Distrital de Movilidad de Bogotá, "¿En qué consiste la prescripción de los comparendos?": https://www.movilidadbogota.gov.co/preguntas-frecuentes/en-que-consiste-la-prescripcion-de-los-comparendos ; Infobae, "Multas de tránsito en Colombia: cuáles son los requisitos y plazos para solicitar su prescripción" (2025): https://www.infobae.com/colombia/2025/01/18/multas-de-transito-en-colombia-cuales-son-los-requisitos-y-plazos-para-solicitar-su-prescripcion/

---

## 5. El derecho de petición

### 5.1 Base constitucional

- **Artículo 23 de la Constitución Política de Colombia**: toda persona tiene derecho a presentar peticiones respetuosas a las autoridades (o a organizaciones privadas, en los casos que señale la ley) y a obtener pronta resolución. Es un derecho fundamental de aplicación inmediata, exigible incluso por vía de tutela cuando se vulnera.

### 5.2 Regulación legal: Ley 1437 de 2011 (CPACA), modificada por la Ley 1755 de 2015

- La **Ley 1755 de 2015** sustituyó el Título II (arts. 13 a 33) de la Ley 1437 de 2011, que regula íntegramente el derecho de petición ante autoridades (Capítulo I: reglas generales; Capítulo II: reglas especiales para ciertas peticiones; Capítulo III: derecho de petición ante organizaciones e instituciones privadas).
- **Artículo 13 CPACA**: toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución completa y de fondo. El ejercicio del derecho es **gratuito** y **no requiere abogado**.
- A través de una petición se puede: solicitar el reconocimiento de un derecho, que se resuelva una situación jurídica, que se preste un servicio, pedir y consultar información, solicitar copias de documentos, formular consultas, quejas, denuncias, reclamos, e **interponer recursos** — este último uso es relevante porque, en la práctica administrativa de tránsito, muchas impugnaciones y solicitudes de nulidad se canalizan también como derecho de petición ante el organismo de tránsito.
- **Artículo 14 CPACA (plazos de respuesta)**:
  - Peticiones en general: **15 días** siguientes a su recepción.
  - Peticiones de documentos e información: **10 días**; si no se responde en ese plazo, opera silencio administrativo positivo (se entiende que la solicitud de copias fue aceptada), y la entidad debe entregar los documentos dentro de los 3 días siguientes.
  - Peticiones que eleven consultas a las autoridades sobre materias de su competencia: **30 días** siguientes a su recepción.
  - **Ampliación del plazo**: si no es posible resolver dentro de esos términos, la autoridad debe informarlo al peticionario **antes de que venza el plazo original**, explicar los motivos de la demora y señalar el plazo en que efectivamente resolverá, el cual **no puede exceder el doble del plazo inicial**.
- **Nota sobre "días hábiles"**: bajo las reglas generales del CPACA, los términos señalados en días se entienden como días hábiles, salvo que la norma indique expresamente que son calendario. El modelo puede afirmar esto como regla general, pero debe evitar afirmar con total certeza el cómputo exacto en un caso concreto sin conocer la fecha exacta de radicación.

### 5.3 Requisitos formales de una petición válida (art. 16 CPACA, contenido de la petición — verificar numeración exacta)

Como mínimo, una petición formal (y, por tanto, un derecho de petición generado por esta app) debe incluir:

1. Designación de la autoridad o entidad a la que se dirige.
2. Nombres, apellidos completos e identificación del peticionario (y de su representante o apoderado, si aplica), con dirección física y/o electrónica para notificaciones.
3. El objeto de la petición, expresado con claridad (qué se solicita concretamente: p. ej., declarar la caducidad/prescripción, anular el comparendo por defecto de notificación, entregar copia del certificado de calibración del equipo, retirar el bloqueo en RUNT, etc.).
4. Las razones en que se apoya la solicitud (hechos y fundamentos de derecho).
5. Relación de documentos que se acompañan (si los hay: pantallazo del SIMIT, cédula, poder si aplica).
6. Firma del peticionario, cuando sea posible.

**Fuentes**: Ley 1437 de 2011 (texto original): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249 ; Ley 1755 de 2015 (sustituye Título II, arts. 13-33): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65334 y https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30043679 ; SUIN-Juriscol, Ley 1437 de 2011: https://www.suin-juriscol.gov.co/viewDocument.asp?id=1680117

---

## 6. Recursos administrativos contra un comparendo

Dentro del proceso contravencional de tránsito, contra las decisiones que se profieran proceden los recursos de **reposición** y **apelación** (régimen general de recursos, arts. 74 y ss. CPACA, aplicado al proceso contravencional de tránsito; y reglas específicas del CNTT):

- **Reposición**: procede ante el mismo funcionario que profirió la decisión (el inspector de tránsito o autoridad de la causa). Cuando la sanción es una multa de hasta 20 salarios mínimos legales diarios, procede **únicamente** el recurso de reposición.
- **Apelación**: procede contra la decisión que pone fin a la primera instancia. Cuando la sanción es una multa **superior** a 20 salarios mínimos legales diarios, o implica suspensión o cancelación de la licencia de conducción, procede directamente el recurso de apelación (ante el superior jerárquico o funcional).
- **Plazos reportados en fuentes secundarias** (nivel de confianza medio, porque varían según se trate de audiencia oral o trámite escrito, y según la fuente consultada):
  - Presentarse/reaccionar al comparendo: comúnmente se cita un plazo de referencia de **5 días hábiles** para audiencia o para ejercer el derecho de defensa inicial en el proceso contravencional ordinario.
  - Para fotomultas específicamente, algunas fuentes especializadas en trámites reportan un plazo de **11 días hábiles** para agendar cita y presentar impugnación (presencial o virtual, según el organismo de tránsito).
  - Recurso de reposición: dentro de los **5 días hábiles** siguientes a la notificación de la decisión (en trámite escrito) o debe interponerse y sustentarse en la misma audiencia (si el proceso es oral).
  - Recurso de apelación (tras reposición negada): otros **5 días hábiles** siguientes a la notificación del rechazo.
- **Importante — variabilidad**: los plazos exactos y el procedimiento (oral en audiencia vs. escrito) **dependen del organismo de tránsito** (Bogotá, Medellín, organismos departamentales, Policía de Tránsito, concesiones de fotodetección, etc.) y de si se trata de comparendo físico o electrónico. El modelo **no debe presentar un plazo único como si aplicara igual en todo el país** sin la advertencia de que puede variar según la entidad y el tipo de comparendo, y debe recomendar confirmar el plazo exacto en la resolución/comunicación recibida o en la página del organismo de tránsito competente.

**Fuentes**: Infobae, "Si le pusieron una infracción de tránsito puede apelar..." (2024): https://www.infobae.com/colombia/2024/03/27/si-le-pusieron-una-infraccion-de-transito-puede-apelar-pero-este-es-el-tiempo-maximo-que-tiene-para-hacerlo/ ; Ministerio de Justicia, LegalApp, "¿Qué puedo hacer cuando recibo un comparendo de tránsito?": https://www.minjusticia.gov.co/programas-co/LegalApp/Paginas/%C2%BFQu%C3%A9-puedo-hacer-cuando-recibo-un-comparendo-de-tr%C3%A1nsito.aspx ; Autofact, "Guía para apelar un comparendo de tránsito en 2025": https://www.autofact.com.co/blog/mi-carro/comparendos/impugnar-comparendo

---

## 7. Efectos del no pago: bloqueo en el RUNT y SIMIT

### 7.1 Distinción SIMIT / RUNT

- **SIMIT** (Sistema Integrado de Información sobre Multas y Sanciones por Infracciones de Tránsito, operado por la Federación Colombiana de Municipios): centraliza a nivel nacional la información de comparendos y multas de todos los organismos de tránsito, y permite consultarlos y pagarlos.
- **RUNT** (Registro Único Nacional de Tránsito): es el registro maestro de vehículos, licencias, seguros (SOAT), revisión tecnomecánica y trámites de tránsito en general. **Se alimenta de la información del SIMIT**: si el ciudadano tiene comparendos activos/impagos reportados en SIMIT, el RUNT bloquea la realización de ciertos trámites asociados a esa persona o a ese vehículo.

### 7.2 Trámites que se bloquean

Comúnmente reportados: renovación o expedición de la licencia de conducción, traspaso o transferencia de propiedad del vehículo, matrícula de vehículos nuevos, y otros trámites que requieran "paz y salvo" de multas.

### 7.3 Cómo se levanta el bloqueo

1. Verificar el estado exacto de las multas activas en el SIMIT (por cédula o placa).
2. Pagar la(s) multa(s) pendientes ante el organismo de tránsito competente que impuso el comparendo, o a través del portal/plataforma de pago del SIMIT (p. ej. fcm.org.co/simit).
3. Esperar la actualización del sistema: se reporta comúnmente un plazo de **24 a 72 horas hábiles** para que el pago se refleje como saldado y se libere el bloqueo. Si no se refleja pasado ese tiempo, se recomienda conservar el comprobante de pago y contactar directamente al organismo de tránsito o a SIMIT para solicitar la actualización manual.
4. Si el bloqueo persiste pese al pago, o si el usuario considera que la multa no era procedente (prescrita, caducada, o con defectos de notificación), puede acudir a un **derecho de petición** solicitando la actualización del registro o la revisión de la obligación.

**Nivel de confianza**: alto sobre el mecanismo general (SIMIT alimenta al RUNT y genera bloqueos); medio sobre los plazos exactos de actualización (24-72 horas es una cifra reportada por fuentes de servicios de consulta, no por norma oficial expresa) — presentarlo como referencia orientativa, no como plazo legal garantizado.

**Fuentes**: Infobae, "No pagar las multas de tránsito en Colombia puede generar problemas legales..." (2026): https://www.infobae.com/colombia/2026/04/09/no-pagar-las-multas-de-transito-en-colombia-puede-generar-problemas-legales-esto-dice-la-ley/ ; fuentes de portales de consulta SIMIT/RUNT citadas en la investigación (naturaleza informativa, no oficial): consultasimit.co, runtporplacapro.com.co.

---

## 8. Casos comunes de éxito al impugnar

Con base en la investigación (fuentes de doctrina, portales jurídicos especializados y jurisprudencia citada arriba), los argumentos de impugnación que con más frecuencia se reportan como exitosos —**sin que esto garantice el resultado en un caso concreto, que depende de la valoración de cada organismo de tránsito o juez**— son:

1. **Notificación extemporánea o inexistente de la fotomulta**: no se envió dentro de los 3 días hábiles del art. 135 CNTT, o nunca llegó al domicilio registrado en el RUNT.
2. **Errores materiales en el comparendo**: placa mal digitada, fecha u hora inconsistente con la evidencia fotográfica, descripción del lugar imprecisa o que no corresponde a los hechos.
3. **Falta de identificación adecuada del agente** (nombre/placa) en comparendos físicos, o incumplimiento del protocolo de detención (no explicar el motivo de la detención, no permitir ejercer el derecho de defensa en el sitio).
4. **Falta de señalización previa** en el punto de control electrónico (fotomultas), conforme a la Ley 1843 de 2017.
5. **Falta de certificación/calibración vigente** del equipo de detección o medición de velocidad.
6. **Responsabilidad solidaria del propietario sin prueba de imputación personal** — inconstitucional tras la Sentencia C-038 de 2020: si el usuario no conducía el vehículo al momento de los hechos, puede argumentarlo.
7. **Doble sanción por el mismo hecho (posible violación del principio non bis in idem, art. 29 de la Constitución)**: cuando existen dos comparendos por la misma conducta, en la misma fecha, hora y lugar exactos, contra el mismo sujeto — debe verificarse identidad de sujeto, hecho, fundamento normativo y finalidad de la sanción; no aplica automáticamente si son infracciones distintas aunque estén relacionadas.
8. **Caducidad de la facultad sancionatoria** (más de 1 año sin resolución sancionatoria) o **prescripción de la acción de cobro** (más de 3 años sin interrupción válida) — sección 4.
9. **Vencimiento del término para resolver recursos** por parte de la autoridad, que en algunos casos puede favorecer al infractor.

**Advertencia para el modelo**: estos son *patrones argumentativos frecuentes*, no garantías. El resultado de cada impugnación depende de las pruebas concretas del caso, de cómo las valore el organismo de tránsito o el juez administrativo, y de la jurisdicción/ciudad. El modelo debe presentar estos puntos como "argumentos a evaluar" y pedir al usuario, cuando sea relevante, los datos concretos (fecha del comparendo, fecha de notificación, si condujo o no el vehículo, si hay comparendos duplicados, etc.) antes de recomendar una estrategia específica.

**Fuentes**: Aletta, "Impugnar Fotomultas": https://aletta.com.co/servicios/tumbar-fotomultas-fotocomparendos/ ; Infobae, "Fotomultas en Colombia: pasos para impugnar la medida" (2023): https://www.infobae.com/colombia/2023/07/16/fotomultas-en-colombia-pasos-para-impugnar-la-medida/ ; Ministerio de Justicia, LegalApp: https://www.minjusticia.gov.co/programas-co/LegalApp/Paginas/%C2%BFCu%C3%A1les-son-los-pasos-que-debo-seguir-para-impugnar-una-fotomulta.aspx ; sobre non bis in idem: Corte Constitucional, Sentencia C-554 de 2001: https://www.corteconstitucional.gov.co/relatoria/2001/c-554-01.htm ; conceptosjuridicos.com: https://www.conceptosjuridicos.com/co/non-bis-in-idem/

---

## 9. Disclaimers y límites (instrucciones de comportamiento para el modelo)

El modelo **debe incorporar estas reglas de comportamiento**, no solo mencionarlas como texto legal pasivo:

1. **No es un abogado ni reemplaza asesoría legal individual.** El modelo debe indicar siempre, en algún punto de su respuesta (idealmente al final, sin ser repetitivo en cada mensaje), que la recomendación es una orientación informativa basada en normativa general y que, para casos de alto valor económico, licencias en riesgo de cancelación, o procesos judiciales ya iniciados, el usuario debería confirmar con un abogado en derecho administrativo/tránsito o directamente con el organismo de tránsito competente.

2. **No inventar artículos, números de resolución, ni sentencias.** Si el modelo no tiene certeza del número exacto de un artículo o de una resolución (por ejemplo, la numeración exacta de resoluciones del Ministerio de Transporte sobre SAST, que en esta investigación mostró inconsistencias entre fuentes — "Resolución 718 de 2018" vs. referencias a normativa de 2021-2022), debe usar lenguaje genérico ("la normativa vigente sobre calibración de equipos de detección", "la reglamentación técnica del Ministerio de Transporte") en vez de arriesgar una cita incorrecta.

3. **Plazos administrativos varían por organismo de tránsito y por tipo de comparendo.** Los plazos de impugnación reportados (5 días hábiles para comparendo físico, 11 días hábiles para fotomultas en algunas fuentes) **no están unificados en una sola norma nacional verificada con alta confianza** en esta investigación; el modelo debe recomendar siempre confirmar el plazo exacto en la comunicación/resolución recibida por el usuario o en la página oficial del organismo de tránsito específico (Secretaría de Movilidad de Bogotá, Secretaría de Tránsito de Medellín, Policía de Tránsito, concesión de fotodetección correspondiente, etc.), porque un error de plazo puede hacer perder el derecho a recurrir.

4. **Cambios normativos recientes y jurisprudencia en evolución.** El derecho de tránsito colombiano se modifica frecuentemente vía resoluciones del Ministerio de Transporte y decisiones de la Superintendencia de Transporte (p. ej., la investigación de 2025 a 37 organismos de tránsito por cámaras sin certificación). El modelo debe evitar afirmar que una cifra o requisito "siempre ha sido así" y en cambio anclar sus afirmaciones a la fecha de esta base de conocimiento (julio 2026), recomendando verificación si el comparendo del usuario es de fecha posterior a cambios normativos conocidos.

5. **Interpretación variable por ciudad/organismo.** Bogotá, Medellín, otras alcaldías, la Policía Nacional de Tránsito y las concesiones privadas de fotodetección pueden tener procedimientos, formularios y criterios de valoración distintos para una misma figura legal (p. ej., cómo se tramita una excepción de prescripción, o el canal para radicar un derecho de petición). El modelo debe generar el derecho de petición con fundamento en la ley nacional (que aplica en todo el país) pero advertir que el trámite/canal de radicación puede variar según la entidad destinataria.

6. **Puntos de baja confianza identificados explícitamente en esta investigación** (no afirmar con seguridad total sin verificación adicional):
   - Porcentajes exactos y condiciones vigentes de descuento por pronto pago (50%/25%/75%) del art. 136 CNTT — hay lecturas distintas entre fuentes sobre si el segundo tramo es 25% o si existe una combinación que llega a 75% con curso pedagógico.
   - Distancias exactas de señalización previa en fotomultas (300-400 m / 100-200 m / punto de inicio, o el estándar genérico de 500 m) — puede depender del tipo de vía.
   - Vínculo normativo preciso y número de resolución que exige el "concepto de desempeño" del Instituto Nacional de Metrología para sistemas SAST, y su relación exacta con la Ley 2251 de 2022.
   - Aplicación exacta del silencio administrativo positivo cuando la autoridad no resuelve los recursos dentro del año adicional de la caducidad (art. 161 CNTT).
   - Plazos de impugnación diferenciados entre comparendo físico y fotomulta (5 vs. 11 días hábiles), que provienen de fuentes secundarias no oficiales.
   - Detalle procedimental de "cadena de custodia" de evidencia fotográfica en el proceso contravencional de tránsito (a diferencia del proceso penal, donde sí está claramente reglada).

7. **Tono y postura**: el modelo debe responder con la seguridad y precisión de un abogado que conoce la ley, citando el fundamento legal cuando lo tenga claro (ley y artículo, o sentencia con número y año), pero debe ser honesto y explícito cuando esté generalizando, infiriendo, o cuando la fuente consultada no sea unánime — usando frases como "esto depende del organismo de tránsito", "se recomienda confirmar", o "la normativa reciente indica, aunque debe verificarse la vigencia al momento de su comparendo".

---

## 10. Tutela por vulneración del derecho de petición

### 10.1 Base constitucional: artículos 86 y 23, y la aplicación inmediata del artículo 85

- **Artículo 86 CP**: toda persona tiene acción de tutela para reclamar ante los jueces, en todo momento y lugar, mediante un procedimiento preferente y sumario, la protección inmediata de sus derechos constitucionales fundamentales cuando resulten vulnerados o amenazados por la acción u omisión de cualquier autoridad pública. La protección consiste en una orden para que quien solicita la tutela actúe o se abstenga de hacerlo. El fallo es de cumplimiento inmediato aunque se impugne, y en todo caso se remite a la Corte Constitucional para su eventual revisión. La propia Constitución fija que **"en ningún caso podrán transcurrir más de diez días entre la solicitud de tutela y su resolución."**
- **Artículo 23 CP**: derecho de petición (ver sección 5.1).
- **Artículo 85 CP**: el derecho de petición (art. 23) está expresamente listado entre los derechos **"de aplicación inmediata"** — no requiere desarrollo legal previo para ser exigible y, por su naturaleza fundamental, es tutelable directamente.
- Relación entre ambos: cuando una autoridad (organismo de tránsito, SIMIT, entidad a cargo del cobro coactivo) vulnera el artículo 23 CP —no respondiendo, o respondiendo sin resolver de fondo— el artículo 86 CP habilita al ciudadano a acudir directamente ante cualquier juez de la república mediante tutela para obtener protección inmediata.

**Fuentes**: Constitución Política de Colombia, arts. 23, 85 y 86 — SUIN-Juriscol: https://www.suin-juriscol.gov.co/viewDocument.asp?id=1826957 ; Función Pública (texto Constitución): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125

### 10.2 Por qué la tutela es procedente para proteger el derecho de petición

- La Corte Constitucional ha sostenido, en línea jurisprudencial constante y reiterada durante más de dos décadas, que el derecho de petición es un derecho fundamental cuyo núcleo esencial está integrado por cuatro elementos: **(i) la posibilidad de formular la petición; (ii) la resolución pronta y oportuna; (iii) la respuesta de fondo; y (iv) la notificación de esa respuesta al peticionario.** Esta caracterización proviene, entre otras, de la **Sentencia C-951 de 2014** (revisión de constitucionalidad del proyecto de ley estatutaria que se convirtió en la Ley 1755 de 2015).
- La Corte ha explicado que **"responder" no equivale a "resolver de fondo"**: una respuesta evasiva, incompleta, que no se pronuncie sobre lo efectivamente solicitado, o meramente formal, no satisface el derecho de petición aunque llegue dentro del plazo. Para que la respuesta sea de fondo debe ser **clara** (inteligible), **precisa** (referida concretamente a lo pedido, sin evasivas), **congruente** (que guarde relación directa con lo solicitado) y **consistente** con lo actuado en el trámite. Esto no significa que la entidad deba conceder lo pedido: una respuesta negativa pero motivada y que efectivamente resuelve lo consultado **no vulnera** el derecho de petición — la satisfacción del derecho no depende del sentido (favorable o no) de la respuesta, sino de que exista una resolución de fondo.
- Sobre la **procedencia de la tutela** en sí misma (más allá de la existencia del derecho), la Corte ha dicho, entre otras en la **Sentencia T-206 de 2018**, que la tutela es un mecanismo idóneo para proteger el derecho de petición de los administrados "toda vez que por medio del mismo se accede a muchos otros derechos constitucionales", y que el ordenamiento jurídico colombiano **no tiene previsto un medio de defensa judicial idóneo ni eficaz diferente de la acción de tutela** para este derecho.
- Otras sentencias de la misma línea (procedencia de tutela por vulneración del derecho de petición), citadas aquí solo por su existencia y la regla general que reiteran —no se verificó el detalle fáctico de cada una—: **T-1160A de 2001** (antecedente temprano sobre pronta resolución, en materia pensional), **T-487 de 2017**, **T-682 de 2017**, **T-103 de 2019**, **T-230 de 2020**, **T-272 de 2023**, **T-066 de 2024** y **T-370 de 2025**. **Nivel de confianza**: alto sobre la existencia de esta línea jurisprudencial constante y sobre los cuatro elementos del núcleo esencial (C-951/2014 y T-206/2018); medio sobre el contenido específico de cada sentencia individual listada — no citar su detalle fáctico frente a un usuario sin verificarlo primero.

**Fuentes**: Corte Constitucional, Sentencia C-951 de 2014: https://www.corteconstitucional.gov.co/relatoria/2014/c-951-14.htm ; Sentencia T-206 de 2018: https://www.corteconstitucional.gov.co/relatoria/2018/t-206-18.htm ; Sentencia T-487 de 2017: https://www.corteconstitucional.gov.co/relatoria/2017/t-487-17.htm ; Sentencia T-682 de 2017: https://www.corteconstitucional.gov.co/relatoria/2017/t-682-17.htm ; Sentencia T-103 de 2019 (vía Función Pública): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=91291 ; Sentencia T-230 de 2020: https://www.corteconstitucional.gov.co/relatoria/2020/t-230-20.htm ; Sentencia T-272 de 2023: https://www.corteconstitucional.gov.co/relatoria/2023/t-272-23.htm ; Sentencia T-066 de 2024: https://www.corteconstitucional.gov.co/relatoria/2024/t-066-24.htm ; Sentencia T-370 de 2025: https://www.corteconstitucional.gov.co/relatoria/2025/t-370-25.htm ; Ámbito Jurídico, "La respuesta negativa no vulnera el derecho de petición": https://www.ambitojuridico.com/noticias/constitucional/constitucional-y-derechos-humanos/la-respuesta-negativa-no-vulnera-el ; Edileyer, "La acción de tutela como mecanismo de protección del derecho de petición": https://edileyer.com/la-accion-de-tutela-para-proteger-el-derecho-fundamental-de-peticion/

### 10.3 Los dos escenarios que activan la tutela

**(a) Silencio administrativo — no responde dentro del término legal.** Si vencen los plazos del artículo 14 CPACA (15 días para peticiones generales, 10 días para peticiones de documentos/información, 30 días para consultas — ver sección 5.2) sin que la autoridad responda ni informe motivadamente sobre una prórroga, el derecho de petición queda vulnerado por la sola inactividad, y el ciudadano puede acudir directamente a la tutela.

**(b) Negativa o respuesta que no resuelve de fondo.** Cuando la entidad contesta dentro del plazo pero la respuesta es evasiva, incompleta, genérica, no se pronuncia sobre uno o varios puntos concretos solicitados, o remite al peticionario a otro trámite sin resolver lo pedido, también hay vulneración —porque "responder" no es lo mismo que "resolver de fondo" (10.2). Este escenario es frecuente en la práctica de tránsito: por ejemplo, cuando se pide el certificado de calibración del equipo de fotodetección o la constancia de ejecutoria de un comparendo y la entidad responde con una comunicación genérica que no aporta el documento ni explica por qué no lo tiene.

### 10.4 Requisitos de procedibilidad de la tutela en este caso

- **Legitimación pasiva**: se dirige contra la autoridad que no respondió o respondió mal — el organismo de tránsito (Secretaría de Movilidad/Tránsito municipal o departamental, Policía de Tránsito, concesión de fotodetección si actúa como autoridad delegada) o, según el caso, el SIMIT/Federación Colombiana de Municipios.
- **Subsidiariedad**: la regla general (art. 86 CP, inciso 4) es que la tutela procede solo si no existe otro medio de defensa judicial idóneo y eficaz, salvo perjuicio irremediable. Sin embargo, **para el derecho de petición específicamente**, la jurisprudencia constante (T-206/2018 y la línea citada en 10.2) considera que **no existe otro medio judicial idóneo y eficaz distinto de la tutela** para lograr una respuesta pronta y de fondo — por eso, en la práctica, no se exige agotar previamente recursos administrativos ni iniciar un proceso contencioso-administrativo antes de tutelar. Esto es distinto de discutir el *contenido* o el *fondo* de la multa (para eso sí existen otros medios: recursos administrativos de la sección 6, o la jurisdicción contenciosa): la tutela por derecho de petición solo protege el **derecho a obtener respuesta**, no sustituye la discusión sobre si la multa es válida.
- **Inmediatez**: debe presentarse en un tiempo razonable después de configurada la vulneración (vencimiento del plazo, o recibo de la respuesta insuficiente). No hay un término fijo en la ley; la Corte valora la razonabilidad del tiempo transcurrido y ha flexibilizado este requisito en ciertos casos (p. ej., sujetos de especial protección constitucional). **Nivel de confianza medio** sobre cuánto tiempo es "razonable" en la práctica — no prometer al usuario un plazo exacto.
- **Ante quién se presenta**: cualquier juez, en general por reparto (usualmente jueces municipales o de circuito, según la naturaleza de la entidad accionada), de manera verbal o escrita, sin necesidad de abogado ni de formalidades técnicas (Decreto 2591 de 1991, arts. 1, 14 y 37).
- **Plazo de fallo del juez**: **máximo diez (10) días hábiles** siguientes a la presentación de la solicitud (art. 86 CP; art. 29, Decreto 2591 de 1991). El fallo de primera instancia es de cumplimiento inmediato aunque se impugne (art. 31, Decreto 2591/1991); si hay impugnación, el juez de segunda instancia debe decidir dentro de los 20 días siguientes.
- **Qué puede ordenar el juez**: típicamente, ordenar a la entidad **responder de fondo** la petición dentro de un **plazo perentorio** — en la práctica de los fallos de tutela por derecho de petición es común fijar un término de **48 horas** siguientes a la notificación del fallo, con fundamento en la regla general del art. 29 del Decreto 2591 de 1991 sobre que el cumplimiento de una orden de tutela no debe exceder 48 horas salvo que el juez fije expresamente otro plazo. El juez **no puede ordenar el sentido o contenido** de la respuesta (no puede obligar a la entidad a decidir a favor del peticionario) — solo puede ordenar que exista una respuesta clara, precisa, congruente y de fondo dentro del plazo fijado. **Nivel de confianza medio-alto**: el término de 48 horas es una práctica reiterada en los fallos, no una cifra impuesta literalmente por una norma específica para el derecho de petición; no prometer al usuario que el juez ordenará exactamente ese plazo, sino explicar que es lo usual.

**Fuentes**: Constitución Política, art. 86; Decreto 2591 de 1991, arts. 1, 14, 29, 31, 32 y 37 — Función Pública: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5304 ; Corte Constitucional, Sentencia T-206 de 2018 (citada arriba); Tutela en Línea, "Plazos de la tutela y el derecho de petición en Colombia": https://tutelaenlinea.com/plazos-tutela-y-peticion ; Tutela en Línea, "Tutela por derecho de petición no respondido": https://tutelaenlinea.com/tutela-derecho-peticion-no-respondido

### 10.5 Interacción con el cobro coactivo: ¿es un argumento adicional de urgencia?

Es razonable pensar que si el organismo de tránsito no responde un derecho de petición pendiente (p. ej., sobre prescripción, validez del comparendo, o estado del proceso) y **al mismo tiempo** avanza con el cobro coactivo hacia medidas como el embargo, esto podría reforzar el argumento de urgencia o perjuicio dentro de la tutela. **Sin embargo, esta investigación no encontró una fuente jurisprudencial o normativa que confirme expresamente esta interacción como regla aplicada por la Corte Constitucional en materia de tránsito** — se marca explícitamente como **baja confianza / verificar**. Lo que sí es claro, con base en el régimen general de la tutela:

- La tutela por derecho de petición no suspende automáticamente el proceso de cobro coactivo; son trámites distintos.
- Si el cobro coactivo avanza sin que se haya resuelto una petición relevante para el proceso, el ciudadano puede argumentar en la tutela que la falta de respuesta le genera una afectación mayor por la inminencia de medidas ejecutivas (embargo), pero esto debe evaluarse caso a caso y no debe presentarse al usuario como una regla jurisprudencial consolidada.
- Independientemente de la tutela, dentro del propio proceso de cobro coactivo existen mecanismos específicos —las excepciones al mandamiento de pago (sección 11.3)— que son la vía más directa y usualmente más eficaz para detener el cobro cuando hay vicios de fondo, más que depender únicamente de la tutela por derecho de petición.

**Nivel de confianza: bajo** sobre la existencia de una regla jurisprudencial específica que trate la coexistencia de cobro coactivo activo y derecho de petición sin responder como perjuicio irremediable automático. El modelo debe presentar este punto como "argumento a evaluar con un abogado", no como derecho garantizado, y no debe afirmar que la Corte Constitucional "ha dicho" esto sin poder citar la sentencia exacta.

---

## 11. Estrategia ante cobro coactivo: solicitar el expediente primero

### 11.1 Qué es el cobro coactivo y su marco normativo

- El **cobro coactivo** es la facultad que la ley otorga a ciertas entidades públicas —incluidas las autoridades de tránsito— para recaudar directamente, sin necesidad de acudir a un juez, las obligaciones a su favor que consten en un documento que preste mérito ejecutivo (p. ej., la resolución que impone una multa de tránsito, debidamente ejecutoriada).
- **Marco normativo central**: **Ley 1437 de 2011 (CPACA), Título IV "Cobro Coactivo", artículos 98 a 101**:
  - **Artículo 98**: las entidades públicas deben recaudar las obligaciones a su favor que consten en documentos con mérito ejecutivo; para ello están revestidas de la prerrogativa de cobro coactivo (o pueden acudir ante los jueces competentes).
  - **Artículo 99**: define qué documentos prestan mérito ejecutivo a favor del Estado (entre otros, los actos administrativos en firme que impongan una obligación a favor de la entidad —como la resolución de un comparendo ya ejecutoriada— y otros documentos provenientes del deudor o de un contrato).
  - **Artículo 100**: fija las reglas de procedimiento — los procesos de cobro coactivo con reglas especiales se rigen por ellas; **a falta de reglas especiales, se aplica lo dispuesto en este título y, de manera supletoria, el Estatuto Tributario**; y, en lo no previsto allí, las normas del Código General del Proceso sobre el proceso ejecutivo, en lo compatible.
  - **Artículo 101**: regula el control jurisdiccional — solo son demandables ante la jurisdicción contencioso-administrativa los actos que deciden las excepciones a favor del deudor, los que ordenan seguir adelante la ejecución y los que liquidan el crédito; la sola admisión de la demanda no suspende el cobro coactivo, salvo que el título ejecutivo haya sido suspendido provisionalmente por la jurisdicción o el ejecutado lo solicite habiendo proceso contencioso pendiente contra el título.
- **Remisión al Estatuto Tributario — confirmada**: el artículo 100 CPACA remite expresamente al Estatuto Tributario para lo no regulado especialmente. Por eso, el procedimiento práctico de cobro coactivo de multas de tránsito (mandamiento de pago, plazo para pagar o excepcionar, trámite de excepciones, medidas cautelares, remate) sigue las reglas de los artículos 823 y siguientes del Estatuto Tributario. Adicionalmente, la **Ley 1066 de 2006, artículo 5**, ya establecía —antes del CPACA— que las entidades públicas con jurisdicción coactiva deben seguir el procedimiento del Estatuto Tributario; el CPACA de 2011 mantuvo y precisó esa remisión.
- Para las multas de tránsito específicamente, el fundamento de la jurisdicción coactiva de los organismos de tránsito está en el **artículo 159 de la Ley 769 de 2002**. **Nivel de confianza medio** sobre el detalle exacto de las normas que lo modificaron posteriormente (se reportan referencias al Decreto 019 de 2012 "Decreto Antitrámites"): verificar el texto consolidado vigente antes de citar un artículo modificatorio específico frente al usuario.

**Fuentes**: Ley 1437 de 2011, arts. 98-101 (CPACA): https://leyes.co/codigo_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo/98.htm (y /99.htm, /100.htm, /101.htm) ; Función Pública, Ley 1437 de 2011: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249 ; Estatuto Tributario, arts. 823 y ss., 826, 830, 831: https://estatuto.co/826 , https://estatuto.co/830 , https://estatuto.co/831 ; Ley 1066 de 2006, art. 5: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=20866 ; Ámbito Jurídico, "Autoridad de tránsito no podrá iniciar cobro coactivo de sanciones que tengan configurados supuestos de prescripción": https://www.ambitojuridico.com/noticias/general/autoridad-de-transito-no-podra-iniciar-cobro-coactivo-de-sanciones-que-tengan

### 11.2 Por qué la primera jugada es pedir el expediente completo, antes de proponer excepciones o pelear el fondo

Antes de responder al mandamiento de pago con excepciones o argumentos de fondo, la estrategia recomendada es **solicitar copia completa del expediente administrativo de cobro coactivo**, incluyendo como mínimo:

- El **mandamiento de pago** (acto administrativo que lo ordena).
- El **título ejecutivo** que sirvió de base (la resolución que impuso la multa).
- La **constancia de ejecutoria** de esa resolución (prueba de que quedó en firme y de cuándo — sin ejecutoria no hay título ejecutivo válido).
- Las **constancias de notificación**, tanto de la resolución sancionatoria original como del mandamiento de pago (para verificar si se notificaron correctamente y en qué fechas — dato clave para contar términos de prescripción y caducidad).

**Fundamento jurídico de esta solicitud**:

- **Artículo 5 CPACA** ("Derechos de las personas ante las autoridades"), que reconoce el derecho a "conocer, salvo expresa reserva legal, el estado de cualquier actuación o trámite y obtener copias, a su costa, de los respectivos documentos", y a acceder a la información contenida en registros y archivos públicos. **Nota de corrección respecto a la hipótesis inicial de esta investigación**: el fundamento de este derecho está en el **artículo 5 CPACA**, no en el artículo 17 — el artículo 17 CPACA regula un tema distinto (peticiones incompletas y desistimiento tácito de la petición cuando el peticionario no completa la información requerida).
- **Ley 1712 de 2014** ("Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional"), que regula de manera general el derecho de acceso a la información pública en poder de las entidades estatales y las excepciones a su publicidad (art. 1). Toda la información en posesión de un sujeto obligado se presume pública, salvo reserva legal o constitucional expresa; el expediente de un proceso de cobro coactivo que involucra al propio peticionario no está cobijado por ninguna reserva que le impida conocerlo.

**Por qué es la jugada estratégica correcta**: revisar el expediente antes de excepcionar permite detectar, con evidencia documental concreta, los vicios que sustentan las excepciones (11.3) — por ejemplo:

- Que el comparendo **nunca quedó ejecutoriado** (no hay constancia, o los recursos seguían pendientes) — sin título ejecutivo válido no procedía el mandamiento de pago.
- Que el mandamiento de pago **no fue notificado correctamente** (dirección equivocada, no se agotó la notificación subsidiaria) — lo que afecta la interrupción de la prescripción y los plazos para excepcionar.
- Que, contando las fechas exactas del expediente, **ya operó la prescripción de la acción de cobro** (3 años desde la infracción, sin notificación válida del mandamiento de pago que la interrumpiera — sección 4.2) y la autoridad no lo advirtió de oficio.

Sin el expediente, el ciudadano solo puede especular sobre estos vicios; con el expediente, puede fundamentar la excepción con fechas y documentos exactos, lo que aumenta sustancialmente la probabilidad de éxito.

**Fuentes**: Ley 1437 de 2011, art. 5 (CPACA): https://leyes.co/codigo_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo/5o.htm ; Ley 1712 de 2014: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882 ; SUIN-Juriscol, Ley 1712 de 2014: https://www.suin-juriscol.gov.co/viewDocument.asp?id=1687091

### 11.3 Excepciones contra el mandamiento de pago y plazo para proponerlas

Por remisión del artículo 100 CPACA al Estatuto Tributario, contra el mandamiento de pago proceden las excepciones del **artículo 831 del Estatuto Tributario**:

1. El **pago efectivo**.
2. La **existencia de acuerdo de pago**.
3. La **falta de ejecutoria del título** (el comparendo/resolución sancionatoria no había quedado en firme cuando se libró el mandamiento).
4. La **pérdida de ejecutoria del título** por revocación o suspensión provisional del acto administrativo por autoridad competente.
5. La **interposición de demandas de restablecimiento del derecho** (o de revisión) ante la jurisdicción contencioso-administrativa contra el acto que impuso la sanción.
6. La **prescripción de la acción de cobro** (los 3 años del art. 159 CNTT sin interrupción válida — sección 4.2).
7. La **falta de título ejecutivo o la incompetencia del funcionario** que profirió el mandamiento de pago.

**Plazo para proponerlas**: dentro de los **quince (15) días hábiles** siguientes a la notificación del mandamiento de pago (art. 830, Estatuto Tributario, aplicado por remisión). Dentro de ese mismo plazo, alternativamente, el ejecutado puede pagar la obligación. **Excepción a la regla del plazo**: se reporta que la jurisprudencia del Consejo de Estado ha admitido que la excepción de **prescripción** puede estudiarse incluso fuera de ese término, por tratarse de una circunstancia que el funcionario ejecutor debe verificar de oficio antes de continuar el cobro (referencia a sentencia del Consejo de Estado del 6 de noviembre de 2019, según fuente secundaria). **Nivel de confianza medio**: no se verificó el número de radicado exacto de esa sentencia — no citarla como precedente puntual frente a un usuario sin confirmarlo.

**Trámite de las excepciones**: se deciden mediante resolución motivada del funcionario ejecutor. Contra esa decisión, conforme al **artículo 101 CPACA**, solo procede control ante la jurisdicción contencioso-administrativa (no hay recursos adicionales en sede administrativa dentro del propio proceso de cobro coactivo), y la sola presentación de la demanda no suspende el cobro salvo suspensión provisional del acto o solicitud expresa admitida.

**Fuentes**: Estatuto Tributario, art. 831 (excepciones): https://estatuto.co/831 ; art. 830 (plazo): https://estatuto.co/830 ; Ámbito Jurídico, "¿Qué excepciones se pueden proponer en el trámite de cobro coactivo?": https://www.ambitojuridico.com/noticias/tributario/que-excepciones-se-pueden-proponer-en-el-tramite-de-cobro-coactivo-1154-am ; Consejo de Estado, boletín sobre excepciones taxativas en cobro coactivo: https://www.consejodeestado.gov.co/documentos/boletines/PDF/25000-23-27-000-2004-90729-01(17103).pdf

### 11.4 Plazos y trámite general del cobro coactivo: en qué momento conviene actuar

Secuencia general (Estatuto Tributario por remisión del art. 100 CPACA):

1. **Cobro persuasivo** (previo, no siempre obligatorio ni reglado de forma uniforme): muchos organismos de tránsito envían comunicaciones o recordatorios de pago antes de iniciar el cobro coactivo formal. **Nivel de confianza medio**: no hay una etapa persuasiva única y obligatoria en todo el país; varía por organismo.
2. **Mandamiento de pago**: acto administrativo mediante el cual el funcionario ejecutor ordena el pago de la obligación (art. 826 Estatuto Tributario). Debe notificarse personalmente al deudor; si no es posible, se notifica por correo (o por aviso, según el caso).
3. **Plazo de 15 días hábiles**: desde la notificación del mandamiento de pago, el ejecutado puede pagar o presentar excepciones (art. 830 ET).
4. **Medidas cautelares**: la ley permite decretar medidas cautelares (embargo y secuestro de bienes) desde el momento en que se libra el mandamiento de pago, incluso antes de que se resuelvan las excepciones, como garantía del recaudo. **Nivel de confianza medio** sobre el momento exacto en que cada organismo de tránsito efectivamente decreta el embargo en la práctica (varía según la entidad).
5. **Resolución de excepciones**: si se propusieron, el funcionario ejecutor las resuelve mediante resolución motivada; si se declaran probadas (total o parcialmente), se levanta el mandamiento en lo pertinente; si se rechazan, se ordena seguir adelante la ejecución.
6. **Seguir adelante la ejecución / remate**: si no hubo pago ni excepciones prósperas, el proceso continúa hacia el avalúo y remate de bienes embargados (poco frecuente en la práctica para multas de tránsito de cuantía baja/media, donde es más común el embargo de cuentas bancarias).

**Cuándo conviene actuar**: el momento más estratégico es **inmediatamente después de notificado el mandamiento de pago**, dentro de los 15 días hábiles: (a) solicitar de inmediato copia del expediente (11.2), y (b) presentar las excepciones que el expediente permita sustentar dentro de ese mismo plazo. Actuar antes de esa notificación no es posible (no hay mandamiento que excepcionar); actuar después de vencido el plazo de 15 días limita las opciones a la prescripción (revisable de oficio, 11.3) o a la vía contencioso-administrativa una vez resueltas las excepciones o decretada la continuación de la ejecución.

**Fuentes**: Estatuto Tributario, arts. 826, 830, 831, 837 (medidas cautelares): https://estatuto.co/826 , https://estatuto.co/830 , https://estatuto.co/831 ; Instituto Departamental de Tránsito del Quindío, "Cobro Coactivo": https://www.idtq.gov.co/ley-1712/cobro-coactivo ; Baluarte Prensa, "Cobro Coactivo de Multas de Tránsito: Guía 2025": https://www.baluarteprensa.com/2025/08/11/multas-de-transito-cobro-coactivo-y-como-evitarlo/

### 11.5 Proporcionalidad del riesgo real de embargo: el monto inembargable en cuentas de ahorro

Para dimensionar honestamente el riesgo frente al usuario (sin minimizar el proceso, pero sin alarmar de más): un embargo solo puede recaer sobre bienes o dineros que el deudor efectivamente tenga a su nombre. Además, ni siquiera la totalidad del saldo de una cuenta de ahorros es embargable:

- El **artículo 594 del Código General del Proceso** establece que los depósitos en cuentas de ahorro de establecimientos de crédito son inembargables hasta el monto que fije la autoridad competente (excepto para el pago de créditos alimentarios, donde sí procede el embargo de la totalidad).
- Ese monto lo actualiza anualmente la **Superintendencia Financiera de Colombia**. Para el período reportado de **octubre de 2025 a septiembre de 2026, el tope es de $55.099.308 por cuenta de ahorros** — si el saldo no supera esa cifra, no puede embargarse; si lo supera, solo es embargable el excedente.
- Esta protección aplica específicamente a **cuentas de ahorro**; no se verificó en esta investigación si aplica igual a cuentas corrientes u otros productos financieros — no afirmar que aplica a todo tipo de cuenta sin distinguir.
- **Nivel de confianza medio-alto** sobre la existencia y mecánica del monto inembargable (múltiples fuentes coinciden: art. 594 CGP, Superintendencia Financiera, Bancolombia, medios especializados); **el monto exacto en pesos cambia cada año**, así que la cifra citada debe tratarse como vigente para el período señalado y no asumirse como fija hacia el futuro — recomendar siempre confirmar el valor actualizado.
- Esto es relevante para el usuario en cobro coactivo sin bienes significativos ni saldos altos: el riesgo práctico de un embargo efectivo es menor de lo que el término "cobro coactivo" sugiere, lo que no exime de que el proceso pueda seguir bloqueando trámites en el RUNT/SIMIT mientras esté activo (sección 7), ni de que actuar a tiempo (solicitar expediente, evaluar prescripción) siga siendo la estrategia más eficiente.

**Fuentes**: Código General del Proceso, art. 594: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52142 ; El Tiempo, "Embargo de cuentas en Colombia: los casos en los que su plata está protegida y cuándo puede ser retenida en 2026": https://www.eltiempo.com/economia/finanzas-personales/embargo-de-cuentas-en-colombia-los-casos-en-los-que-su-plata-esta-protegida-y-cuando-puede-ser-retenida-en-3543964 ; Gerencie.com, "Monto o valor inembargable en las cuentas de ahorro": https://www.gerencie.com/monto-o-valor-embargable-en-las-cuentas-de-ahorro.html ; Bancolombia, "¿Cuál es el límite de inembargabilidad de mis cuentas?": https://www.bancolombia.com/centro-de-ayuda/preguntas-frecuentes/limite-inembargabilidad-cuentas

---

## 12. Árbol de decisión para la IA: cómo recomendar la estrategia según el pantallazo del SIMIT

**Nota de ubicación**: este árbol de decisión se agrega como sección 12, al final del documento, porque sintetiza y remite a conceptos definidos en las secciones 1 a 11 (plazos de prescripción/caducidad, requisitos de fotomultas, derecho de petición, tutela, cobro coactivo). Colocarlo al final evita que el modelo lo use como sustituto de conocer el fundamento de cada rama, y le permite usarlo como checklist rápido de priorización una vez ya conoce el detalle de cada figura. El modelo debe usarlo como guía, no como sustituto del análisis caso a caso, y siempre debe pedir al usuario los datos concretos que falten (fecha de la infracción, fecha de notificación, tipo de comparendo, estado exacto según el pantallazo) antes de fijar una recomendación final.

**Preguntas guía, en orden sugerido de evaluación**:

1. **¿Han pasado más de 3 años desde la fecha de la infracción sin que conste una notificación válida de mandamiento de pago?** → Evaluar **prescripción de la acción de cobro** (sección 4.2). Si se confirma: presentar excepción de prescripción si ya hay mandamiento notificado (sección 11.3), o derecho de petición solicitando se declare la prescripción y se actualice el registro en SIMIT/RUNT (sección 7.3).
2. **¿Ha pasado más de 1 año desde la infracción sin que exista una resolución sancionatoria en firme?** → Evaluar **caducidad de la facultad sancionatoria** (sección 4.1). Si se confirma, argumentar que la autoridad ya no puede sancionar válidamente por esos hechos.
3. **¿Es una fotomulta y no hay evidencia de señalización previa en el punto, o el usuario no la recuerda/no la vio?** → Solicitar vía derecho de petición (a) el registro de señalización del punto y (b) el certificado de calibración vigente del equipo (secciones 3.1 y 3.2); si la entidad no acredita ambos, es un argumento fuerte para impugnar por vicio de forma.
4. **¿La notificación del comparendo (física o de fotomulta) fue tardía (más de 3 días hábiles en fotomultas) o no llegó al domicilio correcto?** → Argumento de **notificación defectuosa** (secciones 2.3 y 8.1).
5. **¿El usuario no conducía el vehículo al momento de la infracción (prestado, arrendado, vendido sin traspaso, etc.) y se le cobra solo por ser el propietario?** → Argumento de **responsabilidad personal, no solidaria** (Sentencia C-038 de 2020, sección 3.4).
6. **¿El pantallazo del SIMIT o la comunicación recibida indica que ya existe un proceso de cobro coactivo (mandamiento de pago, embargo, mención de "jurisdicción coactiva")?** → **Primero solicitar copia completa del expediente** (mandamiento de pago, título ejecutivo, constancia de ejecutoria, constancias de notificación — sección 11.2) antes de decidir qué excepción proponer; luego evaluar las excepciones del art. 831 ET dentro de los 15 días hábiles siguientes a la notificación del mandamiento (sección 11.3). No recomendar pelear "el fondo" de la multa en esta etapa sin antes revisar el expediente.
7. **¿El usuario ya presentó un derecho de petición (prescripción, copia de expediente, certificado de calibración, etc.) y no obtuvo respuesta dentro del plazo legal (15/10/30 días, sección 5.2), o la respuesta fue evasiva/incompleta/no resolvió lo pedido (p. ej., con fechas incorrectas, una excusa genérica que no se refiere al caso concreto, o que no aporta lo pedido)?** → Recomendar **acción de tutela** por vulneración del derecho de petición (sección 10), explicando que el juez puede ordenar responder de fondo en un plazo perentorio, pero no puede ordenar el sentido de la respuesta ni resolver el fondo de la multa. **No recomendar recusación del funcionario en este escenario** salvo que existan hechos concretos que encajen en alguna causal tasada del art. 11 CPACA (ver sección 13) — una respuesta defectuosa, con errores o con una excusa genérica **no es, por sí sola, causal de recusación**; es precisamente el tipo de defecto que fundamenta la tutela.
8. **¿Ninguno de los anteriores aplica claramente y el comparendo parece válido (notificado a tiempo, dentro de los plazos de caducidad/prescripción, con evidencia suficiente)?** → Explicar honestamente al usuario que no se identifican argumentos sólidos de impugnación con la información disponible; ofrecer la opción de pronto pago con descuento si aún está vigente (sección 1.1, art. 136 CNTT, con las salvedades de baja confianza ya señaladas); y recomendar de todas formas verificar mediante derecho de petición los puntos técnicos (calibración, señalización), porque a veces la entidad no puede acreditarlos aunque el comparendo parezca correcto a primera vista.

**Regla general de priorización cuando aplican varias casillas a la vez**:

- **(a) Prescripción/caducidad primero**: son los argumentos más contundentes y de aplicación casi automática si se confirman las fechas.
- **(b) Si hay cobro coactivo activo, solicitar el expediente siempre es el primer paso práctico**, incluso si también aplican otros argumentos de fondo, porque sin el expediente no se puede fundamentar bien ninguna excepción.
- **(c) Los argumentos de fondo sobre fotomultas** (señalización, calibración, notificación) se usan cuando no hay prescripción/caducidad clara y todavía no hay cobro coactivo, para intentar tumbar el comparendo antes de que llegue a esa etapa.
- **(d) La tutela es el último recurso**, cuando la vía normal (derecho de petición, recursos administrativos) ya se usó y no funcionó por falta de respuesta o por respuesta insuficiente — no es la primera herramienta a usar salvo que ya haya vencido un plazo de respuesta.
- **(e) La recusación del funcionario NO es una alternativa ni un paso previo genérico a la tutela.** Es una herramienta de aplicación excepcional y taxativa (sección 13), reservada para cuando hay hechos concretos y verificables sobre la persona del funcionario (parentesco, interés económico directo, enemistad o amistad demostrable, haber intervenido antes en el mismo asunto en calidad incompatible, etc.). Errores materiales, demoras o excusas genéricas en una respuesta **no** activan esta vía — activan la tutela (sección 10) y/o las excepciones dentro del cobro coactivo (sección 11.3). El modelo no debe sugerir "recusar al funcionario" como respuesta por defecto ante una mala respuesta administrativa.

---

## 13. Recusación de funcionarios: cuándo aplica y cómo se relaciona con la tutela

**Contexto que origina esta sección**: un patrón real observado en usuarios de la app es que, tras un derecho de petición pidiendo el expediente de un cobro coactivo, la entidad responde con **fechas incorrectas** y una **excusa genérica** (p. ej., una referencia estándar a la pandemia de COVID-19 para justificar la demora, sin relación concreta con el expediente del usuario). Algunos usuarios reaccionan presentando una "recusación formal" contra el funcionario a cargo. Esta sección evalúa si esa es una estrategia sólida o un uso incorrecto de la figura.

### 13.1 Dónde están reguladas las causales: CPACA arts. 11 y 12 (no el CGP, y no los arts. 130-134 CPACA)

- La recusación e impedimento de un **servidor público que adelanta una actuación administrativa** (como el funcionario ejecutor de un proceso de cobro coactivo, o cualquier funcionario de una Secretaría de Tránsito que sustancia un trámite, practica pruebas o profiere una decisión) está regulada en el **CPACA (Ley 1437 de 2011), Título I "Disposiciones Generales"**, específicamente en:
  - **Artículo 11 CPACA — "Conflictos de interés y causales de impedimento y recusación"**: fija la regla general ("cuando el interés general propio de la función pública entre en conflicto con el interés particular y directo del servidor público, este deberá declararse impedido") y una lista de causales.
  - **Artículo 12 CPACA — "Trámite de los impedimentos y recusaciones"**: regula el procedimiento (ver 13.3).
- **Importante no confundir estas normas con otras dos que también hablan de "recusación" en el ordenamiento colombiano**, porque regulan supuestos distintos:
  - Los **artículos 130 a 134 del CPACA** regulan la recusación de **jueces y magistrados de la jurisdicción de lo contencioso-administrativo** dentro de procesos judiciales — no aplican al funcionario ejecutor de un cobro coactivo, que actúa en función **administrativa**, no jurisdiccional (esto está confirmado por doctrina especializada: el cobro coactivo "es de naturaleza administrativa, no jurisdiccional: el funcionario ejecutor no es un juez y actúa en función administrativa, sus decisiones son actos administrativos sujetos al control de la jurisdicción contencioso-administrativa").
  - Los **artículos 141 y 142 del Código General del Proceso (CGP)** regulan la recusación de jueces en procesos judiciales civiles/generales — tampoco aplican directamente a un trámite administrativo de tránsito, aunque el listado de causales del art. 11 CPACA es estructuralmente muy similar al del art. 141 CGP (ambos comparten el mismo tipo de causales: interés directo, parentesco, enemistad/amistad, litigios pendientes, etc.), lo que explica por qué a veces se citan de forma intercambiable en la práctica — **el modelo debe citar el art. 11 CPACA para el caso de un funcionario administrativo de tránsito, no el art. 141 CGP**.
- **Causales del artículo 11 CPACA** (paraphraseadas a partir de fuentes secundarias que citan el texto oficial — **nivel de confianza medio-alto sobre el listado y su sentido general; no citar el texto literal palabra por palabra a un usuario sin verificarlo contra el texto oficial del Diario Oficial No. 47.956, porque las fuentes consultadas resumen en vez de transcribir**). El servidor debe declararse impedido, y puede ser recusado si no lo hace, cuando:
  1. Tiene interés particular y directo en el asunto, o lo tiene su cónyuge/compañero(a) permanente, o un pariente dentro del cuarto grado de consanguinidad, segundo de afinidad o primero civil, o su socio de hecho o de derecho.
  2. Ha conocido el asunto en oportunidad anterior (p. ej., ya intervino en una etapa previa del mismo asunto en una calidad que comprometió su criterio).
  3. Es curador o tutor de una persona interesada.
  4. Es representante, apoderado o mandatario de alguno de los interesados, o dependiente suyo.
  5. Existe un litigio pendiente entre el servidor (o su cónyuge/parientes cercanos) y alguno de los interesados.
  6. Los interesados han formulado denuncia penal contra el servidor antes de la actuación, y la denuncia está en curso.
  7. El servidor ha formulado denuncia penal contra los interesados.
  8. Existe enemistad grave o amistad íntima/entrañable entre el servidor y alguno de los interesados.
  9. El servidor es acreedor o deudor de alguno de los interesados.
  10. Es socio de alguno de los interesados en sociedad de personas.
  11. Ha dado consejo o concepto sobre las cuestiones materia del asunto, o ha intervenido como apoderado, perito o testigo.
  12. Es heredero o legatario de alguno de los interesados.
  13. Tiene pendiente una decisión administrativa sobre una cuestión jurídica igual a la que debe resolver, que haya sido sometida a su consideración por alguno de los interesados.
  14. Ha sido candidato en una lista electoral junto con alguno de los interesados dentro del año anterior.
  15. Ha sido recomendado por el interesado para acceder al cargo que ocupa, o ha recibido beneficios de este.
  16. Tuvo, dentro del año anterior, interés directo o actuó como representante o administrador en un gremio o asociación que sea parte interesada en el asunto.
  - **Punto central para el análisis de esta sección**: esta lista es reiteradamente calificada por la jurisprudencia y la doctrina como **taxativa y de interpretación restrictiva** — no existe en el artículo 11 CPACA una causal residual o abierta del tipo "cualquier otra circunstancia que genere duda razonable sobre la imparcialidad". El Consejo de Estado ha sostenido, en la línea jurisprudencial sobre impedimentos y recusaciones (más desarrollada en materia judicial pero aplicada por analogía de principio también a la función administrativa), que estas causales "constituyen una excepción... están legalmente delimitadas... y no pueden ampliarse a discreción del operador ni de las partes". El Departamento Administrativo de la Función Pública, en el **Concepto 24531 de 2019**, confirma que la causal de interés particular exige un "beneficio especial, particular y concreto" del servidor —no una valoración genérica sobre la calidad de su gestión—.

**Fuentes**: Ley 1437 de 2011 (CPACA), arts. 11 y 12: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249 ; texto comentado art. 11: https://leyes.co/codigo_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo/11.htm ; texto comentado art. 12: https://leyes.co/codigo_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo/12.htm ; arts. 130-134 CPACA (recusación de jueces contencioso-administrativos, no aplicable a este caso): https://leyes.co/codigo_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo/132.htm ; Código General del Proceso, art. 141 (causales de recusación de jueces, régimen distinto): https://leyes.co/codigo_general_del_proceso/141.htm ; Función Pública, Concepto 24531 de 2019: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=91023 ; Consejo de Estado, providencia citada en boletín 146 sobre carácter taxativo de las causales de impedimento (radicado 25000-23-41-000-2013-02797-02 — **dato tomado de fuente secundaria, no se verificó el texto original en PDF por problemas de acceso; verificar sala, fecha y ponente exactos antes de citarlo puntualmente frente a un usuario**): https://www.consejodeestado.gov.co/documentos/boletines/146/S5/25000-23-41-000-2013-02797-02.pdf

### 13.2 ¿"Responder con fechas incorrectas" o dar una "excusa genérica (COVID)" encaja en alguna causal?

**Respuesta directa: no, en el escenario típico descrito.** Analizando las 16 causales del art. 11 CPACA una por una frente a los hechos (la entidad respondió con fechas equivocadas y una excusa genérica de demora):

- Ninguna causal se refiere a la **calidad o corrección de la respuesta** que da el funcionario. Todas las causales del art. 11 CPACA giran en torno a la **relación del funcionario con el asunto o con los interesados** (parentesco, interés económico, enemistad/amistad, litigios, conocimiento previo comprometedor, etc.), no en torno a si la respuesta que produjo fue clara, precisa o correcta.
- Un error material en las fechas citadas en una respuesta, o el uso de una excusa genérica y estandarizada (que probablemente ni siquiera fue redactada personalmente por el funcionario firmante, sino que proviene de una plantilla institucional), **no demuestra por sí solo** que el funcionario tenga un interés particular en el asunto, un parentesco con alguna parte, una enemistad o amistad relevante, o que haya conocido el asunto antes en una calidad incompatible. Son, en cambio, indicios de **descuido administrativo, sobrecarga de trabajo, o mala gestión documental** — problemas reales y relevantes, pero de una naturaleza jurídica distinta a la imparcialidad personal del funcionario.
- **No existe una causal residual o abierta** en el art. 11 CPACA que un abogado pueda invocar de forma amplia (a diferencia de, por ejemplo, algunas causales de recusación de árbitros en arbitraje internacional, que sí incluyen estándares abiertos de "duda justificada sobre la imparcialidad"). El carácter taxativo confirmado en 13.1 significa que, en la práctica, **presentar una recusación con este fundamento tiene una probabilidad alta de ser declarada infundada** por el superior que la resuelva, precisamente porque no encaja en ninguno de los 16 supuestos.
- **Única salvedad realista** (poco frecuente, pero que el modelo debe reconocer si el usuario aporta hechos adicionales): si el usuario tiene evidencia de que el mismo funcionario **ya conoció y decidió desfavorablemente el mismo asunto en una etapa previa incompatible** (causal 2 — p. ej., fue quien resolvió un recurso de reposición contra el comparendo original en un rol donde ya prejuzgó el fondo, y ahora decide también las excepciones del cobro coactivo con ese sesgo demostrable), o si existe un **interés económico directo y verificable** (causal 1 — p. ej., el funcionario ejecutor tiene vínculo societario o familiar con un contratista privado de cobro coactivo cuya remuneración depende del recaudo, escenario que la jurisprudencia sobre tercerización del cobro coactivo ha empezado a escrutinizar), la recusación sí podría tener fundamento. Pero esto **no es lo que describe el escenario típico** de fechas mal citadas y una excusa genérica de COVID.

**Conclusión honesta para el producto**: el modelo **no debe recomendar la recusación como respuesta a una mala respuesta administrativa**, salvo que el usuario aporte hechos concretos y verificables sobre la persona del funcionario que encajen literalmente en una de las 16 causales del art. 11 CPACA. En el escenario típico de esta consulta, la recusación presentada por el usuario **probablemente no prospera** — no porque esté mal intencionada, sino porque ataca al funcionario cuando el problema real está en el contenido de la respuesta, para lo cual la herramienta correcta es la tutela (sección 10) y/o las excepciones dentro del cobro coactivo (sección 11.3).

### 13.3 Trámite de la recusación (art. 12 CPACA)

- **Ante quién se presenta**: la recusación **no se presenta ante el mismo funcionario cuestionado**, sino que, una vez formulada (por cualquier persona, dirigida al propio funcionario o a la entidad), este debe remitir la actuación junto con un **escrito motivado** dentro de los **tres (3) días siguientes** a su conocimiento de la recusación, a su **superior jerárquico** (p. ej., en una Secretaría de Tránsito municipal, normalmente el Secretario de Tránsito si el recusado es un funcionario subalterno, o el Alcalde si el recusado es el propio Secretario) o, si no tiene superior dentro de la entidad, a la cabeza del respectivo sector administrativo.
- **Aceptación o rechazo por el propio recusado**: el funcionario recusado debe manifestar si acepta o no la causal invocada dentro de los **cinco (5) días siguientes** a la formulación de la recusación.
- **Plazo de decisión**: la autoridad competente (el superior) debe **decidir de plano dentro de los diez (10) días siguientes** al recibo del escrito. Si acepta la causal, designa qué funcionario asumirá el asunto (incluso puede designar un funcionario *ad hoc* si es necesario) y ordena la entrega del expediente.
- **Qué pasa con el proceso principal mientras tanto**: el art. 12 CPACA establece expresamente que **"la actuación administrativa se suspenderá desde la manifestación del impedimento o desde la presentación de la recusación, hasta cuando se decida"**. Es decir, a diferencia de la tutela por derecho de petición (que no suspende automáticamente el cobro coactivo — sección 10.5), **la recusación sí suspende formalmente la actuación específica** en la que interviene el funcionario cuestionado, mientras se resuelve si es fundada. Esto es relevante para el árbol de decisión (13.4): puede ser, en teoría, una herramienta dilatoria de corto plazo (10 a 13 días hábiles aproximadamente), pero **no resuelve el fondo del problema** si la causal no está bien fundada, porque al ser rechazada el proceso simplemente continúa con el mismo funcionario. La norma también prevé que los términos relevantes para el cómputo del silencio administrativo se reanudan una vez vencidos los plazos que ella misma fija, precisamente para evitar que la figura se use como maniobra dilatoria indefinida.
- **Consecuencia si la recusación es infundada**: el **CPACA (arts. 11-12) no establece expresamente una sanción para quien presenta una recusación infundada** dentro de una actuación administrativa general — a diferencia del régimen disciplinario (Ley 1952 de 2019/Código General Disciplinario), donde sí se ha discutido y en algunos casos aplicado la posibilidad de sancionar recusaciones **temerarias o de mala fe** dentro de procesos disciplinarios contra servidores públicos (un régimen distinto al de un trámite administrativo ordinario de tránsito). **Nivel de confianza bajo/verificar** sobre si existe un riesgo sancionatorio formal aplicable específicamente a una recusación infundada en un trámite de cobro coactivo de tránsito — no se encontró una norma o sentencia que lo confirme para este supuesto exacto. El riesgo real, en la práctica, es más bien **estratégico que legal**: una recusación fácilmente declarada infundada consume el tiempo del usuario, no ataca el problema de fondo (la calidad de la respuesta), y puede restarle credibilidad frente a la autoridad si se percibe como una maniobra dilatoria — sin que esto equivalga a una sanción jurídica formal confirmada en esta investigación.

**Fuentes**: Ley 1437 de 2011 (CPACA), art. 12: https://leyes.co/codigo_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo/12.htm ; Función Pública: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249 ; sobre recusaciones temerarias en régimen disciplinario (Ley 1952 de 2019): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90324

### 13.4 Regla para el árbol de decisión: recusación vs. tutela vs. excepciones en cobro coactivo

**Regla clara y honesta**: en el escenario típico que motiva esta sección (la entidad responde una petición dentro de un cobro coactivo con errores materiales, de forma evasiva, o con una excusa genérica que no se refiere al caso concreto), **la recusación casi nunca es la herramienta correcta**. Solo aplica en el supuesto específico y poco frecuente de que existan hechos concretos y verificables sobre la persona del funcionario que encajen en una de las 16 causales tasadas del art. 11 CPACA (típicamente: parentesco o interés económico directo con una de las partes, o haber prejuzgado el mismo asunto en una instancia previa incompatible — 13.2). Fuera de esos supuestos, forzar una recusación:

1. No ataca el problema real (la respuesta defectuosa, no la imparcialidad del funcionario).
2. Tiene alta probabilidad de ser declarada infundada, precisamente porque las causales son taxativas.
3. En el mejor de los casos solo logra una suspensión temporal corta (mientras se resuelve, art. 12 CPACA) — no resuelve el fondo del asunto ni obliga a que la próxima respuesta sea de fondo.

**Camino recomendado en el escenario típico** (fechas incorrectas + excusa genérica en la respuesta a una petición dentro de un cobro coactivo):

1. **Reiterar la petición** señalando expresamente los errores concretos (qué fecha está mal, por qué la excusa no es aplicable/pertinente al caso) y exigiendo respuesta de fondo, clara, precisa y congruente (estándar de la sección 10.2).
2. Si no hay corrección ni respuesta de fondo dentro de un plazo razonable, **tutela por vulneración del derecho de petición** (sección 10) — esta es la vía con respaldo jurisprudencial sólido y consolidado (C-951/2014, T-206/2018) para forzar una respuesta de fondo, y es la que debe recomendarse como paso siguiente, no la recusación.
3. En paralelo, dentro del propio proceso de cobro coactivo, usar los mismos errores/inconsistencias detectados en la respuesta (fechas equivocadas, ausencia de soportes) como **evidencia para sustentar excepciones** contra el mandamiento de pago (falta de ejecutoria, notificación defectuosa, prescripción — sección 11.3), que es la vía más directa para detener o descartar el cobro cuando hay vicios de fondo.
4. **Solo si**, además de lo anterior, aparecen hechos concretos sobre la persona del funcionario (no sobre la calidad de su respuesta) que encajen en una causal del art. 11 CPACA, evaluar la recusación como estrategia adicional — nunca como sustituto de los pasos 1 a 3.

**Nivel de confianza global de esta sección**: alto sobre la existencia, ubicación (arts. 11-12 CPACA) y carácter taxativo de las causales, y sobre el trámite general (plazos de 3/5/10 días y suspensión de la actuación); medio sobre el detalle textual literal de cada uno de los 16 numerales (verificar contra el texto oficial del Diario Oficial antes de citarlos palabra por palabra); bajo/no verificado sobre: (a) la existencia de jurisprudencia específica del Consejo de Estado o la Corte Constitucional sobre recusación en procesos de cobro coactivo o sancionatorios de tránsito en particular (no se encontró en esta investigación), y (b) cualquier consecuencia sancionatoria formal por presentar una recusación infundada en un trámite administrativo de tránsito (distinto del régimen disciplinario).

---

## 14. Formato y estructura formal de la acción de tutela

**Nota de ubicación**: esta sección complementa la sección 10 (fundamento sustancial de la tutela por vulneración del derecho de petición: base constitucional, jurisprudencia, requisitos de procedibilidad y plazo de fallo de 10 días — no se repite aquí). La sección 14 cubre exclusivamente lo que la sección 10 no desarrolla: el **contenido formal mínimo del escrito**, **ante qué juez se presenta**, el **juramento de no duplicidad**, los **anexos recomendados**, las **notificaciones** y los **canales de radicación vigentes en 2026**. Es la base para que el modelo pueda generar el *texto* completo de una tutela, no solo explicar su procedencia.

### 14.1 Contenido mínimo del escrito (artículo 14, Decreto 2591 de 1991)

El **artículo 14 del Decreto 2591 de 1991**, titulado **"Contenido de la solicitud"**, exige que la petición de tutela exprese, con la mayor claridad posible:

1. La **acción o la omisión** que la motiva.
2. El **derecho que se considera violado o amenazado**.
3. El **nombre de la autoridad pública**, si fuere posible, o el **órgano autor de la amenaza o del agravio**.
4. La **descripción de las demás circunstancias relevantes** para decidir la solicitud.
5. El **nombre y el lugar de residencia del solicitante**.

El mismo artículo aclara dos puntos importantes:

- **No es necesario citar la norma constitucional infringida**, siempre que el derecho vulnerado o amenazado quede claramente determinado (esto respalda que el modelo no necesita ser exhaustivo citando cada artículo, aunque sí es buena práctica hacerlo cuando se tiene certeza — coherente con el tono general de este documento).
- **Informalidad total**: la acción puede ejercerse **"sin ninguna formalidad ni autenticación, por memorial, telegrama u otro medio de comunicación que se manifieste por escrito"**, con franquicia. **"No será necesario actuar por medio de apoderado."** En caso de urgencia, o cuando el solicitante no sepa escribir o sea menor de edad, la acción puede ejercerse **verbalmente**.

**Punto importante no siempre advertido**: el artículo 14 **no exige, como requisito formal separado, una "pretensión" o petición concreta redactada de determinada manera**. En la práctica de los formatos y de la jurisprudencia, se recomienda incluir un acápite de pretensiones claro (qué se pide que ordene el juez), pero esto es **práctica recomendada y no una exigencia legal explícita del art. 14** — de hecho, el juez de tutela no está limitado estrictamente por lo pedido por el accionante y puede fallar más allá de las pretensiones literales si así lo exige la protección efectiva del derecho (principio informador de la tutela, coherente con su carácter informal y su finalidad de protección efectiva). El modelo debe, de todas formas, redactar un acápite de pretensiones claro por buena práctica y claridad para el juez, no porque el art. 14 lo exija literalmente.

Adicionalmente, el **artículo 15 del Decreto 2591 de 1991 ("Trámite preferencial")** dispone que la tramitación de la tutela está a cargo del juez (o del magistrado que se designe), **"en turno riguroso"**, y que **"será sustanciada con prelación"**, para lo cual se pospone cualquier asunto de naturaleza diferente, salvo el hábeas corpus. Esto no es contenido del escrito en sí, pero es útil que el modelo lo mencione al usuario para fijar expectativas sobre la celeridad del trámite.

**Nivel de confianza**: alto sobre el contenido literal del artículo 14 (confirmado contra el texto del decreto en Función Pública y coincidente con fuentes secundarias especializadas) y sobre la informalidad y no exigencia de abogado; medio-alto sobre la afirmación de que la "pretensión concreta" no es un requisito formal autónomo (es una lectura razonable del texto del art. 14 y de la práctica, pero no se encontró una sentencia específica citada en esta investigación que lo declare en esos términos exactos para este documento — tratar como interpretación razonable, no como cita jurisprudencial puntual).

### 14.2 Ante qué juez se presenta: competencia territorial y reglas de reparto

Son dos capas distintas que el modelo debe distinguir:

**(a) Competencia (quién puede conocer, en términos de jurisdicción territorial)** — **artículo 86 CP** y **artículo 37, inciso 1, del Decreto 2591 de 1991 ("Primera instancia")**: son competentes, **"a prevención"** (es decir, cualquiera de ellos, sin que uno excluya a otro por el solo hecho de la elección), **"los jueces o tribunales con jurisdicción en el lugar donde ocurriere la violación o la amenaza que motivaren la presentación de la solicitud."** El factor determinante es el **lugar de los hechos** (donde ocurrió la vulneración o se producen sus efectos), no necesariamente el domicilio de la entidad accionada, aunque en la práctica de un comparendo y una petición ante una Secretaría de Tránsito municipal ambos suelen coincidir con el municipio de esa autoridad.

**(b) Reparto (a qué categoría de juez se asigna, dentro de los competentes del lugar)** — regulado por el **Decreto 1069 de 2015** ("Decreto Único Reglamentario del Sector Justicia y del Derecho"), artículo **2.2.3.1.2.1**, **modificado por el Decreto 333 de 2021**:

- Las tutelas contra **cualquier autoridad, organismo o entidad pública del orden departamental, distrital o municipal** (y contra particulares) se reparten, para su conocimiento en primera instancia, a los **jueces municipales**.
- Las tutelas contra **cualquier autoridad, organismo o entidad pública del orden nacional** se reparten a los **jueces del circuito o de igual categoría**.
- El propio decreto aclara expresamente que estas son **reglas de reparto, no de competencia**: **"las anteriores reglas de reparto no podrán ser invocadas por ningún juez para rechazar la competencia ni originar conflictos negativos de competencia."** Es decir, si por reparto le llega a un juez municipal una tutela contra una entidad nacional, no puede rechazarla alegando esta regla — debe tramitarla o remitirla conforme al art. 37 del Decreto 2591/1991, no crear un conflicto de competencia con base en el reparto.

**Aplicación práctica al caso de este producto**: una **Secretaría de Movilidad/Tránsito municipal o distrital** (o una autoridad de tránsito departamental) es una **autoridad del orden municipal/distrital o departamental**, por lo que la tutela por no respuesta a un derecho de petición se reparte, en primera instancia, a un **juez civil municipal** (o promiscuo municipal, en municipios donde no hay especialidad civil separada) **del lugar donde ocurrió la vulneración** (usualmente el municipio de la autoridad de tránsito, donde se radicó el derecho de petición). Esto coincide exactamente con el encabezado del formato oficial de la Defensoría del Pueblo (14.7), que se dirige a **"JUEZ (A) CIVIL MUNICIPAL (REPARTO)"**.

**Nivel de confianza**: alto sobre la existencia y contenido general de las reglas del Decreto 1069/2015 modificado por el Decreto 333/2021, y sobre la distinción reparto/competencia (confirmado por múltiples fuentes, incluida jurisprudencia de la Corte Constitucional sobre conflictos de competencia); medio-alto sobre la aplicación exacta a Secretarías de Tránsito específicas, porque no se verificó un auto de la Corte Constitucional que trate ese organismo exacto en esta investigación — se infiere razonablemente de la calificación de "autoridad del orden municipal/departamental".

### 14.3 El juramento de no haber presentado otra tutela por los mismos hechos y derechos

**Sí es un requisito legal formal**, ubicado en el **inciso 2 del artículo 37 del Decreto 2591 de 1991** (el mismo artículo que fija la competencia territorial, no en un artículo separado): quien interponga la acción de tutela **"deberá manifestar, bajo la gravedad del juramento, que no ha presentado otra respecto de los mismos hechos y derechos"**, y al recibir la solicitud se advierte al accionante sobre las consecuencias penales del falso testimonio.

Su incumplimiento (presentar varias tutelas por los mismos hechos ante distintos jueces, sin motivo justificado) activa el **artículo 38 del Decreto 2591 de 1991 ("Actuación temeraria")**: todas las solicitudes se rechazan o se deciden desfavorablemente, y si es un abogado quien promueve la duplicidad, se expone a la **suspensión de la tarjeta profesional por al menos dos años** (con posible cancelación en caso de reincidencia).

**Redacción típica** (verificada contra el texto literal del formato oficial de la Defensoría del Pueblo, sección 14.7): *"Dando cumplimiento al artículo 37 del Decreto 2591 de 1991, manifiesto bajo la gravedad de juramento que no he presentado ninguna otra acción de tutela por los mismos hechos y derechos contra el aquí accionado."* El modelo debe incluir una manifestación equivalente como acápite independiente ("Juramento") en todo escrito de tutela que genere.

**Nivel de confianza**: alto — confirmado contra el texto del artículo 37 (Función Pública) y contra el formato oficial descargable de la Defensoría del Pueblo, que usa prácticamente esta misma redacción.

### 14.4 Anexos y pruebas

El Decreto 2591 de 1991 **no contiene un artículo que enumere de forma taxativa los anexos obligatorios** de una tutela (a diferencia, por ejemplo, de los requisitos de una demanda civil ordinaria bajo el Código General del Proceso). Lo que exige el art. 14 es que la solicitud describa las "circunstancias relevantes" y, en la parte de pruebas, que se relacionen los documentos que las acreditan — pero **la exigencia de acompañar copias físicas o digitales de esos documentos es práctica consolidada, no una norma expresa del decreto** verificada en esta investigación.

El **formato oficial de la Defensoría del Pueblo** (sección 14.7) sí enumera, como práctica estandarizada, un acápite de **"Anexos"** con tres elementos:

1. Copia de la tutela y sus anexos, para el correspondiente traslado a la parte accionada.
2. Copia de la tutela, para el archivo del juzgado.
3. Copia de los documentos relacionados en el acápite de pruebas.

**Para el caso específico de este producto** (tutela por no respuesta a un derecho de petición sobre una multa de tránsito), los anexos/pruebas recomendados y coherentes con los hechos que debe narrar el escrito son:

- **Copia del derecho de petición radicado**, idealmente con el sello, número de radicado o comprobante de recepción de la entidad (es la prueba central de que la petición existió y de la fecha exacta desde la cual corren los plazos del art. 14 CPACA — sección 5.2).
- **Copia de la respuesta recibida**, si la hubo (para sustentar el escenario "(b)" de la sección 10.3: respuesta evasiva o que no resuelve de fondo).
- **Documento de identificación del accionante** (cédula de ciudadanía) — no como "anexo" separado en el formato de la Defensoría, sino habitualmente referenciado mediante el número de cédula en el cuerpo del escrito y en la firma, pero es razonable y frecuente en la práctica acompañarlo como soporte adicional.
- Cualquier otro soporte relevante (p. ej., capturas de pantalla del estado de la petición en un sistema de la entidad, si existe seguimiento en línea).

**Nivel de confianza**: alto sobre la ausencia de un artículo específico del Decreto 2591/1991 que tase los anexos obligatorios; alto sobre la lista de anexos del formato de la Defensoría del Pueblo (verificado contra el texto literal del documento oficial); medio-alto sobre la recomendación de anexar cédula, que es práctica razonable pero no una exigencia normativa expresa localizada en esta investigación.

### 14.5 Notificaciones

El **artículo 16 del Decreto 2591 de 1991** dispone, en términos generales, que **"las providencias que se dicten se notificarán a las partes o intervinientes, por el medio que el juez considere más expedito y eficaz"** — es una norma de habilitación amplia que no fija un medio único, y que respalda el uso de correo electrónico como canal válido de notificación en la práctica judicial actual.

El **formato oficial de la Defensoría del Pueblo** confirma la práctica consolidada: el escrito debe incluir un acápite de **"Notificaciones"** que señale, por separado:

- La **dirección (física) y el correo electrónico donde el accionado recibe notificaciones** (si el accionante los conoce — p. ej., la dirección y correo institucional de la Secretaría de Tránsito).
- La **dirección (física) y el correo electrónico donde el accionante recibe notificaciones**.

**Nivel de confianza**: alto sobre la existencia del artículo 16 y su contenido general; alto sobre la estructura de doble acápite de notificaciones (accionado/accionante), verificado contra el texto literal del formato oficial de la Defensoría del Pueblo; medio sobre si existe una norma específica y expresa (más allá de la práctica y del art. 16) que **obligue** a incluir el correo electrónico — no se encontró en esta investigación un artículo que lo exija de forma expresa e independiente, por lo que se presenta como práctica estándar fuertemente recomendada, no como formalidad legal autónoma.

### 14.6 Dónde y cómo se radica en la práctica (2026)

Existen, en la práctica actual, **tres canales no excluyentes**:

1. **Presencial**, en el juzgado de reparto competente (o en el centro de servicios judiciales / oficina de reparto, en ciudades donde hay varios juzgados civiles municipales y existe una oficina de reparto centralizada que distribuye entre ellos).
2. **Correo electrónico de reparto**: muchos circuitos judiciales publican direcciones de correo electrónico específicas para la radicación de tutelas (distintas del correo de radicación de otros procesos). Estas direcciones varían por circuito/municipio y se consultan en el sitio institucional de cada juzgado dentro de ramajudicial.gov.co o en el directorio general de correos de la Rama Judicial (https://www.ramajudicial.gov.co/directorio-cuentas-de-correo-electronico). El modelo **no debe inventar una dirección de correo genérica** para un municipio específico sin verificarla; debe indicar al usuario que debe consultarla en el sitio de la Rama Judicial correspondiente a su municipio.
3. **"Tutela en Línea"**, la plataforma digital oficial del Consejo Superior de la Judicatura / Rama Judicial, disponible en **https://procesojudicial.ramajudicial.gov.co/TutelaEnLinea**: permite radicar la acción de tutela (y habeas corpus) completamente en línea, las 24 horas, sin costo. El flujo reportado por la propia página incluye: aceptar términos y política de privacidad, seleccionar el departamento y municipio, indicar los datos del accionante y del accionado, especificar los derechos vulnerados, adjuntar los documentos de soporte (reportado un límite de 50 MB por archivo, en formatos PDF, DOCX, DOC, XLSX), completar una verificación de seguridad y enviar. El sistema reporta generar un mensaje de confirmación de recepción con código de radicado y un correo de confirmación; el reparto al juzgado correspondiente se hace de forma automática/electrónica. Soporte técnico reportado: soportetutelaenlinea@deaj.ramajudicial.gov.co / +57 (601) 565 8500.

**Nivel de confianza**: alto sobre la existencia y funcionamiento general de "Tutela en Línea" como canal oficial (confirmado directamente en el sitio de ramajudicial.gov.co); medio sobre el detalle exacto y vigencia de los límites técnicos (50 MB, formatos exactos) y sobre si la cobertura territorial de la plataforma alcanza absolutamente todos los municipios del país o solo circuitos con conectividad/implementación completa — recomendar al usuario verificar disponibilidad para su municipio específico al momento de radicar, y usar el canal presencial o de correo electrónico como respaldo si la plataforma no cubre su circuito. Sobre los correos electrónicos de reparto por circuito: alto sobre que existen y son un canal real y usado (confirmado por múltiples páginas de juzgados específicos encontradas en la investigación, p. ej. Juzgado 002 Civil del Circuito de Fusagasugá), pero **no se debe citar una dirección de correo específica de un municipio sin verificarla al momento de generar el documento para el usuario**, porque cambian y son específicas de cada juzgado/circuito.

### 14.7 Formato oficial de la Defensoría del Pueblo

La **Defensoría del Pueblo** sí publica un **formato/plantilla oficial descargable de acción de tutela**, en formato Word, disponible en: **https://www.defensoria.gov.co/documents/20123/3474431/formato_accion_de_tutela.docx**. Este documento fue descargado y su texto verificado literalmente en esta investigación. Su estructura, en el orden exacto en que aparece, es:

1. **Ciudad y fecha**.
2. **Encabezado**: "Señor(a) JUEZ (A) CIVIL MUNICIPAL (REPARTO)" + Ciudad (confirma la regla de reparto de la sección 14.2 para autoridades municipales/departamentales).
3. **Referencia**: "Ref.: Acción de tutela".
4. **Identificación de partes**: "Accionante" (nombres y apellidos completos) y "Accionado" (autoridad o particular contra quien se dirige).
5. **Párrafo introductorio**: identificación del accionante con su número de cédula y lugar de expedición, manifestación de que acude "con el fin de interponer ACCIÓN DE TUTELA en contra de [accionado] por considerar que me está vulnerando el derecho fundamental [derecho]".
6. **Hechos**: relación detallada y, si se desea, cronológica, de los hechos que generan la vulneración.
7. **Derechos vulnerados**: enunciación del/los derecho(s) fundamental(es), con su fundamento constitucional y legal (el propio formato usa como ejemplo ilustrativo, literalmente, el **derecho de petición del artículo 23 CP, desarrollado por la Ley 1755 de 2015** — lo que es un indicio adicional de que este es precisamente el tipo de caso para el que el formato está pensado como modelo).
8. **Fundamentos jurídicos** (opcional/ampliatorio): normativa constitucional, legal, reglamentaria y jurisprudencia aplicable, si el accionante la conoce.
9. **Pruebas**: listado enumerado de los medios probatorios que se piden tener en cuenta.
10. **Fundamentos de Derecho**: el formato fundamenta la acción, de forma estándar, en el **"artículo 86 de la Constitución Política de 1991 y sus decretos reglamentarios 2591 y 306 de 1992"**. (Nota de verificación: el **Decreto 306 de 1992** ("por el cual se reglamenta el Decreto 2591 de 1991") existe efectivamente y es un decreto reglamentario real de la acción de tutela — se confirmó su existencia y objeto general en esta investigación, aunque no se verificó el detalle artículo por artículo más allá de sus disposiciones generales sobre notificación de providencias y contenido del fallo). **Nota editorial posterior (2026, control de calidad):** el Decreto 306 de 1992 fue derogado y su contenido compilado casi en su totalidad por el **Decreto 1069 de 2015** (Decreto Único Reglamentario del Sector Justicia — ver el mismo Decreto 1069/2015 ya citado en las fuentes de esta sección). El formato de la Defensoría sigue citando el 306/1992 por costumbre/plantilla, y el modelo puede describir fielmente que así lo hace ese formato oficial, pero si en algún momento se genera el fundamento de derecho de una tutela de forma independiente (no citando el formato textualmente), debe usarse la cita normativa vigente: Decreto 2591 de 1991 y Decreto 1069 de 2015, no el 306 de 1992 derogado.
11. **Pretensiones**: listado enumerado de lo que se pide ordenar al accionado (ver la salvedad de la sección 14.1 sobre que esto es práctica recomendada, no exigencia expresa del art. 14).
12. **Anexos**: los tres ítems descritos en la sección 14.4.
13. **Juramento**: la manifestación descrita literalmente en la sección 14.3.
14. **Notificaciones**: los dos acápites (accionado y accionante) descritos en la sección 14.5.
15. **Firma y cédula de ciudadanía** del accionante.

**Nivel de confianza**: alto — a diferencia de otros puntos de esta sección basados en fuentes secundarias, esta estructura se verificó **directamente contra el texto literal del documento oficial** descargado del dominio institucional defensoria.gov.co, por lo que el modelo puede usarla con alta confianza como plantilla de referencia para generar el texto de la tutela, adaptando cada acápite al caso concreto del usuario (derecho de petición sobre una multa de tránsito no respondido o respondido sin resolver de fondo).

**Fuentes de la sección 14**: Decreto 2591 de 1991, arts. 14, 15, 16, 37 y 38 — Función Pública: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5304 ; texto también verificado contra Secretaría del Senado: http://www.secretariasenado.gov.co/senado/basedoc/decreto_2591_1991.html ; Decreto 1069 de 2015 (Decreto Único Reglamentario Sector Justicia), art. 2.2.3.1.2.1: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=63509 ; Decreto 333 de 2021 (modifica reglas de reparto de tutela): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=161266 y SUIN-Juriscol: https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30041487 ; Decreto 306 de 1992 (reglamenta el Decreto 2591 de 1991): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6061 ; Defensoría del Pueblo, formato oficial de acción de tutela (verificado literalmente): https://www.defensoria.gov.co/documents/20123/3474431/formato_accion_de_tutela.docx ; Rama Judicial, "Tutela en Línea": https://procesojudicial.ramajudicial.gov.co/TutelaEnLinea y https://www.ramajudicial.gov.co/web/ventanilla/servicios/-/asset_publisher/kzguQDYxYEvs/content/id/144991791 ; Rama Judicial, directorio de cuentas de correo electrónico: https://www.ramajudicial.gov.co/directorio-cuentas-de-correo-electronico ; ejemplo de correo de reparto de un circuito específico (solo como ilustración de que el canal existe, no como dato genérico aplicable a todo el país): Juzgado 002 Civil del Circuito de Fusagasugá: https://www.ramajudicial.gov.co/web/juzgado-02-civil-del-circuito-de-fusagasuga/-/correos-electr%C3%93nicos-para-radicar-tutelas

---

## Índice de fuentes principales citadas

- Ley 769 de 2002 (CNTT): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5557
- Ley 1383 de 2010: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39180
- Ley 1843 de 2017 (fotomultas): https://www.suin-juriscol.gov.co/viewDocument.asp?id=30032605
- Ley 2251 de 2022 (seguridad vial): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=189806
- Ley 1437 de 2011 (CPACA): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249
- Ley 1755 de 2015 (modifica arts. 13-33 CPACA, derecho de petición): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65334
- Corte Constitucional, Sentencia C-038 de 2020 (inexequibilidad responsabilidad solidaria fotomultas): https://www.corteconstitucional.gov.co/relatoria/2020/c-038-20.htm
- Corte Constitucional, Sentencia C-554 de 2001 (non bis in idem): https://www.corteconstitucional.gov.co/relatoria/2001/c-554-01.htm
- Gerencie.com, prescripción de multas de tránsito: https://www.gerencie.com/prescripcion-de-multas-de-transito.html
- Gerencie.com, comparendos y fotomultas: https://www.gerencie.com/comparendos-de-transito-y-fotomultas.html
- Gerencie.com, notificación de fotomultas: https://www.gerencie.com/notificacion-de-las-fotomultas.html
- Ámbito Jurídico, marco regulatorio fotomultas: https://www.ambitojuridico.com/noticias/general/administrativo-y-contratacion/este-es-el-marco-regulatorio-para-las-fotomultas
- Ámbito Jurídico, defensa por notificación fuera de término: https://www.ambitojuridico.com/noticias/general/administrativo-y-contratacion/como-defenderse-de-fotomulta-notificada-fuera-del
- Ministerio de Justicia, LegalApp (comparendos y fotomultas): https://www.minjusticia.gov.co/programas-co/LegalApp/Paginas/
- Secretaría Distrital de Movilidad de Bogotá (señalización y prescripción): https://www.movilidadbogota.gov.co/
- Decreto 2591 de 1991 (reglamenta la acción de tutela): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5304
- Corte Constitucional, Sentencia C-951 de 2014 (elementos del núcleo esencial del derecho de petición): https://www.corteconstitucional.gov.co/relatoria/2014/c-951-14.htm
- Corte Constitucional, Sentencia T-206 de 2018 (procedencia de la tutela para proteger el derecho de petición): https://www.corteconstitucional.gov.co/relatoria/2018/t-206-18.htm
- Ley 1712 de 2014 (transparencia y acceso a la información pública): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882
- Ley 1066 de 2006 (normalización de cartera pública y cobro coactivo, art. 5): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=20866
- Estatuto Tributario, arts. 826, 830 y 831 (mandamiento de pago y excepciones en cobro coactivo): https://estatuto.co/826 , https://estatuto.co/830 , https://estatuto.co/831
- Ley 1437 de 2011 (CPACA), arts. 5, 98-101 (derechos de las personas y cobro coactivo): https://leyes.co/codigo_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo.htm
- Ley 1437 de 2011 (CPACA), arts. 11 y 12 (conflictos de interés, causales y trámite de impedimentos y recusaciones de servidores públicos administrativos): https://leyes.co/codigo_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo/11.htm y https://leyes.co/codigo_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo/12.htm
- Función Pública, Concepto 24531 de 2019 (interpretación restrictiva del interés particular como causal de impedimento): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=91023
- Decreto 1069 de 2015 (Decreto Único Reglamentario Sector Justicia, reglas de reparto de tutela, art. 2.2.3.1.2.1): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=63509
- Decreto 333 de 2021 (modifica reglas de reparto de la acción de tutela): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=161266
- Decreto 306 de 1992 (reglamenta el Decreto 2591 de 1991): https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6061
- Defensoría del Pueblo, formato oficial de acción de tutela: https://www.defensoria.gov.co/documents/20123/3474431/formato_accion_de_tutela.docx
- Rama Judicial, plataforma "Tutela en Línea": https://procesojudicial.ramajudicial.gov.co/TutelaEnLinea
