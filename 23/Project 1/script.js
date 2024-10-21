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

function generateNumbers(number, tableNode){
    while (tableNode.firstChild) {
        tableNode.removeChild(tableNode.lastChild);
    }

    let row = undefined
    let rowCounter = 1;
    for(let i = 0; i < number; ++i)
    {
        if(i % 9 === 0)
        {
            row = document.createElement('tr')
            row.title = `row ${rowCounter}`
            ++rowCounter;
            tableNode.appendChild(row)
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
        numberDoc.style.fontSize = '300%'
        numberDoc.style.border = '4px solid white'
        //numberDoc.style.padding = '1%';
        row.appendChild(numberDoc);
    }
}

{
    document.body.style.textAlign = 'center'
    document.body.style.fontFamily = 'helvetica'
    document.body.style.fontStyle = 'normal'
    document.body.style.margin = 'auto'
}

const h1Node = document.querySelector('h1')
{
    h1Node.style.fontSize = '300%'
    h1Node.style.color = '#21BF73'
}

const h2Node = document.querySelector('h2')
{
    h2Node.style.textDecorationLine = 'underline'
    h2Node.style.fontWeight = '100'
}


const h3Node = document.querySelector('h3')
{
    h3Node.style.fontWeight = '100'
}


const h4Node = document.createElement('h4')
{
    h4Node.style.fontWeight = '100'
    h4Node.style.color = 'red'
    h4Node.style.textAlign = 'left'
    h4Node.style.marginLeft = '10%'
}


let numbersToGenerate = 0;
const inputButtonFlexNode = document.createElement('div')
{
    inputButtonFlexNode.style.display = 'flex'
    inputButtonFlexNode.style.justifyContent = 'space-between'
    inputButtonFlexNode.style.paddingBottom = '2%'

    const inputNode = document.createElement('input')
    inputNode.setAttribute('placeholder', 'Generate more numbers...')
    inputNode.style.height = '40px'
    inputNode.style.width = '70%'
    inputNode.style.border = '3px solid #21BF73'
    inputNode.style.marginLeft = '10%'

    const buttonNode = document.createElement('button')
    buttonNode.textContent = 'Generate Number'
    buttonNode.style.fontSize = '150%'
    buttonNode.style.backgroundColor = '#21BF73'
    buttonNode.style.color = 'white'
    buttonNode.style.border = '8px solid #21BF73'
    buttonNode.addEventListener('click', () =>{
        if(isNaN(inputNode.value) && inputNode.value.length > 0)
        {
            h4Node.textContent = 'Input value must be number'
            return false;
        }
        else if(inputNode.value.length === 0)
        {
            h4Node.textContent = 'Enter number value on the input field to generate numbers'
            return false;
        }
        h4Node.textContent = ''
        generateNumbers(inputNode.value, tableNode)
        return true
    })

    inputButtonFlexNode.appendChild(inputNode)
    inputButtonFlexNode.appendChild(buttonNode)
}

const tableNode = document.createElement('table')
{
    tableNode.title = 'table'
    tableNode.style.width = '100%'
    tableNode.style.tableLayout = 'fixed'
}

const wrapper = document.querySelector('.wrapper')
{
    wrapper.style.display = 'flex'
    wrapper.style.justifyContent = 'center'
    wrapper.style.flexDirection = 'column'
    wrapper.style.marginLeft = '20%'
    wrapper.style.marginRight = '20%'
    wrapper.appendChild(h4Node)
    wrapper.appendChild(inputButtonFlexNode)
    wrapper.appendChild(tableNode)
}
