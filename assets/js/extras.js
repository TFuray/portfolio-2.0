function displayDate(){
    let currentTime = new Date()
    let month = currentTime.getMonth()+1
    let day = currentTime.getDate()
    let year = currentTime.getFullYear()
    document.getElementById('date').innerText = `${month} / ${day} / ${year}`
}

displayDate()