// code along

let name = "Kokchun"

console.log(`Hej ${name}`)

tal1 = 3 
tal2 = 5
tal3 = 2 

let medelvarde = (tal1+tal2+tal3)/3

// avrundar till 2 decimaler
medelvarde = medelvarde.toFixed(2)

utskrift_medelvarde = `Medelvärdet av ${tal1}, ${tal2} och ${tal3} är ${medelvarde}`

// konsolutskrift
console.log(utskrift_medelvarde)

// utskrift till hemsidan
let medelvarde_text = document.querySelector("#medelvarde")

medelvarde_text.innerHTML = utskrift_medelvarde


let langd = prompt("Ange längden på rektangeln: ")
let bredd = prompt("Ange bredden på rektangeln: ")

let area = langd*bredd

let area_utskrift = `Arean på rektangeln med längd ${langd} och bredd ${bredd} är: ${area} a.e. `

let area_text = document.querySelector("#area")
area_text.innerHTML = area_utskrift

