const p = document.querySelector('p');

// setTimeout(() => {
//     p.innerText = 'LOLOLOLOLOLOLOLOL'
// }, 3000);
// setTimeout(() => {
//     p.innerHTML += ' Hello world!'
// }, 4000);
// setTimeout(() => {
//     p.innerHTML = '<b> Im a kitty </b>'
// }, 5000);

const input = document.querySelector('input');

input.type = 'color'
// input.setAttribute('type', 'password');

p.style.backgroundColor = 'yellow';

const h2 = document.querySelector('h2');

// h2.classList.toggle('border');  --> toggle= add or remove
// h2.classList.toggle('purple');

const newH3 = document.createElement('h3');

newH3.innerText = 'Hello, Im a new h3!';

document.body.appendChild(newH3);

p.append('AAAAAAAAAAA');
p.prepend('BBBBBBBBBBB');

////////////////////////////////

const firstLi = document.querySelector('li');

firstLi.parentElement.removeChild(firstLi);