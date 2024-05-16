
//login

document.getElementById("login").addEventListener('click', ()=>{
    const loginArea = document.getElementById('loginArea')
    const Background = document.getElementById('frost')
    const clock = document.getElementById('clockArea')

    loginArea.style.transitionDuration = "1s"
    loginArea.style.padding = "100px"
    loginArea.style.opacity = "0"
    clock.style.animation = "clockFadeOut 0.5s ease-in"
    clock.style.opacity = "0"

    setTimeout(()=>{Background.style.backgroundColor = 'black'}, 500)

    setTimeout(()=>{window.open("home.html", "_self")}, 1000)
})

//clock

const timeSet = () => {
    //gets local time
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let session = "AM"

    // Calculates Time
    if (hh == 0) {hh = 12}

    if (hh > 12) {
        hh = hh - 12
        session = "PM"
    }

    hh = (hh < 10) ? "0" + hh : hh //Note to self: ? is for condition statment
    mm = (mm < 10) ? "0" + mm : mm
    ss = (ss < 10) ? "0" + ss : ss

    let time = hh + ':' + mm + ':' + ss + " " + session

    document.getElementById('clock').innerText = time
    let t = setTimeout(()=>{timeSet()}, 1000)
}

timeSet()



