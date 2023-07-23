let PersonName: string = "yasir khan awan"

let LcaseName: string = PersonName.toLowerCase();

console.log(LcaseName);

let UcaseName: string = PersonName.toUpperCase();

console.log(UcaseName);

let words: string[];

words = PersonName.split(" ");
let titlecaseName: string = ""

for(let i = 0; i < words.length; i++)
{
  titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
};

console.log(titlecaseName)