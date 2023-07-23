var PersonName = "yasir khan awan";
var LcaseName = PersonName.toLowerCase();
console.log(LcaseName);
var UcaseName = PersonName.toUpperCase();
console.log(UcaseName);
var words;
words = PersonName.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
