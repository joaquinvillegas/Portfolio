/* =========================================================
   PROYECTOS — EDITA AQUÍ TUS PROYECTOS
   Cada objeto genera una tarjeta y su modal de detalle.
   - rating: puntuación personal (0 a 5, admite decimales)
   - imagen: ruta dentro de /images
   - detalle.enlace: URL del repositorio o dashboard
   ========================================================= */
const PROYECTOS = [
  {
    titulo: "Dashboard de Ventas Retail",
    subtitulo: "Power BI · Análisis comercial",
    rating: 4.8, // EDITA: puntuación de 0 a 5 (ej: 4.8)
    descripcion: "Dashboard interactivo para seguir ventas, márgenes y rendimiento por tienda y categoría a lo largo del año.",
    tags: ["Power BI", "DAX", "SQL", "Excel"],
    imagen: "images/proyecto-1.svg",
    detalle: {
      descripcionLarga: "Construí un modelo de datos en estrella a partir de las tablas transaccionales de una cadena retail y diseñé un dashboard en Power BI con filtros por región, tienda, categoría y periodo.",
      objetivo: "Dar a la dirección comercial una visión única y actualizada de las ventas para detectar tiendas y productos con bajo rendimiento.",
      resultados: [
        "Identificadas 3 categorías con margen negativo en el último trimestre.",
        "Reducción del tiempo de reporting semanal de 4 horas a 15 minutos.",
        "KPIs unificados para todas las tiendas."
      ],
      enlace: "https://github.com/joaquinvillegas/dashboard-ventas"
    }
  },
  {
    titulo: "Análisis de Churn de Clientes",
    subtitulo: "Python · Machine Learning",
    rating: 4.5, // EDITA: puntuación de 0 a 5
    descripcion: "Análisis exploratorio y modelo predictivo para identificar clientes con alta probabilidad de abandono en una empresa de telecomunicaciones.",
    tags: ["Python", "Pandas", "Scikit-learn", "Estadística"],
    imagen: "images/proyecto-2.svg",
    detalle: {
      descripcionLarga: "Limpieza de datos, análisis exploratorio y entrenamiento de un modelo de regresión logística y random forest para predecir el churn a partir de uso, contrato y facturación.",
      objetivo: "Detectar los factores que más influyen en el abandono y priorizar acciones de retención.",
      resultados: [
        "Modelo con AUC de 0.84 en el conjunto de test.",
        "Los contratos mensuales concentran el 70% del churn.",
        "Propuesta de campaña de retención para el 10% de clientes de mayor riesgo."
      ],
      enlace: "https://github.com/joaquinvillegas/churn-analysis"
    }
  },
  {
    titulo: "Análisis de Datos de E-commerce",
    subtitulo: "SQL · BigQuery",
    rating: 4.0, // EDITA: puntuación de 0 a 5
    descripcion: "Consultas SQL avanzadas para analizar el embudo de conversión, la retención por cohortes y el valor de vida del cliente.",
    tags: ["SQL", "BigQuery", "Cohortes"],
    imagen: "images/proyecto-3.svg",
    detalle: {
      descripcionLarga: "Uso de CTEs y funciones ventana sobre un dataset público de e-commerce para calcular métricas de conversión, retención mensual por cohortes y LTV.",
      objetivo: "Entender en qué punto del embudo se pierden más usuarios y cómo evoluciona la retención.",
      resultados: [
        "La mayor caída del embudo se produce entre carrito y pago (-58%).",
        "La retención al tercer mes ronda el 18%.",
        "Consultas documentadas y reutilizables."
      ],
      enlace: "https://github.com/joaquinvillegas/ecommerce-sql"
    }
  },
  {
    titulo: "Test A/B de Landing Page",
    subtitulo: "Estadística · Experimentación",
    rating: 4.5, // EDITA: puntuación de 0 a 5
    descripcion: "Diseño y análisis de un experimento A/B para evaluar el impacto de un nuevo diseño de landing en la tasa de conversión.",
    tags: ["Estadística", "Python", "A/B Testing"],
    imagen: "images/proyecto-4.svg",
    detalle: {
      descripcionLarga: "Cálculo del tamaño muestral, verificación de la aleatorización y análisis de resultados con contrastes de hipótesis e intervalos de confianza.",
      objetivo: "Decidir con rigor estadístico si el nuevo diseño mejora la conversión.",
      resultados: [
        "Mejora de conversión del 1.8 puntos porcentuales (p < 0.05).",
        "Recomendación de implantar la variante B.",
        "Plantilla reutilizable para futuros experimentos."
      ],
      enlace: "https://github.com/joaquinvillegas/ab-test"
    }
  },
  {
    titulo: "Dashboard de RR. HH.",
    subtitulo: "Tableau · People Analytics",
    rating: 4.2, // EDITA: puntuación de 0 a 5
    descripcion: "Visualización de rotación, absentismo y diversidad de plantilla para apoyar la toma de decisiones del departamento de personas.",
    tags: ["Tableau", "Excel", "Visualización"],
    imagen: "images/proyecto-5.svg",
    detalle: {
      descripcionLarga: "Preparación de datos en Excel y creación de un dashboard en Tableau con indicadores de rotación, antigüedad, absentismo y distribución por departamento.",
      objetivo: "Ofrecer a RR. HH. una herramienta visual para monitorizar la salud de la plantilla.",
      resultados: [
        "Detectado un pico de rotación en empleados con menos de 1 año.",
        "Dashboard publicado en Tableau Public.",
        "Base para un plan de onboarding mejorado."
      ],
      enlace: "https://public.tableau.com/app/profile/joaquinvillegas"
    }
  },
  {
    titulo: "Automatización de Informes",
    subtitulo: "Python · Excel",
    rating: 5.0, // EDITA: puntuación de 0 a 5
    descripcion: "Script en Python que extrae datos, los transforma y genera automáticamente informes mensuales en Excel con gráficos.",
    tags: ["Python", "Excel", "Automatización"],
    imagen: "images/proyecto-6.svg",
    detalle: {
      descripcionLarga: "Pipeline sencillo con Pandas y OpenPyXL que lee varias fuentes, valida los datos, calcula los KPIs y exporta un informe formateado listo para enviar.",
      objetivo: "Eliminar el trabajo manual repetitivo y los errores en los informes mensuales.",
      resultados: [
        "Ahorro de unas 10 horas de trabajo al mes.",
        "Cero errores de copia manual desde su implantación.",
        "Informe homogéneo para todos los departamentos."
      ],
      enlace: "https://github.com/joaquinvillegas/report-automation"
    }
  }
];

/* =========================================================
   KAGGLE COMPETITIONS — EDITA AQUÍ TUS PARTICIPACIONES
   Cada objeto genera una tarjeta en #kaggle y su modal de detalle.
   ========================================================= */
const KAGGLE_COMPETICIONES = [
  {
    titulo: "Predict Student Performance from Game Play",
    subtitulo: "Predicción de rendimiento estudiantil mediante logs de juego",
    badge: "Top 7% · Medalla de Bronce",
    tipo: "Competencia Destacada",
    posicion: "Posición: <strong>94 / 1.345 equipos</strong>",
    descripcion: "Modelo de Machine Learning para predecir si los estudiantes responderán correctamente preguntas sobre un juego educativo a partir del análisis temporal de sus interacciones.",
    tags: ["Python", "LightGBM", "Feature Engineering", "Time Series"],
    imagen: "images/proyecto-1.svg",
    enlace: "https://www.kaggle.com/competitions",
    detalle: {
      descripcionLarga: "Modelo de Machine Learning para predecir si los estudiantes responderán correctamente preguntas sobre un juego educativo a partir del análisis temporal de sus interacciones.",
      objetivo: "Predecir en tiempo real el éxito del estudiante en cada nivel evaluativo para permitir intervenciones pedagógicas adaptativas.",
      resultados: [
        "Feature engineering exhaustivo sobre ventanas temporales acumuladas y patrones de clics.",
        "Modelo LightGBM con validación GroupKFold por estudiante para evitar data leakage.",
        "Posición final en el Top 7% y medalla de bronce entre 1.345 equipos internacionales."
      ],
      enlace: "https://www.kaggle.com/competitions"
    }
  },
  {
    titulo: "Spaceship Titanic",
    subtitulo: "Clasificación binaria y transporte interdimensional",
    badge: "Top 12%",
    tipo: "Tabular Series",
    posicion: "Score: <strong>0.812 CV</strong>",
    descripcion: "Limpieza y preprocesamiento de datos con imputación avanzada, análisis exploratorio, encoding de variables categóricas complejas y ensamblado de modelos XGBoost y CatBoost.",
    tags: ["Python", "CatBoost", "XGBoost", "Ensemble"],
    imagen: "images/proyecto-2.svg",
    enlace: "https://www.kaggle.com/competitions",
    detalle: {
      descripcionLarga: "Limpieza y preprocesamiento de datos con imputación avanzada, análisis exploratorio, encoding de variables categóricas complejas y ensamblado de modelos XGBoost y CatBoost.",
      objetivo: "Predecir qué pasajeros fueron transportados a una dimensión alternativa durante la colisión de la nave espacial.",
      resultados: [
        "Extracción de cabina, cubierta, número y lado para enriquecer la señal espacial.",
        "Imputación por grupos de edad, gasto en comodidades y origen planetario.",
        "Ensemble ponderado de XGBoost, CatBoost y LightGBM alcanzando 0.812 en cross-validation."
      ],
      enlace: "https://www.kaggle.com/competitions"
    }
  },
  {
    titulo: "House Prices: Advanced Regression Techniques",
    subtitulo: "Predicción de precios inmobiliarios con 79 variables",
    badge: "Regresión Tabular",
    tipo: "Competencia de Aprendizaje",
    posicion: "Métrica: <strong>0.114 RMSE</strong>",
    descripcion: "Tratamiento de asimetría (skewness) con transformaciones logarítmicas, regularización Lasso/Ridge, optimización de hiperparámetros con Optuna y stacking final.",
    tags: ["Python", "Scikit-learn", "Optuna", "Lasso / Ridge"],
    imagen: "images/proyecto-3.svg",
    enlace: "https://www.kaggle.com/competitions",
    detalle: {
      descripcionLarga: "Tratamiento de asimetría (skewness) con transformaciones logarítmicas, regularización Lasso/Ridge, optimización de hiperparámetros con Optuna y stacking final.",
      objetivo: "Desarrollar un modelo predictivo robusto para tasar el precio de venta residencial a partir de 79 variables heterogéneas.",
      resultados: [
        "Transformación Box-Cox y log-transform sobre variables con alta asimetría.",
        "Optimización bayesiana de hiperparámetros con Optuna para modelos lineales regularizados y árboles.",
        "Stacking de Lasso, Ridge, GradientBoosting y XGBoost logrando un score de 0.114 RMSE."
      ],
      enlace: "https://www.kaggle.com/competitions"
    }
  }
];

/* =========================================================
   INTRO — saludos, texto fijo, fuentes y tiempos
   ========================================================= */
const SALUDOS = [
  { texto: "Hola",  fuente: "\"Times New Roman\", Times, serif" },
  { texto: "Hello", fuente: "\"Times New Roman\", Times, serif" },
  { texto: "你好",   fuente: "\"Times New Roman\", Times, serif" },
  { texto: "Ciao",  fuente: "\"Times New Roman\", Times, serif" }
]; // EDITA: lista de saludos (puedes añadir o quitar)

const TEXTO_FIJO = {
  texto: ", soy Joaquín", // EDITA: tu nombre y texto fijo a la derecha
  fuente: "\"Times New Roman\", Times, serif",
  estilo: "italic"
};

const DURACION_SALUDO = 720; // ms por saludo (más pausado y legible)
const TRANSICION = 200;      // ms del fade/desplazamiento (debe coincidir con styles.css)

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

async function iniciarIntro() {
  const intro    = document.getElementById("intro");
  const frase    = document.getElementById("intro-frase");
  const saludoEl = document.getElementById("intro-saludo");
  const fijoEl   = document.getElementById("intro-fijo");

  if (!intro || !frase || !saludoEl || !fijoEl) return;

  fijoEl.textContent  = TEXTO_FIJO.texto;
  fijoEl.style.fontFamily = TEXTO_FIJO.fuente;
  fijoEl.style.fontStyle  = TEXTO_FIJO.estilo || "normal";
  void fijoEl.offsetWidth;
  fijoEl.classList.add("visible");

  const mostrarSaludo = async (item, duracion, salir = true) => {
    saludoEl.className = "";
    saludoEl.textContent = item.texto;
    saludoEl.style.fontFamily = item.fuente;
    saludoEl.style.fontStyle  = item.estilo || "normal";
    void saludoEl.offsetWidth;
    saludoEl.classList.add("visible");
    await espera(duracion - (salir ? TRANSICION : 0));
    if (salir) {
      saludoEl.classList.replace("visible", "saliendo");
      await espera(TRANSICION);
    }
  };

  for (let i = 0; i < SALUDOS.length; i++) {
    const esUltimo = i === SALUDOS.length - 1;
    await mostrarSaludo(SALUDOS[i], DURACION_SALUDO, !esUltimo);
  }

  await espera(450);
  frase.classList.add("saliendo");
  await espera(TRANSICION);
  intro.classList.add("oculto");
  document.body.classList.remove("intro-activa");
  await espera(500);
  intro.remove();
}

/* =========================================================
   NAVEGACIÓN POR SECCIONES (hash-based, sin servidor)
   Secciones: #about | #projects | #kaggle
   ========================================================= */
const SECCIONES_VALIDAS = ["about", "projects", "kaggle"];

/**
 * Muestra la sección indicada con fundido suave y marca el botón activo.
 * Funciona tanto con file:// como con GitHub Pages.
 */
function mostrarSeccion(id, animate) {
  // Normalizar id: asegurarse de que sea uno válido
  if (!SECCIONES_VALIDAS.includes(id)) id = "about";

  // Actualizar hash sin disparar scroll
  const nuevaURL = window.location.pathname + window.location.search + "#" + id;
  history.replaceState(null, "", nuevaURL);

  // Marcar botón activo
  document.querySelectorAll(".nav-link").forEach((link) => {
    const esActivo = link.getAttribute("href") === "#" + id;
    link.classList.toggle("activo", esActivo);
    link.setAttribute("aria-current", esActivo ? "page" : "false");
  });

  // Ocultar todas las secciones
  const todasSecciones = document.querySelectorAll(".seccion");
  todasSecciones.forEach((sec) => {
    sec.classList.remove("activa", "entrando");
    sec.style.display = "none";
  });

  // Mostrar la sección elegida con fundido
  const objetivo = document.getElementById(id);
  if (!objetivo) return;

  if (animate === false || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    objetivo.style.display = "block";
    objetivo.style.opacity = "1";
    objetivo.classList.add("activa");
  } else {
    objetivo.style.display = "block";
    objetivo.style.opacity = "0";
    // rAF doble para forzar reflow antes de la transición
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        objetivo.style.transition = "opacity 0.35s ease";
        objetivo.style.opacity = "1";
        objetivo.classList.add("activa");
      });
    });
  }

  // Si abrimos Projects: recalcular posición del carrusel
  if (id === "projects") {
    setTimeout(actualizarPosicionCarrusel, 50);
  }
}

function obtenerHashInicial() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  return SECCIONES_VALIDAS.includes(hash) ? hash : "about";
}

/* Escucha clics en la barra de navegación */
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").replace("#", "");
    mostrarSeccion(id, true);
  });
});

/* Escucha cambios de hash (botón atrás/adelante del navegador) */
window.addEventListener("hashchange", () => {
  mostrarSeccion(obtenerHashInicial(), true);
});

/* =========================================================
   SKILLS CON COLOR — EDITA AQUÍ EL COLOR DE CADA SKILL
   Colores disponibles: 'amarillo', 'verde', 'azul', 'naranja',
                        'morado', 'turquesa', 'rojo', 'rosa'
   Cualquier skill no incluida en el mapa usará el estilo 'neutro'.
   ========================================================= */
const MAPA_COLORES_SKILLS = {
  // EDITA: asignación de skill -> tono de color
  "Power BI": "amarillo",
  "DAX": "amarillo",
  "SQL": "azul",
  "BigQuery": "azul",
  "Python": "verde",
  "Pandas": "verde",
  "Scikit-learn": "verde",
  "Machine Learning": "verde",
  "LightGBM": "amarillo",
  "CatBoost": "amarillo",
  "XGBoost": "naranja",
  "Optuna": "azul",
  "Lasso / Ridge": "turquesa",
  "Feature Engineering": "turquesa",
  "Time Series": "morado",
  "Ensemble": "morado",
  "Excel": "verde",
  "Tableau": "azul",
  "Estadística": "morado",
  "A/B Testing": "morado",
  "Cohortes": "turquesa",
  "Visualización": "turquesa",
  "Automatización": "naranja",
  "People Analytics": "rosa"
};

const obtenerColorTag = (nombre) => {
  return MAPA_COLORES_SKILLS[nombre] || "neutro";
};

const crearTags = (tags) =>
  tags.map((t) => `<span class="tag tag-${obtenerColorTag(t)}">${t}</span>`).join("");

let indiceActivo = 0;
const carruselViewport  = document.getElementById("carrusel-viewport");
const carruselTrack     = document.getElementById("carrusel-track");
const carruselPrev      = document.getElementById("carrusel-prev");
const carruselNext      = document.getElementById("carrusel-next");
const carruselIndicador = document.getElementById("carrusel-indicador");

/* Genera HTML de estrellas para la tarjeta del carrusel (sobrias, gris/negro) */
function crearEstrellasCard(rating) {
  const val = Math.max(0, Math.min(5, Number(rating) || 0));
  const poly = "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2";
  const estrellas = [1, 2, 3, 4, 5].map((num) => {
    const diff = val - (num - 1);
    const pct  = Math.max(0, Math.min(1, diff)) * 100;
    return `
      <span class="card-estrella-caja" aria-hidden="true">
        <svg class="card-estrella-fondo" viewBox="0 0 24 24"><polygon points="${poly}"/></svg>
        <span class="card-estrella-relleno" style="width:${pct}%">
          <svg class="card-estrella-frente" viewBox="0 0 24 24"><polygon points="${poly}"/></svg>
        </span>
      </span>`;
  }).join("");

  const labelRating = typeof t === "function" ? t("personal_rating") : "Personal Rating";

  return `
    <div class="card-estrellas" aria-label="${val} de 5 estrellas">
      <span class="estrellas-row">${estrellas}</span>
      <span class="card-rating-label"><span class="card-rating-title">${labelRating}</span>&nbsp;${val.toFixed(1)}</span>
    </div>`;
}

function renderizarProyectos() {
  if (!carruselTrack) return;

  carruselTrack.innerHTML = PROYECTOS.map((p, i) => `
    <article class="card ${i === 0 ? "activo" : ""}"
             tabindex="${i === 0 ? "0" : "-1"}"
             data-index="${i}"
             role="group"
             aria-roledescription="slide"
             aria-label="${i + 1} de ${PROYECTOS.length}: ${p.titulo}">
      <div class="card-col-izq">
        <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" draggable="false" />
      </div>
      <div class="card-col-der">
        ${crearEstrellasCard(p.rating)}
        <h3>${p.titulo}</h3>
        <p class="subtitulo">${p.subtitulo}</p>
        <p class="descripcion">${p.descripcion}</p>
        <div class="tags">${crearTags(p.tags)}</div>
      </div>
    </article>
  `).join("");

  /* Clic en tarjetas (distingue entre clic normal y arrastre) */
  carruselTrack.addEventListener("click", (e) => {
    if (hasMovedSignificant) {
      e.preventDefault();
      e.stopPropagation();
      hasMovedSignificant = false;
      return;
    }
    const card = e.target.closest(".card");
    if (!card) return;
    const idx = Number(card.dataset.index);
    if (idx === indiceActivo) {
      abrirModal(idx);
    } else {
      irAProyecto(idx);
    }
  });

  /* Teclado en tarjeta activa */
  carruselTrack.addEventListener("keydown", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const idx = Number(card.dataset.index);
    if ((e.key === "Enter" || e.key === " ") && idx === indiceActivo) {
      e.preventDefault();
      abrirModal(idx);
    }
  });

  /* Botones de navegación */
  if (carruselPrev) {
    carruselPrev.addEventListener("click", () => {
      if (indiceActivo > 0) irAProyecto(indiceActivo - 1);
    });
  }
  if (carruselNext) {
    carruselNext.addEventListener("click", () => {
      if (indiceActivo < PROYECTOS.length - 1) irAProyecto(indiceActivo + 1);
    });
  }

  /* Flechas de teclado (← →) — solo cuando no hay modal abierto */
  window.addEventListener("keydown", (e) => {
    if (modal && !modal.hidden) return;
    if (e.key === "ArrowLeft"  && indiceActivo > 0)                   irAProyecto(indiceActivo - 1);
    if (e.key === "ArrowRight" && indiceActivo < PROYECTOS.length - 1) irAProyecto(indiceActivo + 1);
  });

  /* Recalcular al cambiar tamaño de pantalla */
  window.addEventListener("resize", actualizarPosicionCarrusel);

  actualizarPosicionCarrusel();
  setTimeout(actualizarPosicionCarrusel, 80);
}

/* =========================================================
   ARRASTRE CONTINUO DEL CARRUSEL (Pointer Events: ratón y táctil)
   ========================================================= */
let isDragging = false;
let pointerStartX = 0;
let pointerStartY = 0;
let lastPointerX = 0;
let lastPointerTime = 0;
let velocityX = 0;
let hasMovedSignificant = false; // > 5px de movimiento
let isHorizontalDrag = null;
let baseTargetX = 0;

function obtenerTargetX(idx) {
  if (!carruselTrack || !carruselViewport) return 0;
  const cards = carruselTrack.querySelectorAll(".card");
  if (!cards.length || !cards[idx]) return 0;
  const card = cards[idx];
  const viewportW = carruselViewport.clientWidth;
  const cardLeft  = card.offsetLeft;
  const cardW     = card.offsetWidth;
  return (viewportW / 2) - (cardLeft + cardW / 2);
}

function obtenerTranslateXActual() {
  if (!carruselTrack) return 0;
  const st = window.getComputedStyle(carruselTrack);
  const tr = st.transform || st.webkitTransform;
  if (!tr || tr === "none") return obtenerTargetX(indiceActivo);
  const match = tr.match(/matrix\(([^)]+)\)/);
  if (match) {
    const parts = match[1].split(",");
    return parseFloat(parts[4]) || 0;
  }
  const match3d = tr.match(/matrix3d\(([^)]+)\)/);
  if (match3d) {
    const parts = match3d[1].split(",");
    return parseFloat(parts[12]) || 0;
  }
  return obtenerTargetX(indiceActivo);
}

function actualizarEstadoVisual(idx) {
  if (!carruselTrack) return;
  const cards = carruselTrack.querySelectorAll(".card");
  cards.forEach((card, i) => {
    const esActivo = i === idx;
    card.classList.toggle("activo", esActivo);
    card.setAttribute("tabindex", esActivo ? "0" : "-1");
    card.setAttribute("aria-selected", esActivo ? "true" : "false");
  });

  if (carruselPrev) carruselPrev.disabled = idx === 0;
  if (carruselNext) carruselNext.disabled = idx === cards.length - 1;
  if (carruselIndicador) carruselIndicador.textContent = `${idx + 1} / ${cards.length}`;
}

if (carruselViewport) {
  // Prevenir arrastre nativo no deseado de imágenes
  carruselViewport.addEventListener("dragstart", (e) => e.preventDefault());

  carruselViewport.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    isDragging = true;
    pointerStartX = e.clientX;
    pointerStartY = e.clientY;
    lastPointerX = e.clientX;
    lastPointerTime = performance.now();
    velocityX = 0;
    hasMovedSignificant = false;
    isHorizontalDrag = null;
    baseTargetX = obtenerTranslateXActual();
  });

  window.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const diffX = e.clientX - pointerStartX;
    const diffY = e.clientY - pointerStartY;

    if (isHorizontalDrag === null) {
      if (Math.abs(diffX) > 5 || Math.abs(diffY) > 5) {
        if (Math.abs(diffX) >= Math.abs(diffY)) {
          isHorizontalDrag = true;
          hasMovedSignificant = true;
          carruselViewport.classList.add("arrastrando");
          carruselTrack.style.transition = "none";
          try { carruselViewport.setPointerCapture(e.pointerId); } catch (_) {}
        } else {
          // Gesto vertical: liberar para permitir scroll de página nativo
          isHorizontalDrag = false;
          isDragging = false;
          return;
        }
      } else {
        return;
      }
    }

    if (!isHorizontalDrag) return;

    if (Math.abs(diffX) > 5) {
      hasMovedSignificant = true;
      if (!carruselViewport.classList.contains("arrastrando")) {
        carruselViewport.classList.add("arrastrando");
      }
    }

    // Medición en tiempo real de velocidad para inercia
    const now = performance.now();
    const dt = now - lastPointerTime;
    if (dt > 10) {
      velocityX = (e.clientX - lastPointerX) / dt; // px / ms
      lastPointerX = e.clientX;
      lastPointerTime = now;
    }

    // Posición continua sin limitar a una sola tarjeta
    const rawX = baseTargetX + diffX;
    const maxX = obtenerTargetX(0);
    const minX = obtenerTargetX(PROYECTOS.length - 1);

    // Resistencia elástica en los extremos
    let currentX = rawX;
    if (rawX > maxX) {
      currentX = maxX + (rawX - maxX) * 0.28;
    } else if (rawX < minX) {
      currentX = minX + (rawX - minX) * 0.28;
    }

    carruselTrack.style.transition = "none";
    carruselTrack.style.transform = `translateX(${currentX}px)`;

    // Efecto foco en vivo: actualizar la tarjeta activa más cercana al centro del carrusel
    let minDiff = Infinity;
    let closestIdx = indiceActivo;
    for (let i = 0; i < PROYECTOS.length; i++) {
      const tx = obtenerTargetX(i);
      const diff = Math.abs(currentX - tx);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    }

    if (closestIdx !== indiceActivo) {
      indiceActivo = closestIdx;
      actualizarEstadoVisual(indiceActivo);
    }
  });

  const finalizarArrastre = (e) => {
    if (!isDragging && !hasMovedSignificant) return;
    const eraArrastre = hasMovedSignificant;
    isDragging = false;
    carruselViewport.classList.remove("arrastrando");
    try { carruselViewport.releasePointerCapture(e.pointerId); } catch (_) {}

    if (!eraArrastre) return;

    // Mantener hasMovedSignificant para ignorar el click residual posterior al arrastre
    setTimeout(() => { hasMovedSignificant = false; }, 250);

    // Si el cursor se frenó antes de soltar, anular inercia
    const timeSinceLastMove = performance.now() - lastPointerTime;
    if (timeSinceLastMove > 100) {
      velocityX = 0;
    }

    // Pequeño impulso por inercia según velocidad
    // velocityX < 0: arrastre hacia la izquierda -> avanzar proyectos (+ índice)
    // velocityX > 0: arrastre hacia la derecha -> retroceder proyectos (- índice)
    let impulse = 0;
    if (velocityX < -1.2) {
      impulse = 2;
    } else if (velocityX < -0.3) {
      impulse = 1;
    } else if (velocityX > 1.2) {
      impulse = -2;
    } else if (velocityX > 0.3) {
      impulse = -1;
    }

    let destino = indiceActivo + impulse;
    destino = Math.max(0, Math.min(PROYECTOS.length - 1, destino));

    irAProyecto(destino);
  };

  window.addEventListener("pointerup", finalizarArrastre);
  window.addEventListener("pointercancel", finalizarArrastre);
}

function irAProyecto(index) {
  if (index < 0 || index >= PROYECTOS.length) return;
  indiceActivo = index;
  actualizarPosicionCarrusel();
}

function actualizarPosicionCarrusel() {
  if (!carruselTrack || !carruselViewport) return;
  const cards = carruselTrack.querySelectorAll(".card");
  if (!cards.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  carruselTrack.style.transition = reducedMotion
    ? "none"
    : "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
  void carruselTrack.offsetWidth;

  actualizarEstadoVisual(indiceActivo);

  const targetX = obtenerTargetX(indiceActivo);
  carruselTrack.style.transform = `translateX(${targetX}px)`;
}

/* =========================================================
   MODAL — Detalle del proyecto
   ========================================================= */
const modal = document.getElementById("modal");

function renderizarEstrellas(rating) {
  const val  = Math.max(0, Math.min(5, Number(rating) || 0));
  const poly = "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2";
  const estrellas = [1, 2, 3, 4, 5].map((num) => {
    const diff = val - (num - 1);
    const pct  = Math.max(0, Math.min(1, diff)) * 100;
    return `
      <span class="estrella-caja" title="${val} de 5">
        <svg class="estrella-fondo" viewBox="0 0 24 24" aria-hidden="true"><polygon points="${poly}"/></svg>
        <span class="estrella-relleno" style="width:${pct}%">
          <svg class="estrella-frente" viewBox="0 0 24 24" aria-hidden="true"><polygon points="${poly}"/></svg>
        </span>
      </span>`;
  }).join("");

  const labelRating = typeof t === "function" ? t("personal_rating") : "Personal Rating";

  return `
    <span class="rating-titulo">${labelRating}</span>
    <div class="estrellas" aria-label="${val} de 5 estrellas">${estrellas}</div>
    <span class="rating-numero">${val.toFixed(1)} / 5</span>`;
}

function abrirModal(i) {
  const p = PROYECTOS[i];

  document.getElementById("modal-img").src = p.imagen;
  document.getElementById("modal-img").alt = p.titulo;
  document.getElementById("modal-rating").innerHTML = renderizarEstrellas(p.rating);
  document.getElementById("modal-titulo").textContent = p.titulo;
  document.getElementById("modal-subtitulo").textContent = p.subtitulo;
  document.getElementById("modal-descripcion").textContent = p.detalle.descripcionLarga;
  document.getElementById("modal-objetivo").textContent = p.detalle.objetivo;
  document.getElementById("modal-resultados").innerHTML =
    p.detalle.resultados.map((r) => `<li>${r}</li>`).join("");
  document.getElementById("modal-tags").innerHTML = crearTags(p.tags);

  const enlaceBtn = document.getElementById("modal-enlace");
  enlaceBtn.href = p.detalle.enlace;
  enlaceBtn.setAttribute("data-i18n", "modal_link_btn");
  enlaceBtn.textContent = typeof t === "function" ? t("modal_link_btn") : "Ver repositorio / dashboard";

  modal.hidden = false;
  document.body.classList.add("modal-abierto");
  modal.querySelector(".modal-caja").scrollTop = 0;
  modal.querySelector(".modal-cerrar").focus();
}

function abrirModalKaggle(i) {
  const k = KAGGLE_COMPETICIONES[i];

  document.getElementById("modal-img").src = k.imagen;
  document.getElementById("modal-img").alt = k.titulo;

  // En Kaggle mostramos badge de medalla y posición en lugar de rating numérico
  document.getElementById("modal-rating").innerHTML = `
    <span class="kaggle-badge" style="font-size:0.78rem; padding: 4px 10px;">${k.badge}</span>
    <span class="kaggle-tipo" style="font-size:0.8rem;">${k.tipo}</span>
    <span class="kaggle-posicion" style="font-size:0.84rem; border-top: none; padding-top: 0;">${k.posicion}</span>
  `;

  document.getElementById("modal-titulo").textContent = k.titulo;
  document.getElementById("modal-subtitulo").textContent = k.subtitulo;
  document.getElementById("modal-descripcion").textContent = k.detalle.descripcionLarga;
  document.getElementById("modal-objetivo").textContent = k.detalle.objetivo;
  document.getElementById("modal-resultados").innerHTML =
    k.detalle.resultados.map((r) => `<li>${r}</li>`).join("");
  document.getElementById("modal-tags").innerHTML = crearTags(k.tags);

  const enlaceBtn = document.getElementById("modal-enlace");
  enlaceBtn.href = k.enlace;
  enlaceBtn.removeAttribute("data-i18n");
  enlaceBtn.textContent = typeof t === "function" && idiomaActual === "en" ? "View competition on Kaggle →" : "Ver competición en Kaggle →";

  modal.hidden = false;
  document.body.classList.add("modal-abierto");
  modal.querySelector(".modal-caja").scrollTop = 0;
  modal.querySelector(".modal-cerrar").focus();
}

function renderizarKaggle() {
  const grid = document.getElementById("kaggle-grid");
  if (!grid) return;

  grid.innerHTML = KAGGLE_COMPETICIONES.map((k, i) => `
    <article class="tarjeta kaggle-card"
             tabindex="0"
             role="button"
             data-index="${i}"
             aria-label="Ver detalles de ${k.titulo}">
      <img class="kaggle-thumb" src="${k.imagen}" alt="Miniatura — ${k.titulo}" loading="lazy" />
      <div class="kaggle-meta">
        <span class="kaggle-badge">${k.badge}</span>
        <span class="kaggle-tipo">${k.tipo}</span>
      </div>
      <h3>${k.titulo}</h3>
      <p class="subtitulo">${k.subtitulo}</p>
      <p class="descripcion">${k.descripcion || k.detalle.descripcionLarga}</p>
      <div class="tags">${crearTags(k.tags)}</div>
      <div class="kaggle-pie">
        <span class="kaggle-posicion">${k.posicion}</span>
        <a href="${k.enlace}" target="_blank" rel="noopener" class="enlace-simple kaggle-enlace-ext" aria-label="Ver en Kaggle">Ver en Kaggle &rarr;</a>
      </div>
    </article>
  `).join("");

  /* Clic en tarjeta de Kaggle */
  grid.addEventListener("click", (e) => {
    if (e.target.closest(".kaggle-enlace-ext")) return;
    const card = e.target.closest(".kaggle-card");
    if (!card) return;
    const idx = Number(card.dataset.index);
    abrirModalKaggle(idx);
  });

  /* Teclado en tarjeta de Kaggle */
  grid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".kaggle-card");
      if (!card) return;
      e.preventDefault();
      const idx = Number(card.dataset.index);
      abrirModalKaggle(idx);
    }
  });
}

function cerrarModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-abierto");
}

modal.querySelector(".modal-cerrar").addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => { if (e.target === modal) cerrarModal(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) cerrarModal();
});

/* =========================================================
   INICIO
   ========================================================= */
document.getElementById("anio").textContent = new Date().getFullYear();

/* Configuración de selector de idioma */
const btnLangEn = document.getElementById("lang-en");
const btnLangEs = document.getElementById("lang-es");
if (btnLangEn) {
  btnLangEn.addEventListener("click", () => cambiarIdioma("en"));
}
if (btnLangEs) {
  btnLangEs.addEventListener("click", () => cambiarIdioma("es"));
}

/* Aplicar traducciones iniciales */
if (typeof aplicarTraducciones === "function") {
  aplicarTraducciones();
}

/* Renderizar proyectos en el carrusel */
renderizarProyectos();

/* Renderizar competiciones de Kaggle */
renderizarKaggle();

/* Mostrar sección inicial según el hash (sin animación en la carga) */
mostrarSeccion(obtenerHashInicial(), false);

/* Lanzar intro de carga */
iniciarIntro();
