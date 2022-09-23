const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newLi = document.createElement('li');
    newLi.innerText = input.value;
    list.append(newLi);
    input.value = '';
});

list.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
});

/////////////
const username = document.querySelector('#username');
const title = document.querySelector('#title');

username.addEventListener('input', function () {
    if (username.value == '') {
        title.innerText = 'Enter your Username';
    } else {
        title.innerText = `Welcome, ${username.value}`;
    }
});

/////

const section = document.querySelector('section');
const p = document.querySelector('p');
const button = document.querySelector('#bubble');

button.addEventListener('click', function (e) {
    e.stopPropagation();
    alert('Im a button');
})
p.addEventListener('click', function () {
    alert('Im a paragraph');
})
section.addEventListener('click', function () {
    alert('Im a section');
})