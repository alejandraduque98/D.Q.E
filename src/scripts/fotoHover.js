/*const fotoHover = document.getElementById('fotoHover');
const originalSrc = fotoHover.src;
const hoverSrc = 'src/Assets/IMG/FOTOS/Portafolio.jpg';

fotoHover.addEventListener('mouseenter', () => {
  fotoHover.src = hoverSrc;
});

fotoHover.addEventListener('mouseleave', () => {
  fotoHover.src = originalSrc;
});*/

const fotoHover = document.getElementById('fotoHover');
const originalSrc = 'src/Assets/IMG/FOTOS/Camara.jpg';
const hoverSrc = 'src/Assets/IMG/FOTOS/Portafolio.jpg';

fotoHover.addEventListener('mouseenter', () => {
  fotoHover.classList.add('fade-out');
  setTimeout(() => {
    fotoHover.src = hoverSrc;
    fotoHover.classList.remove('fade-out');
  }, 200); // Espera a que empiece a desvanecer
});

fotoHover.addEventListener('mouseleave', () => {
  fotoHover.classList.add('fade-out');
  setTimeout(() => {
    fotoHover.src = originalSrc;
    fotoHover.classList.remove('fade-out');
  }, 200);
});