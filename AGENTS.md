# AGENTS.md

Sitio estático sin build: `index.html`, `styles.css`, `script.js`, `images/`. No añadas frameworks, npm ni herramientas de build.

- Las tarjetas de proyectos y el contenido del modal se generan a partir del array `PROYECTOS` en `script.js`.
- Intro: `SALUDOS` / `TEXTO_FIJO` en `script.js`. Las clases `.visible` y `.saliendo` en CSS controlan el fade y el desplazamiento. `TRANSICION` tiene que coincidir con la duración de la transición en CSS.
- Efecto hover: se usa `.grid:has(.card:hover)` para atenuar las demás tarjetas.
- Por petición del usuario solo hay dos animaciones (intro y hover de proyectos). El modal aparece sin animación. No añadas menú, modo oscuro, formularios ni más animaciones.
- Todo el contenido está en español. Los puntos editables llevan el comentario `EDITA`.
