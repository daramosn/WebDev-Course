// Time out

setTimeout(() => {
    console.log("Hey buddy!");
}, 3000);

let id = setInterval(() => {
    console.log(`I'm an intervale ${Math.random()}`);
}, 2000);

// clearInterval(id);