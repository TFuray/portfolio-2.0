function getDayName(day) {
    let ar1 = new Array(
        "Sunday",
        "Monday",
        "Tueday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    )
    return ar1[day]
}

function displayDate() {
    let currentTime = new Date()
    months = [
        "January",
        "Feburay",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    let currentMonth = currentTime.getMonth()
    let day = currentTime.getDate()
    let year = currentTime.getFullYear()
    let hour = currentTime.getHours()
    let minute = currentTime.getMinutes()
    let weekday = currentTime.getDay() - 1
    let dayName = getDayName(currentTime.getDay())

    let ampm = hour >= 12 ? "pm" : "am"
    hour = hour % 12
    hour = hour ? hour : 12
    minute = minute < 10 ? "0" + minute : minute

    let time = `${hour}:${minute} ${ampm}`
    let strMonth = months[currentMonth]
    console.log(weekday)

    document.getElementById(
        "date"
    ).innerText = `${dayName}, ${strMonth} ${weekday}, ${year} ${time}`
}

displayDate()
