//1
    const firstName = 'P'
    const lastName = 'Kow'
    const country = 'Poland'
    const city = 'Kr'
    const age = 25
    const isMarried = false
    let year = 2024
    console.log(`firstName: ${typeof firstName}`)
    console.log(`lastName: ${typeof lastName}`)
    console.log(`country: ${typeof country}`)
    console.log(`city: ${typeof city}`)
    console.log(`age: ${typeof age}`)
    console.log(`isMarried: ${typeof isMarried}`)
    console.log(`2024: ${typeof 2024}`)
//2
    console.log('10' === 10)
//3
    console.log(parseInt('9.8') == 10)
//4
    console.log([] == 0)
    console.log(2 + 3 === 5)
    console.log("Yes" === 'Yes')

    console.log("yes" === "Yes")
    console.log([].length != 0)
    console.log(5 > 5)
//5
    console.log("5: ")
    console.log(4 > 3)//true
    console.log(4 >= 3)//true
    console.log(4 < 3)//false
    console.log(4 <= 3)//false
    console.log(4 == 4)//true
    console.log(4 === 4)//true
    console.log(4 != 4)//false
    console.log(4 !== 4)//false
    console.log(4 != '4')//false
    console.log(4 == '4')//true
    console.log(4 === '4')//false
    console.log('python'.length == 'jargon'.length)//true
//6
    console.log("6: ")
    console.log(4 > 3 && 10 < 12)//true
    console.log(4 > 3 && 10 > 12)//false
    console.log(4 > 3 || 10 < 12)//true
    console.log(4 > 3 || 10 > 12)//true
    console.log(!(4 > 3))//false
    console.log(!(4 < 3))//true
    console.log(!(false))//true
    console.log(!(4 > 3 && 10 < 12))//false
    console.log(!(4 > 3 && 10 > 12))//true
    console.log(!(4 === '4'))//true
    console.log(!('dragon'.includes('on') && 'python'.includes('on')))//false
//7
    const date = new Date()
    //const date = new Date(124,9,15,12,2,30,520)
    console.log(date.getFullYear())
    console.log(date.getMonth() + 1)
    console.log(date)
    console.log(date.getDay() ? date.getDay() : 7)
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date.getTime())