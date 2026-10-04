/* =========================================================
   DICCIONARIO DE TRADUCCIONES (i18n)
   Compatible con file:// y GitHub Pages (sin fetch ni módulos)
   ========================================================= */

const TRANSLATIONS = {
  en: {
    // Navbar
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_kaggle: "Kaggle Competitions",

    // CV / About Me
    cv_tag: "CV",
    cv_intro: "<p>Hi, I’m Joaquín Villegas Cuesta, a Business Administration graduate from Complutense University of Madrid with a Master’s in Business Analytics from Comillas Pontifical University.</p><p>I’m passionate about data and enjoy using it to understand problems, discover patterns and find insights that can help make better decisions.</p><p>Through this portfolio, I share some of the data analysis projects I’ve worked on as I continue developing my skills and exploring different ways of working with data.</p>",
    cv_disclaimer: "You can find my most detailed and up-to-date profile on my CV and LinkedIn; this website is focused on showcasing my projects.",
    cv_location: "Madrid, Spain",

    // CV Columns
    col_education: "Education",
    edu_1: "<span class=\"cv-item-titulo\">Master's in Business Analytics</span><span class=\"cv-item-entidad\">Universidad Pontificia Comillas (ICADE)</span><span class=\"cv-item-fecha\">Oct. 2025 – Jun. 2026</span>",
    edu_2: "<span class=\"cv-item-titulo\">Bachelor's in Business Administration (ADE)</span><span class=\"cv-item-entidad\">Universidad Complutense de Madrid</span><span class=\"cv-item-fecha\">Sept. 2021 – Jun. 2025</span>",

    col_skills: "Tools & Skills",
    skills_1: "<strong>Python</strong>",
    skills_2: "<strong>SQL</strong>",
    skills_3: "<strong>Tableau</strong>",
    skills_4: "<strong>Power BI</strong>",
    skills_5: "<strong>MongoDB</strong>",
    skills_6: "<strong>Big Data</strong>",

    col_experience: "Experience",
    exp_1: "<span class=\"cv-item-titulo\">Office Clerk / Employee</span><span class=\"cv-item-entidad\">Ibercaja</span><span class=\"cv-item-fecha\">Jun. 2025 – Sept. 2025</span>",
    exp_2: "<span class=\"cv-item-titulo\">Internship</span><span class=\"cv-item-entidad\">Ayuntamiento de El Escorial</span><span class=\"cv-item-fecha\">Feb. 2025 – Jun. 2025</span>",

    // Interface & Modal Labels
    personal_rating: "Personal Rating",
    carrusel_prev_aria: "Previous project",
    carrusel_next_aria: "Next project",
    modal_objective_title: "Objective",
    modal_summary_title: "Project Summary",
    modal_results_title: "Results & Conclusions",
    modal_skills_title: "Skills",
    modal_link_btn: "View repository / dashboard",
    kaggle_profile_btn: "View Kaggle profile",
    kaggle_view_link: "View on Kaggle →",

    // Footer
    footer_rights: "All rights reserved."
  },
  es: {
    // Navbar
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_kaggle: "Kaggle Competitions",

    // CV / About Me
    cv_tag: "CV",
    cv_intro: "<p>Hola, soy Joaquín Villegas Cuesta, graduado en Administración y Dirección de Empresas por la Universidad Complutense de Madrid con un Máster en Business Analytics por la Universidad Pontificia Comillas.</p><p>Me apasionan los datos y disfruto utilizándolos para comprender problemas, descubrir patrones y encontrar insights que ayuden a tomar mejores decisiones.</p><p>A través de este portfolio, comparto algunos de los proyectos de análisis de datos en los que he trabajado mientras continúo desarrollando mis habilidades y explorando diferentes formas de trabajar con datos.</p>",
    cv_disclaimer: "Puedes encontrar mi perfil más definido y actualizado en mi CV y LinkedIn; esta web está enfocada en mostrar mis proyectos.",
    cv_location: "Madrid, España",

    // CV Columnas
    col_education: "Educación",
    edu_1: "<span class=\"cv-item-titulo\">Máster en Business Analytics</span><span class=\"cv-item-entidad\">Universidad Pontificia Comillas (ICADE)</span><span class=\"cv-item-fecha\">Oct. 2025 – Jun. 2026</span>",
    edu_2: "<span class=\"cv-item-titulo\">Grado en Administración y Dirección de Empresas (ADE)</span><span class=\"cv-item-entidad\">Universidad Complutense de Madrid</span><span class=\"cv-item-fecha\">Sept. 2021 – Jun. 2025</span>",

    col_skills: "Herramientas y Skills",
    skills_1: "<strong>Python</strong>",
    skills_2: "<strong>SQL</strong>",
    skills_3: "<strong>Tableau</strong>",
    skills_4: "<strong>Power BI</strong>",
    skills_5: "<strong>MongoDB</strong>",
    skills_6: "<strong>Big Data</strong>",

    col_experience: "Experiencia",
    exp_1: "<span class=\"cv-item-titulo\">Empleado de oficina</span><span class=\"cv-item-entidad\">Ibercaja</span><span class=\"cv-item-fecha\">Jun. 2025 – Sept. 2025</span>",
    exp_2: "<span class=\"cv-item-titulo\">Prácticas</span><span class=\"cv-item-entidad\">Ayuntamiento de El Escorial</span><span class=\"cv-item-fecha\">Feb. 2025 – Jun. 2025</span>",

    // Interface & Modal Labels
    personal_rating: "Personal Rating",
    carrusel_prev_aria: "Proyecto anterior",
    carrusel_next_aria: "Siguiente proyecto",
    modal_objective_title: "Objetivo",
    modal_summary_title: "Resumen del proyecto",
    modal_results_title: "Resultados y conclusiones",
    modal_skills_title: "Skills",
    modal_link_btn: "Ver repositorio / dashboard",
    kaggle_profile_btn: "Ver perfil en Kaggle",
    kaggle_view_link: "Ver en Kaggle →",

    // Footer
    footer_rights: "Todos los derechos reservados."
  }
};

/**
 * Determina el idioma inicial:
 * 1. Elección guardada en localStorage (prioridad).
 * 2. Si navigator.language empieza por 'es', arranca en español.
 * 3. Por defecto, inglés ('en').
 */
function obtenerIdiomaInicial() {
  try {
    const guardado = localStorage.getItem("portfolio_lang");
    if (guardado === "es" || guardado === "en") {
      return guardado;
    }
  } catch (e) {
    // Si localStorage no está disponible
  }

  const navLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
  if (navLang.startsWith("es")) {
    return "es";
  }
  return "en";
}

let idiomaActual = obtenerIdiomaInicial();

/**
 * Obtiene la traducción para una clave dada.
 * Si falta en el idioma actual (o en español), se muestra la inglesa como fallback.
 */
function t(clave) {
  if (TRANSLATIONS[idiomaActual] && TRANSLATIONS[idiomaActual][clave] !== undefined) {
    return TRANSLATIONS[idiomaActual][clave];
  }
  if (TRANSLATIONS.en && TRANSLATIONS.en[clave] !== undefined) {
    return TRANSLATIONS.en[clave];
  }
  return clave;
}

/**
 * Aplica las traducciones a los elementos del DOM marcados con:
 * - data-i18n: reemplaza innerHTML o textContent según contenga etiquetas
 * - data-i18n-aria: actualiza aria-label
 */
function aplicarTraducciones() {
  document.documentElement.lang = idiomaActual;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.getAttribute("data-i18n");
    const texto = t(clave);
    if (texto.includes("<") && texto.includes(">")) {
      el.innerHTML = texto;
    } else {
      el.textContent = texto;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const clave = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", t(clave));
  });

  // Actualizar selector de idioma
  const btnEn = document.getElementById("lang-en");
  const btnEs = document.getElementById("lang-es");
  if (btnEn && btnEs) {
    const esEn = idiomaActual === "en";
    btnEn.classList.toggle("activo", esEn);
    btnEn.setAttribute("aria-pressed", esEn ? "true" : "false");

    btnEs.classList.toggle("activo", !esEn);
    btnEs.setAttribute("aria-pressed", !esEn ? "true" : "false");
  }

  // Si el modal está abierto o proyectos renderizados, actualizar etiquetas si procede
  const ratingLabels = document.querySelectorAll(".card-rating-title, .rating-titulo");
  ratingLabels.forEach((el) => {
    el.textContent = t("personal_rating");
  });
}

/**
 * Cambia el idioma actual, guarda en localStorage y actualiza la vista.
 */
function cambiarIdioma(nuevoIdioma) {
  if (nuevoIdioma !== "es" && nuevoIdioma !== "en") return;
  idiomaActual = nuevoIdioma;
  try {
    localStorage.setItem("portfolio_lang", nuevoIdioma);
  } catch (e) {
    // Ignorar si localStorage está restringido
  }
  aplicarTraducciones();
}
