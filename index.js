const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function reset() {
  cats.length = 0;
  cats.push('Milo', 'Otis', 'Garfield');
}

reset();
cats.push("Ralph");
console.log(cats);


reset();
cats.unshift ("Bob");
console.log(cats);


reset();
cats.shift ();
console.log(cats);

reset();
cats.slice ("Broom");
console.log(cats);

reset ();
cats.pop
console.log (cats);


reset();
cats.shift;
console.log(cats);

