/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

/* ── NAV compact on scroll ── */
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('compact', window.scrollY > 80);
}, { passive: true });
