document.getElementById('emailLink').addEventListener('click', function(event) {
  event.preventDefault();

  const email = 'desinguxduque@gmail.com';
  const subject = encodeURIComponent('Quiero trabajar contigo en un nuevo proyecto creativo');
  const body = encodeURIComponent(`Hola Duque,

Estuve revisando tu trabajo y me interesa saber más sobre tus servicios de diseño. Tengo un proyecto en mente y me gustaría saber si estás disponible.

¿Podemos agendar una reunión para hablar de detalles?

Gracias de antemano.

Saludos,
[Tu nombre]`);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}&tf=1`;
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  // Abrir Gmail en una pestaña nueva
  window.open(gmailUrl, '_blank');

  // Después de 2 segundos, abrir mailto en otra pestaña (puedes cambiar el tiempo)
  setTimeout(() => {
    window.open(mailtoUrl, '_blank');
  }, 2000);
  });