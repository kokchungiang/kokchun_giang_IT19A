
// skapar en variabel som heter name och tilldelar det värdet "Kokchun"
let name = "Kokchun" // sträng
let age = 16 // heltal, int 

console.log(`Hej ${name} du är ${age} år gammal`)

// if-sats - att göra val
if (age >= 18){
    console.log("Du är vuxen")
} else {
    console.log("Du är barn")
}

// DOM - Document Object Model
let text = document.querySelector("#text")
text.innerHTML = `${name} är ${age} år gammal`

// skapar variabler för p-taggarna
let mult = document.querySelector("#multiplikation")
let div = document.querySelector("#division")
let add = document.querySelector("#addition")
let sub = document.querySelector("#subtraktion")

mult.innerHTML = `multiplikation`
div.innerHTML = `division`
add.innerHTML = `addition`
sub.innerHTML = `subtraktion`

// skapar variabel för knappen
let button = document.querySelector("#knapp")

// lägger till en eventlyssnare till knappen
button.addEventListener("click", math)

function math(event){
    console.log("math-funktionen körs")

    let num1 = parseFloat(document.querySelector("#number1").value)
    let num2 = parseFloat(document.querySelector("#number2").value)

    add.innerHTML = `${num1}+${num2}=${num1+num2} `
    sub.innerHTML = `${num1}-${num2}=${num1-num2} `
    mult.innerHTML = `${num1}*${num2}=${num1*num2} `
    div.innerHTML = `${num1}/${num2}=${num1/num2} `


}