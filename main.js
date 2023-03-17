//Random Background
const html = document.getElementById('select')

const backgrounds = {
    0: `https://media.tenor.com/zvWdei-o1BIAAAAC/anime.gif`,
    1: `https://media.tenor.com/WeOTjjZcq38AAAAC/starry-night-anime.gif`,
    2: `https://media.tenor.com/N_HSAkMojIQAAAAC/rain-aesthetic.gif`,
    3: `https://media.tenor.com/5QafrcxHajYAAAAC/chill.gif`
}

var randomnbum = Math.floor(Math.random() * 4)

console.log(randomnbum)

if ( randomnbum == 0 ) {
    html.style.backgroundImage = "url('" + backgrounds[0] + "')"
} else if ( randomnbum == 1) {
    html.style.backgroundImage = "url('" + backgrounds[1] + "')"
} else if ( randomnbum == 2) {
    html.style.backgroundImage = "url('" + backgrounds[2] + "')"
} else if ( randomnbum == 3) {
    html.style.backgroundImage = "url('" + backgrounds[3] + "')"
}

//login

document.getElementById("login").addEventListener('click', ()=>{
    const trueUser = "Sinmysize"
    const truePass = "sinnamon"

    const usernameInput = document.getElementById('user').value
    const passwordInput = document.getElementById('pass').value

    if ( usernameInput == trueUser && passwordInput == truePass) {
        const loginArea = document.getElementById('loginArea')
        const Background = document.getElementById('frost')
        const clock = document.getElementById('clockArea')

        loginArea.style.transitionDuration = "1s"
        loginArea.style.padding = "100px"
        loginArea.style.opacity = "0"
        Background.style.animation = "fadeOut 0.5s ease-in"
        clock.style.animation = "clockFadeOut 0.5s ease-in"
        clock.style.opacity = "0"

        setTimeout(()=>{
            Background.style.backgroundColor = 'black'
        }, 500)

        setTimeout( ()=>{
            window.open("/html/site.html", "_self")
        }, 1000)
    }
})

//random 

document.getElementById('forgotPass').addEventListener('mouseover', ()=>{
    document.getElementById('forgotPass').innerHTML = "The Username is Sinmysize"
})

document.getElementById('forgotPass').addEventListener('click', ()=>{
    document.getElementById('forgotPass').innerHTML = "The Password is sinnamon"
})

//clock

function timeSet() {
    //gets local time
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let session = "AM"

    // Calculates Time
    if (hh == 0) {
        hh = 12
    }

    if (hh > 12) {
        hh = hh - 12
        session = "PM"
    }

    hh = (hh < 10) ? "0" + hh : hh //Note to self: ? is for condition statment
    mm = (mm < 10) ? "0" + mm : mm
    ss = (ss < 10) ? "0" + ss : ss

    let time = hh + ':' + mm + ':' + ss + " " + session

    document.getElementById('clock').innerText = time
    let t = setTimeout(()=>{
        timeSet()
    }, 1000)
}

timeSet()



