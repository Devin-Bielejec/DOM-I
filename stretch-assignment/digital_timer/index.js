//create a timer that counts up every 10ms

const tenMS = window.setInterval( count, 10);
//every 10sm my cb function will run

//every 10ms, i want to 

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

    console.log(msT.textContent, msH.textContent, sO.textContent, sT.textContent);

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
        document.querySelectorAll(".digit").forEach(item => item.classList.add("redDigit"))
        clearInterval(tenMS);
        }
} 

