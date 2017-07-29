var ClozeCard = require('./ClozeCard.js');

var BasicCard = require('./BasicCard.js');

var inquirer = require("inquirer");


inquirer.prompt([{
    name: "question",
    message: "Which flashcard would you like?",
    type: "list",
    choices: [{
        name: "Basic Flashcard"
    }, {
        name: "Cloze Flashcard"
    }]
}]).then(function(answer) {
    console.log(answer);

   if (name === "Basic Flashcard"){

   }
});
