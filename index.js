import inquirer from "inquirer";
console.log("\n \t Welcome to Your To-Do-List App \n");
let todos = [];
let condition = "true";
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What do you want to add in your Todos?",
        },
        {
            name: 'secondQuestion',
            type: "confirm",
            message: "Do you want to add more in your Todos list?",
            Default: "false",
        },
    ]);
    todos.push(addTask.firstQuestion);
    condition = addTask.secondQuestion;
    console.log(todos);
    let condition2 = "false";
    while (condition2) {
        let addTask = await inquirer.prompt([
            { name: "undefined",
                type: "null",
                message: "Nothing added in Todos"
            }
        ]);
        condition2 = addTask.undefined;
        console.log(todos);
    }
    /*if (addTask.firstQuestion === null) {
      console.log("You did not entered any task");
    } else (addTask.secondQuestion === null); {
      console.log("Nothing Added in Todos");
    }*/
}
