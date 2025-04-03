const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "wonder woman", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_Heros = [...marvel_heros,...dc]
//console.log(all_new_Heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another = another_array.flat(Infinity)
console.log(real_another);




console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({name: "Ayush"}));

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3));


