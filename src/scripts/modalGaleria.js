document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modalImagen');
    const modalImg = document.getElementById('imagenModal');

    $('#modalImagen').on('show.bs.modal', function (event) {
      const trigger = event.relatedTarget;
      const src = trigger.getAttribute('data-src');
      modalImg.setAttribute('src', src);
    });
  });