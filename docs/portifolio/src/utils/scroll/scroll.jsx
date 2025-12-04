import ScrollReveal from 'scrollreveal';

export function initScrollReveal() {
  const sr = ScrollReveal({
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    reset: true,
    interval: 100,
  });

  // anima apenas os blocos principais, não cada span e div pequena
  sr.reveal('.reveal', { origin: 'top' });
}
