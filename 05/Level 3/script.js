//1
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    //1.1
        ages.sort()
        console.log(ages[0], ages[ages.length - 1])
    //1.2
        let end
        let begin = ages.length/2
        if((ages.length/2) % 1 !== 0){
            end = 1
            console.log(ages.splice(begin, end))
        }else{
            end = 2
            begin -= 1
            splicedArray = ages.splice(begin, end)
            console.log((splicedArray[0] + splicedArray[1]) / 2)
        }
    //1.3
        let sumOfAges = 0
        ages.forEach(age => {sumOfAges += age})
        const averageAge = sumOfAges / ages.length
        console.log(averageAge)
    //1.4
        console.log(ages[ages.length - 1] - ages[0])
    //1.5
        Math.abs(ages[0] - averageAge) > Math.abs(ages[ages.length - 1] - averageAge) ? console.log("Min - average is bigger") : console.log("Max - average is bigger")
//1
    console.log(countries.slice(0,10))
//2
    begin = countries.length/2
    end = begin + 1
    if((begin) % 1 === 0){
        begin -= 1
    }
    console.log(countries.slice(begin, end))
//3
    begin = 0
    if((countries.length/2) % 1 !== 0){
        end = countries.length/2 + 1
    }else{
        end = countries.length/2
    }    
    console.log(countries.slice(begin, end))
    console.log(countries.slice(end, countries.length))
