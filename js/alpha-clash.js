function playContinue() {
    const alphabet = getARandomAlphabet();
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setbackgroundColotById(alphabet);
}

document.addEventListener('keyup', function handleKeyboardButtonPress(){
    console.log('Key press');
})

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    playContinue();
}