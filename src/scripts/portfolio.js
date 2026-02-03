/* JSON de datos de carga de la info de los proyectos */

const portfolio = {
  portafolio: {
    tituloHead: "Mi Portafolio: De la Idea al Código",
    subtitulo: "De la inspiración al diseño funcional.",
    slogan: "Un recorrido por proyectos que combinan estética, usabilidad y estrategia digital. Cada diseño refleja mi pasión por transformar ideas en experiencias visuales claras, escalables y fáciles de usar.",
    portada: "../Assets/IMG/PROYECTOS/PORTAFOLIODQE/PotardaDQE.png",
    descripcionPRY: "Este portafolio reúne una selección de proyectos desarrollados como MVPs, prácticas profesionales y exploraciones creativas en Figma, Photoshop y prototipado web. Cada caso busca resaltar no solo el resultado final, sino también el proceso de investigación, diseño y validación detrás de cada propuesta. Mi enfoque está en crear soluciones escalables, consistentes y alineadas con las necesidades del usuario y del negocio.",

    galeria: [
      {
        img: "../Assets/IMG/PROYECTOS/PORTAFOLIODQE/System-BG.png",
        titulo: "Tu Guía Visual Lista Para Usar",
        descripcion: "Un sistema que unifica colores, tipografías e iconos para mantener coherencia en todos los proyectos"
      },
      {
        img: "../Assets/IMG/PROYECTOS/PORTAFOLIODQE/System-Tipografia.png",
        titulo: "Letras Que Hablan Por La Marca",
        descripcion: "Tipografías elegidas para transmitir personalidad y mejorar la legibilidad en todos los dispositivos"
      },

      {
        img: "../Assets/IMG/PROYECTOS/PORTAFOLIODQE/Sytems-Colors-Logo.png",
        titulo: "Iconos listos para desarrolladores",
        descripcion: "Cada icono incluye su código SVG, facilitando su integración sin complicaciones."
      },
      {
        img: "../Assets/IMG/PROYECTOS/PORTAFOLIODQE/Sytems-Icons.png",
        titulo: "Colores Con Propósito",
        descripcion: "Cada icono incluye su código SVG, facilitando su integración sin complicaciones."
      },
      {
        img: "../Assets/IMG/PROYECTOS/PORTAFOLIODQE/Wireframe.png",
        titulo: "Estructura Clara Desde el Inicio",
        descripcion: "Diseños en blanco y negro que muestran la base y flujo de cada proyecto."
      },
      {
        img: "../Assets/IMG/PROYECTOS/PORTAFOLIODQE/Mokup-Dektop.png",
        titulo: "Vista Completa En Escritorio",
        descripcion: "Prototipos visuales que muestran cómo luce el proyecto en pantallas grandes."
      },
      {
        img: "../Assets/IMG/PROYECTOS/PORTAFOLIODQE/Mokup-Tablet.png",
        titulo: "Diseño Adaptado a Tablet",
        descripcion: "Experiencia visual optimizada para dispositivos intermedios."
      },
      {
        img: "../Assets/IMG/PROYECTOS/PORTAFOLIODQE/Mockup-Mobile.png",
        titulo: "Tu Proyecto En Mobile",
        descripcion: "Diseños pensados para una navegación clara y amigable en smartphones."
      },
      // ... sigue con los demás elementos de la galería
    ]
  }
};

// Obtener el id desde la URL
const id = new URLSearchParams(window.location.search).get('id');
const data = portfolio.portafolio; // <-- Aquí cambié portafolio[id] por portfolio.portafolio

// Si el proyecto existe, llenar los datos dinámicos
if (data) {
  document.getElementById('titulo-pry').textContent = data.tituloHead;
  document.getElementById('subtitulo-pry').textContent = data.subtitulo;
  document.getElementById('slogan-pry').textContent = data.slogan;
  document.getElementById('img-portada').src = data.portada;
  document.getElementById('descripcion-pry').innerHTML = data.descripcionPRY;
} else {
  document.body.innerHTML = "<h2>Proyecto no encontrado</h2>";
}

// Renderizar galería
const container = document.getElementById('cards-container');
const galeria = data.galeria;

galeria.forEach((proyecto, index) => {
  const modalId = `modal-${index}`;

  const card = document.createElement('div');
  card.className = 'col mb-4';
  card.innerHTML = `
    <div class="tooltip-term">
      <div class="card">
        <img 
          src="${proyecto.img}" 
          class="card-img-top img-to-enlarge" 
          alt="${proyecto.titulo}" 
          data-toggle="modal" 
          data-target="#${modalId}">
        <div class="card-body">
          <h5 class="card-title heading-medium cormorant">${proyecto.titulo}</h5>
        </div>
      </div>
      <span class="tooltip-text">Haz clic aquí para ampliar y descubrir más detalles.</span>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-0 text-center">
            <img src="${proyecto.img}" alt="Imagen ampliada" class="modal-img">
          </div>
          <div class="modal-body my-4">
            <h5 class="card-title heading-large cormorant bold">${proyecto.titulo}</h5>
            <p class="card-text text-large Montserrat">${proyecto.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  container.appendChild(card);
});
