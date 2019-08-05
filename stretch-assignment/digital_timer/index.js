function createButton(typeOfButton, styles){
    const button = document.createElement("button");
    button.classList.add(typeOfButton);
    button.textContent = typeOfButton;
    button.setAttribute("style", styles);
    return button;
}

const startButton = createButton("start", "textTransform: capitalize; margin: 10px; padding: 10px; background: lightblue; color: green;");

const resetButton = createButton("reset", "textTransform: capitalize; margin: 10px; padding: 10px; background: red; color: black; font-weight: bold");

document.querySelector(".buttons").appendChild(startButton);
document.querySelector(".buttons").appendChild(resetButton);

function count(){
    //setting variable to current value display on page
    let msT = document.querySelector("#msTens");
    let msH = document.querySelector("#msHundreds");
    let sO = document.querySelector("#secondOnes");
    let sT = document.querySelector("#secondTens");

    //If it's "-", we're going to set it as 0
    msT.textContent === "-" ? msT.textContent = 0 : false;
    msH.textContent === "-" ? msH.textContent = 0 : false;
    sO.textContent === "-" ? sO.textContent = 0 : false;
    sT.textContent === "-" ? sT.textContent = 0 : false;


    if (Number(msT.textContent) < 9) {
        msT.textContent++;
    } else if (Number(msH.textContent) < 9){
        msT.textContent = 0;
        msH.textContent++;
    } else if (Number(sO.textContent) < 9) {
        msH.textContent = 0;
        msT.textContent = 0;
        sO.textContent++;
    } else if (Number(sT.textContent) < 1) {
        sT.textContent = 1;
        msH.textContent = 0;
        msT.textContent = 0;
        sO.textContent = 0;
        document.querySelector(".digits").classList.add("redDigit");
        clearInterval(tenMS);
        }
} 

startButton.addEventListener("click", (event) => window.setInterval( count, 10));


