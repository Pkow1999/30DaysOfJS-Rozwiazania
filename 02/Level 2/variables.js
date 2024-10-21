//1
let text= "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(text)
//2
text = "Love is not patronizing and charity isn't about pity, it is about love.\
Charity and love are the same -- with charity you give love, so don't just give\
money but reach out your hand instead."
console.log(text)
//3
console.log(typeof '10' == 10)
console.log(typeof parseInt('10') == typeof 10)
//4
console.log(parseFloat("9.8") == 10)
console.log(Math.ceil(parseFloat("9.8")) == 10)
//5
let p = "python"
let j = "jargon"
console.log(p.search('on') != -1 && j.search('on') != -1)
//6
console.log("I hope this course is not full of jargon.".search("jargon") != -1)
//7
console.log(Math.floor(Math.random() * 101))
//8
console.log(Math.floor(50 + Math.random() * 51))
//9
console.log(Math.floor(Math.random() * 256))
//10
text = 'JavaScript'
console.log(text.charAt(Math.floor(Math.random() * text.length)))
//11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")
//12
text = 'You cannot end a sentence with because because because is a conjunction'
let begin = text.indexOf('because')
let end = text.lastIndexOf('because') + 'because'.length - begin
console.log(text.substr(begin, end))
console.log(text.substring(begin, text.lastIndexOf('because') + 'because'.length))
