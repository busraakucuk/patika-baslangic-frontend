let name = prompt("lütfen isminizi giriniz", "");

document.getElementById("myName").innerText = name;

function timer(){
    let time = new Date();
    let minutes = time.getMinutes()<10 ? "0" +  time.getMinutes() : time.getMinutes()
    let seconds = time.getSeconds()<10 ? "0" + time.getSeconds() : time.getSeconds();
    document.getElementById("myClock").innerText = time.getHours() + ":" + minutes + ":" +  seconds;

    setTimeout(() => {timer()}, 1000);

}

timer();