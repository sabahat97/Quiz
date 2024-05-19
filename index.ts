import inquirer from "inquirer";
const quiz = await inquirer.prompt(
    [{
        name :"UserInput",
        type:"string",
        message:" what is the capital of france"
    }]
)

function quizz(quiz1: string, question : string){
    if (quiz.UserInput.toLowercase === question.toLowerCase){
        console.log("correct")
    }else {console.log('wrong answer , try again')}
}
quizz('what is the capital of france?' , 'paris')