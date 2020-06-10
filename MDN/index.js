const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
var insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
];
var insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
];
var insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


function result() {

    if (customName.value !== '') {
        let name = customName.value;

    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300);
        let temperature = Math.round(94);

    }

    let newStory = storyText;
    let xItem=randomValueFromArray();
    let yItem=randomValueFromArray();
    let zItem=randomValueFromArray();
    story.textContent = '';
    story.style.visibility = 'visible';
}



// random number aplications

/* var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastRezult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');


var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;


function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount == 1) {
        guesses.textContent = 'Previevs guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastRezult.textContent = 'Congratulations! You got it right!';
        lastRezult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!Game Over!!';
        setGameOver();
    } else {
        lastRezult.textContent = 'Wrong!';
        lastRezult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for (let element of resetParas) {
        element.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastRezult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
} */