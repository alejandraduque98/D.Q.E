import ScrollReveal from 'scrollreveal';

// Inicializar ScrollReveal
const sr = ScrollReveal();

// Aplicar animación a elementos con la clase 'reveal-text'
sr.reveal('.reveal-text', {
  origin: 'bottom',     // Dirección desde la que aparece el elemento
  distance: '50px',     // Distancia que recorre el elemento durante la animación
  duration: 1000,       // Duración de la animación en milisegundos
  delay: 200,           // Retardo antes de que comience la animación
  easing: 'ease-in-out',// Función de aceleración de la animación
  reset: false          // Si es true, la animación se repetirá cada vez que el elemento entre en la vista
});