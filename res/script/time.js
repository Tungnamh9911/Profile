
timer() 
/*lặp lại một hành động liên tục*/

function timer(){
    var date = new Date()
    var hours = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var timetest = date.getSeconds()
    var tagtime = document.querySelector("#time_span")
    if (hours < 10) {
        hours = "0" + hours
    }
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    tagtime.innerHTML = hours + ":" + min + ":" + sec
    setTimeout(timer,1000)
}

