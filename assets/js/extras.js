function displayDate() {
    let currentTime = new Date()
    let month = currentTime.getMonth() + 1
    let day = currentTime.getDate()
    let year = currentTime.getFullYear()
    let hour = currentTime.getHours()
    let minute = currentTime.getMinutes()

    if (minute < 10){
        minute = `0${minute}`
    }

    if (hour <= 12){
    document.getElementById(
        "date"
    ).innerText = `${hour}:${minute}a.m. ${month} / ${day} / ${year}`
    }else{
            document.getElementById(
                "date"
            ).innerText = `${hour-12}:${minute}p.m. ${month} / ${day} / ${year}`
    }
}

displayDate()
