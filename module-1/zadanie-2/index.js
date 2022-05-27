const prompt = require('prompt');

prompt.start();

const randomInteger = Math.floor(Math.random() * 10) + 1;

let answerIsCorrect = false;

const main = async () => {

    while (!answerIsCorrect) {

        let userAnswer = await prompt.get(['number']);
        if (parseInt(userAnswer.number) !== randomInteger) {
            console.log("Nie zgadles");
        } else {
            console.log("Zgadles");
            answerIsCorrect = true;
        }
    }
}

main();





