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