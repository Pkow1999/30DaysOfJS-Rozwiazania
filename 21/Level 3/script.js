const randomHexaNumberGenerator = () => {
    const decNr = Math.floor(Math.random() * (256 ** 3) )
    let hexNr = decNr.toString(16)
    if(hexNr.length < 6)
        hexNr = '0'.repeat(6 - hexNr.length) + hexNr 
    return `#${hexNr}`
}
function getCurrentDate(){
    const date = new Date()
    const monthLUT = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(); 
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() ;
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return `${day} ${monthLUT[month]} ${year} ${hour}:${minutes}:${seconds}`
}

function updateTime(node){
    node.textContent = getCurrentDate();
    node.style.backgroundColor = randomHexaNumberGenerator()
}

function updateYear(node){
    node.style.color = randomHexaNumberGenerator();
}

const body = document.querySelector('body')
body.style.textAlign = 'center'
body.style.fontFamily = 'Helvetica'
body.style.fontStyle = 'normal'

const firstHeader = document.querySelector('h1')
const year = document.createElement('Strong')
year.textContent = new Date().getFullYear();
year.style.fontSize = '250%'
firstHeader.textContent = firstHeader.textContent.substring(0, firstHeader.textContent.length - 4)
firstHeader.appendChild(year)

const secondHeader = document.querySelector('h2')
secondHeader.style.fontWeight = '100'
secondHeader.style.textDecorationLine = 'underline'



const listItems = document.querySelectorAll('li')
listItems.forEach((item) =>{
    item.style.padding = '20px'
    if(item.textContent.match(/done/gi)){
        item.style.backgroundColor = '#5BBC7A'
    }
    else if(item.textContent.match(/ongoing/gi)){
        item.style.backgroundColor = '#EDDC5C'
    }
    else{
        item.style.backgroundColor = '#EB695B'
    }
    item.style.listStyleType = 'none'
    item.style.margin = '3px 25% 0 25%'
    item.style.textAlign = 'left'
    return item
})


const dateNode = document.createElement('p')
dateNode.textContent = getCurrentDate()
dateNode.style.margin = 'auto';
dateNode.style.padding = '0.5%'
dateNode.style.textAlign = 'center';
dateNode.style.width = '12%';

const wrapper = document.querySelector('.wrapper')
wrapper.insertBefore(dateNode, document.querySelector('ul'))

setInterval(updateTime, 1000, dateNode)
setInterval(updateYear, 1000, year)