//create a timer that counts up every 10ms

const tenMS = window.setInterval( count, 10);
//every 10sm my cb function will run

//every 10ms, i want to 

function count(){
    //setting variable to current value display on page
    let msT = document.querySelector("#msTens").textContent;
    let msH = document.querySelector("#msHundreds").textContent;
    let sO = document.querySelector("#secondOnes").textContent;
    let sT = document.querySelector("#secondTens").textContent;

    //If it's "-", we're going to set it as 0
    msT === "-" ? msT = 0 : false;
    msH === "-" ? msH = 0 : false;
    sO === "-" ? sO = 0 : false;
    sT === "-" ? sT = 0 : false;

    if (Number(msT) < 9) {
        msT++;
        document.querySelector("#msTens").textContent = msT;
    } else if (Number(msH) < 9){
        document.querySelector("#msTens").textContent = 0;
        msH++;
        document.querySelector("#msHundreds").textContent = msH;
    } else if (Number(sO) < 9) {
        document.querySelector("#msHundreds").textContent = 0;
        document.querySelector("#msTens").textContent = 0;
        sO++;
        document.querySelector("#secondOnes").textContent = sO;
    } else if (Number(sT) < 1) {
        document.querySelector("#secondTens").textContent = 1;
        document.querySelector("#msHundreds").textContent = 0;
        document.querySelector("#msTens").textContent = 0;
        document.querySelector("#secondOnes").textContent = 0;
        console.log("hi");
        document.querySelectorAll(".digit").forEach(item => item.classList.add("redDigit"))
        console.log(document.querySelectorAll(".digit"));
        clearInterval(tenMS);
        }
} 

