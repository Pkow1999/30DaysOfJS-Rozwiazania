function calculateWeight(){
    spaceThingDescFlexContainer.style.flexGrow = '1'
    spaceThingDescFlexContainer.style.marginTop = '0'
    
    if(inputNode.value === '')
    {
        spaceThingDescFlexContainer.textContent = 'Mass is required'
        spaceThingImageNode.setAttribute('src', '')
        spaceThingNameInDesc.textContent = ''
    }
    else if(selectNode.value === 'none')
    {
        spaceThingDescFlexContainer.textContent = 'You did not choose the planet yet'
        spaceThingImageNode.setAttribute('src', '')
        spaceThingNameInDesc.textContent = ''
    } 
    else
    {
        spaceThingImageNode.setAttribute('src', `./images/${selectNode.value}.png`);
        spaceThingNameInDesc.textContent = selectNode.value.charAt(0).toUpperCase() + selectNode.value.slice(1);
        spaceThingDescFlexContainer.textContent = 'The weight of object on ';
        let constant = spaceThing[selectNode.value];
        circleNode.textContent = `${(inputNode.value * constant).toFixed(2)} N`
        spaceThingDescFlexContainer.appendChild(spaceThingNameInDesc);
        spaceThingDescFlexContainer.appendChild(circleNode);
        spaceThingDescFlexContainer.style.marginTop = '10%'

    }
}

function changePlanet(event){
    
    console.log(event);
    console.log(this.value);
    console.log("Changing planet...");
}

const spaceThing = {
    'mercury': 3.7,
    'venus': 8.9,
    'earth': 9.8,
    'moon': 1.6,
    'mars': 3.7,
    'jupiter': 23.1,
    'saturn': 9.0,
    'uranus': 8.7, 
    'neptune': 11.0, 
    'pluto': 0.7
};

const h1Node = document.querySelector('h1');
const body = document.querySelector('body');
const inputNode = document.querySelector('#mass')
const buttonNode = document.querySelector('button');
const selectNode = document.querySelector('select');
const spaceThingImageNode = document.querySelector('.planet-image');
const spaceThingFlexContainer = document.querySelector('.flex-container')
const spaceThingDescFlexContainer = document.querySelector('.flex-item.description')
const spaceThingNameInDesc = document.createElement('strong');
const circleNode = document.createElement('div');
const newtonValue = document.createElement('div');

body.style.backgroundImage = 'url(./images/galaxy.gif)';
body.style.margin = 'auto';
body.style.textAlign = 'center';
body.style.fontStyle = 'normal';
body.style.fontSize = '150%';
body.style.fontFamily = 'helvetica';

h1Node.style.color = 'white'
h1Node.style.textShadow = '2px 2px blueViolet'

inputNode.style.height = '30px'
inputNode.style.width = '12%'
inputNode.style.borderColor = '20px'
inputNode.setAttribute('type', 'number')
inputNode.setAttribute('pattern', '[0-9]')

selectNode.style.height = '38px'
selectNode.style.width = '10%'
selectNode.style.textAlign = 'center'
selectNode.style.color = 'gray'
selectNode.style.backgroundColor = 'white'
selectNode.style.border = 'white'
selectNode.style.borderRadius = '4px'
for(const spaceThingName of Object.keys(spaceThing)){
    const spaceThingSelectNode = document.createElement('option');
    spaceThingSelectNode.setAttribute('value', spaceThingName);
    spaceThingSelectNode.textContent = spaceThingName.charAt(0).toUpperCase() + spaceThingName.slice(1);
    selectNode.appendChild(spaceThingSelectNode);
}
selectNode.addEventListener('change', changePlanet)

buttonNode.style.height = '38px'
buttonNode.style.backgroundColor = 'gray'
buttonNode.style.border = 'gray'
buttonNode.style.borderRadius = '4px'
buttonNode.style.color = 'white'
buttonNode.style.fontSize = '80%'
buttonNode.style.width = '9%'
buttonNode.style.paddingBottom = '4px'
buttonNode.style.cursor = 'pointer'
buttonNode.addEventListener('click', calculateWeight);

spaceThingFlexContainer.style.display = 'flex'
spaceThingFlexContainer.style.flexDirection = 'row'
spaceThingFlexContainer.style.justifyContent = 'center'
spaceThingFlexContainer.style.alignItems = 'flex-start'
spaceThingFlexContainer.style.gap = '40px'
spaceThingFlexContainer.style.background = 'rgba(128, 128, 128, 0.35)'
spaceThingFlexContainer.style.marginLeft = '15%'
spaceThingFlexContainer.style.marginRight = '15%'
spaceThingFlexContainer.style.marginTop = '1%'
spaceThingFlexContainer.style.padding = '4%'

spaceThingDescFlexContainer.style.color = 'white'
spaceThingDescFlexContainer.style.display = 'flex'
spaceThingDescFlexContainer.style.flexDirection = 'column'
spaceThingDescFlexContainer.style.justifyContent = 'center'
spaceThingDescFlexContainer.style.alignItems = 'center'
spaceThingDescFlexContainer.style.background = 'rgba(128, 128, 128, 0.35)'
spaceThingDescFlexContainer.style.textAlign = 'center'
spaceThingDescFlexContainer.style.paddingTop = '2%'
spaceThingDescFlexContainer.style.paddingBottom = '2%'
spaceThingDescFlexContainer.style.marginTop = '10%'

spaceThingNameInDesc.style.fontWeight = '900'

circleNode.style.background = 'rgba(128, 128, 128, 0.5)'
circleNode.style.width = '128px'
circleNode.style.height = '128px'
circleNode.style.borderRadius = '50%'
circleNode.style.alignItems = 'center'
circleNode.style.marginTop = '3%'
circleNode.style.lineHeight = circleNode.style.height = '128px'

