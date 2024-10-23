//1
    const copyOfCountries = countries.slice()
    copyOfCountries.push("Kraj")
    console.log(copyOfCountries)
    //tyle ze to shallow copy jest - jakby to byly obiekty bardziej skomplikowane od stringow to bysmy mieli problem
    //bo modyfikacja jednego zmieni nam w obu
    console.log(countries)
//2
    const sortedCountries = countries.slice()
    sortedCountries.sort()
    console.log(sortedCountries)
//3
    const mernStack = [`MongoDB`, `Express`, `React`, `Node`]
    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
    ]
    mernStack.sort()
    webTechs.sort()
    console.log(mernStack)
    console.log(webTechs)
//4 - robilem to w Level 2 - 7
    const arrayWithLand = []
    for(const country of countries){
        if(country.match(/land/gi) != null)
            arrayWithLand.push(country)
    }
    if(arrayWithLand.length > 0)
        console.log(arrayWithLand)
    else
        console.log("All these countries are without land")
//5 - robilem to w Level 2 - 9
    const nameMaxLength = ['', 0]
    for(const country of countries){
        if(country.length > nameMaxLength[1]){
            nameMaxLength[1] = country.length
            nameMaxLength[0] = country
        }
    }
    console.log(nameMaxLength[0])
//6 - TO JEST TO SAMO CO 4
//7 - BYLO w LEVEL 2 - 10
    const countryOnly4Characters = []
    for(const country of countries){
        if(country.length === 4){
            countryOnly4Characters.push(country)
        }
    }
    console.log(countryOnly4Characters)
//8
    const twoOrMoreWords = []
    for(const country of countries){
        if(country.match(/\s/gi) != null){
            twoOrMoreWords.push(country)
        }
    }
    console.log(twoOrMoreWords)
//9 - wszystko w porzadku... TYLKO ONE JUZ OD SAMEGO POCZATKU SA SKAPITALIZOWANE
    const reversedCountries = []
    countries.reverse()
    for(const country of countries){
        reversedCountries.push(country.charAt(0).toUpperCase() + country.slice(1, country.length))
    }
    console.log(reversedCountries)