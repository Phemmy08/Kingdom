
  // Accordion Toggle
  document.querySelectorAll('.grade-header, .support-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.display === 'block';
      document.querySelectorAll('.grade-content, .support-content').forEach(c => c.style.display = 'none');
      content.style.display = isOpen ? 'none' : 'block';
    });
  });

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  let started = false;

  function animateCounters() {
    const trigger = window.innerHeight * 0.85;
    counters.forEach(counter => {
      const top = counter.getBoundingClientRect().top;
      if (top < trigger && !started) {
        started = true;
        const target = +counter.dataset.target;
        const speed = 200;
        const update = () => {
          const current = +counter.innerText;
          const increment = Math.ceil(target / speed);
          if (current < target) {
            counter.innerText = current + increment;
            setTimeout(update, 20);
          } else {
            counter.innerText = target;
          }
        };
        update();
      }
    });
  }

  window.addEventListener('scroll', animateCounters);
  window.addEventListener('load', animateCounters);









  function animateCurriculum() {
    const items = document.querySelectorAll('.curriculum-text, .curriculum-image');
    const triggerPoint = window.innerHeight * 0.85;

    items.forEach(el => {
      if (el.getBoundingClientRect().top < triggerPoint) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', animateCurriculum);
  window.addEventListener('load', animateCurriculum);
