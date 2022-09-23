// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const btn = document.querySelector('#btn1');


btn.onclick = function () {
    for (let i = 1; i < 152; i++) {

        const pokemon = document.createElement('div');
        const numPokemon = document.createElement('span');
        const newImg = document.createElement('img');
        newImg.src = `${url}${i}.png`;
        numPokemon.innerText = `# ${i}`;

        pokemon.style.display = 'inline-block';
        newImg.style.display = 'block';
        pokemon.style.textAlign = 'center';

        pokemon.appendChild(newImg);
        pokemon.appendChild(numPokemon);
        container.appendChild(pokemon);
    }
}

btn.ondblclick = function () {
    const div = document.querySelectorAll('div');
    div.parentElement.remove();
}

