
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
