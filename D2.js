/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// var numeroE11 = parseInt(prompt("Esercizio 1:Inserisci numero1"))
// var numeroE11 = parseInt(prompt("Esercizio 1:Inserisci numero2"))

// var numeroGrande

// if (numeroE11 > numeroE11) {
//   numeroGrande = numeroE11
// }
// else { numeroGrande = numeroE11 }
// console.log(`Il numero più grande fra ${numeroE11} e ${numeroE11} è il numero ${numeroGrande}`)


// /* ESERCIZIO 2
//   Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

// var numeroE21 = parseInt(prompt("Esercizio 2:Inserisci un numero per vedere se è uguale a 5!"))

// if (numeroE21 != 5) {
//   console.log("not equal")
// }


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// var numeroE31 = parseInt(prompt("Esercizio 3: inserisci un numero per controllare se è divisibile per 5"))

// if (numeroE31 % 5 == 0) {
//   console.log(`${numeroE31} è divisibile per 5`)
// } else {
//   console.log(`${numeroE31} non è divisibile per 5`)
// }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// var numeroE41 = parseInt(prompt("Esercizio 4:Inserisci un numero 1"))
// var numeroE42 = parseInt(prompt("Esercizio 4:Inserisci un numero 2"))

// var addizioneE4 = numeroE41 + numeroE42
// var sottrazioneE4 = numeroE41 - numeroE42


// if (numeroE41 == 8 || numeroE42 == 8) {
//   console.log(`uno fra i numeri ${numeroE41} e ${numeroE42} c'è 8`)
// }
// else if (addizioneE4 == 8) {
//   console.log(`addizionando ${numeroE41} e ${numeroE42} abbiamo come risultato 8`)
// }
// else if (sottrazioneE4 == 8) {
//   operazione = 2
//   console.log(`sottraendo ${numeroE41} e ${numeroE42} abbiamo come risultato 8`)
// }
// else {
//   console.log(`addizionando o sottraendo i numeri DIVERSI DA 8 : ${numeroE41} e ${numeroE42} non abbiamo come risultato 8`)
// }



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// var totalShoppingCart = parseInt(prompt("Esercizio 5:Inserisci quanto è il totale del tuo carrello!"))
// var shipping = 10;

// if (totalShoppingCart > 50) {
//   console.log(`il totale del tuo carrello è ${totalShoppingCart} è superiore a 50 quindi la spedizione ${shipping} non verrà aggiunta.`)
// } else {
//   totalShoppingCart += shipping;
//   console.log(`il totale del tuo carrello non supera il 50 quindi la spedizione: ${shipping} verrà aggiunta,totale ${totalShoppingCart}`)
// }


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// var totalShoppingCart = parseInt(prompt("Esercizio 6:Inserisci quanto è il totale del tuo carrello!"))
// var shipping = 10;

// var sconto = (totalShoppingCart * 20) / 100
// console.log(`lo sconto è di ${sconto}`)

// var totalWDiscout = totalShoppingCart - sconto
// console.log(`il totale con lo sconto è ${totalWDiscout}`)

// if (totalWDiscout > 50) {
//   console.log(`il totale del tuo carrello è ${totalWDiscout} è superiore a 50 quindi la spedizione ${shipping} non verrà aggiunta.`)
// } else {
//   totalWDiscout += shipping;
//   console.log(`il totale del tuo carrello non supera il 50 quindi la spedizione: ${shipping} verrà aggiunta, totale ${totalWDiscout}`)
// }


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// var numeroE71 = parseInt(prompt("Esercizio 7:Inserisci un numero"))
// var numeroE72 = parseInt(prompt("Esercizio 7:Inserisci un numero"))
// var numeroE73 = parseInt(prompt("Esercizio 7:Inserisci un numero"))

// var posizione1
// var posizione2
// var posizione3

// if (numeroE71 > numeroE72 && numeroE71 > numeroE73) {
//   posizione1 = numeroE71
//   if (numeroE72 > numeroE73) {
//     posizione2 = numeroE72
//     posizione3 = numeroE73
//   } else {
//     posizione2 = numeroE73
//     posizione3 = numeroE72
//   }
// } else if (numeroE72 > numeroE71 && numeroE72 > numeroE73) {
//   posizione1 = numeroE72
//   if (numeroE71 > numeroE73) {
//     posizione2 = numeroE71
//     posizione3 = numeroE73
//   } else {
//     posizione2 = numeroE73
//     posizione3 = numeroE71
//   }
// } else if (numeroE73 > numeroE71 && numeroE73 > numeroE72) {
//   posizione1 = numeroE73
//   if (numeroE72 > numeroE71) {
//     posizione2 = numeroE72
//     posizione3 = numeroE71
//   } else {
//     posizione2 = numeroE71
//     posizione3 = numeroE72
//   }
// }

// console.log(`${posizione1} ${posizione2} ${posizione3}`)



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// var inputE81 = prompt("Esercizio 8:Inserisci qualcosa")

// var input = parseInt(inputE81)
// console.log(typeof input)

// if (typeof input === "number") {
//   console.log(`il valore ${input} è un numero.`)
// } else {
//   console.log(`il valore ${input} non è un numero.`)
// }


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// var numeroE91 = prompt("Esercizio 9:Inserisci un numero per controllare se è pari o dispari")

// if (numeroE91 % 2 == 0) {
//   console.log(`${numeroE91}il numero è pari`)
// } else { console.log(`${numeroE91}il numero è dispari`) }






/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


*/

/* SCRIVI QUI LA TUA RISPOSTA */










/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto"

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();

console.log(me.skills)



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const arr = []

arr.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "10")

console.log(arr)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arr[9] = "100";
console.log(arr)









