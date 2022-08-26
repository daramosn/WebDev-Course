const scores = [1, 2, 3, 4, 5, 6, 10];

const last = scores.pop();

scores.reverse();

const [first, second, ...everyoneElse] = scores;

// With objects 

const user = {
    name: 'Diego',
    lastName: 'Ramos',
    id: 1023999999,
    born: 1992,
    city: 'Bogotá',
    country: 'Colombia'
}

const { lastName, country, id, born: birthDay, died: deathYear = 'N/A' } = user;