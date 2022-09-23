const body = document.querySelector('body');

for (let i = 0; i < 20; i++) {
    const button = document.createElement('button');
    button.innerText = 'Click me';
    body.insertAdjacentElement('beforeend', button);
}

for (let i = 0; i < 10; i++) {
    const h1 = document.createElement('h1');
    h1.innerText = 'I am a h1!';
    body.insertAdjacentElement('beforeend', h1);
}

const makeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function colorize() {
    this.style.backgroundColor = makeColor();
    this.style.color = makeColor();
}

const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');
const h2s = document.querySelector;

// const input = document.querySelector('input');
// input.addEventListener('keydown', () => console.log('Keydown'));
// input.addEventListener('keyup', () => console.log('Keyup'));

const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    console.log(e.key);
    console.log(e.code);

});


for (let button of buttons) {
    button.addEventListener('click', colorize)
}

for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

