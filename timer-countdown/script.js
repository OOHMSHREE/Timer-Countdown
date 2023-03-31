let daysCount = document.querySelector('#days')
let hoursCount = document.querySelector('#hours')
let minutesCount = document.querySelector('#minutes')
let secondsCount = document.querySelector('#seconds')


function countDown(params) {
    let currentYear = new Date().getFullYear();
    let newYear = new Date(`January 01 ${currentYear +1} 00:00:00`);

    let currentDate = new Date()

    let different = newYear-currentDate
    let days = Math.floor(different/1000/60/60/24)
    let hours = Math.floor((different/1000/60/60)%24)
    let minutes = Math.floor((different/1000/60)%60)
    let seconds = Math.floor((different/1000)%60)

    daysCount.innerHTML=days<10?"0"+days : days;
    hoursCount.innerHTML=hours<10?"0"+hours : hours;
    minutesCount.innerHTML=minutes<10?"0"+minutes : minutes;
    secondsCount.innerHTML=seconds<10?"0"+seconds : seconds;


    // console.log(days)
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);
}


setInterval(countDown, 1000);
