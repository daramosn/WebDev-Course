/////////////// Promises

const fakePromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your data from ${url}`);
            }
        }, delay);
    });
}

fakePromise('lololololo.com/page1')
    .then((data) => {
        console.log(`It worked! --> ${data}`);
        return fakePromise('lololololo.com/page2');
    })
    .then((data) => {
        console.log(`It worked 2! --> ${data}`);
        return fakePromise('lololololo.com/page3');
    })
    .then((data) => {
        console.log(`It worked 3! --> ${data}`);
        return fakePromise('lololololo.com/page4');
    })
    .catch((data) => {
        console.log('Error :/');
        console.log(data);
    });

///////////////// Colors 

const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

delayColorChange('green', 1000)
    .then(() => delayColorChange('blue', 1000))
    .then(() => delayColorChange('yellow', 1000))
    .then(() => delayColorChange('cyan', 1000))
    .then(() => delayColorChange('orange', 1000))
    .then(() => delayColorChange('olive', 1000))
    .then(() => delayColorChange('violet', 1000));


//////////////// Async and await

async function makeRainbow() {
    await delayColorChange('blue', 1000);
    await delayColorChange('yellow', 1000);
    await delayColorChange('cyan', 1000);
    await delayColorChange('orange', 1000);
    await delayColorChange('olive', 1000);
    await delayColorChange('violet', 1000);
    return 'Its done';
}
