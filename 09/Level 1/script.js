// const numbers = [1, 2, 3, 4, 5]
// //const sum = numbers.reduce((acc, cur) => acc + cur, 0) 
// const sum = numbers.reduce((acc, cur) => {
//      acc += cur
//      return acc;
// }, 0)//let x = 0; let cur = numbers[i]; let acc = x LUB numbers[0];  acc += cur; return acc


// console.log(sum)


// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
// const sortedProducts = products.sort()//in place sorting
// console.log(products)
// console.log(sortedProducts)

// const numbers = [9.81, 3.14, 100, 37]
// console.log(numbers.sort())
// console.log(numbers.sort((a, b) => a - b))

// const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyob', age: 100 },
//     { name: 'Elias', age: 22 },
//   ]

//   users.sort((a, b) => {
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
//   })
//albo prosciej:
//   users.sort((a, b) => {
//     return a.age - b.age //skoro b bedzie wieksze to roznica bedzie negatywna, basically to samo co na
//   })
//   console.log(users) // sorted ascending

//1
    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
    ]
    //foreach wykonuje operacje na kazdym elemencie ale nie zwraca nic
    //map wykonuje operacja na kazdym elemencie i moze je modyfikować + zwraca nowa tablice
    //filer tworzy nowa tablice w ktorej sa tylko te elementy ktore w funkcji zwrocily true
    //wykonuje operacje na kazdym elemencie ale zwraca jedynie wartosc acc (lub inna jak jest return)

//2,3
    function callback(x){
        console.log(x)
    }
    countries.forEach(callback)
    console.log('\n')
//4
    names.forEach(name => console.log(name))
    console.log('\n')
//5
    numbers.forEach(numb => console.log(numb))
    console.log('\n')
//6
    const upperCountries = countries.map(country => country.toUpperCase())
    console.log(upperCountries)
//7
    const countriesLength = countries.map(country => country.length)
    console.log(countriesLength)
//8
    const squareNumbers = numbers.map(numb => numb **2)
    console.log(squareNumbers)
//9
    const upperNames = names.map(name => name.toUpperCase())
    console.log(upperNames)
//10
    const prices = products.map(p => p.price);
    console.log(prices)
//11
    const landCountries = countries.filter(country =>{
        return country.match(/land/i) 
    })
    console.log(landCountries)
//12
    const sixLengthCountries = countries.filter(country => country.length === 6)
    console.log(sixLengthCountries)
//13
    const sixOrMoreLengthCountries = countries.filter(country => country.length >= 6)
    console.log(sixOrMoreLengthCountries)
//14
    const eCountry = countries.filter(country => country.startsWith("E"))
    console.log(eCountry)
//15
    const productsWithPrices = products.filter(product => typeof product.price === 'number')
    console.log(productsWithPrices);
//16
    const getStringLists = (arr) =>{
        return arr.filter(item => typeof item === 'string')
    }
//17
    console.log(numbers.reduce((sum, value) =>{
        return sum + value
    }, 0))
//18
    console.log(countries.reduce((text, country, index) => {
        if(index !== countries.length - 1){
            text += `${country}, `
        }
        else{
            text += `and ${country} are north European countries`
        }
        return text}, '')
    )
//19
    //taka sama jak przy && i ||,
    //every zwraca true tylko wtedy kiedy kazdy poprzedni element iteracji zwrocil true w innym wypadku false
    //some jak minimum jeden
//20
    console.log(names.some(name => name.length > 7));
//21
    console.log(countries.every(country => country.match(/lang/i)));
//22
    //find zwraca pierwsza zgodna wartosc
    //findIndex zwraca pierwszy zgodny index
//23
    console.log(countries.find(country => country.length === 6));
//24
    console.log(countries.findIndex(country => country.length === 6));
//25
    console.log(countries.findIndex(country => country === 'Norway'));
//26
    console.log(countries.findIndex(country => country === 'Russia'));
