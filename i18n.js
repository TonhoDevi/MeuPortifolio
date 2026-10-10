/*
  Idiomas PT/EN.
  O português é o conteúdo escrito no próprio HTML: na primeira execução ele é guardado
  em `original` e só o inglês fica no dicionário. Para traduzir um texto, marque o
  elemento com data-i18n="chave" (ou data-i18n-placeholder / data-i18n-aria-label).
*/
(function () {
  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'pt';

  // Currículo por idioma. Sem arquivo em inglês, o link continua apontando para o PT.
  const CV = {
    pt: 'ct/Curriculo_Antonio_Henrique_Backend_Java.pdf',
    en: null, // ex.: 'ct/Curriculo_Antonio_Henrique_Backend_Java_EN.pdf'
  };

  const en = {
    'meta.title': 'Antonio Henrique — Backend Developer · Java &amp; Spring Boot',
    'meta.description':
      'Portfolio of Antonio Henrique Nascimento — Backend Developer focused on Java, Spring Boot, microservices and distributed systems.',

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.theme': 'Toggle light/dark theme',
    'nav.lang': 'Change language',
    'nav.menu': 'Open menu',
    'a11y.top': 'Back to top',

    'hero.badge': 'Software Engineer Jr. · Recife',
    'hero.role': 'Backend Developer · Java &amp; Spring Boot · Microservices',
    'hero.subtitle':
      'Focused on the Java and Spring Boot ecosystem, with an interest in microservices architecture, system resilience and scalable solutions. Experience as a programming teacher and enthusiast of high-performance-oriented development.',
    'hero.cta.projects': 'Explore Projects',
    'hero.cta.cv': 'Download Résumé',
    'hero.cta.contact': 'Get in Touch',

    'facts.years.num': '1.5',
    'facts.years': 'YEAR PROGRAMMING',
    'facts.students': 'STUDENTS TRAINED',
    'facts.classes': 'CLASSES TAUGHT',
    'facts.users': 'USERS IN PRODUCTION',

    'about.tag': '// 01. BACKGROUND',
    'about.title': 'About me',
    'about.p1':
      'Software Engineering student at Estácio, with experience as a developer and programming teacher. I come from different fields, including mechatronics engineering (UFPE) and financial management; when I started programming I enjoyed it so much that I decided to make it my career, and I found in backend the place where I most enjoy solving problems.',
    'about.p2':
      'My focus is backend with <strong>Java and Spring Boot</strong>: REST APIs, microservices, security, automated testing and hexagonal architecture. My goal is to grow to senior level and contribute to the Brazilian tech market.',
    'info.location': 'Location',
    'info.location.val': 'Recife, PE — Brazil',
    'info.languages': 'Languages',
    'info.languages.val': 'Portuguese (Native) · English (Advanced)',
    'info.work': 'Work model',
    'info.work.val': 'Hybrid / Remote',

    'exp.tag': '// 02. CAREER',
    'exp.title': 'Professional Experience',
    'exp.av.role': 'Junior Software Engineer',
    'exp.av.date': 'Nov 2026 – Present',
    'exp.av.meta': 'Avanade · Hybrid, Recife',
    'exp.av.li1': 'Working on full stack Java, focused on Spring Boot, in a financial-sector project.',
    'exp.fu.role': 'Programming Teacher',
    'exp.fu.date': 'Feb 2026 – Sep 2026',
    'exp.fu.li1':
      'Taught <strong>6 Java and Python classes (200+ students)</strong>, creating teaching content and practical exercises and following each student\'s individual progress.',
    'exp.fu.li2':
      'Topics: OOP, collections, Spring Boot, SQL and PostgreSQL, Hibernate, JDBC, JPA, Git, Gitflow and architecture.',
    'exp.fu.li3': 'Produced all the material: handouts, quizzes and exercise sheets.',
    'exp.bd.role': 'Software Developer',
    'exp.bd.date': 'Sep 2025 – Aug 2026',
    'exp.bd.li1':
      'Technical lead, in a team of 4 developers, for the codebase of <em>Bíblia 3D</em>, an educational Augmented Reality app published on Google Play. Defined code and architecture standards and refactored the entire codebase, which no longer worked because it was so old, to a current and more accessible version of the engine.',
    'exp.bd.li2':
      'Contributed to the backend of a <strong>public security agency</strong> system (Java, Spring Boot and PostgreSQL) that replaced patrol schedules organized over WhatsApp. In production, with 50+ users.',
    'exp.bens.role': 'Financial Manager',
    'exp.bens.meta': 'Bens Soluções Sustentáveis · UFPE Junior Enterprise · Volunteer experience',
    'exp.bens.li1': 'Financial manager of the UFPE junior enterprise, as an unpaid volunteer.',

    'edu.title': 'Education',
    'edu.se.title': 'Software Engineering',
    'edu.se.meta': 'Estácio · In progress · 3rd module',
    'edu.java.title': 'Java Academy (certificate)',
    'edu.fin.title': 'Financial Management (Technologist degree)',
    'edu.mec.title': 'Mechatronics Engineering',
    'edu.mec.meta': 'UFPE · 2020 – 2023 · Completed up to the 5th semester',

    'stack.tag': '// 03. ECOSYSTEM',
    'stack.title': 'Tech Stack &amp; Tools',
    'stack.g1': 'LANGUAGES',
    'stack.g3': 'SPRING &amp; DISTRIBUTED SYSTEMS',
    'stack.g4': 'DATABASES, INFRA &amp; PERSISTENCE',
    'stack.g5': 'TESTING, OBSERVABILITY &amp; DOCS',

    'proj.tag': '// 04. PORTFOLIO',
    'proj.title': 'Featured Projects',
    'proj.dist.type': 'STUDY PROJECT · MICROSERVICES ARCHITECTURE',
    'proj.dist.title': 'Wholesale Distributor (AtlasTT)',
    'proj.dist.desc':
      'Microservices study project in a layered architecture: 7 Spring Boot services with Eureka and API Gateway, role-based JWT authentication, atomic stock deduction with compensation, resilient calls (OpenFeign + Resilience4j), notifications via RabbitMQ and metrics with Prometheus and Grafana. Angular frontend and 55 unit tests.',
    'proj.dist.link': 'View Repository on GitHub',
    'proj.bank.type': 'EDUCATIONAL PROJECT · HEXAGONAL ARCHITECTURE',
    'proj.bank.desc':
      'Educational mini digital bank, with fictional data, in Java 21 and Spring Boot 4. Hexagonal architecture with a domain developed using TDD. Each transfer publishes an event to Kafka; the statement is built in MongoDB, with idempotency and Redis caching, and the flow is traced end to end with OpenTelemetry and Grafana. JWT authentication and Testcontainers tests.',
    'proj.tat.title': 'Tatânea Temple',
    'proj.tat.desc':
      'Homebrew compendium and character sheet system for D&amp;D 5e, used by about 15 players. REST API in Spring Boot with JWT and a Vue 3 frontend. Character sheet queries dropped from almost 3 minutes to about 4 seconds through joins, a database in the same region as the API and frontend caching (Pinia); fields, images and objects per account have limits against abuse.',
    'proj.tat.link': 'Open App',
    'proj.tat.private': 'Private code',
    'proj.tat.note': 'First access may take up to 1 min',
    'proj.cq.type': 'FULL STACK · EDUCATION',
    'proj.cq.desc':
      'Interactive programming-learning platform with learning paths, autograders and an XP and achievements progression system.',
    'proj.rent.type': 'BACKEND · REST API',
    'proj.rent.desc':
      'REST API for managing properties, tenants and rental contracts, with delinquency control and payment history. Documented with Swagger/OpenAPI.',
    'proj.escala.type': 'SYSTEM IN PRODUCTION',
    'proj.escala.title': 'Shift Scheduling',
    'proj.escala.desc':
      'REST API for managing the operational schedules of a public security agency, replacing organization over WhatsApp. Used by 50+ members.',
    'proj.escala.note': 'Private (Institutional)',
    'proj.bib.type': 'PUBLISHED PRODUCT · 10K+ DOWNLOADS',
    'proj.bib.title': 'Bíblia 3D (Augmented Reality)',
    'proj.bib.desc':
      'Educational Augmented Reality app available on Google Play. Complete architecture restructuring and ongoing technical support.',

    'contact.tag': '// 05. CONNECT',
    'contact.title': 'Let\'s work together?',
    'form.name': 'YOUR NAME',
    'form.email': 'YOUR EMAIL',
    'form.message': 'MESSAGE',
    'form.name.ph': 'e.g. Maria Silva',
    'form.email.ph': 'youremail@domain.com',
    'form.message.ph': 'Describe the proposal or project...',
    'form.send': 'Send Message',
    'contact.side.title': 'Direct Channels',
    'contact.side.desc': 'Open to conversations about projects, collaborations and technical classes.',
    'footer': '&copy; 2026 Antonio Henrique Nascimento. Recife, PE — Brazil.',

    // Textos usados pelo script.js (validação e e-mail)
    'err.name': 'Name is too short.',
    'err.email': 'Invalid email.',
    'err.message': 'Message must be at least 10 characters long.',
    'mail.subject': 'Contact via Portfolio — ',
    'mail.name': 'Name',
    'mail.email': 'Email',
    'mail.message': 'Message',
  };

  const pt = {
    'err.name': 'Nome muito curto.',
    'err.email': 'E-mail inválido.',
    'err.message': 'Mensagem precisa de ao menos 10 caracteres.',
    'mail.subject': 'Contato via Portfólio — ',
    'mail.name': 'Nome',
    'mail.email': 'E-mail',
    'mail.message': 'Mensagem',
  };

  const dictionaries = { pt, en };
  const root = document.documentElement;
  const descriptionMeta = document.querySelector('meta[name="description"]');

  // Guarda o português que está no HTML, uma única vez.
  pt['meta.title'] = document.title;
  pt['meta.description'] = descriptionMeta ? descriptionMeta.content : '';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    pt[el.dataset.i18n] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    pt[el.dataset.i18nPlaceholder] = el.getAttribute('placeholder');
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    pt[el.dataset.i18nAriaLabel] = el.getAttribute('aria-label');
  });

  let current = DEFAULT_LANG;

  function t(key) {
    return dictionaries[current][key] ?? pt[key] ?? key;
  }

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'pt' || saved === 'en') return saved;
    } catch (e) {}
    return (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : DEFAULT_LANG;
  }

  function setLang(lang, persist) {
    current = lang;
    root.lang = lang === 'en' ? 'en' : 'pt-BR';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.innerHTML = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
    });

    // <title> aceita entidades no dicionário, então passa por um elemento temporário.
    const tmp = document.createElement('textarea');
    tmp.innerHTML = t('meta.title');
    document.title = tmp.value;
    if (descriptionMeta) descriptionMeta.content = t('meta.description');

    const cvLink = document.getElementById('cvLink');
    if (cvLink) cvLink.setAttribute('href', './' + (CV[lang] || CV.pt));

    document.querySelectorAll('#langToggle [data-lang]').forEach((el) => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {}
    }
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  window.i18n = { t, setLang, getLang: () => current };

  setLang(detectLang(), false);

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => setLang(current === 'pt' ? 'en' : 'pt', true));
  }
})();
