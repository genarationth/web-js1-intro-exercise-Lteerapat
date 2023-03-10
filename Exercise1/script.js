
function ChangeName() {
    let text;
    let myName = prompt("What is your name?", '');
    text = 'Hello ' + myName;
    document.getElementById("inputName").innerHTML = text;
}
