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
    edu_2: "<span class=\"cv-item-titulo\">Bachelor's in Business Administration (BBA)</span><span class=\"cv-item-entidad\">Universidad Complutense de Madrid</span><span class=\"cv-item-fecha\">Sept. 2021 – Jun. 2025</span>",

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
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_kaggle: "Competiciones Kaggle",

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

/* =========================================================
   CONTENIDO EN INGLÉS de PROYECTOS y KAGGLE_COMPETICIONES
   Se indexa por posición (mismo orden que los arrays de script.js)
   y solo incluye los campos traducibles; el resto (imagen, rating,
   tags, enlaces) se hereda del original. EDITA al añadir proyectos.
   ========================================================= */
const CONTENIDO_EN = {
  proyectos: [
    {
      titulo: "Stock return prediction for the Magnificent 7",
      subtitulo: "Python · Machine Learning",
      descripcion: "Prediction of the 22-day cumulative return of the seven largest S&P 500 tech companies, using 1,391,801 daily FactSet price records (2014-2025). It compares four models and tests whether the predictions can beat a buy-and-hold strategy.",
      detalle: {
        descripcionLarga: "Prediction of the 22-day cumulative return of the seven largest S&P 500 tech companies, using 1,391,801 daily FactSet price records (2014-2025). It compares four models and tests whether the predictions can beat a buy-and-hold strategy.",
        objetivo: "To check whether historical daily returns are enough to anticipate the monthly behaviour of the Magnificent 7. Useful for investors who want to back their decisions with data and for analysts assessing whether a price-only strategy can beat the market.",
        resumen: [
          "I started from 1,391,801 records for 503 S&P 500 companies and kept the 7 Magnificent 7 (19,369 rows), using dividend-adjusted daily returns. No missing values had to be handled for these companies. I defined the 22-day cumulative return as the target and the previous 60 daily returns as features. I split 80/20 chronologically (cutoff in October 2023), excluded from training the rows whose target overlapped the test period, and fitted the scaler on the training set only to avoid data leakage.",
          "I trained a Naive model, a linear regression, LightGBM and an LSTM, with random hyperparameter search and temporal validation. The LSTM overfitted: validation error got worse while training error kept falling. I validated the best model with a rolling-window backtest (monthly retraining on 365 days) and simulated an investment strategy against Buy & Hold with a 0.1% cost per trade."
        ],
        resultados: [
          "LightGBM is the only model with a positive test R² (0.0032): it explains a tiny fraction of the variance.",
          "The LSTM performs worst (R² = -0.2123) and clearly overfits in the training curves.",
          "In the rolling backtest, LightGBM's R² drops to -0.0250: no predictive power under realistic conditions.",
          "LightGBM is off by about 8 percentage points on average (MAE = 0.0810) when predicting the 22-day return.",
          "It always predicts a positive return, so the strategy stays invested 100% of the time and is equivalent to Buy & Hold.",
          "The portfolio grows from €70,000 to ≈ €150,000, slightly below Buy & Hold; no model anticipated the March 2025 drop."
        ]
      }
    },
    {
      titulo: "Exploratory analysis (EDA) of Airbnb listings in 9 European cities",
      subtitulo: "Python · Data analysis",
      descripcion: "Exploratory analysis of 41,714 Airbnb listings in nine European cities to understand which factors are associated with price and guest satisfaction.",
      detalle: {
        descripcionLarga: "Exploratory analysis of 41,714 Airbnb listings in Amsterdam, Athens, Barcelona, Berlin, Budapest, Lisbon, Paris, Rome and Vienna. It studies how price, location, listing type, cleanliness, satisfaction and superhost status relate to each other.",
        objetivo: "To identify which variables are associated with price and guest satisfaction in listings across nine European cities. For hosts, it is a reference for setting prices and prioritising what improves reviews. For guests, it helps explain why prices vary between cities and which ratings are worth looking at.",
        resumen: [
          "I started from 41,714 records and 19 columns; I dropped 4 (attraction and restaurant indexes) and worked with 15 variables. I checked data types and missing values (none). Price has extreme values (mean ≈ €260, median ≈ €204, maximum ≈ €18,545), so I capped the chart axes.",
          "The analysis was univariate (average price by city, room type, capacity and distances), bivariate (price vs distance with OLS regression, satisfaction vs cleanliness and price brackets, weekdays vs weekends) and multivariate (correlation matrices and a comparison of superhosts with regular hosts). I detected multicollinearity between Room Type and Shared Room and explained apparently contradictory correlations, such as that of private room and price (-0.15)."
        ],
        resultados: [
          "Amsterdam has the highest average price (≈ €573), followed by Paris (≈ €393); Athens (≈ €152) and Budapest (≈ €177) are the cheapest.",
          "Cleanliness is the variable most associated with satisfaction, with a strong positive relationship.",
          "Proximity to the metro and to the city centre are the variables most associated with price; the metro weighs more and the highest prices appear within 500 m of the metro.",
          "Satisfaction is concentrated above 80 in all price brackets: no relationship between price and satisfaction is observed.",
          "Superhosts have better satisfaction and cleanliness, a slightly lower average price and a location slightly further from the centre.",
          "Capacity is the room variable most associated with price, although the correlation is weak (≈ 0.18).",
          "Price does not vary noticeably between weekdays and weekends."
        ]
      }
    },
    {
      titulo: "Credit card default prediction with supervised ML",
      subtitulo: "Python · Machine Learning",
      descripcion: "Analysis of 25,134 credit card customers from the Credit Card Approval Prediction dataset (Kaggle), which combines applications and monthly payment history. It studies which characteristics are associated with having had a payment delayed by more than 30 days.",
      detalle: {
        descripcionLarga: "Analysis of 25,134 credit card customers from the Credit Card Approval Prediction dataset (Kaggle), which combines applications and monthly payment history. It studies which characteristics are associated with having had a payment delayed by more than 30 days.",
        objetivo: "To predict which customers will miss a payment by more than 30 days and compare models for detecting them. It helps lenders prioritise manual reviews, request guarantees or ask for more information before granting credit.",
        resumen: [
          "I started from 438,557 applications with 18 columns and a monthly history of 1,048,575 records. I removed 134,203 rows with no occupation, since being categorical it could not be imputed, and capped income and years employed using the interquartile range rule. I built the default variable (delay of more than 30 days) from the history and joined it by customer, leaving 25,134 customers and a 12.3% default rate.",
          "I fitted an explanatory logit with Statsmodels and trained a logit, a Random Forest and a neural network with Scikit-learn. The main problem was the imbalance of the target variable, which I addressed with class weights and threshold tuning to maximise default detection. I limited overfitting with random hyperparameter search, cross-validation, early stopping and L2 regularisation. In the Random Forest it partly persisted."
        ],
        resultados: [
          "The Random Forest is the best model: it detects 79% of defaults on the test set, with a threshold of 0.35.",
          "Its test AUC is 0.72 versus 0.92 in training, which indicates overfitting that was not fully eliminated.",
          "Its precision is 17%: out of every 100 customers flagged as defaulters, only 17 are, because of the many false alarms.",
          "The neural network falls behind, with a test AUC of 0.62, due to the small size and imbalance of the dataset.",
          "The predictive logit barely beats chance (AUC ≈ 0.54), because it does not capture non-linear relationships.",
          "The explanatory logit has a pseudo R² of 0.005: income and the other variables explain very little of default.",
          "No model beats the majority-class rule (87.7% accuracy): the 36-54% accuracy is the cost of prioritising recall."
        ]
      }
    },
    {
      titulo: "Facial emotion recognition with CNN for vending machines",
      subtitulo: "Python · Deep Learning",
      descripcion: "Facial emotion classification with a convolutional neural network on FER2013, a set of 35,887 48×48-pixel images obtained from Hugging Face. It studies whether facial expression can reveal the emotional state of someone using a vending machine.",
      detalle: {
        descripcionLarga: "Facial emotion classification with a convolutional neural network on FER2013, a set of 35,887 48×48-pixel images obtained from Hugging Face. It studies whether facial expression can reveal the emotional state of someone using a vending machine.",
        objetivo: "To evaluate whether a CNN can recognise a user's emotional state from their facial expression in order to personalise drink recommendations. Useful for marketing and product development to assess the feasibility of the system and decide how to improve it before applying it to real machines.",
        resumen: [
          "I started from 35,887 images with 7 emotions, already split into training, validation and test sets. I discarded Disgust (547 images) because of its strong imbalance and balanced the remaining six classes with 1,000 images per class for training and 100 for validation and test. I normalised pixels to [0, 1] and fixed seeds to guarantee reproducibility.",
          "I trained a sequential CNN with two convolutional blocks and two dense layers with dropout, and tested 50 random hyperparameter combinations (filters, neurons, dropout and batch size). I controlled overfitting with dropout and early stopping, since large configurations memorised the training data and generalised worse. I retrained the best configuration and evaluated it with per-emotion confusion matrices on training and test."
        ],
        resultados: [
          "The final model reaches 41.5% accuracy on the test set with six emotions: more than double chance, but insufficient for commercial use.",
          "The 50-configuration search has a ceiling of 44.3% on validation: tuning hyperparameters barely improves the result.",
          "Happy is the best-recognised emotion, with only 34 errors out of 100 test images.",
          "Fear is the worst recognised, with 80 errors out of 100 test images.",
          "The final model overfits moderately: accuracy drops ≈ 8 points between training and test.",
          "Disgust (547 images) was left out due to imbalance, so the system cannot recognise that emotion."
        ]
      }
    },
    {
      titulo: "Sentiment analysis of Elon Musk's tweets",
      subtitulo: "Python · NLP",
      descripcion: "Sentiment analysis of 50,395 Elon Musk tweets (after removing duplicates from 55,099) with VADER and a RoBERTa model for social media. It studies how the tone evolves over time and whether it relates to Tesla's daily stock price.",
      detalle: {
        descripcionLarga: "Sentiment analysis of 50,395 Elon Musk tweets (after removing duplicates from 55,099) with VADER and a RoBERTa model for social media. It studies how the tone evolves over time and whether it relates to Tesla's daily stock price.",
        objetivo: "To assess whether the tone of Musk's public messages relates to Tesla's share price. Useful for analysts and investors who want to judge whether the sentiment of influential figures can be incorporated into portfolio or price-prediction models.",
        resumen: [
          "I started from 55,099 tweets and 24 columns; the engagement metrics had significant missing values (viewCount only in 34,455 records), but the text was complete. I removed duplicates by text, keeping the first occurrence, leaving 50,395 tweets. I cleaned URLs, numbers and punctuation, and fixed HTML entities that appeared as the most frequent word.",
          "I applied two sentiment approaches: VADER (lexicon-based, ±0.05 threshold) and a RoBERTa model fine-tuned for Twitter, with long texts split into 512-token chunks. Since there are no ground-truth labels, I compared their distributions, which differ notably. Then I aggregated sentiment by day and cross-referenced it with Tesla's price using daily rates of change and a correlation matrix."
        ],
        resultados: [
          "There is no relationship between tweet sentiment and Tesla's price: the correlations of daily changes are ≈ 0.00-0.01.",
          "After the Twitter acquisition (October 2022), the share of positive tweets falls and the share of negative ones rises, possibly due to more political content.",
          "VADER classifies 42.6% of tweets as positive (21,446), above neutral (19,755) and negative (9,194).",
          "RoBERTa classifies 55.1% of tweets as neutral (27,756), a more conservative reading than VADER's.",
          "Negatives weigh more with RoBERTa (23.1%; 11,649 tweets) than with VADER (18.2%), and positives drop to 10,990.",
          "The most frequent terms are Tesla, SpaceX and cars, and positive words clearly outnumber negative ones."
        ]
      }
    }
  ],
  kaggle: [
    {
      subtitulo: "Titanic passenger survival prediction from personal data",
      badge: "Machine Learning",
      tipo: "",
      posicion: "Validation: <strong>81.46% Acc</strong>",
      descripcion: "Binary classification problem predicting whether a passenger survived the Titanic shipwreck based on demographic and ticket variables such as sex, age, and class.",
      detalle: {
        descripcionLarga: "Binary classification problem predicting whether a passenger survived the Titanic shipwreck based on demographic and ticket variables such as sex, age, and class.",
        objetivo: "Identify which factors determined survival in a maritime disaster, as a practical introduction to supervised classification.",
        resultados: [
          "Removal of variables with high missing rates, median imputation for age and fare, and encoding of sex and embarkation port.",
          "Comparison of KNN and XGBoost with an 80/20 train/validation split, and final retraining on all data.",
          "No leaderboard score or rank data; XGBoost achieved 81.46% accuracy in validation compared to 69.66% for KNN."
        ]
      }
    },
    {
      titulo: "Predicting Electric Vehicle Purchases",
      subtitulo: "Electric vehicle purchase prediction based on sociodemographic and mobility data",
      badge: "Machine Learning",
      tipo: "",
      posicion: "Validation: <strong>0.8402 ROC-AUC</strong>",
      descripcion: "Binary classification to predict whether an individual will purchase an electric vehicle based on demographic data, commuting habits, charging infrastructure, and environmental factors.",
      detalle: {
        descripcionLarga: "Binary classification to predict whether an individual will purchase an electric vehicle based on demographic data, commuting habits, charging infrastructure, and environmental factors.",
        objetivo: "Identify potential electric vehicle buyers to guide subsidies, charging infrastructure, and commercial campaigns.",
        resultados: [
          "Ordinal encoding of categorical and binary variables; the 668,665-record dataset had no missing values.",
          "XGBoost model with positive class weighting and an 80/20 hold-out validation split on training data.",
          "Result: no classification leaderboard data; achieved 0.90 accuracy and 0.8402 ROC-AUC in validation."
        ]
      }
    }
  ]
};

/* Tags que están en español en script.js → su versión inglesa.
   El color se sigue calculando con el nombre original. */
const TAGS_EN = {
  "Análisis exploratorio (EDA)": "Exploratory analysis (EDA)",
  "Visualización de datos": "Data visualization",
  "Estadística": "Statistics",
  "Análisis de correlaciones": "Correlation analysis",
  "Machine Learning supervisado": "Supervised Machine Learning",
  "Clasificación supervisada": "Supervised classification",
  "Clasificación": "Classification",
  "Automatización": "Automation"
};

/**
 * Determina el idioma inicial:
 * Por defecto, SIEMPRE español ('es').
 * Solo usa elección previa si el usuario cambió expresamente en la sesión activa.
 */
function obtenerIdiomaInicial() {
  try {
    const sesion = sessionStorage.getItem("portfolio_lang");
    if (sesion === "es" || sesion === "en") {
      return sesion;
    }
  } catch (e) {
    // Si sessionStorage no está disponible
  }

  // Por defecto, español
  return "es";
}

let idiomaActual = obtenerIdiomaInicial();

/**
 * Obtiene la traducción para una clave dada.
 * Si falta en el idioma actual (o en español), se muestra la inglesa como fallback.
 */
function t(clave) {
  const actual = typeof idiomaActual !== "undefined" ? idiomaActual : (window.idiomaActual || "es");
  if (TRANSLATIONS[actual] && TRANSLATIONS[actual][clave] !== undefined) {
    return TRANSLATIONS[actual][clave];
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
  const actual = typeof idiomaActual !== "undefined" ? idiomaActual : (window.idiomaActual || "es");
  document.documentElement.lang = actual;

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
    const esEn = actual === "en";
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
 * Cambia el idioma actual, guarda en almacenamiento y actualiza la vista.
 */
function cambiarIdioma(nuevoIdioma) {
  if (nuevoIdioma !== "es" && nuevoIdioma !== "en") return;
  idiomaActual = nuevoIdioma;
  window.idiomaActual = nuevoIdioma;
  try {
    sessionStorage.setItem("portfolio_lang", nuevoIdioma);
    localStorage.setItem("portfolio_lang", nuevoIdioma);
  } catch (e) {
    // Ignorar si el almacenamiento está restringido
  }
  aplicarTraducciones();
  // Hook definido en script.js: vuelve a pintar carruseles y modal abierto
  if (typeof alCambiarIdioma === "function") {
    alCambiarIdioma();
  } else if (typeof window.alCambiarIdioma === "function") {
    window.alCambiarIdioma();
  }
}

// Exposición global para garantizar compatibilidad total
window.TRANSLATIONS = TRANSLATIONS;
window.CONTENIDO_EN = CONTENIDO_EN;
window.TAGS_EN = TAGS_EN;
window.idiomaActual = idiomaActual;
window.t = t;
window.cambiarIdioma = cambiarIdioma;
window.aplicarTraducciones = aplicarTraducciones;
