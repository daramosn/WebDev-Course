const btn = document.querySelector('button');
const body = document.querySelector('body');
const h2 = document.querySelector('#rgb');

btn.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`

    if (r < 50 | g < 50 | b < 50) {
        h2.style.color = 'white';
    } else {
        h2.style.color = 'black';
    }

    h2.innerText = rgb;
    body.style.backgroundColor = rgb;


});