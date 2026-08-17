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
  }, { threshold: 0.1 });
  revealEls.forEach(el => observer.observe(el));

  // ---- NAV SCROLL & BACK TO TOP ----
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ---- MOBILE MENU ----
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    navToggle.textContent = open ? '✕' : '☰';
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.textContent = '☰';
  }));

  // ---- FORM VALIDATION & MAILTO ----
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
    name: v => v.trim().length >= 2 ? '' : 'Nome muito curto.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'E-mail inválido.',
    message: v => v.trim().length >= 10 ? '' : 'Mensagem precisa de ao menos 10 caracteres.'
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = [
      validate(nameInput, validators.name),
      validate(emailInput, validators.email),
      validate(messageInput, validators.message)
    ].every(Boolean);

    if (!ok) return;

    const subject = encodeURIComponent(`Contato via Portfólio — ${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `Nome: ${nameInput.value.trim()}\nE-mail: ${emailInput.value.trim()}\n\nMensagem:\n${messageInput.value.trim()}`
    );
    window.location.href = `mailto:antoniohenriquebn@hotmail.com?subject=${subject}&body=${body}`;
  });
});