const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr > 24) {
        hr = hr - 24;
    }

    hr = (hr < 10) ? '0' + hr : hr;

    min = (min < 10) ? '0' + min : min;
    
    s = (s < 10) ? '0' + s : s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})
