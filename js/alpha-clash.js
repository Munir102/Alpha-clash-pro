function playContinue() {
    const alphabet = getARandomAlphabet();
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setbackgroundColotById(alphabet);
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    playContinue();
}