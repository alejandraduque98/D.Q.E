//Efecto maquina de Scribir
// Lista de palabras que se van a mostrar
const palabras = ["EXPRESA", "EVOLUCIONA", "EMOCIONA"];

 // Índice de la palabra actual en el array
let i = 0;
// Índice del carácter que se está escribiendo o borrando
let j = 0;

// Booleano que indica si estamos escribiendo (false) o borrando (true)
let eliminando = false;
 // Selecciona el elemento <span> donde se mostrará el texto
const span = document.getElementById("typed-word");

// Toma la palabra actual del array
function escribir() {
  const palabraActual = palabras[i];

  if (!eliminando) {
    // Solo escribe si aún no termina
    if (j < palabraActual.length) {
      span.textContent = palabraActual.slice(0, j + 1);// Muestra de la letra 0 hasta la j+1
      j++;
      setTimeout(escribir, 120);  // Espera 120ms antes de escribir la siguiente letra
    } else {
      // Pausa antes de borrar
      setTimeout(() => {
        eliminando = true;// Cambia a modo borrado
        escribir();// Vuelve a llamar a la función
      }, 1000);// Espera 1 segundo antes de comenzar a borrar
    }
  } else {
    if (j > 0) {
      span.textContent = palabraActual.slice(0, j - 1);// Borra una letra
      j--;
      setTimeout(escribir, 320);  // Borrado más lento (320ms por letra)
    } else {
      eliminando = false; // Cambia a modo escritura
      i = (i + 1) % palabras.length; // Pasa a la siguiente palabra, y vuelve al inicio al llegar al final
      setTimeout(escribir, 300);  // Pequeña pausa antes de escribir la nueva palabra
    }
  }
}

escribir();// Inicia el efecto al cargar la página
