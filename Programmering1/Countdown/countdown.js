const dateInput = document.querySelector(".datepicker-input");
const displayDays = document.querySelector(".display")
const title = document.querySelector(".title")
const textEvent = document.querySelector(".event")

let datePicked;
let today = new Date();
const DAY = 1000 * 60 * 60 * 24;


console.log(today)

dateInput.addEventListener("change", e =>{
    datePicked = new Date(e.target.value)
    let time = datePicked.getTime() - today.getTime()

    let days =  Math.round(time/DAY)
    days = Math.ceil(days);
    displayDays.innerHTML = days;
  
    title.innerHTML = `Dagar till ${textEvent.value}`
  
    e.target.value = "";
})