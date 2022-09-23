const p1 = {
    button: document.querySelector('#p1Button'),
    score: document.querySelector('#p1Score')
}
const p2 = {
    button: document.querySelector('#p2Button'),
    score: document.querySelector('#p2Score')
}

const resetBtn = document.querySelector('#reset');
const number = document.querySelector('#number');

number.value = 3;
let gameover = 0;

function updateScore(player, opponent) {
    if (!gameover) {
        player.score.innerText = parseInt(player.score.innerText) + 1;
        if (number.value == parseInt(player.score.innerText)) {
            gameover = true;
            player.score.classList.add('winner');
            opponent.score.classList.add('loser');
        }
    }
}

p1Button.addEventListener('click', function () {
    updateScore(p1, p2);
});

p2Button.addEventListener('click', function () {
    updateScore(p2, p1);
});

function reset() {
    gameover = false;
    for (let p of [p1, p2]) {
        p.score.innerText = 0;
        p.score.className = '';
    }
}

resetBtn.addEventListener('click', reset);
number.addEventListener('change', reset);
