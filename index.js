const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);
//init push value.

function reset() {
  cats.length = 0;
  cats.push('Milo', 'Otis', 'Garfield');
}

reset();
cats.push("Ralph");
console.log(cats);
//destructivelyAppendCat

reset();
cats.unshift ("Bob");
console.log(cats);
//destructivelyPrependCat

reset();
cats.shift ();
console.log(cats);
//destructivelyRemoveLastCat

reset();
cats.slice ("Broom");
console.log(cats);
//destructivelyRemoveFirstCat

reset ();
cats.pop
console.log (cats);
//appendCat
reset();
cats.shift;
console.log(cats);
//prependCat