// Selecciona todas las imágenes que tienen la clase "img-to-enlarge"
// Estas son las miniaturas que se mostrarán ampliadas al hacer clic
const thumbnails = document.querySelectorAll(".img-to-enlarge");

// Selecciona la imagen grande dentro del modal, que tiene la clase "modal-img"
// Esta es la imagen que se actualizará con el src de la miniatura clickeada
    const modalImage = document.querySelector(".modal-img");

    // Por cada miniatura encontrada...
    thumbnails.forEach(thumbnail => {
        // ...agrega un event listener al hacer clic
      thumbnail.addEventListener("click", () => {
        // Cuando se hace clic, cambia la imagen grande del modal
        // para que muestre la misma imagen que la miniatura
        modalImage.src = thumbnail.src;
      });
    });
