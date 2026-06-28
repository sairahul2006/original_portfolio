/* ============================================================
   PORTFOLIO SCRIPT — Sai Rahul
   ============================================================ */

/* ── Sticky nav shadow on scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

/* ── Mobile menu toggle ── */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

/* ── Skill bar animation on scroll (IntersectionObserver) ── */
const skillSection = document.getElementById('skills');
const fills = document.querySelectorAll('.skill-bar-fill');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fills.forEach(f => f.classList.add('animate'));
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });

if (skillSection) io.observe(skillSection);

/* ── Contact form feedback ── */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-submit');
  btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
  setTimeout(() => {
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    btn.style.background = '';
    this.reset();
  }, 3500);
});