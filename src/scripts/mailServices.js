const buttons = document.querySelectorAll('.boton-servicio');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const service = button.getAttribute('data-service');
    const email = 'desinguxduque@gmail.com';

    const subject = encodeURIComponent(`Interés en tu servicio de ${service}`);
    const body = encodeURIComponent(
`Hola Alejandra Duque,

Espero que te encuentres muy bien.

Te escribo porque estoy interesado en contratar el servicio de ${service} que ofreces. He revisado tu portafolio y creo que tu estilo encaja perfecto con lo que necesito para mi proyecto.

Me gustaría saber más detalles sobre el proceso, tiempos y costos, y cómo podríamos empezar a trabajar juntos.

Quedo atento a tu respuesta.

Muchas gracias por tu tiempo.

Saludos cordiales,  
[Tu nombre]`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}&tf=1`;
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    // Abrir Gmail en nueva pestaña
    window.open(gmailUrl, '_blank');

    // Como respaldo, abrir mailto después de un par de segundos
    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
    }, 2000);
  });
});
