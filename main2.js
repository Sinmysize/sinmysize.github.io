const sideMenu              = document.getElementById("sidemenu")
const sideOpenButton        = document.getElementById("sideopen")
const sideBlur              = document.getElementById("sideblur")
const sideOpenButton2       = document.getElementById('openside')
const timeArea              = document.getElementById('timearea')
const homeButton            = document.getElementById('home')
const aboutButton           = document.getElementById('about')
const socialsButton         = document.getElementById('socials')
const topNav                = document.getElementById('topnav')
const blurDiv               = document.getElementById("blur")

const mainArea              = document.getElementById('mainarea')
const githubRedirect        = document.getElementById('github')
const xRedirect             = document.getElementById('twitter')

const projectsButton        = document.getElementById('projectButton')
const projectsDiv           = document.getElementById('projects')
const goalsButton           = document.getElementById('goalsButton')
const goalsDiv              = document.getElementById('goals')

const aboutmeDiv            = document.getElementById('aboutme')
const aboutmeButton         = document.getElementById('aboutmeButton')
const skillsDiv             = document.getElementById('skills')
const skillsButton          = document.getElementById('skillsButton')
const achievementsDiv       = document.getElementById('achievements')
const achievementsButton    = document.getElementById('achievementsButton')
let sideOpened              = false


let time = new Date()
timeArea.innerHTML = time.toLocaleTimeString()

function changeSite(page) {

    topNav.style.height             = "0px"
    topNav.style.padding            = "0px"
    topNav.style.opacity            = '0'
    sideBlur.style.opacity          = "0"
    sideMenu.style.width            = "0px"
    sideMenu.style.border           = "none"
    sideOpenButton2.style.transform = "rotate(0deg)"
    blurDiv.style.backgroundColor   = "black"
    
    if (mainArea) {
        mainArea.style.opacity          = "0"
        mainArea.style.transform        = "translateY(-100px)"
    }

    if (xRedirect) {3
        xRedirect.style.opacity     = "0"
        xRedirect.style.transform   = "translateY(-100px)"
    }

    if (githubRedirect) {
        githubRedirect.style.opacity    = "0"
        githubRedirect.style.transform  = "translateY(-100px)"
    }

    setTimeout(() => {
        window.open(`${page}.html`, '_self')
    }, 1500)
}

sideOpenButton.addEventListener('click', () => {
    if (!sideOpened) {
        sideMenu.style.width            = "300px"
        sideMenu.style.border           = "solid 2px rgba(255, 255, 255, 0.1)"
        sideOpenButton2.style.transform = "rotate(180deg)"
        sideBlur.style.display          = "block"
        setTimeout(() => {
            sideBlur.style.opacity      = "1"
        }, 10)
        sideOpened                      = true
        return
    }

    if (sideOpened) {
        sideBlur.style.opacity          = "0"
        sideMenu.style.width            = "0px"
        sideMenu.style.border           = "none"
        sideOpenButton2.style.transform = "rotate(0deg)"
        setTimeout(() => {
            sideBlur.style.display      = "none"
        }, 500)
        sideOpened                      = false
        return
    }
})

if (
    projectsButton && projectsDiv &&
    goalsButton && goalsDiv
) {
    projectsButton.addEventListener('click', () => {
        projectsDiv.style.width             = "100%"
        projectsDiv.style.opacity           = "1"
        projectsButton.style.borderBottom   = "solid 3px white"
        goalsDiv.style.width                = "0px"
        goalsDiv.style.opacity              = "0"
        goalsButton.style.borderBottom      = "none"
    })
    
    goalsButton.addEventListener('click', () => {
        projectsDiv.style.width             = "0px"
        projectsDiv.style.opacity           = "0"
        projectsButton.style.borderBottom   = "none"
        goalsDiv.style.width                = "100%"
        goalsDiv.style.opacity              = "1"
        goalsButton.style.borderBottom      = "solid 3px white"
    })
} 

if (
    aboutmeButton &&
    aboutmeDiv &&
    skillsButton &&
    skillsDiv &&
    achievementsButton &&
    achievementsDiv
) {
    aboutmeButton.addEventListener('click', () => {
        skillsDiv.style.width                   = "0px"
        skillsDiv.style.opacity                 = "0"
        skillsButton.style.borderBottom         = "none"
        achievementsDiv.style.width             = "0px"
        achievementsDiv.style.opacity           = "0"
        achievementsButton.style.borderBottom   = "none"
        aboutmeDiv.style.width                  = "100%"
        aboutmeDiv.style.opacity                = "1"
        aboutmeButton.style.borderBottom        = "solid 3px white"
        return
    })

    skillsButton.addEventListener('click', () => {
        skillsDiv.style.width                   = "100%"
        skillsDiv.style.opacity                 = "1"
        skillsButton.style.borderBottom         = "solid 3px white"
        achievementsDiv.style.width             = "0px"
        achievementsDiv.style.opacity           = "0"
        achievementsButton.style.borderBottom   = "none"
        aboutmeDiv.style.width                  = "0px"
        aboutmeDiv.style.opacity                = "0"
        aboutmeButton.style.borderBottom          = "none"
        return
    })

    achievementsButton.addEventListener('click', () => {
        skillsDiv.style.width                   = "0px"
        skillsDiv.style.opacity                 = "0"
        skillsButton.style.borderBottom         = "none"
        achievementsDiv.style.width             = "100%"
        achievementsDiv.style.opacity           = "1"
        achievementsButton.style.borderBottom   = "solid 3px white"
        aboutmeDiv.style.width                  = "0px"
        aboutmeDiv.style.opacity                = "0"
        aboutmeButton.style.borderBottom        = "none"
        return
    })
}




if (githubRedirect && xRedirect) {
    githubRedirect.addEventListener('click', () => {
        window.open('https://github.com/Sinmysize', '_blank')
    })
    
    xRedirect.addEventListener('click', () => {
        window.open('https://x.com/sinmysize', '_blank')
    })
}



homeButton.addEventListener('click', () => {
    changeSite("home")
})

aboutButton.addEventListener('click', () => {
    changeSite("about")
})

socialsButton.addEventListener('click', () => {
    changeSite("socials")
})

setInterval(() => {
    timeArea.innerHTML = new Date().toLocaleTimeString()
}, 1000)