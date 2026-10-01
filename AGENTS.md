# AGENTS.md

Sitio estático sin build: `index.html`, `styles.css`, `script.js`, `i18n.js`, `images/`. No añadas frameworks, npm ni herramientas de build.

- Sistema de internacionalización (i18n): `i18n.js` contiene los diccionarios `{ en: {...}, es: {...} }` compatibles con `file://` y GitHub Pages sin peticiones fetch ni módulos. Los elementos traducibles llevan `data-i18n="clave"` y `data-i18n-aria="clave"`. Proyectos y competiciones Kaggle permanecen en inglés.
- Las tarjetas de proyectos del carrusel y el contenido del modal se generan a partir del array `PROYECTOS` en `script.js` (incluye `rating` editable de 0 a 5). Tarjetas horizontales (imagen y estrellas a la izquierda, título, descripción y skills a la derecha).
- Barra de navegación fija superior con selector de idioma independiente `EN | ES` a la derecha. Pestaña activa con círculo blanco y sutil subrayado gris de la palabra sin sombras oscuras.
- Carrusel de proyectos con efecto foco horizontal: tarjeta activa centrada en color, laterales en escala de grises y desenfoque. Navegación por arrastre con ratón/táctil mediante Pointer Events (con seguimiento en tiempo real, resistencia elástica en límites y umbral anti-clic de 5 px), botones de flecha y teclado (← →).
- Sección de competiciones de Kaggle en `#kaggle`.
- Intro: `SALUDOS` / `TEXTO_FIJO` en `script.js`. Las clases `.visible` y `.saliendo` en CSS controlan el fade y el desplazamiento. `TRANSICION` tiene que coincidir con la duración de la transición en CSS.
- Los puntos editables llevan el comentario `EDITA`.
