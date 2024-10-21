const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1
    console.log(products.filter(product => typeof product.price === 'number').reduce((sum, product) => sum + product.price, 0))
//2
    console.log(products.reduce((sum, product) => {
        if(typeof product.price === 'number')
        {
            sum += product.price
        }
        return sum
    }, 0))
//3
    function categorizeCountries(arr, pattern){
        return arr.filter(item => item.name.match(pattern))
    }
    console.log(categorizeCountries(countries, /land/gi));
//4
//wersja dictionary:
    // const letterUsage = (countriesArray) => {
    //     result = {}
    //     // let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    //     // alphabet.forEach(letter =>{
    //     //     result[letter] = 0
    //     // })
    //     countriesArray.map(country => country.name)
    //     .forEach(name => {
    //         if(result[name[0]] === undefined)
    //             result[name[0]] = 1
    //         else
    //             result[name[0]]++
    //         }
    //     );
    //     return result
    // }
//wersja arrayowa:
    const letterUsage = (countriesArray) => {
        const result = []
        // let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
        // alphabet.forEach(letter =>{
        //     result.push({letter : letter, counter : 0})
        // })
        countriesArray.map(country => country.name)
        .forEach(name => {
            const index = result.findIndex((letterCounter) => letterCounter.letter === name[0])
            if(index < 0){
                result.push({letter : name[0], counter : 1})
            }
            else
                result[index].counter++
        }
        );
        return result
    }

    console.log(letterUsage(countries))
//5
    function getFirstTenCountries(countriesArray){
        return countriesArray.filter((country, index) => index < 10)
    }
    console.log(getFirstTenCountries(countries));
//6
    const getLastTenCountries = (countriesArray) => {
        return countriesArray.filter((country, index) => index > countriesArray.length - 10 - 1)
    }
    console.log(getLastTenCountries(countries));
//7
    console.log(letterUsage(countries).sort((a, b) =>{
        return b.counter - a.counter
    })
    .filter((letterCounterObj, index) => index < 3)
    .map((letterCounterObj) => letterCounterObj.letter))
