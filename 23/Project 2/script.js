document.body.style.textAlign = 'center'
document.body.style.fontFamily = 'helvetica'
document.body.style.fontStyle = 'normal'
//document.body.style.fontSize = '72px'
document.body.style.margin = 'auto'

const h2Node = document.querySelector('h2')
h2Node.style.fontSize = '108px'
h2Node.style.lineHeight = '0px'

const h3Nodes = document.querySelectorAll('h3')
h3Nodes.forEach((node) => {
    node.style.fontWeight = '100'
    node.style.textDecorationLine = 'underline'
    return node
} )




const table = document.createElement('table')
table.title = 'table'
table.style.width = '70%'
table.style.tableLayout = 'fixed'
table.style.borderSpacing = '20px'

let row = undefined
let rowCounter = 1;

countries.forEach((country, index) => {
    if(index % 6 === 0){
        row = document.createElement('tr')
        row.title = `row ${rowCounter}`
        row.style.height = '200px'
        ++rowCounter;
        table.appendChild(row)
    }
    const countryData = document.createElement('td')
    countryData.textContent = country
    countryData.style.border = '3px solid #F1F2F4'//#F1F2F4
    countryData.style.borderRadius = '8px'
    countryData.style.fontSize = '150%'
    row.appendChild(countryData)
});

const wrapper = document.querySelector('.countries-wrapper')
wrapper.style.display = 'flex'
wrapper.style.justifyContent = 'center'
wrapper.appendChild(table)