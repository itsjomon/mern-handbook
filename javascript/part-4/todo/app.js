// Todo App (only JS)

let todo = [];

let req = prompt("What would you like to do?");

while(true) {
    if (req == "quit") {
        console.log("OK, YOU QUIT THE APP");
        break;
    }
    if (req == "list") {
        console.log("**********");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("**********");
    } 
    else if (req == "add") {
        let task = prompt("please enter a new todo");
        todo.push(task);
        console.log("task added");
    }
    else if (req == "delete") {
        let idx = prompt("Enter index of todo to delete");
        todo.splice(idx, 1);
        console.log("task deleted");
    }
    else {
        console.log("Unknown request. Please enter add, list, delete, or quit.");
    }


    req = prompt("What would you like to do?");
}