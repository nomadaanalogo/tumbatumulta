# TumbaTuMulta

Sitio estático (Astro + TypeScript + Tailwind CSS) con guías sobre multas de tránsito en Colombia:
prescripción, caducidad, fotomultas, SIMIT/RUNT, derecho de petición, tutela y cobro coactivo.

No tiene backend, base de datos, autenticación, IA propia ni pagos. La página `/analiza-tu-multa/`
ofrece un prompt listo para copiar en un asistente de IA externo (ChatGPT, Gemini o Claude). El sitio
se monetiza con Google AdSense.

## Comandos

| Comando           | Acción                                          |
| :----------------- | :----------------------------------------------- |
| `npm install`       | Instala dependencias                              |
| `npm run dev`       | Servidor local en `localhost:4321`                |
| `npm run build`     | Build de producción en `./dist/`                  |
| `npm run preview`   | Sirve el build de producción localmente           |
| `npm run astro check` | Chequeo de tipos de TypeScript/Astro            |

## Variables de entorno

Copia `.env.example` a `.env` y define `PUBLIC_ADSENSE_CLIENT_ID` (formato `ca-pub-XXXXXXXXXXXXXXXX`)
una vez tengas la cuenta de AdSense aprobada. Mientras esté vacía, el sitio no inyecta el script de
AdSense ni renderiza los `<AdSlot />`.

Antes de desplegar a producción, actualiza también `site` en `astro.config.mjs` con el dominio real.

## Contenido

Los artículos viven en `src/content/blog/*.md` (colección `blog`, definida en `src/content.config.ts`).
Para añadir uno nuevo, crea un archivo `.md` con el frontmatter `title`, `description`, `category`
(`Conceptos clave` | `Fotomultas` | `Trámites` | `Cobro y embargos`), `order` y `updatedDate`.
