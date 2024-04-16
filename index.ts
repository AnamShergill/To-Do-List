import inquirer from "inquirer";

console.log("\n \t Welcome to Your To-Do-List App \n")

let todos = [];
let condition = "true";


while(condition)
{
   let addTask = await inquirer.prompt (
  [

    { 
      name: "firstQuestion",
      type : "input",
      message:"What do you want to add in your Todos?",

    },

    {
      name: 'secondQuestion',
      type: "confirm",
      message:"Do you want to add more in your Todos list?",
      Default: "false",
    }, 
    
]
);

todos.push(addTask.firstQuestion);
condition = addTask.secondQuestion;
console.log(todos);

}

