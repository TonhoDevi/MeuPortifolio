document.addEventListener('DOMContentLoaded', () => {
  // =============================================================
  // SCROLL REVEAL
  // =============================================================
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((element) => observer.observe(element));

  // =============================================================
  // BOTÃO VOLTAR AO TOPO
  // =============================================================
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // =============================================================
  // MENU MOBILE
  // =============================================================
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  function setMenu(open) {
    mobileMenu.classList.toggle('open', open);
    navToggle.textContent = open ? '✕' : '☰';
    navToggle.setAttribute('aria-expanded', String(open));
  }

  navToggle.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  // =============================================================
  // TEMA CLARO / ESCURO
  // (o tema inicial já foi aplicado por um script no <head>)
  // =============================================================
  const themeToggle = document.getElementById('themeToggle');

  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });

  // =============================================================
  // VALIDAÇÃO DO FORMULÁRIO E ENVIO POR MAILTO
  // =============================================================
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  function validate(input, fn) {
    const err = fn(input.value);
    const span = input.parentElement.querySelector('.error-msg');
    span.textContent = err;
    return !err;
  }

  const { t } = window.i18n;

  const validators = {
    name: (value) => (value.trim().length >= 2 ? '' : t('err.name')),
    email: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : t('err.email'),
    message: (value) => (value.trim().length >= 10 ? '' : t('err.message')),
  };

  // As mensagens de erro já exibidas ficariam no idioma anterior.
  document.addEventListener('languagechange', () => {
    form.querySelectorAll('.error-msg').forEach((span) => {
      span.textContent = '';
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = [
      validate(nameInput, validators.name),
      validate(emailInput, validators.email),
      validate(messageInput, validators.message),
    ].every(Boolean);

    if (!isValid) {
      return;
    }

    const subject = encodeURIComponent(`${t('mail.subject')}${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `${t('mail.name')}: ${nameInput.value.trim()}\n${t('mail.email')}: ${emailInput.value.trim()}\n\n${t('mail.message')}:\n${messageInput.value.trim()}`
    );

    window.location.href = `mailto:antoniohenriquebn@hotmail.com?subject=${subject}&body=${body}`;
  });
});
