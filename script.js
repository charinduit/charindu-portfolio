// ==========================
// CUSTOM CURSOR
// ==========================
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';

  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;

  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';

  requestAnimationFrame(animateCursor);
}

animateCursor();


// ==========================
// FORCE SAME-PAGE NAVIGATION (FIX)
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // stop weird behavior

    // Remove any chance of opening new tab
    this.removeAttribute('target');

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================
const reveals = document.querySelectorAll('.reveal');
const careerItems = document.querySelectorAll('.career-item');
const skillFills = document.querySelectorAll('.skill-fill');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars
      if (entry.target.classList.contains('skills-layout')) {
        skillFills.forEach(fill => {
          const w = fill.getAttribute('data-width');

          setTimeout(() => {
            fill.style.width = w + '%';
          }, 200);
        });
      }
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));


// ==========================
// CAREER ITEMS ANIMATION
// ==========================
const careerObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 150);
    }
  });
}, { threshold: 0.2 });

careerItems.forEach((item, i) => {
  item.style.transitionDelay = (i * 0.15) + 's';
  careerObserver.observe(item);
});
``
