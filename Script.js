let listaCumparaturi = ["fructe", "apa", "paine", "caiete", "crema", "cascaval", "zefir"];

// ex. 1

let sorteazaAlfabetic = listaCumparaturi.sort();
console.log(listaCumparaturi);



// ex. 2

let cautaProdus = listaCumparaturi.indexOf("cascaval");
// console.log(cautaProdus);


// ex. 3

let adaugaProdus = listaCumparaturi.push("faina");
// console.log(listaCumparaturi);


// ex. 4

let eliminaProdus = listaCumparaturi.splice(3, 1);
// console.log(eliminaProdus);


console.log(listaCumparaturi);