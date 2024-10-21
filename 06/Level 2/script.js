//1
    const numberOfCharacters = 12
    let id = ''
    for(i = 0; i < numberOfCharacters; ++i){
        let randomChar = String.fromCharCode(Math.floor(Math.random() * (127 - 33)) + 33)
        id += randomChar
    }
    console.log(id)
//2
    const decNr = Math.floor(Math.random() * 16777216 )
    let hexNr = decNr.toString(16)
    if(hexNr.length < 6)
        hexNr = '0'.repeat(6 - hexNr.length) + hexNr 
    console.log(`#${hexNr}`)
//3
    const rgb = [Math.floor(Math.random() * 256 ),
                Math.floor(Math.random() * 256 ),
                Math.floor(Math.random() * 256 )]
    console.log(rgb)
//4
    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
    ]
    const bigCountries = []
    for(const country of countries){
        bigCountries.push(country.toUpperCase())
    }
    console.log(bigCountries)
//5
    const arrayOfLength = []
    for(const country of bigCountries){
        arrayOfLength.push(country.length)
    }
    console.log(arrayOfLength)
//6
    const arrayOfArray = []
    for(const country of countries){
        arrayOfArray.push([
            country,
            country.slice(0, 3).toUpperCase(),
            country.length
        ])
    }
    console.log(arrayOfArray)
//7
    const arrayWithLand = []
    for(const arrayOfCountry of arrayOfArray){
        if(arrayOfCountry[0].match(/land/gi) != null)
            arrayWithLand.push(arrayOfCountry[0])
    }
    if(arrayWithLand.length > 0)
        console.log(arrayWithLand)
    else
        console.log("All these countries are without land")
//8
    const arrayWithIa = []
    for(const arrayOfCountry of arrayOfArray){
        if(arrayOfCountry[0].endsWith('ia'))
            arrayWithIa.push(arrayOfCountry[0])
    }
    if(arrayWithIa.length > 0)
        console.log(arrayWithIa)
    else
        console.log("These are countries ends without ia")
//9
    const nameMaxLength = ['', 0]
    for(const arrayOfCountry of arrayOfArray){
        if(arrayOfCountry[2] > nameMaxLength[1]){
            nameMaxLength[1] = arrayOfCountry[2]
            nameMaxLength[0] = arrayOfCountry[0] 
        }
    }
    console.log(nameMaxLength[0])
//10
    const countryOnly5Characters = []
    for(const arrayOfCountry of arrayOfArray){
        if(arrayOfCountry[2] === 5){
            countryOnly5Characters.push(arrayOfCountry[0])
        }
    }
    console.log(countryOnly5Characters)
//11
    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
    ]
    let longestWord = ''
    for(const tech of webTechs){
        if(tech.length > longestWord.length){
            longestWord = tech 
        }
    }
    console.log(longestWord)
//12
    const arrayOfArrayWebTech = []
    for(const tech of webTechs){
        arrayOfArrayWebTech.push([
            tech,
            tech.length
        ])
    }
    console.log(arrayOfArrayWebTech)
//13
    const mernStack = [`MongoDB`, `Express`, `React`, `Node`]
    let acronym = ''
    for(const mern of mernStack)
        acronym += mern.slice(0,1).toUpperCase()
    console.log(acronym)
//14
    const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    for(tech of techs){
        console.log(tech)
    }
//15
    const fruitArray = ['banana', 'orange', 'mango', 'lemon']
    const reversedFruitArray = []
    for(i = fruitArray.length - 1; i >= 0; --i){
        reversedFruitArray.push(fruitArray[i])
    }
    console.log(reversedFruitArray)
//16
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ]
    for(arrayOfTech of fullStack){
        for(tech of arrayOfTech)
            console.log(tech)
    }