//Random Background
const html = document.getElementById('select')

const backgrounds = {
    0: `https://media.tenor.com/zvWdei-o1BIAAAAC/anime.gif`,
    1: `https://media.tenor.com/WeOTjjZcq38AAAAC/starry-night-anime.gif`,
    2: `https://media.tenor.com/N_HSAkMojIQAAAAC/rain-aesthetic.gif`,
    3: `https://media.tenor.com/5QafrcxHajYAAAAC/chill.gif`,
    4: `https://media.tenor.com/G6vtPJTsK-wAAAAC/nature-background.gif`,
    5: `https://media.tenor.com/pkMEpw5eAeQAAAAC/anime-cute.gif`,
    6: `https://media.tenor.com/lUB3g_rJaP8AAAAC/bar-passing-by.gif`,
    7: `https://media.tenor.com/ztGoY5OcV0IAAAAC/pixel-rain.gif`,
    8: `https://media.tenor.com/_EYOsX_1CUkAAAAC/pixel-night.gif`,
    9: `https://media.tenor.com/h3buZLXLmTYAAAAC/upwhatcreek-nicefalls.gif`,
    10: `https://media.tenor.com/O8s7IYl66iUAAAAC/pixel-art.gif`,
    11: `https://media.tenor.com/CwZDbX7DvR8AAAAd/pixel-sakura.gif`,
    12: `https://media.tenor.com/S5JPPusvSgUAAAAd/aesthetic-purple.gif`,
    13: `https://media.tenor.com/x52VWEVAKkQAAAAC/chill-city.gif`,
    14: `https://media.tenor.com/hNI_PyLniVUAAAAd/vaporwave-aesthetic.gif`
}

var randomnbum = Math.floor(Math.random() * 15)

console.log(randomnbum)

if ( randomnbum == 0 ) {
    html.style.backgroundImage = "url('" + backgrounds[0] + "')"
} else if ( randomnbum == 1) {
    html.style.backgroundImage = "url('" + backgrounds[1] + "')"
} else if ( randomnbum == 2) {
    html.style.backgroundImage = "url('" + backgrounds[2] + "')"
} else if ( randomnbum == 3) {
    html.style.backgroundImage = "url('" + backgrounds[3] + "')"
} else if ( randomnbum == 4) {
    html.style.backgroundImage = "url('" + backgrounds[4] + "')"
} else if ( randomnbum == 5) {
    html.style.backgroundImage = "url('" + backgrounds[5] + "')"
} else if ( randomnbum == 6) {
    html.style.backgroundImage = "url('" + backgrounds[6] + "')"
} else if ( randomnbum == 7) {
    html.style.backgroundImage = "url('" + backgrounds[7] + "')"
} else if ( randomnbum == 8) {
    html.style.backgroundImage = "url('" + backgrounds[8] + "')"
} else if ( randomnbum == 9) {
    html.style.backgroundImage = "url('" + backgrounds[9] + "')"
} else if ( randomnbum == 10) {
    html.style.backgroundImage = "url('" + backgrounds[10] + "')"
} else if ( randomnbum == 11) {
    html.style.backgroundImage = "url('" + backgrounds[11] + "')"
} else if ( randomnbum == 12) {
    html.style.backgroundImage = "url('" + backgrounds[12] + "')"
} else if ( randomnbum == 13) {
    html.style.backgroundImage = "url('" + backgrounds[13] + "')"
} else if ( randomnbum == 14) {
    html.style.backgroundImage = "url('" + backgrounds[14] + "')"
}

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

    setTimeout(()=>{
        Background.style.backgroundColor = 'black'
    }, 500)

    setTimeout( ()=>{
        window.open("site.html", "_self")
    }, 1000)
})

//random 


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



