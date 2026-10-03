// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  highlightNavLink();
});

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===========================
// ACTIVE NAV HIGHLIGHT
// ===========================
function highlightNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

// ===========================
// TYPEWRITER EFFECT
// ===========================
const roles = [
  'CSE Engineer 💻',
  'Full Stack Developer 🌐',
  'Problem Solver 🧠',
  'Tech Enthusiast 🚀',
  'Open Source Contributor 🛠️'
];
let rIdx = 0, cIdx = 0, isDeleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
  const current = roles[rIdx];
  typeEl.textContent = isDeleting
    ? current.slice(0, --cIdx)
    : current.slice(0, ++cIdx);

  if (!isDeleting && cIdx === current.length) {
    setTimeout(() => { isDeleting = true; }, 1800);
  } else if (isDeleting && cIdx === 0) {
    isDeleting = false;
    rIdx = (rIdx + 1) % roles.length;
  }
  setTimeout(type, isDeleting ? 60 : 110);
}
type();

// ===========================
// SCROLL REVEAL
// ===========================
const reveals  = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ===========================
// CONTACT FORM
// ===========================
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('form-success').classList.add('show');
    btn.textContent = '✅ Sent!';
    e.target.reset();
    setTimeout(() => {
      document.getElementById('form-success').classList.remove('show');
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.disabled = false;
    }, 4000);
  }, 1200);
}

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
