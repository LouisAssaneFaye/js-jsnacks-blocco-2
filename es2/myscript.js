let n = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let indovinato = false ;

while (indovinato === false) {
    const numeroUtente = parseInt(prompt("Type a number"));
    if ( n == numeroUtente) {
        indovinato = true;

    }
    if ( n < numeroUtente) {
        console.log('Il numero da indovinare è maggiore');
        
    }
    if ( n > numeroUtente) {
        console.log('Il numero da indovinare è minore');
        
    }
}

