const monthLUT = ['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const listOfModelNode = [];


function getCurrentTime(){
    const date = new Date();

    return `${monthLUT.at(date.getMonth())} ${date.getDay()}, ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
}

function createButtonNodes(){
    const buttonWrapperNode = document.createElement('div');
    buttonWrapperNode.classList.add('button-wrapper');

    const deleteButton = document.createElement('div');
    deleteButton.classList.add('delete', 'rounded-button');
    deleteButton.setAttribute('onClick', 'deleteNodeClick(this)');
    
    const deleteText = document.createElement('div');
    deleteText.classList.add('rounded-button', 'text-content');

    const increaseButton = document.createElement('div');
    increaseButton.classList.add('increase', 'rounded-button');
    increaseButton.setAttribute('onClick', 'increaseScoreClick(this)');

    const increaseText = document.createElement('div');
    increaseText.classList.add('rounded-button', 'text-content');

    const decreaseButton = document.createElement('div');
    decreaseButton.classList.add('decrease', 'rounded-button');
    decreaseButton.setAttribute('onClick', 'decreaseScoreClick(this)')

    const decreaseText = document.createElement('div');
    decreaseText.classList.add('rounded-button', 'text-content');

    deleteButton.appendChild(deleteText);
    increaseButton.appendChild(increaseText);
    decreaseButton.appendChild(decreaseText);

    buttonWrapperNode.appendChild(deleteButton);
    buttonWrapperNode.appendChild(increaseButton);
    buttonWrapperNode.appendChild(decreaseButton);

    return buttonWrapperNode;
}

function createNewPlayerNode(firstName, lastName, country, score, id){

    const playerNode = document.createElement('div');
    playerNode.classList.add("item");
    playerNode.setAttribute('id', id);

    const nameDateNode = document.createElement('div');
    nameDateNode.classList.add("name-date");

    const nameNode = document.createElement('div');
    nameNode.classList.add("name");
    nameNode.textContent = firstName + " " + lastName;

    const dateNode = document.createElement('div');
    dateNode.classList.add("date");
    dateNode.textContent = getCurrentTime();

    const countryNode = document.createElement('div');
    countryNode.classList.add("country");
    countryNode.textContent = country;

    const scoreNode = document.createElement('div');
    scoreNode.classList.add("score");
    scoreNode.textContent = score;


    nameDateNode.appendChild(nameNode);
    nameDateNode.appendChild(dateNode);
    playerNode.appendChild(nameDateNode);
    playerNode.appendChild(countryNode);
    playerNode.appendChild(scoreNode);
    playerNode.append(createButtonNodes());

    listOfModelNode.push(new modelNode(firstName, lastName, country, Number(score), playerNode));
    showTable();
    return playerNode;
}

function findItemNode(node){
    let parent = node;
    while(!parent.classList.contains('item'))
    {
        if(parent.parentNode === null && parent.parentNode === undefined)
            return null
        parent = parent.parentNode;
    }
    return parent;
}


function findScoreNodeFromButton(buttonNode){
    const itemNode = findItemNode(buttonNode);
    if(itemNode === null)
        return undefined;
    let scoreNode = undefined;
    for(const childNode of itemNode.children){
        if(childNode.classList.contains('score')){
            scoreNode = childNode;
            return scoreNode;
        }
    }        
    return scoreNode;
}


function swapPositions(firstNode, secondNode){
    const firstItemNode = findItemNode(firstNode);
    if(firstItemNode === null)
        return;
    const secondItemNode = findItemNode(secondNode);
    if(secondItemNode === null)
        return;
    const wrapperNode = firstItemNode.parentNode;
    wrapperNode.insertBefore(firstItemNode, secondItemNode);

    const tmpId =  firstItemNode.id;
    firstItemNode.id = secondItemNode.id;
    secondItemNode.id = tmpId;
}

function increaseScoreClick(target){
    const scoreNode = findScoreNodeFromButton(target);
    const itemNode = findItemNode(target);
    if(scoreNode !== undefined){
        scoreNode.textContent = Number(scoreNode.textContent) + 5;
        listOfModelNode.find(({ node }) => node === itemNode).score = Number(scoreNode.textContent);
    }
    showTable();

}

function decreaseScoreClick(target){
    const scoreNode = findScoreNodeFromButton(target);
    const itemNode = findItemNode(target);
    if(scoreNode !== undefined){
        scoreNode.textContent = Number(scoreNode.textContent) - 5 < 0 ? 0 : Number(scoreNode.textContent) - 5;
        listOfModelNode.find(({ node }) => node === itemNode).score = Number(scoreNode.textContent);
    }
    showTable();
}

function deleteNodeClick(target){
    const itemNode = findItemNode(target);
    for(let i = 0; i < listOfModelNode.length; ++i)
    {
        if(listOfModelNode.at(i).node === itemNode){
            listOfModelNode.splice(i, 1);
            break;
        }
    }
    showTable();
}

function addPlayerClick(){
    const firstNameNode = document.querySelector('#firstName');
    if(firstNameNode.value.length < 1)
    {
        document.querySelector('.errorMessage').style.display = 'block'
        return;
    }
    const lastNameNode = document.querySelector('#lastName');
    if(lastNameNode.value.length < 1)
    {
        document.querySelector('.errorMessage').style.display = 'block'
        return;

    }

    const countryNode = document.querySelector('#country');
    if(countryNode.value.length < 1)
    {
        document.querySelector('.errorMessage').style.display = 'block'
        return;

    }

    const scoreNode = document.querySelector('#score');

    if(scoreNode.value.length < 1 || isNaN(Number(scoreNode.value)))
    {
        document.querySelector('.errorMessage').style.display = 'block'
        return;

    }
    document.querySelector('.errorMessage').style.display = 'none';
    createNewPlayerNode(firstNameNode.value, lastNameNode.value, countryNode.value, scoreNode.value, '1');
}

function showTable(){
    const leaderboard = document.querySelector('.leaderboard-wrapper');
    while(leaderboard.firstElementChild)
        leaderboard.removeChild(leaderboard.lastElementChild);

    listOfModelNode.sort((a,b) => b.score - a.score)
    for(const model of listOfModelNode){
        leaderboard.appendChild(model.node);
    }
}

showTable();