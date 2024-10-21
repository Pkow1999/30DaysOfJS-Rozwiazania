function isPrime(number){
    if(typeof number !== 'number' || number%1 !== 0)
        return
    prime = true
    if(number === 1 || number === 0)
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

document.body.style.textAlign = 'center'
document.body.style.fontFamily = 'helvetica'
document.body.style.fontStyle = 'normal'
document.body.style.margin = 'auto'

const h2 = document.querySelector('h2')
h2.style.textDecorationLine = 'underline'

const table = document.createElement('table')
table.title = 'table'
table.style.width = '80%'
table.style.tableLayout = 'fixed'
let row = undefined
let rowCounter = 1;

for(let i = 0; i <= 101; ++i)
{
    if(i % 6 === 0)
    {
        row = document.createElement('tr')
        row.title = `row ${rowCounter}`
        ++rowCounter;
        table.appendChild(row)
    }
    const numberDoc = document.createElement('td')
    if(isPrime(i)){
        numberDoc.style.backgroundColor = '#FD5E53'
    }
    else if(i%2 === 0){
        numberDoc.style.backgroundColor = '#21BF73'
    }
    else{
        numberDoc.style.backgroundColor = '#FDDB3A'
    }
    numberDoc.title = `number ${i}`
    numberDoc.textContent = i
    numberDoc.style.color = 'white'
    numberDoc.style.fontSize = '400%'
    numberDoc.style.border = '4px solid white'
    numberDoc.style.margin = '20px';
    numberDoc.style.padding = '50px';
    row.appendChild(numberDoc);
}

const wrapper = document.querySelector('.wrapper')
wrapper.style.display = 'flex'
wrapper.style.justifyContent = 'center'
wrapper.appendChild(table)
