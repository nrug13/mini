function clock(){
    var current= new Date();
    var hour=current.getHours();
    var minute=current.getMinutes();
    var second=current.getSeconds();
    document.getElementById("hours").innerHTML=hour;
    document.getElementById("minutes").innerHTML=minute;
    document.getElementById("seconds").innerHTML=second;


}

setInterval(clock,10);