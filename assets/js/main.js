// JSnack

// Snack 1: L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.

var btnSnack1 = document.getElementById('startSnack1');

btnSnack1.addEventListener('click',
  function () {

    var parola1 = document.getElementById('addParola1').value.trim();
    var parola2 = document.getElementById('addParola2').value.trim();

      if ( parola1.length > parola2.length ) {
        parolaLunga = 'La parola più lunga è ' + parola1;
        document.getElementById('risultatoSnack1').innerHTML = parolaLunga;
      } else if ( parola1.length < parola2.length ) {
        parolaLunga = 'La parola più lunga è ' + parola2;
        document.getElementById('risultatoSnack1').innerHTML = parolaLunga;
      } else {
        parolaLunga = 'Le parole sono lunghe uguali';
        document.getElementById('risultatoSnack1').innerHTML = parolaLunga;
      }

  }
)

                // >>>>>>>>> ESERCIZIO SENZA ADDEVEVENTLISTER  <<<<<<<<<<<<
                //
                // var parola1 = prompt('Inserisci parola uno').trim();
                // console.log(parola1);
                //
                // var parola2 = prompt('Inserisci parola due').trim();
                // console.log(parola2);
                //
                // var parolaLunga = funzioneParola(parola1, parola2);
                //
                // console.log(parolaLunga);
                //
                // function funzioneParola (par1, par2) {
                //   if ( par1.length > par2.length ) {
                //     return 'La parola più lunga è ' + parola1;
                //   } else if ( par1.length < par2.length ) {
                //     return 'La parola più lunga è ' + parola2;
                //   } else {
                //     return ('Le parole sono lunghe uguali');
                //   }
                //
                // }

// Snack 2: Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

var btnSnack2 = document.getElementById('startSnack2');

btnSnack2.addEventListener('click',
  function () {
    var numero = document.getElementById('addNumero').value;
    console.log('Numero Inserito: ' + numero);

      var ris = '';
      if (numero % 2 == 0) {
        ris = numero + ' è pari';
      } else {
        ris = ++numero + ' ' + '"Il numero era dispari"';
      }

      var risultato = ris;
      document.getElementById('risultatoSnack2').innerHTML = risultato;
      console.log(risultato);

  }
)

            // >>>>>>>>> ESERCIZIO SENZA ADDEVEVENTLISTER  <<<<<<<<<<<<
            // var numero = parseInt( prompt('Inserisci un numero'));
            // console.log('Numero Inserito: ' + numero);
            //
            // var risultato = oddEven();
            // console.log(risultato);
            //
            // function oddEven(num) {
            //   var ris = '';
            //
            //   if (numero % 2 == 0) {
            //     ris = numero + ' è pari';
            //   } else {
            //     ris = numero + 1 + ' "Il numero era dispari"';
            //   }
            //
            //   return ris;
            // }


// Snack 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati.

var btnSnack3 = document.getElementById('startSnack3');

btnSnack3.addEventListener('click',
  function() {
    var nomi = ['Michele', 'Fabio', 'Roberto'];

    var cognomi = ['Forghieri', 'Papagni', 'Marazzini'];

    var lista = [];

    for ( var i = 0; i < 5; i++) {

      lista.push(nomi[Math.floor(Math.random() * nomi.length)] + ' ' + cognomi[Math.floor(Math.random() * cognomi.length)]);

    }
      document.getElementById('risultatoSnack3').innerHTML = lista;
      console.log(lista);
  }
)

            // >>>>>>>>> ESERCIZIO SENZA ADDEVEVENTLISTER  <<<<<<<<<<<<
            // var nomi = ['Michele', 'Fabio', 'Roberto'];
            //
            // var cognomi = ['Forghieri', 'Papagni', 'Marazzini'];
            //
            // var lista = [];
            //
            // for ( var i = 0; i < 5; i++) {
            //
            //   lista.push(nomi[Math.floor(Math.random() * nomi.length)] + ' ' + cognomi[Math.floor(Math.random() * cognomi.length)]);
            //
            // }
            //
            //   console.log(lista);


// JSnack Bonus (non visto insieme e quindi assolutamente facoltativo)
// Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) e fai la somma di tutti gli elementi che sono in posizione dispari. Prova prima senza funzione e poi con funzione.
// 
// var numInt = [1, 4, 2, 15, 120, 17, 3];
// var sum = '';
//
// if (numInt[i] % 2 != 0) {
//     sum = sum + numInt[i];
//     console.log(sum) + ('risultato');
// }
