/////////////////////////////////////////////////////////// The old way

// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log('It loaded!');
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// };
// req.onerror = function () {
//     console.log('Error!');
//     console.log(this);
// };

// req.open('GET', 'https://swapi.dev/api/people/1');
// req.send();

//////////////////////////////// REQUEST

// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         console.log('Resolved!', res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log('ERROR', e);
//     });


// With a second request. Still not the better

// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         console.log('Resolved!', res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch('https://swapi.dev/api/people/2');
//     })
//     .then(res => {
//         console.log('Second req Resolved!', res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log('ERROR', e);
//     });

//////////////////// ASYNC FUNCTION

const starWarsPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1');
        const data = await res.json();
        console.log(data);

        const res2 = await fetch('https://swapi.dev/api/people/2');
        const data2 = await res2.json();
        console.log(data2);
    } catch (error) {
        console.log('ERROR!!!!', error);
    }
};

starWarsPeople();