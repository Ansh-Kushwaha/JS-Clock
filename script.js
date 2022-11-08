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
    //The colon & div
    document.querySelector(".colon").innerHTML = ":";
    document.querySelector(".div").innerHTML = "|"; 
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

function StyleChange(){
    var today = new Date();
    hour = today.getHours();
    if(hour>=00 && hour<04){
        document.body.style.backgroundImage = "url('img/24To4.png')";
    }
    else if(hour>=04 && hour<06){
        document.body.style.backgroundImage = "url('img/4To6.png')";
    }
    else if(hour>=06 && hour<08){
        document.body.style.backgroundImage = "url('img/6To8.png')";
    }
    else if(hour>=08 && hour<10){
        document.body.style.backgroundImage = "url('img/8To10.png')";
    }
    else if(hour>=10 && hour<12){
        document.body.style.backgroundImage = "url('img/10To12.png')";
    }
    else if(hour>=12 && hour<14){
        document.body.style.backgroundImage = "url('img/12To14.png')";
    }
    else if(hour>=14 && hour<16){
        document.body.style.backgroundImage = "url('img/14To16.png')";
    }
    else if(hour>=16 && hour<18){
        document.body.style.backgroundImage = "url('img/16To18.png')";
    }
    else if(hour>=18 && hour<20){
        document.body.style.backgroundImage = "url('img/18To20.png')";
    }
    else if(hour>=20 && hour<22){
        document.body.style.backgroundImage = "url('img/20To22.png')";
    }
    else if(hour>=22 && hour<24){
        document.body.style.backgroundImage = "url('img/22To24.png')";
    }
}

var updateTime = setInterval(getTime, 1000);
var updateDate = setInterval(getDate, 1000);
var updateStyle = setInterval(StyleChange, 1000);