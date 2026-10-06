/* =========================================================
   PROYECTOS — EDITA AQUÍ TUS PROYECTOS
   Cada objeto genera una tarjeta y su modal de detalle.
   - rating: puntuación personal (0 a 5, admite decimales)
   - imagen: ruta dentro de /images
   - detalle.enlace: URL del repositorio o dashboard
   ========================================================= */
const PROYECTOS = [
  {
    titulo: "Predicción de retornos bursátiles de las Magnificent 7",
    subtitulo: "Python · Machine Learning",
    rating: 5.0, // EDITA: puntuación de 0 a 5 (ej: 4.8)
    descripcion: "Predicción del retorno acumulado a 22 días de las siete mayores tecnológicas del S&P 500, a partir de 1.391.801 registros diarios de precios de FactSet (2014-2025). Compara cuatro modelos y evalúa si las predicciones permiten batir a una estrategia de comprar y mantener.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "LightGBM",
      "TensorFlow/Keras",
      "Matplotlib",
      "Machine Learning supervisado"
    ],
    imagen: "images/proyecto-1.png",
    detalle: {
      descripcionLarga: "Predicción del retorno acumulado a 22 días de las siete mayores tecnológicas del S&P 500, a partir de 1.391.801 registros diarios de precios de FactSet (2014-2025). Compara cuatro modelos y evalúa si las predicciones permiten batir a una estrategia de comprar y mantener.",
      objetivo: "Comprobar si los retornos históricos diarios bastan para anticipar el comportamiento mensual de las Magnificent 7. Sirve al inversor que quiere apoyar sus decisiones en datos y al analista que valora si una estrategia basada solo en precios supera al mercado.",
      resumen: [
        "Partí de 1.391.801 registros de 503 empresas del S&P 500 y me quedé con las 7 Magnificent 7 (19.369 filas), con retorno diario ajustado por dividendos. No hubo que tratar nulos en esas empresas. Definí como objetivo el retorno acumulado a 22 días y como variables los 60 retornos diarios anteriores. Dividí en 80/20 de forma cronológica (corte en octubre de 2023), excluí del entrenamiento las filas cuyo objetivo invadía el test y ajusté el escalado solo con train para evitar fuga de datos.",
        "Entrené un modelo Naive, una regresión lineal, LightGBM y una LSTM, con búsqueda aleatoria de hiperparámetros y validación temporal. La LSTM sobreajustó: el error de validación empeoró mientras el de train bajaba. Validé el mejor modelo con un backtesting de ventana rodante (reentreno mensual con 365 días) y simulé una estrategia de inversión frente a Buy & Hold con un coste del 0,1 % por operación."
      ],
      resultados: [
        "LightGBM es el único modelo con R² positivo en test (0,0032): explica una fracción mínima de la varianza.",
        "La LSTM obtiene el peor resultado (R² = -0,2123) y muestra un sobreajuste claro en las curvas de entrenamiento.",
        "En el backtesting rodante el R² de LightGBM cae a -0,0250: sin capacidad predictiva en condiciones realistas.",
        "LightGBM se equivoca de media ≈ 8 puntos porcentuales (MAE = 0,0810) al predecir el retorno a 22 días.",
        "Predice siempre un retorno positivo, así que la estrategia permanece invertida el 100 % del tiempo y equivale a Buy & Hold.",
        "La cartera pasa de 70.000 € a ≈ 150.000 €, ligeramente por debajo de Buy & Hold; ningún modelo anticipó la caída de marzo de 2025."
      ],
      enlace: "" // EDITA: [Enlace a GitHub] · [Enlace a la presentación]
    }
  },
  {
    titulo: "EDA de alojamientos Airbnb en 9 ciudades europeas",
    subtitulo: "Python · Análisis de datos",
    rating: 4.0, // EDITA: puntuación de 0 a 5
    descripcion: "Análisis exploratorio de 41.714 alojamientos de Airbnb en nueve ciudades europeas para entender qué factores se asocian al precio y a la satisfacción.",
    tags: [
      "Python",
      "Pandas",
      "Análisis exploratorio (EDA)",
      "Visualización de datos",
      "Plotly",
      "Estadística",
      "Análisis de correlaciones"
    ],
    imagen: "images/proyecto-airbnb.png",
    detalle: {
      descripcionLarga: "Análisis exploratorio de 41.714 alojamientos de Airbnb en Ámsterdam, Atenas, Barcelona, Berlín, Budapest, Lisboa, París, Roma y Viena. Estudia cómo se relacionan precio, ubicación, tipo de alojamiento, limpieza, satisfacción y condición de superhost.",
      objetivo: "Identificar qué variables se asocian al precio y a la satisfacción de los huéspedes en alojamientos de nueve ciudades europeas. Para el anfitrión, sirve de referencia para fijar el precio y priorizar lo que mejora las valoraciones. Para el huésped, ayuda a entender por qué los precios varían entre ciudades y qué valoraciones conviene mirar.",
      resumen: [
        "Partí de 41.714 registros y 19 columnas; descarté 4 (índices de atracciones y de restaurantes) y trabajé con 15 variables. Verifiqué los tipos de datos y los nulos (ninguno). El precio tiene valores extremos (media ≈ 260 €, mediana ≈ 204 €, máximo ≈ 18.545 €), por lo que acoté los ejes de los gráficos.",
        "El análisis fue univariante (precio medio por ciudad, tipo de habitación, capacidad y distancias), bivariante (precio frente a distancia con regresión OLS, satisfacción frente a limpieza y a tramos de precio, entre semana frente a fin de semana) y multivariante (matrices de correlación y comparación de superhosts con anfitriones normales). Detecté multicolinealidad entre Room Type y Shared Room y expliqué correlaciones aparentemente contradictorias, como la de habitación privada y precio (-0,15)."
      ],
      resultados: [
        "Ámsterdam tiene el mayor precio medio (≈ 573 €), seguida de París (≈ 393 €); Atenas (≈ 152 €) y Budapest (≈ 177 €) son las más baratas.",
        "La limpieza es la variable más asociada a la satisfacción, con una relación positiva y fuerte.",
        "La cercanía al metro y al centro son las variables más asociadas al precio; la del metro pesa más y los precios más altos aparecen a menos de 500 m del metro.",
        "La satisfacción se concentra por encima de 80 en todos los tramos de precio: no se observa relación entre precio y satisfacción.",
        "Los superhosts tienen mejor satisfacción y limpieza, un precio medio algo menor y una ubicación ligeramente más alejada del centro.",
        "La capacidad es la variable de habitación más asociada al precio, aunque la correlación es débil (≈ 0,18).",
        "El precio no varía de forma apreciable entre semana frente a fin de semana."
      ],
      enlace: "" // EDITA: [Enlace a GitHub] · [Enlace a la presentación]
    }
  },
  {
    titulo: "Predicción de impago en tarjetas de crédito con ML supervisado",
    subtitulo: "Python · Machine Learning",
    rating: 3.5, // EDITA: puntuación de 0 a 5
    descripcion: "Análisis de 25.134 clientes de tarjetas de crédito del dataset Credit Card Approval Prediction (Kaggle), que integra solicitudes e historial mensual de pagos. Estudia qué características se asocian a haber tenido un retraso de más de 30 días en algún pago.",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Statsmodels",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Machine Learning supervisado"
    ],
    imagen: "images/proyecto-3.png",
    detalle: {
      descripcionLarga: "Análisis de 25.134 clientes de tarjetas de crédito del dataset Credit Card Approval Prediction (Kaggle), que integra solicitudes e historial mensual de pagos. Estudia qué características se asocian a haber tenido un retraso de más de 30 días en algún pago.",
      objetivo: "Predecir qué clientes incumplirán algún pago con más de 30 días de retraso y comparar modelos para detectarlos. Sirve a las entidades de crédito para priorizar revisiones manuales, pedir garantías o solicitar más información antes de conceder crédito.",
      resumen: [
        "Partí de 438.557 solicitudes con 18 columnas y de un historial mensual de 1.048.575 registros. Eliminé 134.203 filas sin ocupación, porque al ser categórica no se podía imputar, y acoté ingresos y años trabajados con la regla del rango intercuartílico. Construí la variable de impago (retraso de más de 30 días) a partir del historial y la uní por cliente, con lo que quedaron 25.134 clientes y un 12,3 % de impagos.",
        "Ajusté un logit explicativo con Statsmodels y entrené un logit, un Random Forest y una red neuronal con Scikit-learn. El principal problema fue el desbalanceo de la variable objetivo, que abordé con pesos de clase y ajuste del umbral para maximizar la detección de impagos. Limité el sobreajuste con búsqueda aleatoria de hiperparámetros, validación cruzada, early stopping y regularización L2. En el Random Forest persistió en parte."
      ],
      resultados: [
        "El Random Forest es el mejor modelo: detecta el 79 % de los impagos en test, con umbral de 0,35.",
        "Su AUC en test es 0,72 frente a 0,92 en entrenamiento, lo que indica un sobreajuste que no se eliminó del todo.",
        "Su precisión es del 17 %: de cada 100 clientes marcados como impago, solo 17 lo son, por las muchas falsas alarmas.",
        "La red neuronal queda por detrás, con un AUC de 0,62 en test, por el tamaño reducido y el desbalanceo del dataset.",
        "El logit predictivo apenas supera el azar (AUC ≈ 0,54), porque no captura relaciones no lineales.",
        "El logit explicativo tiene un pseudo R² de 0,005: los ingresos y el resto de variables explican muy poco el impago.",
        "Ningún modelo supera la regla de la mayoría (87,7 % de accuracy): la exactitud de 36-54 % es el coste de priorizar el recall."
      ],
      enlace: ""
    }
  },
  {
    titulo: "Reconocimiento de emociones faciales con CNN para máquinas expendedoras",
    subtitulo: "Python · Deep Learning",
    rating: 4.0, // EDITA: puntuación de 0 a 5
    descripcion: "Clasificación de emociones faciales con una red neuronal convolucional sobre FER2013, un conjunto de 35.887 imágenes de 48×48 píxeles obtenido de Hugging Face. Estudia si la expresión de la cara permite detectar el estado emocional de quien usa una máquina expendedora.",
    tags: [
      "Python",
      "TensorFlow",
      "Keras",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Deep Learning"
    ],
    imagen: "images/proyecto-4.svg",
    detalle: {
      descripcionLarga: "Clasificación de emociones faciales con una red neuronal convolucional sobre FER2013, un conjunto de 35.887 imágenes de 48×48 píxeles obtenido de Hugging Face. Estudia si la expresión de la cara permite detectar el estado emocional de quien usa una máquina expendedora.",
      objetivo: "Evaluar si una CNN puede reconocer el estado emocional de un usuario a partir de su expresión facial para personalizar recomendaciones de bebidas. Sirve a marketing y a desarrollo de producto para valorar la viabilidad del sistema y decidir cómo mejorarlo antes de aplicarlo en máquinas reales.",
      resumen: [
        "Partí de 35.887 imágenes con 7 emociones, ya divididas en entrenamiento, validación y prueba. Descarté Disgust (547 imágenes) por su fuerte desbalanceo y equilibré las seis clases restantes con 1.000 imágenes por clase en entrenamiento y 100 en validación y prueba. Normalicé los píxeles a [0, 1] y fijé semillas para garantizar la reproducibilidad.",
        "Entrené una CNN secuencial con dos bloques convolucionales y dos capas densas con dropout, y probé 50 combinaciones aleatorias de hiperparámetros (filtros, neuronas, dropout y tamaño de lote). Controlé el sobreajuste con dropout y parada temprana, ya que las configuraciones grandes memorizaban el entrenamiento y generalizaban peor. Reentrené la mejor configuración y la evalué con matrices de confusión por emoción en entrenamiento y prueba."
      ],
      resultados: [
        "El modelo final acierta el 41,5 % en test con seis emociones: más del doble que el azar, pero insuficiente para uso comercial.",
        "La búsqueda de 50 configuraciones tiene un techo del 44,3 % en validación: ajustar hiperparámetros apenas mejora el resultado.",
        "Happy es la emoción mejor reconocida, con solo 34 errores de 100 imágenes en test.",
        "Fear es la peor reconocida, con 80 errores de 100 imágenes en test.",
        "El modelo final sobreajusta de forma moderada: la accuracy cae ≈ 8 puntos entre entrenamiento y test.",
        "Disgust (547 imágenes) quedó fuera por desbalanceo, por lo que el sistema no puede reconocer esa emoción."
      ],
      enlace: "" // EDITA: [Enlace a GitHub] · [Enlace a la presentación]
    }
  },
  {
    titulo: "Análisis de sentimiento de los tweets de Elon Musk",
    subtitulo: "Python · NLP",
    rating: 4.0, // EDITA: puntuación de 0 a 5
    descripcion: "Análisis de sentimiento de 50.395 tweets de Elon Musk (tras eliminar duplicados de 55.099) con VADER y un modelo RoBERTa para redes sociales. Estudia cómo evoluciona el tono en el tiempo y si se relaciona con el precio diario de las acciones de Tesla.",
    tags: [
      "Python",
      "Pandas",
      "spaCy",
      "Transformers",
      "VADER",
      "Matplotlib",
      "Seaborn",
      "NLP"
    ],
    imagen: "images/proyecto-5.svg",
    detalle: {
      descripcionLarga: "Análisis de sentimiento de 50.395 tweets de Elon Musk (tras eliminar duplicados de 55.099) con VADER y un modelo RoBERTa para redes sociales. Estudia cómo evoluciona el tono en el tiempo y si se relaciona con el precio diario de las acciones de Tesla.",
      objetivo: "Evaluar si el tono de los mensajes públicos de Musk se relaciona con la cotización de Tesla. Sirve a analistas e inversores que quieran valorar si el sentimiento de figuras influyentes puede incorporarse a modelos de cartera o de predicción de precios.",
      resumen: [
        "Partí de 55.099 tweets y 24 columnas; las métricas de interacción tenían nulos importantes (viewCount solo en 34.455 registros), pero el texto estaba completo. Eliminé los duplicados por texto, conservando la primera aparición, y quedaron 50.395 tweets. Limpié URLs, números y puntuación, y corregí entidades HTML que aparecían como la palabra más frecuente.",
        "Apliqué dos enfoques de sentimiento: VADER (léxico, umbral ±0,05) y un modelo RoBERTa ajustado a Twitter, con textos largos divididos en fragmentos de 512 tokens. Como no hay etiquetas reales, comparé sus distribuciones, que difieren de forma notable. Después agregué el sentimiento por día y lo crucé con el precio de Tesla mediante tasas de cambio diarias y una matriz de correlación."
      ],
      resultados: [
        "No hay relación entre el sentimiento de los tweets y el precio de Tesla: las correlaciones de las variaciones diarias son ≈ 0,00-0,01.",
        "Tras la compra de Twitter (octubre de 2022) cae la proporción de tweets positivos y aumenta la de negativos, posiblemente por más contenido político.",
        "VADER clasifica como positivos el 42,6 % de los tweets (21.446), por encima de neutros (19.755) y negativos (9.194).",
        "RoBERTa clasifica como neutros el 55,1 % de los tweets (27.756), una lectura más conservadora que la de VADER.",
        "Los negativos pesan más con RoBERTa (23,1 %; 11.649 tweets) que con VADER (18,2 %), y los positivos bajan a 10.990.",
        "Los términos más frecuentes son Tesla, SpaceX y coches, y las palabras positivas superan con claridad a las negativas."
      ],
      enlace: "" // EDITA: [Enlace a GitHub] · [Enlace a la presentación]
    }
  }
];

/* =========================================================
   KAGGLE COMPETITIONS — EDITA AQUÍ TUS PARTICIPACIONES
   Cada objeto genera una tarjeta en #kaggle y su modal de detalle.
   ========================================================= */
const KAGGLE_COMPETICIONES = [
  {
    titulo: "Titanic - Machine Learning from Disaster",
    subtitulo: "Predicción de supervivencia de pasajeros del Titanic a partir de sus datos personales",
    badge: "Machine Learning",
    tipo: "",
    posicion: "Validación: <strong>81,46 % Acc</strong>",
    descripcion: "Problema de clasificación binaria que predice si un pasajero sobrevivió al naufragio del Titanic a partir de variables demográficas y del billete, como sexo, edad y clase.",
    tags: ["Python", "XGBoost", "Scikit-learn", "Clasificación supervisada"],
    imagen: "images/proyecto-1.svg",
    enlace: "https://www.kaggle.com/competitions/titanic",
    detalle: {
      descripcionLarga: "Problema de clasificación binaria que predice si un pasajero sobrevivió al naufragio del Titanic a partir de variables demográficas y del billete, como sexo, edad y clase.",
      objetivo: "Identificar qué factores determinaron la supervivencia en un desastre marítimo, como introducción práctica a la clasificación supervisada.",
      resultados: [
        "Eliminación de variables con muchos nulos, imputación de edad y tarifa con la mediana y codificación de sexo y puerto.",
        "Comparación de KNN y XGBoost con partición 80/20 en entrenamiento y validación, y reentrenamiento final con todos los datos.",
        "Sin datos de score ni posición; XGBoost alcanzó un 81,46 % de accuracy en validación frente al 69,66 % de KNN."
      ],
      enlace: "https://www.kaggle.com/competitions/titanic"
    }
  },
  {
    titulo: "Predicting Electric Vehicle Purchases",
    subtitulo: "Predicción de compra de vehículos eléctricos a partir de datos sociodemográficos y de movilidad",
    badge: "Machine Learning",
    tipo: "",
    posicion: "Validación: <strong>0,8402 ROC-AUC</strong>",
    descripcion: "Clasificación binaria para predecir si una persona comprará un vehículo eléctrico a partir de sus datos demográficos, hábitos de desplazamiento, infraestructura de carga y factores ambientales.",
    tags: ["Python", "XGBoost", "Scikit-learn", "Clasificación"],
    imagen: "images/proyecto-2.svg",
    enlace: "https://www.kaggle.com/c/playground-series-s6e9",
    detalle: {
      descripcionLarga: "Clasificación binaria para predecir si una persona comprará un vehículo eléctrico a partir de sus datos demográficos, hábitos de desplazamiento, infraestructura de carga y factores ambientales.",
      objetivo: "Identificar a los compradores potenciales de vehículos eléctricos para orientar subsidios, infraestructura de carga y campañas comerciales.",
      resultados: [
        "Codificación ordinal de variables categóricas y binarias; el dataset de 668.665 registros no tenía nulos.",
        "Modelo XGBoost con peso de clase positiva y validación hold-out 80/20 sobre los datos de entrenamiento.",
        "Resultado: sin datos de clasificación; en validación, accuracy de 0,90 y ROC-AUC de 0,8402."
      ],
      enlace: "https://www.kaggle.com/c/playground-series-s6e9"
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

  // Si ya se mostró en esta sesión o se ha recargado la página, no volver a mostrar
  let yaMostrada = false;
  try {
    yaMostrada = sessionStorage.getItem("intro_mostrada") === "true" || document.body.classList.contains("sin-intro");
  } catch (e) {}

  if (yaMostrada) {
    document.body.classList.remove("intro-activa");
    intro.remove();
    return;
  }

  // Marcar como mostrada para que al recargar no se repita
  try {
    sessionStorage.setItem("intro_mostrada", "true");
  } catch (e) {}

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

  // Si abrimos Projects o Kaggle: recalcular posición del carrusel
  if (id === "projects") {
    setTimeout(actualizarPosicionCarrusel, 30);
    setTimeout(actualizarPosicionCarrusel, 160);
  } else if (id === "kaggle") {
    setTimeout(actualizarPosicionCarruselKaggle, 30);
    setTimeout(actualizarPosicionCarruselKaggle, 160);
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
                        'morado', 'turquesa', 'rojo', 'rosa',
                        'coral', 'indigo', 'lima', 'celeste',
                        'lavanda', 'menta'
   ========================================================= */
const MAPA_COLORES_SKILLS = {
  // Proyectos
  "Power BI": "amarillo",
  "DAX": "naranja",
  "SQL": "azul",
  "BigQuery": "celeste",
  "Python": "verde",
  "Pandas": "naranja",
  "NumPy": "celeste",
  "TensorFlow": "naranja",
  "Keras": "coral",
  "TensorFlow/Keras": "naranja",
  "Deep Learning": "indigo",
  "spaCy": "turquesa",
  "Transformers": "amarillo",
  "VADER": "morado",
  "NLP": "menta",
  "Análisis exploratorio (EDA)": "turquesa",
  "Visualización de datos": "azul",
  "Plotly": "coral",
  "Estadística": "morado",
  "Análisis de correlaciones": "rosa",
  "A/B Testing": "coral",
  "Cohortes": "turquesa",
  "Clasificación": "morado",
  "Statsmodels": "morado",
  "Matplotlib": "azul",
  "Seaborn": "celeste",
  "Machine Learning supervisado": "lima",
  "Tableau": "azul",
  "Excel": "lima",
  "Visualización": "lavanda",
  "Automatización": "naranja",

  // Kaggle & ML
  "Machine Learning": "lima",
  "Clasificación supervisada": "morado",
  "LightGBM": "amarillo",
  "CatBoost": "amarillo",
  "XGBoost": "naranja",
  "Optuna": "celeste",
  "Lasso / Ridge": "turquesa",
  "Feature Engineering": "menta",
  "Time Series": "morado",
  "Ensemble": "indigo",
  "Scikit-learn": "coral",

  // Otras herramientas
  "People Analytics": "rosa",
  "MongoDB": "menta",
  "Big Data": "indigo"
};

const PALETA_FALLBACK = [
  "azul", "verde", "morado", "coral", "turquesa",
  "naranja", "rosa", "celeste", "lavanda", "lima", "amarillo", "indigo", "menta"
];

const obtenerColorTag = (nombre) => {
  if (MAPA_COLORES_SKILLS[nombre]) return MAPA_COLORES_SKILLS[nombre];
  // Si se añade una nueva skill sin asignar, calcula un tono armónico según el texto
  let hash = 0;
  for (let i = 0; i < nombre.length; i++) {
    hash = nombre.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % PALETA_FALLBACK.length;
  return PALETA_FALLBACK[index];
};

const crearTags = (tags, colorOverrides = {}) =>
  tags.map((t) => {
    const nombre = typeof t === "object" && t !== null ? t.nombre : t;
    const color = (typeof t === "object" && t !== null && t.color)
      ? t.color
      : (colorOverrides[nombre] || obtenerColorTag(nombre));
    // El color usa el nombre original; el texto se traduce si hay versión inglesa
    const lang = typeof idiomaActual !== "undefined" ? idiomaActual : (window.idiomaActual || "es");
    const tagsDict = typeof TAGS_EN !== "undefined" ? TAGS_EN : window.TAGS_EN;
    const etiqueta = (lang === "en" && tagsDict && tagsDict[nombre]) ? tagsDict[nombre] : nombre;
    return `<span class="tag tag-${color}">${etiqueta}</span>`;
  }).join("");

/* Devuelve el proyecto/competición en el idioma activo: si es inglés,
   superpone los campos de CONTENIDO_EN (i18n.js) sobre el original. */
function traducirItem(tipo, i, base) {
  const lang = typeof idiomaActual !== "undefined" ? idiomaActual : (window.idiomaActual || "es");
  if (lang !== "en") return base;
  const dict = typeof CONTENIDO_EN !== "undefined" ? CONTENIDO_EN : window.CONTENIDO_EN;
  const en = dict && dict[tipo] && dict[tipo][i];
  if (!en) return base;
  return { ...base, ...en, detalle: { ...base.detalle, ...(en.detalle || {}) } };
}

function textoDe() {
  const lang = typeof idiomaActual !== "undefined" ? idiomaActual : (window.idiomaActual || "es");
  return lang === "en" ? "of" : "de";
}

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

function renderCardProyecto(p, i, esActivo) {
  p = traducirItem("proyectos", i, p);
  return `
    <article class="card ${esActivo ? "activo" : ""}"
             tabindex="${esActivo ? "0" : "-1"}"
             data-index="${i}"
             role="group"
             aria-roledescription="slide"
             aria-label="${i + 1} ${textoDe()} ${PROYECTOS.length}: ${p.titulo}">
      <div class="card-col-izq">
        <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" draggable="false" />
      </div>
      <div class="card-col-der">
        ${crearEstrellasCard(p.rating)}
        <h3>${p.titulo}</h3>
        <p class="subtitulo">${p.subtitulo}</p>
        <p class="descripcion">${p.descripcion}</p>
        <div class="tags">${crearTags(p.tags, p.tagColors)}</div>
      </div>
    </article>
  `;
}

function renderCardKaggle(k, i, esActivo) {
  k = traducirItem("kaggle", i, k);
  const labelVer = typeof t === "function" ? t("kaggle_view_link") : "Ver en Kaggle &rarr;";
  return `
    <article class="card kaggle-card ${esActivo ? "activo" : ""}"
             tabindex="${esActivo ? "0" : "-1"}"
             data-index="${i}"
             role="group"
             aria-roledescription="slide"
             aria-label="${i + 1} ${textoDe()} ${KAGGLE_COMPETICIONES.length}: ${k.titulo}">
      <img class="kaggle-thumb" src="${k.imagen}" alt="Miniatura — ${k.titulo}" loading="lazy" draggable="false" />
      <div class="kaggle-meta">
        <span class="kaggle-badge">${k.badge}</span>
        ${k.tipo ? `<span class="kaggle-tipo">${k.tipo}</span>` : ""}
      </div>
      <h3>${k.titulo}</h3>
      <p class="subtitulo">${k.subtitulo}</p>
      <p class="descripcion">${k.descripcion || k.detalle.descripcionLarga}</p>
      <div class="tags">${crearTags(k.tags)}</div>
      <div class="kaggle-pie">
        <span class="kaggle-posicion">${k.posicion}</span>
        <a href="${k.enlace}" target="_blank" rel="noopener" class="enlace-simple kaggle-enlace-ext" aria-label="Ver en Kaggle" data-i18n="kaggle_view_link">${labelVer}</a>
      </div>
    </article>
  `;
}

/* =========================================================
   FÁBRICA DE CARRUSELES CON EFECTO FOCO Y GESTOS TÁCTILES
   ========================================================= */
function crearCarrusel({
  viewport,
  track,
  prevBtn,
  nextBtn,
  indicador,
  items,
  renderCard,
  onOpenModal
}) {
  if (!viewport || !track) return null;

  let indiceActivo = 0;
  let isDragging = false;
  let pointerStartX = 0;
  let pointerStartY = 0;
  let lastPointerX = 0;
  let lastPointerTime = 0;
  let velocityX = 0;            // velocidad del puntero en px/ms (suavizada)
  let hasMovedSignificant = false;
  let isHorizontalDrag = null;
  let baseTargetX = 0;

  /* Motor de movimiento: un muelle críticamente amortiguado animado con
     requestAnimationFrame. El track y el efecto foco se actualizan en el
     mismo frame, así que todo va sincronizado y sin saltos. */
  let posX = 0;                 // posición actual del track (px)
  let velX = 0;                 // velocidad del muelle (px/s)
  let destinoX = 0;             // posición de reposo objetivo
  let rafId = null;
  let lastFrame = 0;
  let enRueda = false;
  let wheelTimer = null;
  let cards = [];
  let targetXs = [];
  let paso = 400;               // distancia entre centros de tarjetas contiguas
  const RIGIDEZ = 170;          // EDITA: más alto = más rápido
  const AMORTIGUACION = 26;     // EDITA: ≈ 2·√RIGIDEZ = sin rebote; más bajo = rebote suave
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function calcularMedidas() {
    cards = Array.from(track.querySelectorAll(".card"));
    const viewportW = viewport.clientWidth;
    targetXs = cards.map((c) => (viewportW / 2) - (c.offsetLeft + c.offsetWidth / 2));
    paso = targetXs.length > 1 ? Math.abs(targetXs[0] - targetXs[1]) : 400;
    if (!paso) paso = 400;
  }

  function indiceMasCercano(x) {
    let mejor = 0;
    let minD = Infinity;
    for (let i = 0; i < targetXs.length; i++) {
      const d = Math.abs(x - targetXs[i]);
      if (d < minD) { minD = d; mejor = i; }
    }
    return mejor;
  }

  /* Resistencia elástica en los extremos */
  function conElastico(x) {
    const maxX = targetXs[0];
    const minX = targetXs[targetXs.length - 1];
    if (x > maxX) return maxX + (x - maxX) * 0.28;
    if (x < minX) return minX + (x - minX) * 0.28;
    return x;
  }

  function actualizarEstadoVisual(idx) {
    cards.forEach((card, i) => {
      const esActivo = i === idx;
      card.classList.toggle("activo", esActivo);
      card.setAttribute("tabindex", esActivo ? "0" : "-1");
      card.setAttribute("aria-selected", esActivo ? "true" : "false");
    });

    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = idx === cards.length - 1;
    if (indicador) indicador.textContent = `${idx + 1} / ${cards.length}`;
  }

  /* Pinta un frame: posición del track + foco continuo de cada tarjeta */
  function aplicarFrame(seguirIndice) {
    if (!cards.length) return;
    track.style.transform = `translate3d(${posX}px, 0, 0)`;

    let cercano = 0;
    let minD = Infinity;
    for (let i = 0; i < cards.length; i++) {
      const d = Math.abs(posX - targetXs[i]);
      if (d < minD) { minD = d; cercano = i; }
      const foco = 1 - Math.min(1, d / paso);
      const suave = foco * foco * (3 - 2 * foco); // smoothstep
      cards[i].style.setProperty("--foco", suave.toFixed(3));
    }

    // Contador y tarjeta activa en vivo mientras se arrastra
    if (seguirIndice && cercano !== indiceActivo) {
      indiceActivo = cercano;
      actualizarEstadoVisual(indiceActivo);
    }
  }

  function tick(ts) {
    rafId = null;
    const dt = Math.min(0.032, ((ts - lastFrame) / 1000) || 0.016);
    lastFrame = ts;

    if (!isDragging && !enRueda) {
      const aceleracion = RIGIDEZ * (destinoX - posX) - AMORTIGUACION * velX;
      velX += aceleracion * dt;
      posX += velX * dt;
      if (Math.abs(destinoX - posX) < 0.3 && Math.abs(velX) < 8) {
        posX = destinoX;
        velX = 0;
        aplicarFrame(false);
        return; // reposo: el bucle se detiene
      }
    }

    aplicarFrame(isDragging || enRueda);
    rafId = requestAnimationFrame(tick);
  }

  function iniciarAnimacion() {
    if (rafId === null) {
      lastFrame = performance.now();
      rafId = requestAnimationFrame(tick);
    }
  }

  function actualizarPosicion(animar = true) {
    if (!track.querySelector(".card")) return;
    calcularMedidas();
    actualizarEstadoVisual(indiceActivo);
    destinoX = targetXs[indiceActivo];

    if (!animar || reducedMotionQuery.matches) {
      posX = destinoX;
      velX = 0;
      aplicarFrame(false);
    } else {
      iniciarAnimacion();
    }
  }

  function irA(index) {
    if (index < 0 || index >= items.length) return;
    indiceActivo = index;
    actualizarPosicion(true);
  }

  /* Repinta las tarjetas (p. ej. al cambiar de idioma) sin duplicar listeners */
  function redibujar() {
    track.innerHTML = items.map((item, i) => renderCard(item, i, i === indiceActivo)).join("");
    if (viewport.clientWidth > 0) {
      actualizarPosicion(false);
    }
  }

  function render() {
    track.innerHTML = items.map((item, i) => renderCard(item, i, i === indiceActivo)).join("");

    /* Clic en tarjetas (distingue entre clic normal y arrastre) */
    track.addEventListener("click", (e) => {
      if (e.target.closest(".kaggle-enlace-ext")) return;
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
        onOpenModal(idx);
      } else {
        irA(idx);
      }
    });

    /* Teclado en tarjeta activa */
    track.addEventListener("keydown", (e) => {
      const card = e.target.closest(".card");
      if (!card) return;
      const idx = Number(card.dataset.index);
      if ((e.key === "Enter" || e.key === " ") && idx === indiceActivo) {
        e.preventDefault();
        onOpenModal(idx);
      }
    });

    /* Botones de navegación */
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (indiceActivo > 0) irA(indiceActivo - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (indiceActivo < items.length - 1) irA(indiceActivo + 1);
      });
    }

    actualizarPosicion(false);
    setTimeout(() => { if (!isDragging) actualizarPosicion(false); }, 80);
  }

  // Prevenir arrastre nativo no deseado de imágenes
  viewport.addEventListener("dragstart", (e) => e.preventDefault());

  viewport.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    calcularMedidas();
    isDragging = true;
    pointerStartX = e.clientX;
    pointerStartY = e.clientY;
    lastPointerX = e.clientX;
    lastPointerTime = performance.now();
    velocityX = 0;
    velX = 0;
    hasMovedSignificant = false;
    isHorizontalDrag = null;
    baseTargetX = posX; // se puede "agarrar" el carrusel en pleno movimiento
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
          viewport.classList.add("arrastrando");
          try { viewport.setPointerCapture(e.pointerId); } catch (_) {}
          // Evita un tirón inicial: el arrastre arranca desde donde está el puntero
          pointerStartX = e.clientX;
          lastPointerX = e.clientX;
          lastPointerTime = performance.now();
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

    // Velocidad suavizada para la inercia
    const now = performance.now();
    const dt = now - lastPointerTime;
    if (dt > 8) {
      const vInstante = (e.clientX - lastPointerX) / dt;
      velocityX = 0.65 * vInstante + 0.35 * velocityX;
      lastPointerX = e.clientX;
      lastPointerTime = now;
    }

    // Seguimiento 1:1 con resistencia elástica en los límites
    posX = conElastico(baseTargetX + (e.clientX - pointerStartX));
    iniciarAnimacion();
  });

  const finalizarArrastre = (e) => {
    if (!isDragging && !hasMovedSignificant) return;
    const eraArrastre = hasMovedSignificant;
    isDragging = false;
    viewport.classList.remove("arrastrando");
    try { viewport.releasePointerCapture(e.pointerId); } catch (_) {}

    if (!eraArrastre) return;

    setTimeout(() => { hasMovedSignificant = false; }, 250);

    // Si el cursor se detuvo antes de soltar, no hay inercia
    const sinMover = performance.now() - lastPointerTime;
    const v = sinMover > 80 ? 0 : velocityX;

    // Proyección con inercia: un lanzamiento rápido avanza como mucho una
    // tarjeta más allá de donde está el track, nunca saltos de 2 en 2.
    const empuje = Math.max(-paso * 0.75, Math.min(paso * 0.75, v * 450));
    const destino = indiceMasCercano(posX + empuje);

    velX = v * 1000; // el muelle hereda la velocidad del gesto
    indiceActivo = destino;
    actualizarPosicion(true);
  };

  /* Trackpad / rueda horizontal: desplazamiento continuo y snap al soltar */
  viewport.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // scroll vertical normal
    e.preventDefault();
    if (!targetXs.length) calcularMedidas();
    enRueda = true;
    velX = 0;
    const maxX = targetXs[0] + 60;
    const minX = targetXs[targetXs.length - 1] - 60;
    posX = Math.max(minX, Math.min(maxX, posX - e.deltaX));
    iniciarAnimacion();
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => {
      enRueda = false;
      indiceActivo = indiceMasCercano(posX);
      actualizarPosicion(true);
    }, 140);
  }, { passive: false });

  window.addEventListener("pointerup", finalizarArrastre);
  window.addEventListener("pointercancel", finalizarArrastre);
  window.addEventListener("resize", () => actualizarPosicion(false));

  render();

  return {
    irA,
    anterior: () => { if (indiceActivo > 0) irA(indiceActivo - 1); },
    siguiente: () => { if (indiceActivo < items.length - 1) irA(indiceActivo + 1); },
    actualizarPosicion: () => actualizarPosicion(false),
    redibujar,
    getIndiceActivo: () => indiceActivo
  };
}

let carruselProyectos = null;
let carruselKaggle = null;

function renderizarProyectos() {
  carruselProyectos = crearCarrusel({
    viewport: document.getElementById("carrusel-viewport"),
    track: document.getElementById("carrusel-track"),
    prevBtn: document.getElementById("carrusel-prev"),
    nextBtn: document.getElementById("carrusel-next"),
    indicador: document.getElementById("carrusel-indicador"),
    items: PROYECTOS,
    renderCard: renderCardProyecto,
    onOpenModal: abrirModal
  });
}

function renderizarKaggle() {
  carruselKaggle = crearCarrusel({
    viewport: document.getElementById("carrusel-viewport-kaggle"),
    track: document.getElementById("carrusel-track-kaggle"),
    prevBtn: document.getElementById("carrusel-prev-kaggle"),
    nextBtn: document.getElementById("carrusel-next-kaggle"),
    indicador: document.getElementById("carrusel-indicador-kaggle"),
    items: KAGGLE_COMPETICIONES,
    renderCard: renderCardKaggle,
    onOpenModal: abrirModalKaggle
  });
}

function irAProyecto(idx) {
  if (carruselProyectos) carruselProyectos.irA(idx);
}

function irAKaggle(idx) {
  if (carruselKaggle) carruselKaggle.irA(idx);
}

function actualizarPosicionCarrusel() {
  if (carruselProyectos) carruselProyectos.actualizarPosicion();
}

function actualizarPosicionCarruselKaggle() {
  if (carruselKaggle) carruselKaggle.actualizarPosicion();
}

/* Flechas de teclado (← →) — según la sección activa, cuando no hay modal abierto */
window.addEventListener("keydown", (e) => {
  if (modal && !modal.hidden) return;
  const seccionActiva = document.querySelector(".seccion.activa");
  if (!seccionActiva) return;

  if (seccionActiva.id === "projects" && carruselProyectos) {
    if (e.key === "ArrowLeft")  carruselProyectos.anterior();
    if (e.key === "ArrowRight") carruselProyectos.siguiente();
  } else if (seccionActiva.id === "kaggle" && carruselKaggle) {
    if (e.key === "ArrowLeft")  carruselKaggle.anterior();
    if (e.key === "ArrowRight") carruselKaggle.siguiente();
  }
});

/* =========================================================
   MODAL — Detalle del proyecto
   ========================================================= */
const modal = document.getElementById("modal");
let modalAbierto = null; // { tipo: "proyecto" | "kaggle", i } para repintarlo al cambiar de idioma

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
  const p = traducirItem("proyectos", i, PROYECTOS[i]);
  modalAbierto = { tipo: "proyecto", i };

  document.getElementById("modal-img").src = p.imagen;
  document.getElementById("modal-img").alt = p.titulo;
  document.getElementById("modal-rating").innerHTML = renderizarEstrellas(p.rating);
  document.getElementById("modal-titulo").textContent = p.titulo;
  document.getElementById("modal-subtitulo").textContent = p.subtitulo;
  document.getElementById("modal-descripcion").textContent = p.detalle.descripcionLarga;
  document.getElementById("modal-objetivo").textContent = p.detalle.objetivo;

  const resumenSeccion = document.getElementById("modal-resumen-seccion");
  const resumenEl = document.getElementById("modal-resumen");
  if (resumenSeccion && resumenEl) {
    if (p.detalle.resumen && p.detalle.resumen.length) {
      resumenSeccion.hidden = false;
      const parrafos = Array.isArray(p.detalle.resumen) ? p.detalle.resumen : [p.detalle.resumen];
      resumenEl.innerHTML = parrafos.map((txt) => `<p>${txt}</p>`).join("");
    } else {
      resumenSeccion.hidden = true;
      resumenEl.innerHTML = "";
    }
  }

  document.getElementById("modal-resultados").innerHTML =
    p.detalle.resultados.map((r) => `<li>${r}</li>`).join("");
  document.getElementById("modal-tags").innerHTML = crearTags(p.tags, p.tagColors);

  const enlaceBtn = document.getElementById("modal-enlace");
  if (p.detalle.enlace && p.detalle.enlace.trim().startsWith("http")) {
    enlaceBtn.style.display = "inline-block";
    enlaceBtn.href = p.detalle.enlace;
    enlaceBtn.setAttribute("data-i18n", "modal_link_btn");
    enlaceBtn.textContent = typeof t === "function" ? t("modal_link_btn") : "Ver repositorio / dashboard";
  } else {
    enlaceBtn.style.display = "none";
  }

  modal.hidden = false;
  document.body.classList.add("modal-abierto");
  modal.querySelector(".modal-caja").scrollTop = 0;
  modal.querySelector(".modal-cerrar").focus();
}

function abrirModalKaggle(i) {
  const k = traducirItem("kaggle", i, KAGGLE_COMPETICIONES[i]);
  modalAbierto = { tipo: "kaggle", i };

  document.getElementById("modal-img").src = k.imagen;
  document.getElementById("modal-img").alt = k.titulo;

  const resumenSeccion = document.getElementById("modal-resumen-seccion");
  if (resumenSeccion) {
    resumenSeccion.hidden = true;
  }

  // En Kaggle mostramos badge de medalla y posición en lugar de rating numérico
  document.getElementById("modal-rating").innerHTML = `
    <span class="kaggle-badge" style="font-size:0.78rem; padding: 4px 10px;">${k.badge}</span>
    ${k.tipo ? `<span class="kaggle-tipo" style="font-size:0.8rem;">${k.tipo}</span>` : ""}
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



function cerrarModal() {
  modal.hidden = true;
  modalAbierto = null;
  document.body.classList.remove("modal-abierto");
}

/* Hook que llama cambiarIdioma() (i18n.js): repinta carruseles y modal abierto */
function alCambiarIdioma() {
  if (carruselProyectos) carruselProyectos.redibujar();
  if (carruselKaggle) carruselKaggle.redibujar();
  if (modal && !modal.hidden && modalAbierto) {
    const caja = modal.querySelector(".modal-caja");
    const scroll = caja.scrollTop;
    if (modalAbierto.tipo === "kaggle") abrirModalKaggle(modalAbierto.i);
    else abrirModal(modalAbierto.i);
    caja.scrollTop = scroll;
  }
}
window.alCambiarIdioma = alCambiarIdioma;

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
