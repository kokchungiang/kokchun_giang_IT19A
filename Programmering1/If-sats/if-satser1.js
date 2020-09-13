// skriv ett program som checkar om ett inmatat tal är pos, neg, 0 
let tal = prompt("Ange ett tal: ");

if (tal > 0){
    console.log("Talet är positivt")
} else if (tal < 0){
    console.log("Talet är negativt")
} else {
    console.log("Talet är 0")
}

// västtrafik 
// gratis 0-6
// 580kr ungdom 7-19 år 
// 775kr vuxen 20- 
let age = prompt("Ange din ålder: ")
if (age < 7){
    console.log("Du åker gratis")
} else if (age <= 19){
    console.log("Ungdomsperiodkort kostar 580kr")
} else {
    console.log("Du behöver betala 775kr för ett periodkort")
}


// Poänggränser på matteprov
// A: 35
// B: 30
// C: 25
// D: 20
// E: 15
// Mata in ditt namn och provpoäng, och få programmet att skriva ditt namn och betyg



