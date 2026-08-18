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

  navToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    navToggle.textContent = open ? '✕' : '☰';
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      navToggle.textContent = '☰';
    });
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

  const validators = {
    name: (value) => (value.trim().length >= 2 ? '' : 'Nome muito curto.'),
    email: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : 'E-mail inválido.',
    message: (value) =>
      value.trim().length >= 10 ? '' : 'Mensagem precisa de ao menos 10 caracteres.',
  };

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

    const subject = encodeURIComponent(`Contato via Portfólio — ${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `Nome: ${nameInput.value.trim()}\nE-mail: ${emailInput.value.trim()}\n\nMensagem:\n${messageInput.value.trim()}`
    );

    window.location.href = `mailto:antoniohenriquebn@hotmail.com?subject=${subject}&body=${body}`;
  });
});
