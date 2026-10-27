(() => {
  const links = [...document.querySelectorAll('.capsule-part-nav a')];
  const parts = links.map(link => document.querySelector(link.hash));
  if (!links.length || parts.some(part => !part)) return;

  const highlight = id => links.forEach(link => {
    if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });

  let scheduled = false;
  const update = () => {
    scheduled = false;
    const threshold = window.innerHeight * 0.3;
    let current = parts[0];
    for (const part of parts) {
      if (part.getBoundingClientRect().top <= threshold) current = part;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      current = parts[parts.length - 1];
    }
    highlight(current.id);
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('hashchange', schedule);
  window.addEventListener('load', schedule);
  update();
})();
