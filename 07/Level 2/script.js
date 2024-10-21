//1
    function solveLinEquation(a,b,c){
        return
    }
//2
    function solveQuadratic(a,b,c){
        if(typeof a !== `number` || typeof b !== `number` || typeof c !== `number`)
            return 0;
        if(a === 0){
            return `INVALID`;
        }
        let delta = b ** 2 - 4 * a * c
        if(delta > 0){
            return `{${((-b + Math.sqrt(delta)) / (2 * a))}, ${((-b - Math.sqrt(delta)) / (2 * a))}}`;
        }
        else if(delta === 0){
            return `{${(-b) / (2 * a)}}`
        }
    }
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//3
    function printArray(arr){
        for(value in arr){
            console.log(value)
        }
    }
//4
    function showDateTime(){
        const date = new Date()
        
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate().toString() 
        const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1).toString() 
        const year = date.getFullYear() 
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours().toString() 
        const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString() 

        console.log(`${day}/${month}/${year} ${hour}:${minute}`)
    }
    showDateTime()
//5
    function swapValues(x, y){
        const tmp = x
        x = y
        y = x
    }
//6
    function reverseArray(arr){
        const returnArr = []
        for(value of arr){
            returnArr.unshift(value)
        }
        return returnArr
    }
    console.log(reverseArray([1, 2, 3, 4, 5]))
    console.log(reverseArray(['A', 'B', 'C']))
//7
    function capitalizeArray(arr){
        const returnArr = []
        for(value of arr){
            returnArr.push(value.toUpperCase())
        }
    }
//8
    function addItem(arr, item){
        return arr.push(item)
    }
//9
    function removeItem(arr, index){
         arr.splice(index, 1)
         return arr
    }
    console.log(removeItem([1,2,3,4,5], 0))
//10
    const sumOfNumbers = value =>{
        let sum = 0
        for(i = 0; i <= value; ++i)
            sum += i
        return sum
    }
    console.log(sumOfNumbers(4))
//11
    const sumOfOdds = value =>{
        let sum = 0
        for(i = 0; i <= value; ++i)
            if(i % 2 !== 0)
                sum +=i
        return sum
    }
//12
    const sumOfEven = value =>{
        let sum = 0
        for(i = 0; i <= value; ++i)
            if(i % 2 === 0)
                sum +=i
        return sum
    }
//13
    const evensAndOdds = value =>{
        let counterOdds = 0
        let counterEvens = 0
        for(i = 0; i <= value; ++i)
            if(i % 2 !== 0)
                ++counterOdds
            else
                ++counterEvens
        console.log(`The number of odds are ${counterOdds}.\nThe number of evens are ${counterEvens}.`)
    }
    evensAndOdds(100)
//14
    const sum = (...args) => {
        let sum = 0
        for (const element of args) {
        sum += element
        }
        return sum
    }
    console.log(sum(1, 2, 3))
    console.log(sum(1, 2, 3, 4))
//15
    const randomUserIp = () => {
        return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
    }
    console.log(randomUserIp())
//16
    const randomMacAddress = () => {
        return `${Math.floor(Math.random() * 256).toString(16)}:${Math.floor(Math.random() * 256).toString(16)}:${Math.floor(Math.random() * 256).toString(16)}:${Math.floor(Math.random() * 256).toString(16)}:${Math.floor(Math.random() * 256).toString(16)}:${Math.floor(Math.random() * 256).toString(16)}`
    }
    console.log(randomMacAddress())
//17
    const randomHexaNumberGenerator = () => {
        const decNr = Math.floor(Math.random() * 16777216 )
        let hexNr = decNr.toString(16)
        if(hexNr.length < 6)
            hexNr = '0'.repeat(6 - hexNr.length) + hexNr 
        return `#${hexNr}`
    }
    console.log(randomHexaNumberGenerator());
//18
    const userIdGenerator = () => {
        const numberOfCharacters = 7
        let id = ''
        for(i = 0; i < numberOfCharacters; ++i){
            let randomChar = String.fromCharCode(Math.floor(Math.random() * (127 - 33)) + 33)
            id += randomChar
        }
        return id
    }
    console.log(userIdGenerator());