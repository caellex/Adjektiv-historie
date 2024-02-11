let textDisplay = document.getElementById('textBox')
let LOW = document.getElementById('listContainer')
let valueDecider1 = getMath();
const randomValue = Math.floor(Math.random() * 10+1);


function loadGame(){

    document.getElementById('mainContainer').innerHTML = /*HTML*/`
    <div> random value:</div><div id="random"></div>
<div id=textBox class="text">The _____ fox ran towards the _____ sheep at an unbelievable speed.</div>
<button onclick="getMath()">Generate Random Value</button>
<div id="listContainer">
<div id="wordOne" class="wordChoice">Word One</div>
<div id="wordTwo" class="wordChoice">Word Two</div>
<div id="wordThree" class="wordChoice">Word Three</div>
<div id="wordFour" class="wordChoice">Word Four</div>
<div id="wordFive" class="wordChoice">Word Five</div>
<div id="wordSix" class="wordChoice">Word Six</div>
<div id="wordSeven" class="wordChoice">Word Seven</div>
<div id="wordEight" class="wordChoice">Word Eight</div>
<div id="wordNine" class="wordChoice">Word Nine</div>
<div id="wordTen" class="wordChoice">Word Ten</div>
</div>
`
}

function moveWord(){
textDisplay.innerHTML = `
<div id="random"> random value:</div>
The ${wordOne} fox ran towards the ${wordTwo} sheep at an unbelievable speed.
`
}

function getMath(){
    const randomValue = Math.floor(Math.random() * 10+1)
    document.getElementById('random').innerHTML = randomValue;
    valueDecider1 = randomValue;
}