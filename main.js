const apiKey = '436133a56c9e47c49ad223825231107';

const locationInput = document.getElementById('location');
const btnBuscar = document.getElementById('btn-buscar');
const temperaturaLabel = document.getElementById('temperatura');
const descripcionLabel = document.getElementById('descripcion');
const iconoClima = document.getElementById('icono-clima');

btnBuscar.addEventListener('click', buscarDatosClima);

function buscarDatosClima() {
  const location = locationInput.value;
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&lang=es&q=${encodeURIComponent(location)}`)
    .then(response => response.json())
    .then(data => {
      const { locacion, current } = data;
      const temperatura = current.temp_c;

      temperaturaLabel.textContent = `${temperatura}°C`;
      descripcionLabel.textContent = current.condition.text;

      const codigoIcono = current.condition.icon;
      const urlIcono = `https:${codigoIcono}`;
      iconoClima.setAttribute('src', urlIcono);
      iconoClima.setAttribute('alt', current.condition.text);
    })
    .catch(error => {
      console.log('Error al obtener los datos: ', error);
    });
}
