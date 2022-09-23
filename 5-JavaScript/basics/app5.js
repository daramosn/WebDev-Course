// Methods in a variable and 'this'

const squareProperties = {
    color: 'green',
    area(num) {
        return num * num;
    },
    perimeter(num) {
        return num * 4;
    },
    message(num2) {
        console.log(`The area is ${this.area(num2)} and his color is ${this.color}!!!`);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13];

// function print(num) {
//     console.log(`The number ${num}`);
// }

// numbers.forEach(print);

numbers.forEach(function (num) {
    console.log(`The number is ${num}!!!`);
})

let doubles = numbers.map(function (result) {
    return result * 2;
});

let even = numbers.filter(n => {
    return n % 2 === 0;
})

//////////// films

let films = [
    {
        title: 'Parasite',
        year: 2019,
        score: 9.2
    },
    {
        title: 'Joker',
        year: 2019,
        score: 7.8
    },
    {
        title: 'Everything. Everywhere. All at once',
        year: 2021,
        score: 10
    },
    {
        title: 'Druk',
        year: 2020,
        score: 8
    },
    {
        title: 'Under the silver lake',
        year: 2018,
        score: 7
    },
    {
        title: 'Mustang',
        year: 2015,
        score: 8
    }
]

const goodMovies = films.filter(m => m.score > 9);
const recentMovies = films.filter(m => m.year > 2019);

const goodRecentMovies = films.filter(m => m.score > 8).map(m => m.title);

// const goodRecentMovies = films
//     .filter(m => m.score > 8)
//     .map(m => m.title);

///////////////////////// SOME - EVERY ////////////////////////////////

const grades = [9, 7.8, 8, 7.8, 7.5, 10];

const goodStudent = grades.every(grade => grade >= 7.5);

const regularStudent = grades.some(grade => grade < 8);












