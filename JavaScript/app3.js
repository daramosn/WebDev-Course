//Dictionary

let persona = {
    name: "Diego",
    lastName: "Ramos",
    age: 30,
    handsome: true,
    2020: "nice"
};

console.log(persona.age + '!!!!');

const students = [
    {
        name: "Diego",
        lastName: "Ramos",
        age: 30
    },
    {
        name: "Pepito",
        lastName: "Ramirez",
        age: 25
    },
    {
        name: "Pepita",
        lastName: "Nieto",
        age: 20
    }
]

/////////////////////////

const arreglo = [
    ['hola', 'mundo'],
    ['sapo', 'perro', 'zapato'],
    ['Diego', 'Ramos', 'Nieto']
]

for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo[i].length; j++) {
        console.log(arreglo[i][j]);
    }
}

console.log('---------------------------');

for (const row of arreglo) {
    for (const thing of row) {
        console.log(thing);
    }
}