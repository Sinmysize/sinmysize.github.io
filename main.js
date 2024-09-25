const blurDiv          = document.getElementById("blur")
const background       = document.getElementById("bg")
const enterSite        = document.getElementById("entersite")
const mainPanel        = document.getElementById("mainpanel")
const mainPanelTitle   = document.getElementById("paneltitle")


const sideOpened       = false
// entering home page
enterSite.addEventListener('click', () => {
    blurDiv.style.backgroundColor   = "black"
    mainPanel.style.animation       = "fadeElementOut 1s ease-in-out"
    enterSite.style.animation       = "fadeElementOut 1s ease-out"
    mainPanelTitle.style.animation  = "fadeElementOut 1s ease-out"

    mainPanel.style.transform       = "translateY(-100px)"

    setTimeout(() => {
        mainPanel.style.display     = "none"
    }, 1000)
    setTimeout(() => {
        window.open("home.html", "_self")
    }, 1400)
})
3
document.addEventListener('keypress', (data) => {
    if (data.key == "Enter") {
        blurDiv.style.backgroundColor   = "black"
        mainPanel.style.animation       = "fadeElementOut 1s ease-in-out"
        enterSite.style.animation       = "fadeElementOut 1s ease-out"
        mainPanelTitle.style.animation  = "fadeElementOut 1s ease-out"

        mainPanel.style.transform       = "translateY(-100px)"

        setTimeout(() => {
            mainPanel.style.display     = "none"
        }, 1000)
        setTimeout(() => {
            window.open("home.html", "_self")
        }, 1400)
    }
})