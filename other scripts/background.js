const html = document.getElementById('bg')
const vibebg = [
    "https://media1.tenor.com/m/14bCIHlB418AAAAd/i-sjust-hh-level.gif",
    "https://media.tenor.com/lUB3g_rJaP8AAAAC/bar-passing-by.gif",
    "https://media1.tenor.com/m/zvWdei-o1BIAAAAC/anime.gif",
    "https://media1.tenor.com/m/44wCgDGOYOAAAAAd/blackcat.gif",
    "https://media1.tenor.com/m/OXyGMl4fGboAAAAC/animate-background-technology.gif",
    "https://media1.tenor.com/m/YdROcIDBlWAAAAAd/gi%CC%87f-wallpaper.gif",
    "https://media1.tenor.com/m/S5JPPusvSgUAAAAd/aesthetic-purple.gif",
    "https://media1.tenor.com/m/wIa91mot0tAAAAAd/pixel-city-chill.gif",
    "https://media1.tenor.com/m/2Te4Was8UnUAAAAd/pixel-city-discord-decoration.gif",
    "https://media1.tenor.com/m/AMiRtkQbzSIAAAAd/pink-anime.gif",
    "https://media1.tenor.com/m/x52VWEVAKkQAAAAC/chill-city.gif",
    "https://media1.tenor.com/m/_w1waTUsQyYAAAAC/pixel.gif"
]
const num = Math.floor(Math.random() * vibebg.length)
html.style.backgroundImage = `url("${vibebg[num]}")`