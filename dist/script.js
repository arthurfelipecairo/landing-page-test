// Pequeno movimento de profundidade para a arte de fundo, desativado quando o usuário prefere menos animação.
const heroArt = document.querySelector('.hero-art');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroArt && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', ({ clientX, clientY }) => {
    const x = (clientX / window.innerWidth - .5) * 1.2;
    const y = (clientY / window.innerHeight - .5) * 1.2;
    heroArt.style.translate = `${x}px ${y}px`;
  }, { passive: true });
}
