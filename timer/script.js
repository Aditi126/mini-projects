const startDate = new Date().getTime();
const endDate = new Date("23 May, 2025 22:51:00").getTime();

function updateTimer(){
    const now = new Date().getTime();
    const timeFinished = now - startDate;
    const timeRemaining = endDate - now;
    

    if(timeRemaining<0){
        clearInterval(timer);
        document.getElementsByClassName("widget-div")[0].innerHTML = "EXPIRED";
        document.getElementsByClassName("progress-bar")[0].style.width = "100%";
        return;
    }

    const days = Math.floor(timeRemaining / (24*60*60*1000));
    const hours = Math.floor(timeRemaining % (24*60*60*1000)/ (60*60*1000));
    const minutes = Math.floor(timeRemaining % (60*60*1000)/ (60*1000));
    const seconds = Math.floor(timeRemaining % (60*1000)/ 1000);

    document.getElementsByClassName("day-count")[0].innerHTML = days;
    document.getElementsByClassName("hour-count")[0].innerHTML = hours;
    document.getElementsByClassName("minute-count")[0].innerHTML = minutes;
    document.getElementsByClassName("second-count")[0].innerHTML = seconds;

    const totalTime = endDate - startDate;
    const percentTimePassed = (timeFinished / totalTime)*100 ;
    document.getElementsByClassName("progress-bar")[0].style.width = percentTimePassed + "%";
    }

let timer = setInterval(updateTimer, 1000);