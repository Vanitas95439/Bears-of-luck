window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".scroll-item");
  const centerY = window.innerHeight / 2;

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - centerY);

    const isMobile = window.innerWidth <= 600;
    const maxScale = isMobile ? 1.2 : 1;
    const minScale = 0.4;

    const scale = Math.max(
      minScale,
      maxScale - (distance / centerY) * (maxScale - minScale)
    );

    el.style.transform = `scale(${scale})`;
    el.style.opacity = scale.toFixed(3);
  });
});
