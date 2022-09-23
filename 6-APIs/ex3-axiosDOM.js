const newJoke = document.querySelector('#jokes');
const button = document.querySelector('#button');

const getDadJoke = async () => {
    const textJoke = await requestJoke();
    const newLi = document.createElement('LI');
    newLi.append(textJoke);
    newJoke.append(newLi);
};

const requestJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return 'No jokes available, sorry.'
    }
};

button.addEventListener('click', getDadJoke);
