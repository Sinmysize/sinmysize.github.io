
var opened = false

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
            window.open("home.html", "_self")
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
            window.open("socials.html", "_self")
            discordOpen = true
        }, 1500)
    }
})
