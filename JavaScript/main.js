// Modell
let textDisplay = document.getElementById('textBox')
let LOW = document.getElementById('listContainer')
let adjectiveOne = "_____";
let adjectiveTwo = "_____";
let adjectiveThree = "_____";
let adjectiveFour = "_____";


// View
function loadGame(){

    document.getElementById('mainContainer').innerHTML = /*HTML*/`
<div id="textBox" class="text">Closing her ${adjectiveOne} ${adjectiveTwo} eyes, Ruth steps away from the ${adjectiveThree} statue and puts the ${adjectiveFour} chisel down.</div>

<div id="listContainer">
<div class="wordChoice" onclick=loadWord(this.innerHTML)>Heavy</div>
<div class="wordChoice" onclick=loadWord(this.innerHTML)>Big</div>
<div class="wordChoice" onclick=loadWord(this.innerHTML)>Tired</div>
<div class="wordChoice" onclick=loadWord(this.innerHTML)>Magical</div>
<div class="wordChoice" onclick=loadWord(this.innerHTML)>Sparkling</div>
<div class="wordChoice" onclick=loadWord(this.innerHTML)>Living</div>
<div class="wordChoice" onclick=loadWord(this.innerHTML)>Purple</div>
<div class="wordChoice" onclick=loadWord(this.innerHTML)>Tiny</div>
<div class="wordChoice" onclick=loadWord(this.innerHTML)>Gentle</div>
<div class="wordChoice" onclick=loadWord(this.innerHTML)>Silly</div>
</div>
`
}
function resetGame(){
    location.reload ()
}

// Controller ?

function loadWord(adjectiveFound){
    
    if(adjectiveOne === "_____"){
        adjectiveOne = adjectiveFound;
    }
    else if(adjectiveTwo === "_____"){
        adjectiveTwo = adjectiveFound;
    }
    else if(adjectiveThree === "_____"){
        adjectiveThree = adjectiveFound;
    }
    else if(adjectiveFour === "_____"){
        adjectiveFour = adjectiveFound;
    }

    loadGame();
    finishedWord();
}

function finishedWord(){
    if(adjectiveFour !== "_____"){
    document.getElementById('mainContainer').innerHTML = /*HTML*/ `
    <img src=Assets/girl.jpg style=height:200px;width:200px; class="fadeInSentence centerEndImage">
    <div id="textBox" class="textFinished fadeInSentence">"Closing her ${adjectiveOne} ${adjectiveTwo} eyes, Ruth steps away from the ${adjectiveThree} statue and puts the ${adjectiveFour} chisel down."</div>
    <button class="center fadeInSentence" onclick="resetGame()">Retry</button><br>
    
    `
    }
}

