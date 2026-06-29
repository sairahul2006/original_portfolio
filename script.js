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
  
  const form = this;
  const btn = form.querySelector('.btn-submit');
  const formData = new FormData(form);

  // This actually sends the data to your Formspree endpoint URL!
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // 1. Show the green "Message Sent!" UI on success
      btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
      
      // 2. Reset the form and button back after 3.5 seconds
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
        btn.style.background = '';
        form.reset();
      }, 3500);
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  })
  .catch(error => {
    alert('Oops! There was a network error. Please try again.');
  });
});