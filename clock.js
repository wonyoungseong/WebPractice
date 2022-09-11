const clock = document.querySelector("#clock");
function timer() {
    let now = new Date
    let time = now.toTimeString().split(" ")[0]
    let hour = time.split(":")[0]
    let min = time.split(":")[1]
    clock.innerText = `${hour}:${min}`
}
timer()
setInterval(timer,1000) 
