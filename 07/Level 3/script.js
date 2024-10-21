const userIdGenerator = () => {
    const numberOfCharacters = 7
    let id = ''
    for(i = 0; i < numberOfCharacters; ++i){
        let randomChar = String.fromCharCode(Math.floor(Math.random() * (127 - 33)) + 33)
        id += randomChar
    }
    return id
}
//console.log(userIdGenerator());

//1
    const userIdGeneratedByUser = () => {
        let numberOfCharacters = parseInt(prompt(`Number of characters:`))
        let nrOfIds = parseInt(prompt(`Number of ids:`))
        
        let ids = '\''
        for(j = 0; j < nrOfIds; ++j){
            
            for(i = 0; i < numberOfCharacters; ++i){
                let randomChar = String.fromCharCode(Math.floor(Math.random() * (127 - 33)) + 33)
                ids += randomChar
            }
            ids += '\n'
        }
        ids += '\''
        return ids;
    }
    //console.log(userIdGeneratedByUser())
//2
    function rgbColorGenerator(){
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        console.log(`rgb(${r}, ${g}, ${b})`)
    }
//3
    function arrayOfHexaColors(number){
        arr = []
        for(i = 0; i < number; ++i){
            const decNr = Math.floor(Math.random() * 16777216 )
            let hexNr = decNr.toString(16)
            if(hexNr.length < 6)
                hexNr = '0'.repeat(6 - hexNr.length) + hexNr 
            arr.push(`#${hexNr}`)
        }
        return arr
    }
//4
    const arrayOfRgbColors = number =>{
        arr = []
        for(i = 0;i < number; ++i){
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)
            arr.push(`rgb(${r}, ${g}, ${b})`)
        }
        return arr;
    }
//5
    function convertHexaToRgb(hexaColor){
        if(hexaColor.match(/#[\dabcdef]{6}/gi))
            return `rgb(${parseInt(hexaColor.slice(1,3), 16)},${parseInt(hexaColor.slice(3,5), 16)},${parseInt(hexaColor.slice(5,7), 16)})`
        return `rgb(0,0,0)`
    }
//6
    const convertRgbToHexa = rgbColor =>{
        const rgb = rgbColor.match(/\d+/gi)
        let hexValue = '#'
        for(i = 0;i < rgb.length; ++i){
            rgb[i] = Number(rgb[i]).toString(16)
            if(rgb[i].length != 2)
                rgb[i] = `0${rgb[i]}`
            hexValue += rgb[i]
        }
        return hexValue
    }
    console.log(convertRgbToHexa(`rgb(255,1,255)`))
//7
    function generateColors(type, number){
        if(type.toLowerCase() === 'hexa'){
            return arrayOfHexaColors(number)
        }
        else if(type.toLowerCase() === 'rgb'){
            return arrayOfRgbColors(number)
        }
        return
    }
//8
    const shuffleArray = (arr) => {
        const returnArray = []
        const indexes = []
        while(indexes.length < arr.length){
            let randomIndex = Math.floor(Math.random() * arr.length)
            if(!indexes.includes(randomIndex))
                indexes.push(randomIndex)
        }
        for(index of indexes){
            returnArray.push(arr[index])
        }
        return returnArray
    }
    console.log(shuffleArray([1,2,3,4,5]))
//9
    function factorial(number){
        if(number % 1 !== 0 && number > 0)
            return
        let fact = 1
        for(i = number; i > 0; i--){
            fact *= i
        }
        return fact
    }
//10
    const isEmpty = parametr => {
        switch(typeof parametr){
            case('undefined'):
            case('null'):
                return true
            case 'string':
            case 'object':
                return parametr.length ? false : true
            default:
                return false 
        }
    }
//11
    function sum(){
        let sum = 0
        for(arg of arguments){
            if(typeof arg !== 'number')
                continue;
            sum += arg
        }
        return sum
    }
//12
    const sumOfArrayItems = (arr) =>{
        let sum = 0
        if(!Array.isArray(arr))
            return 'Argument not array'
        for(value of arr){
            if(typeof value != 'number')
                return 'Item in array is not a number'
            sum += value
        }
        return sum
    }
//13
    function average(arr){
        let sum = 0
        if(!Array.isArray(arr))
            return 'Argument not array'
        for(value of arr){
            if(typeof value != 'number')
                return 'Item in array is not a number'
            sum += value
        }
        return sum / arr.length
    }
//14
    const modifyArray = (arr) => {
        if(!Array.isArray(arr))
            return 'Argument not array'
        if(arr.length < 5)
            return 'Not Found'
        arr[4] = arr[4].toUpperCase()
        return arr
    }
//15
    function isPrime(number){
        if(typeof number !== 'number' || number%1 !== 0)
            return
        prime = true
        if(number === 1)
            return false
        for(j = 2; j <= Math.floor(number/2); ++j)
        {
            if((number%j) === 0)
            {                        
                prime = false
                break;
            }
        }   
        return prime
    }
//16
    const isUnique = (arr) =>{
        if(!Array.isArray(arr))
            return 'Argument not array'
        const set = new Set(arr)
        return set.length === arr.length
    }
//17
    const sameType = (arr) =>{
        if(!Array.isArray(arr))
            return 'Argument not array'
        let type
        if(arr.length > 0)
            type = typeof arr[0]
        else return true

        for(value of arr){
            if(typeof value !== type)
                return false
        }
        return true
    }
//18
    function isValidVariable(variableName){
        if(typeof variableName !== 'string')
            return false
        const match = variableName.match(/\W/gi)
        if(match === null || match.length > 1)
            return false
        return true
    }
//19
    const sevenRandomNumbers = () => {
        arr = []
        while(arr.length < 7){
            const value = Math.floor(Math.random() * 10)
            if(!arr.includes(value))
                arr.push(value)
        }
        console.log(arr)
    }
    sevenRandomNumbers()
//20
    function reverseContries(arrayCountries) {
        if(!Array.isArray(arrayCountries))
            return
        const reverseArrayCountries = []
        for(i = arrayCountries.length - 1; i >= 0; --i){
            reverseArrayCountries.push(arrayCountries[i])
        }
        return reverseArrayCountries
    }
    console.log(reverseContries(countries))