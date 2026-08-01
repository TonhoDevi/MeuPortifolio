document.addEventListener('DOMContentLoaded', () => {

  // ---- SCROLL REVEAL ----
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));

  // ---- NAV SCROLL SHADOW + ACTIVE LINK ----
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const sections = document.querySelectorAll('section[id]');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    backToTop.classList.toggle('visible', window.scrollY > 400);

    let currentId = '';
    const scrollPos = window.scrollY + 160;
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        currentId = sec.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ---- MOBILE MENU ----
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    navToggle.textContent = open ? '✕' : '☰';
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.textContent = '☰';
  }));

  // ---- CONTACT FORM (mailto) ----
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
  const validators = {
    name: v => v.trim().length >= 2 ? '' : 'Nome deve ter pelo menos 2 caracteres.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Insira um e-mail válido.',
    message: v => v.trim().length >= 10 ? '' : 'Mensagem deve ter pelo menos 10 caracteres.'
  };
  [[nameInput, 'name'], [emailInput, 'email'], [messageInput, 'message']].forEach(([el, key]) => {
    el.addEventListener('blur', () => validate(el, validators[key]));
    el.addEventListener('input', () => { el.parentElement.querySelector('.error-msg').textContent = ''; });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = [
      validate(nameInput, validators.name),
      validate(emailInput, validators.email),
      validate(messageInput, validators.message)
    ].every(Boolean);
    if (!ok) return;

    const subject = encodeURIComponent('Contato via portfólio — ' + nameInput.value.trim());
    const body = encodeURIComponent(
      'Nome: ' + nameInput.value.trim() +
      '\nE-mail: ' + emailInput.value.trim() +
      '\n\nMensagem:\n' + messageInput.value.trim()
    );
    window.location.href = 'mailto:antoniohenriquebn@hotmail.com?subject=' + subject + '&body=' + body;
  });
});