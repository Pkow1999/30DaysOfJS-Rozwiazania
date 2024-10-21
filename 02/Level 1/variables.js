//1
let challenge = '30 Days Of JavaScript'
//2,3
console.log(challenge,'length:',challenge.length)
//4
console.log(challenge.toUpperCase());
//5
console.log(challenge.toLowerCase());
//6,7
console.log(challenge.substring(2,challenge.length).trim())
//8
console.log(challenge.includes("Script"))
//9
console.log(challenge.split(""))
//10
console.log(challenge.split(" "))
//11
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(", "))
//12
console.log(challenge.replace("JavaScript", "Python"))
//13
console.log(challenge.charAt(15))
//14
console.log(challenge.charCodeAt(
    challenge.search('J')
))
//15
console.log(challenge.indexOf('a'))
//16
console.log(challenge.lastIndexOf('a'))
//17
let sent = 'You cannot end a sentence with because because because is a conjunction'
console.log(sent.indexOf("because"))
//18
console.log(sent.lastIndexOf("because"))
//19
console.log(sent.search("because"))
//20 
let badString = ' 30 Days Of JavaScript '
console.log(badString.trim())
//21
console.log(challenge.startsWith("3"))
//22
console.log(challenge.endsWith("t"))
//23
console.log(challenge.match(/a/gi))
//24
let str = ""
console.log(str.concat("30 Days of"," ", "JavaScript"))
//25
console.log(challenge.repeat(2))