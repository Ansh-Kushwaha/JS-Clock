function getTime(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    let period = "AM";
    //Set (AM/PM)
    if(hours>=12){
        period = "PM";
    }

    //Set to 12-hour formet
    hours = hours > 12 ? hours%12 : hours;

    //Adding 0 to time<10
    hours = hours < 10 ? "0"+hours : hours;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    seconds = seconds < 10 ? "0"+seconds : seconds;

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
}

function getDate(){
    var today = new Date();

    const date = today.getDate();
    const month = today.toLocaleString("default", {month: "long"});
    const year = today.getFullYear();
    const day = today.toLocaleString("default", {weekday: "short"});

    document.querySelector(".date").innerHTML = date;
    document.querySelector(".month").innerHTML = month;
    document.querySelector(".year").innerHTML = year;
    document.querySelector(".day").innerHTML = day;
}

var update = setInterval(getTime, 1000);
var update = setInterval(getDate, 1000);
