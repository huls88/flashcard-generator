var inquirer = require ("inquirer");

var Cloze = function (partial, fullText) {
    this.partial = partial;
    this.fullText = fullText;
};

inquirer.prompt([{
    type: "input",
    name: "question",
    message: "... was the first president of the United States."

}



    ]).then(function (answers) {
    console.log("answers");
});

module.exports=ClozeCard;
