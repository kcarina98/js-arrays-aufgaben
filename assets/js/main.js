// - level 1_1
const colorArr = ["red", "blue", "green"];
console.log(colorArr);

const fruitArr = ["Banane", "Apfel", "Kirsche"];
console.log(fruitArr);

const personArr = ["Carina", "25", "Klömpges"];
console.log(personArr);

// - level 1_2
console.log(fruitArr[1]);
console.log(colorArr[0]);
console.log(personArr[2]);
console.log(fruitArr[2]);
console.log(personArr[0]);

// -level 1_3
console.log(fruitArr.length);
console.log(colorArr.length);
console.log(personArr.length);

// -level 1_4
colorArr.push("yellow", "purple");
console.log(colorArr);

fruitArr.push("Birne");
console.log(fruitArr);

// -level 1_5
const lastFruit = fruitArr.pop();
console.log(fruitArr);
console.log(lastFruit);

const lastColor = colorArr.pop();
console.log(colorArr);
console.log(lastColor);

// -level 1_6
const firstPerson = personArr.shift();
console.log(personArr);
console.log(firstPerson);

// -level 1_7
fruitArr.unshift("Melone", "Kiwi");
console.log(fruitArr);

colorArr.unshift("pink", "orange");
console.log(colorArr);

// -level 1_10
const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

console.log(text.split(""));
console.log(text.split(" "));
console.log(text.split("."));
