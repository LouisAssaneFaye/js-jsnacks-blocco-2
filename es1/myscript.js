let array = [];
let somma = 0;
let superato50 = false;

while ( superato50 === false) {
    const n = parseInt(prompt("Type a number"));
    array.push(n);
    somma += n;
    if( somma > 50 ){
        superato50=true;
    }
}