//1
	class Animal {
		constructor(
			name,
			age,
			color,
			legs,
		) {
			this.name = name
			this.age = age
			this.color = color
			this.legs = legs	
		}
		getSound(){
			return `I'm an animal!`
		}
	}
	console.group("Zadanie 1")
		const animal = new Animal("Andrzej", 15, "Czarny", 4)
		console.log(animal)
		console.log(animal.getSound())
	console.groupEnd()
//2
	class Cat extends Animal {
		constructor(
			name,
			age,
			color,
			legs = 4,
			race
		){
			super(name, age, color, legs)
			this.race = race
		}
		getSound(){
			return 'Miau miau'
		}
	}
	class Dog extends Animal {
		constructor(
			name,
			age,
			color,
			legs = 4,
			race
		){
			super(name, age, color, legs)
			this.race = race
		}
		getSound(){
			return 'Hau Hau'
		}
	}
	console.group("Zadanie 2")
		const cat = new Cat("Wojtek",12,"Pomarańczowy","Kot")
		console.log(cat)
		console.log(cat.getSound())
	console.groupEnd()