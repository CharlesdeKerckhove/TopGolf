
function newTraining(){
        console.log("0");
}
function redoFailed(){
        console.log("1");
}
function redoPassed(){
        console.log("2");
}
function generalTraining(){
    location.href="training.html";
}
function settings(){
        location.href="settings.html";
}

//Text Increase
function textIncrease(){
    document.body.style.fontSize = "1.2em";
}
//Text Decrease
function textDecrease(){
    document.body.style.fontSize = "1em";
}
//Background Colour
var backgroundB = false;
function colourChange(){
    if (backgroundB == false){
    document.body.style.background = 'rgba(55,194,79,1)';
        backgroundB = true;
    }
    else{
    document.body.style.background = '#fff';
        backgroundB = false;
    }
}