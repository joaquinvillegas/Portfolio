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
   INTRO — saludos, texto fijo, fuentes y tiempos
   ========================================================= */
const SALUDOS = [
  { texto: "Hola", fuente: "'Playfair Display', serif" },
  { texto: "Hello", fuente: "'Pacifico', cursive" },
  { texto: "你好", fuente: "'Noto Sans SC', sans-serif" },
  { texto: "Ciao", fuente: "'Montserrat', sans-serif" }
]; // EDITA: lista de saludos (puedes añadir o quitar)
const TEXTO_FIJO = { 
  texto: ", soy Joaquín", // EDITA: tu nombre y texto fijo a la derecha
  fuente: "'Cormorant Garamond', serif", 
  estilo: "italic" 
};
const DURACION_SALUDO = 500; // ms por saludo
const TRANSICION = 250;      // ms del fade/desplazamiento (igual que en styles.css)

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

async function iniciarIntro() {
  const intro = document.getElementById("intro");
  const frase = document.getElementById("intro-frase");
  const saludoEl = document.getElementById("intro-saludo");
  const fijoEl = document.getElementById("intro-fijo");

  if (!intro || !frase || !saludoEl || !fijoEl) return;

  // Configurar texto fijo a la derecha
  fijoEl.textContent = TEXTO_FIJO.texto;
  fijoEl.style.fontFamily = TEXTO_FIJO.fuente;
  fijoEl.style.fontStyle = TEXTO_FIJO.estilo || "normal";
  void fijoEl.offsetWidth;
  fijoEl.classList.add("visible");

  const mostrarSaludo = async (item, duracion, salir = true) => {
    saludoEl.className = "";
    saludoEl.textContent = item.texto;
    saludoEl.style.fontFamily = item.fuente;
    saludoEl.style.fontStyle = item.estilo || "normal";
    void saludoEl.offsetWidth; // reinicia la transición
    saludoEl.classList.add("visible");
    await espera(duracion - (salir ? TRANSICION : 0));
    if (salir) {
      saludoEl.classList.replace("visible", "saliendo");
      await espera(TRANSICION);
    }
  };

  // Recorrer los saludos
  for (let i = 0; i < SALUDOS.length; i++) {
    const esUltimo = i === SALUDOS.length - 1;
    await mostrarSaludo(SALUDOS[i], DURACION_SALUDO, !esUltimo);
  }

  // Pausa final para leer la frase completa
  await espera(450);

  // Animación de salida de la frase completa
  frase.classList.add("saliendo");
  await espera(TRANSICION);

  // Desvanecer fondo y restaurar interacción
  intro.classList.add("oculto");
  document.body.classList.remove("intro-activa");
  await espera(500);
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
  modal.querySelector(".modal-caja").scrollTop = 0;
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
