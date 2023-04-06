
var opened = false

//Random Background
const html = document.getElementById('select')

const backgrounds = {
    0: `https://media.tenor.com/zvWdei-o1BIAAAAC/anime.gif`,
    1: `https://media.tenor.com/WeOTjjZcq38AAAAC/starry-night-anime.gif`,
    2: `https://media.tenor.com/N_HSAkMojIQAAAAC/rain-aesthetic.gif`,
    3: `https://media.tenor.com/5QafrcxHajYAAAAC/chill.gif`,
    4: `https://media.tenor.com/G6vtPJTsK-wAAAAC/nature-background.gif`,
    5: `https://media.tenor.com/pkMEpw5eAeQAAAAC/anime-cute.gif`
}

var randomnbum = Math.floor(Math.random() * 6)

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
}


//menu
let menu = document.getElementById('menu')
let blurA = document.getElementById("blur")

document.getElementById('menuButton').addEventListener('click', ()=> {

    if ( opened == false ) {

        menu.style.width = '250px'
        blurA.style.display = "block"

        setTimeout(()=>{
            blurA.style.opacity = "1"
        },0)

        opened = true
    } else if ( opened == true ) {

        blurA.style.opacity = "0"
        menu.style.width = '0px'
        opened = false

        setTimeout(()=>{
            blurA.style.display = "none"
        },200)
    }
    
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

// button functions

let homeOpen = false
let aboutOpen = false
let discordOpen = false

let home = document.getElementById("home")
let about = document.getElementById("about")
let discord = document.getElementById("discord")

let topBar = document.getElementById('topbar')
let anim  = document.getElementsByClassName("anim")[0]
let anim2 = document.getElementsByClassName('anim')[1]
let siteBG = document.getElementById("sitebg")

home.addEventListener('click', ()=> {
    if (homeOpen == true) {
        return
    } else if (homeOpen == false) {

        topBar.style.animation = "FadeOutTopBar 1.5s ease-in-out"
        anim.style.opacity = '0'
        anim2.style.opacity = '0'
        siteBG.style.animation = "siteClose 0.5 ease-in-out"
        siteBG.style.backgroundColor = "black"
        topBar.style.height = "0"
        topBar.style.opacity = "0"

        blurA.style.opacity = "0"
        menu.style.width = '0px'

        setTimeout(()=>{
            blurA.style.display = "none"
        },200)

        setTimeout(()=>{
            window.open("site.html", "_self")
            homeOpen = true
        }, 1500)
    }
})

about.addEventListener("click", ()=>{
    if (aboutOpen == true) {
        return
    } else if (aboutOpen == false) {

        topBar.style.animation = "FadeOutTopBar 1.5s ease-in-out"
        anim.style.opacity = '0'
        anim2.style.opacity = '0'
        siteBG.style.animation = "siteClose 0.5 ease-in-out"
        siteBG.style.backgroundColor = "black"
        topBar.style.height = "0"
        topBar.style.width = "0"
        topBar.style.opacity = "0"

        blurA.style.opacity = "0"
        menu.style.width = '0px'

        setTimeout(()=>{
            blurA.style.display = "none"
        },200)


        setTimeout(()=>{
            window.open("about.html", "_self")
            aboutOpen = true
        }, 1500)
    }
})

discord.addEventListener("click", ()=>{
    if (discordOpen == true) {
        return 
    } else if (discordOpen == false) {

        topBar.style.animation = "FadeOutTopBar 1.5s ease-in-out"
        anim.style.opacity = '0'
        anim2.style.opacity = '0'
        siteBG.style.animation = "siteClose 0.5 ease-in-out"
        siteBG.style.backgroundColor = "black"
        topBar.style.height = "0"
        topBar.style.width = "0"
        topBar.style.opacity = "0"

        blurA.style.opacity = "0"
        menu.style.width = '0px'

        setTimeout(()=>{
            blurA.style.display = "none"
        },200)

        setTimeout(()=>{
            window.open("discord.html", "_self")
            discordOpen = true
        }, 1500)
    }
})
