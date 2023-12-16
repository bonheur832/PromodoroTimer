const startEl=document.getElementById("start");
const stopEl=document.getElementById("stop");
const resetEl=document.getElementById("reset");
const timerEl=document.getElementById("timer");
//creating start function 

let interval;
let timeLeft=300;// 300 equal to 5mins

function  updateTimer(){

let minutes=Math.floor(timeLeft / 60);
let seconds= timeLeft % 60;
let formattedTime = `${minutes.toString().padStart(2, "0")}  : ${seconds.toString().padStart(2,"0")}`;

 timerEl.innerHTML = formattedTime;
}

function startTimer(){
    interval=setInterval(()=>{ 
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            alert(`time's up`);
            timeLeft = 15;
            updateTimer();
        }
    },1000)
}
function stopTimer(){
    clearInterval(interval);
}
 
function resetTimer(){
    
    clearInterval(interval);
    timeLeft = 300;
    updateTimer();
}

 startEl.addEventListener("click", startTimer);
 stopEl.addEventListener("click", stopTimer);
 resetEl.addEventListener("click", resetTimer);
 