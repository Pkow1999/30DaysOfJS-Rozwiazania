//1
    const arr = []
    for(i = 0; i < 10; ++i){
        arr.push(i)
    }
    console.log(arr)
    arr.splice(0)
    i = 0
    while(i < 10){
        arr.push(i)
        ++i
    }
    console.log(arr)
    arr.splice(0)
    i = 0
    do{
        arr.push(i)
        ++i
    }while(i < 10)
    console.log(arr)
    arr.splice(0)
//2
    for(i = 10; i > 0; --i){
        arr.push(i)
    }
    console.log(arr)
    arr.splice(0)
    i = 10
    while(i > 0){
        arr.push(i)
        --i
    }
    console.log(arr)
    arr.splice(0)
    i = 10
    do{
        arr.push(i)
        --i
    }while(i > 0)
    console.log(arr)
    arr.splice(0)
//3
    let n = 5
    for(i = 0; i < n; ++i){
        arr.push(i)
    }
    console.log(arr)
    arr.splice(0)
//4
    let height = 7
    for(i = 1; i <= height ; ++i){
        console.log('#'.repeat(i))
    }
//5
    for(i = 0; i <= 10; ++i){
        console.log(`${i} x ${i} = ${i * i}`)
    }
//6
    console.log(`i\ti^2\ti^3`)
    for(i = 0; i <= 10; ++i){
        console.log(`${i}\t${i ** 2}\t${i ** 3}`)
    }
//7
    for(i = 0; i <= 100; ++i){
        if(i%2 == 0)
            console.log(i)
    }
//8
    for(i = 0; i <= 100; ++i){
        if(i%2 != 0)
            console.log(i)
    }
//9
    console.log("Prime:")
    for(i = 2; i <= 100; ++i)
    {
        prime = true
        for(j = 2; j <= Math.floor(i/2); ++j)
        {
            if((i%j) === 0)
            {
                prime = false
                break;
            }
        }   
        if(prime === true)
            console.log(i)
    }
//10
    let sum = 0
    for(i = 0; i <= 100; ++i)
        sum += i
    console.log(`The sum of all numbers from 0 to 100 is`, sum)
//11
    let sumOfEven = 0
    let sumOfOdd = 0
    for(i = 0; i <= 100; ++i){
        if(i%2 != 0)
            sumOfOdd += i
        else
            sumOfEven += i
    }
    console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdd}.`)
//12
    const arraySum = [0, 0]
    for(i = 0; i <= 100; ++i){
        if(i%2 != 0)
            arraySum[1] += i
        else
            arraySum[0] += i
    }
    console.log(arraySum)
//13
    const randomArray = []
    for(i = 0; i < 5; ++i){
        randomArray.push(Math.random())
    }
    console.log(randomArray)
//14
    const randomUniqueArray = []
    while(randomUniqueArray.length < 5){
        let randomValue = Math.random()
        if(!randomUniqueArray.includes(randomValue))
            randomUniqueArray.push(randomValue)
    }
    console.log(randomUniqueArray)
//15
    let id = ''
    for(i = 0; i < 6; ++i){
        let randomChar = String.fromCharCode(Math.floor(Math.random() * (127 - 33)) + 33)
        id += randomChar
    }
    console.log(id)
