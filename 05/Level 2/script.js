//1
    console.log(webTechs)
    console.log(countries)
//2
    let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    words = text.match(/\w+/gi)
    console.log(words)
    console.log(words.length)
//3
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    //3.1
        if(!shoppingCart.includes("Meat"))
            shoppingCart.unshift("Meat")
    //3.2
        if(!shoppingCart.includes("Sugar"))
            shoppingCart.push("Sugar")
    //3.3
        let indexOfHoney = shoppingCart.indexOf("Honey")
        if(indexOfHoney > -1)
            shoppingCart.splice(indexOfHoney, 1)
    //3.4
        let indexOfTea = shoppingCart.indexOf("Tea")
        if(indexOfTea > -1)
            shoppingCart[indexOfTea] = "Green Tea"
    console.log(shoppingCart)
//4
    if(countries.includes("Ethiopia"))
        console.log("ETHIOPIA")
    else
        countries.push("Ethiopia")
//5
    if(webTechs.includes("Sass"))
        console.log("Sass is a CSS preprocess")
    else{
        webTechs.push("Sass")
        console.log(webTechs)
    }
//6
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    const fullStack = frontEnd.concat(backEnd)
    console.log(fullStack)