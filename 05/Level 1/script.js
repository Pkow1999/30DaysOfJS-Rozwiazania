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
    
    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
    ]
//1
    const emptyArray = []
//2
    const moreThanFiveElementsArray = [1,2,3,4,5,6]
//3
    console.log(countries.length)
//4
    console.log(`first item: ${countries[0]}, last item: ${countries[countries.length - 1]}, middle item: ${countries[Number.parseInt(countries.length / 2)]}`)
//5
    const mixedDataType = [false, 1, 2.5, `3`, [4,5,6], null]
    console.log(mixedDataType.length)
//6
    const ages = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
//7
    console.log(ages)
//8
    console.log(ages.length)
//9
    console.log(`${ages[0]} ${ages[ages.length - 1]} ${ages[Number.parseInt(ages.length / 2)]}`)
//10 - wiem ale nie chce mi sie
    for(i = 0; i < ages.length; ++i){
        console.log(ages[i])
    }
//11
    for(i = 0; i < ages.length; ++i){
        console.log(`${ages[i].replace(ages[i].charAt(0), String.fromCharCode(ages[i].charCodeAt(0) - 32))}`)
    }
//12
    console.log(`${ages.slice(0,ages.length - 2).join(', ')} and ${ages[ages.length - 1]} are big IT companies.`)
//13
    const company = "Samsung"
    const indexOfCompany = ages.indexOf(company)
    if(indexOfCompany > -1)
        console.log(ages[indexOfCompany])
    else
        console.log("Company does not exist")
//14
    const filteredCompanies = []
    for(i = 0; i < ages.length; ++i){
        const matchArray = ages[i].match(/o/gi)
        if(matchArray != null && matchArray.length > 1)
            filteredCompanies.push(ages[i])
    }
    console.log(filteredCompanies)

    console.log(ages)
//15
    console.log(ages.sort())
//16
    console.log(ages.reverse())
//17
    console.log(ages.slice(0,3))
//18
    console.log(ages.slice(ages.length - 3,ages.length))
//19
    console.log(ages.slice(ages.length/2, ages.length/2 + 1))
//20
    console.log(ages.shift())
//21
    let end
    let begin = ages.length/2
    if((ages.length/2) % 1 !== 0){
        end = 1
    }else{
        end = 2
        begin -= 1
    }
    console.log(ages.splice(begin,end))
//22
    console.log(ages.pop())
//23
    console.log(ages.splice())
