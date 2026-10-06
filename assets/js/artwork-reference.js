(() => {
  const original = document.getElementById('original-artwork');
  const panel = document.querySelector('.artwork-reference');
  if (!original || !panel) return;

  const handle = panel.querySelector('.artwork-reference-handle');
  const toggle = panel.querySelector('button');
  const image = document.getElementById('artwork-reference-image');
  let position = null;
  let drag = null;

  const place = (left, top) => {
    const bounds = panel.getBoundingClientRect();
    position = {
      left: Math.max(12, Math.min(left, window.innerWidth - bounds.width - 12)),
      top: Math.max(12, Math.min(top, window.innerHeight - bounds.height - 12)),
    };
    panel.style.left = `${position.left}px`;
    panel.style.top = `${position.top}px`;
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';
  };

  const updateVisibility = () => {
    panel.hidden = original.getBoundingClientRect().bottom > 0;
    if (!panel.hidden && position) place(position.left, position.top);
  };
  new IntersectionObserver(updateVisibility).observe(original);
  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
  updateVisibility();

  panel.querySelectorAll('[data-edge]').forEach(edge => {
    let resize = null;
    edge.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      event.preventDefault();
      const bounds = panel.getBoundingClientRect();
      resize = { bounds, x: event.clientX, y: event.clientY };
      edge.setPointerCapture(event.pointerId);
    });
    edge.addEventListener('pointermove', event => {
      if (!resize) return;
      const direction = edge.dataset.edge;
      const { bounds, x, y } = resize;
      const dx = (event.clientX - x) * (direction.includes('w') ? -1 : 1);
      const dy = (event.clientY - y) * (direction.includes('n') ? -1 : 1);
      const vertical = dy * bounds.width / bounds.height;
      const horizontalEdge = direction.includes('w') || direction.includes('e');
      const delta = horizontalEdge ? dx : vertical;
      const width = Math.max(180, Math.min(640, window.innerWidth - 24, bounds.width + delta));
      panel.style.width = `${width}px`;
      const height = panel.getBoundingClientRect().height;
      place(
        direction.includes('w') ? bounds.right - width : bounds.left,
        direction.includes('n') ? bounds.bottom - height : bounds.top,
      );
    });
    const endResize = () => { resize = null; };
    edge.addEventListener('pointerup', endResize);
    edge.addEventListener('pointercancel', endResize);
    edge.addEventListener('lostpointercapture', endResize);
  });

  toggle.addEventListener('click', () => {
    const before = panel.getBoundingClientRect();
    image.hidden = !image.hidden;
    toggle.setAttribute('aria-expanded', String(!image.hidden));
    toggle.textContent = image.hidden ? 'Show' : 'Hide';
    const after = panel.getBoundingClientRect();
    place(before.right - after.width, before.top);
  });

  handle.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    const bounds = panel.getBoundingClientRect();
    drag = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    handle.setPointerCapture(event.pointerId);
  });
  handle.addEventListener('pointermove', event => {
    if (drag) place(event.clientX - drag.x, event.clientY - drag.y);
  });
  const endDrag = () => { drag = null; };
  handle.addEventListener('pointerup', endDrag);
  handle.addEventListener('pointercancel', endDrag);
  handle.addEventListener('lostpointercapture', endDrag);
})();
