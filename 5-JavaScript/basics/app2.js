const things = ['AAAA', "Diego Ramos"];

things.push('Hola mundo'); //add to end
things.push(23);

console.log(things);
console.log(things.pop()); //pop: remove from end
console.log(things);

things.unshift("first"); //unshift: add to start
console.log(things);
things.shift();         //shift: remove from start
console.log(things);

console.log("-----------------------------");

let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];

c = a.concat(b);

console.log(c.includes(4));

console.log(a.indexOf(3));

c.reverse();
console.log(c);

console.log("-----------------------------");

let colors = ['red', 'blue', 'yellow', 'black', 'white', 'violet', 'green'];
console.log(colors);

let coolColors = colors.slice(3, 5); //includes 3,4, not 5
console.log(coolColors);

console.log(colors.slice(-3)); //show last three elements

console.log("Colors: " + colors);
let copyColors = colors;
console.log("Copycolors: " + copyColors);

colors.push("orange");
console.log("Colors: " + colors);

console.log("Copycolors: " + copyColors); // The changes made at Colors are updated in copyColors too. 
// They are the same referenc the're pointing at same space memory




















