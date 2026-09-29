# Joaquín | Data Analytics Portfolio

Portfolio de una sola página para Joaquín, analista de datos. Está hecho solo con HTML, CSS y JavaScript puro: no usa frameworks, ni npm, ni paso de build.

## Estructura
- `index.html`: intro, CV, sección de proyectos, footer y modal
- `styles.css`: estilo neumórfico suave y diseño responsive
- `script.js`: array `PROYECTOS` (contenido editable), intro animada y modal
- `images/`: imágenes placeholder de los proyectos y favicon

## Uso en local
Abre `index.html` en el navegador o sirve la carpeta con cualquier servidor estático (por ejemplo `npx serve .`).

## Despliegue
Sube la carpeta a Netlify tal cual. No necesita configuración.

## Editar el contenido
- Nombre, presentación, contacto y CV: en `index.html` (busca los comentarios `EDITA`)
- Proyectos: en el array `PROYECTOS` de `script.js`
- Imágenes: sustituye los archivos de `images/`

Cada vez que se haga un cambio nuevo que me guste -> git add . -> git commit -m "mensaje" -> git push
Si algo se ha cambiado y no me gusta y quiero volver a la ultima versión de github -> git fetch origin -> git reset --hard origin/main -> git clean -fd
