let mainWords = ['pineapple', 'football', 'Spain', 'swim', 'novel', 'parrot'];
let hintWords = ["It's a kind of fruit", "It's a team sport", "It's a country in Europe", "It's a sport activity", "It's related to reading", "It's a bird"];
let hintWordsTwo = ["It can be sour.", "The game last for 90 minutes.", "It in Western Europe.", "You do it in the water.", "It's a type of literary work.", "If you train it, it can speak."];


let tableDiv = document.getElementById("tableDiv");
let inputLetter = document.getElementById("inputLetter");
let check = document.getElementById("check");
let hint = document.getElementById("hint");
let chooseWord = document.getElementById("chooseWord");
let tryAgain = document.getElementById("tryAgain");
let wayToGo = document.getElementById("wayToGo");
let win_text = document.getElementById("win-text");

let randomWord = Math.floor(Math.random()*mainWords.length);

let wordTable = document.createElement("table");
wordTable.setAttribute("border", "1");
wordTable.setAttribute("cellpadding", "20");
let wordTrow = document.createElement("tr");
let word = mainWords[randomWord];

for (var i = 0; i < word.length; i++) {
    let wordTD = document.createElement("td");
    wordTD.classList.add("td");
    wordTrow.appendChild(wordTD);
}
wordTable.appendChild(wordTrow);
tableDiv.appendChild(wordTable);
var td = document.getElementsByClassName("td");
console.log(word);


var letterCount = 0;

check.addEventListener("click", function(){
for (var j = 0; j < word.length; j++){
    if (inputLetter.value != word[j]){
        tryAgain.innerHTML = "Try another letter or use the hint.";
        let r = Math.floor(Math.random()*250);
        let g = Math.floor(Math.random()*250);
        let b = Math.floor(Math.random()*250);
        tryAgain.style.color = 'rgb('+ r + ',' + g + ',' + b +')';   
    }
    if (inputLetter.value.toUpperCase() == word[j] || inputLetter.value.toLowerCase() == word[j]) {
        td[j].innerHTML = inputLetter.value.toUpperCase();
        tryAgain.innerHTML = '';
        wayToGo.innerHTML = "Way to Go!!"
        letterCount++;
        let r = Math.floor(Math.random()*250);
        let g = Math.floor(Math.random()*250);
        let b = Math.floor(Math.random()*250);
        wayToGo.style.color = 'rgb('+ r + ',' + g + ',' + b +')'; 

        if (letterCount == word.length) {
            win_text.innerHTML = "You guessed the Word!!";
            tryAgain.innerHTML ='';
            let r = Math.floor(Math.random()*250);
            let g = Math.floor(Math.random()*250);
            let b = Math.floor(Math.random()*250);
            win_text.style.color = 'rgb('+ r + ',' + g + ',' + b +')'; 
        }
    } 
}
inputLetter.value = "";
});
chooseWord.addEventListener("click", function(){
    location.reload();
});

hint.addEventListener("click", function(){
for (var k = 0; k < mainWords.length; k++) {
    if (word === mainWords[k]){
        alert(hintWords[k]);
    }
    if (word === mainWords[k]) {
        alert(hintWordsTwo[k]);
    }
}
});