console.log("Hello world");
let b = 56;

console.log(b);

for (let i = 0; i <= 5; i++) {
    let random = Math.random();
    console.log("Your number is: " + random + ' ' + typeof (random));
    if (random > 0.9) {
        console.warn("The number is too high! " + random);
    }
}

console.log('--------------------------------------------------');

let a = prompt("Enter a day").toLowerCase();

switch (a) {
    case "monday":
        console.log("I hate mondays! ugh!");
        break;
    case "tuesday":
        console.log("Tuesday! ugh!");
        break;
    case "wednesday":
        console.log("Meh, it could be worse");
        break;
    case "thursday":
        console.log("meh");
        break;
    case "friday":
        console.log("niceeeeeeeeee!");
        break;

    default:
        break;
}