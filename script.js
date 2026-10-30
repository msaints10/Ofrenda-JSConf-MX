// Enciende o apaga el altar de Crazy al pulsar el botón.
const boton = document.querySelector('#boton-vela');
const ofrenda = document.querySelector('#ofrenda');

boton.addEventListener('click', () => {
  const encendida = ofrenda.classList.toggle('encendida');
  boton.setAttribute('aria-pressed', String(encendida));
  boton.textContent = encendida ? 'Apagar la vela' : 'Encender la vela';
});
