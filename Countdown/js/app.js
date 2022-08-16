function getVal() {
  console.log('test')
  getDate = document.querySelector('#date-form').value
  getTime = document.querySelector('#time-form').value

  localStorage.setItem("getDate",getDate);
  localStorage.setItem("getTime",getTime);

  window.location="countdown.html";
}

const countdown = () => {
  let getDate = localStorage.getItem("getDate")
  let getTime = localStorage.getItem("getTime") + ':00'
  let countTime = getDate + 'T' + getTime
  const countDate = new Date(countTime).getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const gapDay = Math.floor(gap / day)
  const gapHour = Math.floor((gap % day) / hour)
  const gapMinute = Math.floor((gap % hour) / minute)
  const gapSecond = Math.floor((gap % minute) / second)

  document.querySelector('.day').innerText = gapDay
  document.querySelector('.hour').innerText = gapHour
  document.querySelector('.minute').innerText = gapMinute
  document.querySelector('.second').innerText = gapSecond
}

setInterval(countdown, 1000)

