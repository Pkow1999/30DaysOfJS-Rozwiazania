//1
let year = Number(prompt("Enter birth year:"))
let age = new Date().getFullYear() - year
alert(`You are ${age}. ${age >= 18 ? "You are old enough to drive" : `You will be allowed to drive after ${18 - age} years.`}`)