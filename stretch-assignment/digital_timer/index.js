//create a timer that counts up every 10ms

const interval = window.setInterval( count, 10);
//every 10sm my cb function will run

//every 10ms, i want to 

function count(){
    console.log("hi");
    //add 10ms
    let msT = document.getElementById("msTens").textContent;
    msT === "-" ? msT = 0 : false;

    let msH = document.getElementById("msHundreds").textContent;
    msH === "-" ? msH = 0 : false;

    let sO = document.getElementById("secondOnes").textContent;
    sO === "-" ? sO = 0 : false;

    let sT = document.getElementById("secondTens").textContent;
    sT === "-" ? sT = 0 : false;

    console.log(msT, msH, sO, sT);
    if (Number(msT) < 10) {
        msT++;
        document.getElementById("msTens").textContent = msT;
    } else if (Number(msH) < 10){
        document.getElementById("msTens").textContent = 0;
        msH++;
        document.getElementById("msHundreds").textContent = msH;
    } else if (Number(sO) < 10) {
        document.getElementById("msHundreds").textContent = 0;
        sO++;
        document.getElementById("secondOnes").textContent = sO;
    } else if (Number(sT) < 10) {
        document.getElementById("secondOnes").textContent = 0;
        sT++;
        document.getElementById("secondTens").textContent = sT;

    }

    
}
