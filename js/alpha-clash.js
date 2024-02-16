function playContinue() {
    const alphabet = getARandomAlphabet();
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setbackgroundColotById(alphabet);
}

document.addEventListener('keyup', function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabat = currentAlphabet;

    if(playerPressed === expectedAlphabat){
        // console.log("You got a point");
        // get current score
        const currentScoreElement = document.getElementById('current-score');
        const currenScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currenScoreText);

        // increase score
        const updateScore = currentScore + 1;

        // show the update score
        currentScoreElement.innerText = updateScore;

        removeBackgroundColorById(expectedAlphabat);
        playContinue();

    }else{
        // console.log('Please press correct key.');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLifeNum = parseInt(currentLifeText);

        const updateLife = currentLifeNum - 1;
        currentLifeElement.innerText = updateLife;

        if (updateLife === 0) {
            gameOver();
        }
    }
})

function play() {
    hideElementById('home-screen');
    hideElementById('score-section');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    playContinue();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('score-section');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('your-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}