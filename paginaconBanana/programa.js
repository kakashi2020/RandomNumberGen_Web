var button = document.getElementById("only_document");
var inputByDude = document.getElementById("the_only_input");
var resultFromFunction = document.getElementById("chosen");

button.onclick = function() {
    let randomNumber = Math.floor(Math.random() * inputByDude.value);
    resultFromFunction.innerHTML = randomNumber;
}    