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
    cv_intro: "Data analyst focused on turning data into decisions. Passionate about cleaning, modeling, and visualizing information to uncover patterns and tell clear stories with actionable dashboards and reports.",
    cv_disclaimer: "You can find my most detailed and up-to-date profile on my CV and LinkedIn; this website is focused on showcasing my projects.",
    cv_location: "Madrid, Spain",

    // CV Columns
    col_education: "Education",
    edu_1: "<strong>Master's in Data Science</strong> — University X, 2023–2024",
    edu_2: "<strong>Bachelor's in Economics</strong> — University Y, 2018–2022",
    edu_3: "<strong>Google Data Analytics Certificate</strong> — Coursera, 2023",

    col_skills: "Tools & Skills",
    skills_1: "<strong>SQL</strong> — PostgreSQL, MySQL, BigQuery",
    skills_2: "<strong>Python</strong> — Pandas, NumPy, Matplotlib, Scikit-learn",
    skills_3: "<strong>Power BI</strong> — DAX, Power Query, modeling",
    skills_4: "<strong>Excel</strong> — pivot tables, Power Pivot",
    skills_5: "<strong>Tableau</strong> — interactive dashboards",
    skills_6: "<strong>Statistics</strong> — A/B testing, regression",

    col_experience: "Experience",
    exp_1: "<strong>Data Analyst</strong> — Company A, 2024–present. Sales dashboards and KPIs.",
    exp_2: "<strong>Junior Analyst</strong> — Company B, 2022–2023. Reporting and automation in Excel/SQL.",
    exp_3: "<strong>BI Internship</strong> — Company C, 2022. Data cleaning and modeling.",

    // Interface & Modal Labels
    personal_rating: "Personal Rating",
    carrusel_prev_aria: "Previous project",
    carrusel_next_aria: "Next project",
    modal_objective_title: "Objective",
    modal_results_title: "Results & Conclusions",
    modal_skills_title: "Skills",
    modal_link_btn: "View repository / dashboard",
    kaggle_profile_btn: "View Kaggle profile",

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
    cv_intro: "Analista de datos enfocado en transformar datos en decisiones. Me apasiona limpiar, modelar y visualizar información para encontrar patrones y contar historias claras con dashboards e informes accionables.",
    cv_disclaimer: "Puedes encontrar mi perfil más definido y actualizado en mi CV y LinkedIn; esta web está enfocada en mostrar mis proyectos.",
    cv_location: "Madrid, España",

    // CV Columnas
    col_education: "Educación",
    edu_1: "<strong>Máster en Data Science</strong> — Universidad X, 2023–2024",
    edu_2: "<strong>Grado en Economía</strong> — Universidad Y, 2018–2022",
    edu_3: "<strong>Certificación Google Data Analytics</strong> — Coursera, 2023",

    col_skills: "Herramientas y Skills",
    skills_1: "<strong>SQL</strong> — PostgreSQL, MySQL, BigQuery",
    skills_2: "<strong>Python</strong> — Pandas, NumPy, Matplotlib, Scikit-learn",
    skills_3: "<strong>Power BI</strong> — DAX, Power Query, modelado",
    skills_4: "<strong>Excel</strong> — tablas dinámicas, Power Pivot",
    skills_5: "<strong>Tableau</strong> — dashboards interactivos",
    skills_6: "<strong>Estadística</strong> — A/B testing, regresión",

    col_experience: "Experiencia",
    exp_1: "<strong>Data Analyst</strong> — Empresa A, 2024–actualidad. Dashboards de ventas y KPIs.",
    exp_2: "<strong>Analista Junior</strong> — Empresa B, 2022–2023. Reporting y automatización en Excel/SQL.",
    exp_3: "<strong>Prácticas BI</strong> — Empresa C, 2022. Limpieza y modelado de datos.",

    // Interface & Modal Labels
    personal_rating: "Personal Rating",
    carrusel_prev_aria: "Proyecto anterior",
    carrusel_next_aria: "Siguiente proyecto",
    modal_objective_title: "Objetivo",
    modal_results_title: "Resultados y conclusiones",
    modal_skills_title: "Skills",
    modal_link_btn: "Ver repositorio / dashboard",
    kaggle_profile_btn: "Ver perfil en Kaggle",

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
