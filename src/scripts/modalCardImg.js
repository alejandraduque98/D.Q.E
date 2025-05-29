const thumbnails = document.querySelectorAll(".img-to-enlarge");
    const modalImage = document.querySelector(".modal-img");

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", () => {
        modalImage.src = thumbnail.src;
      });
    });