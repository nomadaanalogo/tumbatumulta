import type { IconName } from './components/Icon.astro';

export const SITE_NAME = 'TumbaTuMulta';
export const SITE_DESCRIPTION =
  'Entiende tus opciones antes de pagar una multa de tránsito en Colombia: prescripción, caducidad, fotomultas y derecho de petición explicados en lenguaje claro.';

export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/blog/', label: 'Guía' },
  { href: '/analiza-tu-multa/', label: 'Analiza tu multa' },
  { href: '/faq/', label: 'FAQ' },
];

export const SHORT_DISCLAIMER =
  'TumbaTuMulta ofrece orientación informativa general, no asesoría legal individual. Para casos de alto valor, licencias en riesgo o procesos judiciales ya iniciados, consulta con un abogado.';

export const CATEGORIES = [
  'Conceptos clave',
  'Fotomultas',
  'Trámites',
  'Cobro y embargos',
] as const;

export const CATEGORY_ICONS: Record<(typeof CATEGORIES)[number], IconName> = {
  'Conceptos clave': 'scale',
  Fotomultas: 'camera',
  Trámites: 'document',
  'Cobro y embargos': 'lock',
};

/**
 * IDs numéricos de cada bloque de anuncio, tal como los genera Google AdSense
 * al crear una "unidad de anuncio" (Anuncios > Por unidad de anuncio > Crear).
 * Cada valor es el `data-ad-slot` de esa unidad (un número como "1234567890").
 * Reemplaza los placeholders de abajo una vez tengas la cuenta de AdSense
 * aprobada y hayas creado las 3 unidades. Mientras el placeholder siga sin
 * reemplazar, el <AdSlot> simplemente no se renderiza (ver src/components/AdSlot.astro).
 */
export const AD_SLOTS = {
  articleTop: 'REPLACE_WITH_ARTICLE_TOP_SLOT_ID',
  articleBottom: 'REPLACE_WITH_ARTICLE_BOTTOM_SLOT_ID',
  analizaTuMulta: 'REPLACE_WITH_ANALIZA_TU_MULTA_SLOT_ID',
};
