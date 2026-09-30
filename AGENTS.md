# AGENTS.md

Sitio estático sin build: `index.html`, `styles.css`, `script.js`, `images/`. No añadas frameworks, npm ni herramientas de build.

- Las tarjetas de proyectos del carrusel y el contenido del modal se generan a partir del array `PROYECTOS` en `script.js` (incluye `rating` editable de 0 a 5).
- Barra de navegación fija superior con enlaces a `#about-me`, `#projects` y `#kaggle`.
- Carrusel de proyectos con efecto foco horizontal: tarjeta activa centrada en color, laterales en escala de grises y desenfoque. Navegación por clic, flechas, teclado y swipe táctil.
- Sección de competiciones de Kaggle en `#kaggle`.
- Intro: `SALUDOS` / `TEXTO_FIJO` en `script.js`. Las clases `.visible` y `.saliendo` en CSS controlan el fade y el desplazamiento. `TRANSICION` tiene que coincidir con la duración de la transición en CSS.
- Todo el contenido está en español. Los puntos editables llevan el comentario `EDITA`.
