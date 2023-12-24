let updateTime = function () {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let sign = "AM"

    if (hours > 12) {
        sign = "PM"
        hours = hours - 12
    }
    else if (hours == 0) {
        hours = 12
    }

    if (minutes < 10)
        minutes = "0" + minutes

    let timeElement = document.getElementById('time')

    let text = hours + ":" + minutes + " " + sign
    if (element.innerHTML !== text)
        document.getElementById('time').innerHTML = text

    setTimeout(updateTime, 250)
}

let updateGreeting = function () {
    let greeting = "Good Evening!"

    let date = new Date()
    let hours = date.getHours()

    if (hours >= 6 && hours < 12) {
        greeting = "Good Morning!"
        document.body.className = "Morning-Wallpaper"
    }
    else if (hours >= 12 && hours < 18) {
        greeting = "Good Afternoon!"
        document.body.className = "Afternoon-Wallpaper"
    }
    else {
        document.body.className = "Night-Wallpaper"

    }

    element = document.getElementById("greeting")

    if (element.innerHTML !== greeting)
        element.innerHTML = greeting

    setTimeout(updateGreeting, 1000)
}

updateGreeting()
updateTime()

let originalInnerHtml = document.body.innerHTML
let OnClick = function (applicationName) {
    document.body.innerHTML = originalInnerHtml + `<iframe src = './Applications/${applicationName}/index.html' class = 'application'> </iframe>`
}

