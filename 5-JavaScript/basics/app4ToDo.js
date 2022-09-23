const toDoList = ['Waking up'];

let option = prompt("What would you like to do?");
option.toLowerCase();

while (!(option === 'q')) {
    if (option === 'list') {
        if (toDoList.length) {
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`Task ${i}: ${toDoList[i]}`);
            }
        } else {
            console.log("The list is empty!");
        }

    } else if (option === 'new') {
        let a = prompt("Enter new task:");
        toDoList.push(a);
        console.log(`*${a}* added to list`);

    } else if (option === 'delete') {
        let b = prompt("Enter the index");
        toDoList.splice(b, 1);
    }
    option = prompt("What would you like to do?");
}

