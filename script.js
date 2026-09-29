/* =========================================================
   PROYECTOS — EDITA AQUÍ TUS PROYECTOS
   Cada objeto genera una tarjeta y su modal de detalle.
   - imagen: ruta dentro de /images
   - detalle.enlace: URL del repositorio o dashboard
   ========================================================= */
const PROYECTOS = [
  {
    titulo: "Dashboard de Ventas Retail",
    subtitulo: "Power BI · Análisis comercial",
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
      enlace: "https://github.com/tu-usuario/dashboard-ventas"
    }
  },
  {
    titulo: "Análisis de Churn de Clientes",
    subtitulo: "Python · Machine Learning",
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
      enlace: "https://github.com/tu-usuario/churn-analysis"
    }
  },
  {
    titulo: "Análisis de Datos de E-commerce",
    subtitulo: "SQL · BigQuery",
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
      enlace: "https://github.com/tu-usuario/ecommerce-sql"
    }
  },
  {
    titulo: "Test A/B de Landing Page",
    subtitulo: "Estadística · Experimentación",
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
      enlace: "https://github.com/tu-usuario/ab-test"
    }
  },
  {
    titulo: "Dashboard de RR. HH.",
    subtitulo: "Tableau · People Analytics",
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
      enlace: "https://public.tableau.com/app/profile/tu-usuario"
    }
  },
  {
    titulo: "Automatización de Informes",
    subtitulo: "Python · Excel",
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
      enlace: "https://github.com/tu-usuario/report-automation"
    }
  }
];

/* =========================================================
   INTRO — saludos, fuentes y tiempos
   ========================================================= */
const SALUDOS = [
  { texto: "Hola", fuente: "'Playfair Display', serif" },
  { texto: "Hello", fuente: "'Pacifico', cursive" },
  { texto: "Bonjour", fuente: "'Space Mono', monospace" },
  { texto: "Ciao", fuente: "'Montserrat', sans-serif" },
  { texto: "Hallo", fuente: "'Bebas Neue', sans-serif" },
  { texto: "こんにちは", fuente: "'Noto Sans JP', sans-serif" },
  { texto: "Olá", fuente: "'Caveat', cursive" }
];
const FINAL = { texto: "Soy Joaquín", fuente: "'Cormorant Garamond', serif", estilo: "italic" }; // EDITA: tu nombre
const DURACION_SALUDO = 750; // ms por saludo
const TRANSICION = 300;      // ms del fade (igual que en styles.css)

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

async function iniciarIntro() {
  const intro = document.getElementById("intro");
  const texto = document.getElementById("intro-texto");

  const mostrar = async (item, duracion, salir = true) => {
    texto.className = "";
    texto.textContent = item.texto;
    texto.style.fontFamily = item.fuente;
    texto.style.fontStyle = item.estilo || "normal";
    void texto.offsetWidth; // reinicia la transición
    texto.classList.add("visible");
    await espera(duracion - (salir ? TRANSICION : 0));
    if (salir) {
      texto.classList.replace("visible", "saliendo");
      await espera(TRANSICION);
    }
  };

  for (const saludo of SALUDOS) await mostrar(saludo, DURACION_SALUDO);
  await mostrar(FINAL, 1200, false);

  intro.classList.add("oculto");
  document.body.classList.remove("intro-activa");
  await espera(600);
  intro.remove();
}

/* =========================================================
   TARJETAS DE PROYECTOS
   ========================================================= */
const crearTags = (tags) => tags.map((t) => `<span class="tag">${t}</span>`).join("");

function renderizarProyectos() {
  const grid = document.getElementById("grid-proyectos");
  grid.innerHTML = PROYECTOS.map((p, i) => `
    <article class="card" tabindex="0" data-index="${i}">
      <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" />
      <h3>${p.titulo}</h3>
      <p class="subtitulo">${p.subtitulo}</p>
      <p class="descripcion">${p.descripcion}</p>
      <div class="tags">${crearTags(p.tags)}</div>
    </article>
  `).join("");

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) abrirModal(Number(card.dataset.index));
  });
  grid.addEventListener("keydown", (e) => {
    const card = e.target.closest(".card");
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      abrirModal(Number(card.dataset.index));
    }
  });
}

/* =========================================================
   MODAL
   ========================================================= */
const modal = document.getElementById("modal");

function abrirModal(i) {
  const p = PROYECTOS[i];
  document.getElementById("modal-img").src = p.imagen;
  document.getElementById("modal-img").alt = p.titulo;
  document.getElementById("modal-titulo").textContent = p.titulo;
  document.getElementById("modal-subtitulo").textContent = p.subtitulo;
  document.getElementById("modal-descripcion").textContent = p.detalle.descripcionLarga;
  document.getElementById("modal-objetivo").textContent = p.detalle.objetivo;
  document.getElementById("modal-tags").innerHTML = crearTags(p.tags);
  document.getElementById("modal-resultados").innerHTML = p.detalle.resultados.map((r) => `<li>${r}</li>`).join("");
  document.getElementById("modal-enlace").href = p.detalle.enlace;
  modal.hidden = false;
  document.body.classList.add("modal-abierto");
  modal.querySelector(".modal-cerrar").focus();
}

function cerrarModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-abierto");
}

modal.querySelector(".modal-cerrar").addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => { if (e.target === modal) cerrarModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) cerrarModal(); });

/* ===== Inicio ===== */
document.getElementById("anio").textContent = new Date().getFullYear();
renderizarProyectos();
iniciarIntro();
