let horas = document.getElementById('horas')
let min = document.getElementById('minutos')
let seg = document.getElementById('segundos')

let relogio = setInterval(function time () {
    let dateToday = new Date();
    let  hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10)  hr = '0' + hr;

    if (mn < 10) mn = '0' + mn;

    if (s < 10)  s = '0' + s;

    horas.textContent = hr;
    min.textContent = mn;
    seg.textContent = s;

})