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

function StyleChange(){
    var today = new Date();
    hour = today.getHours();
    if(hour>=00 && hour<05){
        document.body.style.backgroundImage = "url(Midnight.png)";
    }
    else if(hour>=05 && hour<07){
        document.body.style.backgroundImage = "url(Sunrise.png)";
    }
    else if(hour>=07 && hour<12){
        document.body.style.backgroundImage = "url(Day.png)";
    }
    else if(hour>=12 && hour<16){
        document.body.style.backgroundImage = "url(Afternoon.png)";
    }
    else if(hour>=16 && hour<17){
        document.body.style.backgroundImage = "url(Evening.png)";
    }
    else if(hour>=17 && hour<19){
        document.body.style.backgroundImage = "url(Sunset.png)";
    }
    else if(hour>=19 && hour<=24){
        document.body.style.backgroundImage = "url(Night.png)";
    }

    if(hour>05 && hour<=17){
        document.getElementById("hours").style = "";
    }
    else if(hour>17 && hour<=05){
        document.getElementById("hours").style = "";
    }
}

var updateTime = setInterval(getTime, 1000);
var updateDate = setInterval(getDate, 1000);
var updateStyle = setInterval(StyleChange, 1000);
