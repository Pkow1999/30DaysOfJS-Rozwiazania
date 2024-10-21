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

const wrapper = document.querySelector('.wrapper')

const body = document.querySelector('body')
body.style.textAlign = 'center'
body.style.fontFamily = 'Helvetica'
body.style.fontStyle = 'normal'
body.style.margin = '0 20% 0 20%'

const h1Node = document.createElement('h1')
const yearNode = document.createElement('strong')
h1Node.textContent = asabenehChallenges2020.challengeTitle + ' in '
yearNode.textContent = asabenehChallenges2020.challengeYear
yearNode.style.fontSize = '300%'
h1Node.appendChild(yearNode)

const h2Node = document.createElement('h2')
h2Node.textContent = asabenehChallenges2020.challengeSubtitle
h2Node.style.fontWeight = '100'
h2Node.style.textDecorationLine = 'underline'

const dateNode = document.createElement('p')
dateNode.textContent = getCurrentDate()
dateNode.style.margin = 'auto';
dateNode.style.padding = '0.5%'
dateNode.style.textAlign = 'center';
dateNode.style.width = '12%';

const unorderedListNode = document.createElement('ul')

asabenehChallenges2020.challenges.forEach((challenge) =>{
    const listItem = document.createElement('li')
    const listParagraphNode = document.createElement('a')

    listParagraphNode.textContent = challenge.name
    listParagraphNode.style.textDecorationLine = 'underline'

    listItem.style.padding = '20px'
    listItem.style.listStyleType = 'none'
    //listItem.style.margin = '3px 25% 0 25%'
    listItem.style.textAlign = 'left'
    listItem.style.display = 'flex'
    listItem.style.justifyContent = 'space-between'
    
    const status = challenge.status
    if(status.match(/done/gi)){
        listItem.style.backgroundColor = '#5BBC7A'
        listParagraphNode.href = challenge.githubUrl
    }
    else if(status.match(/ongoing/gi)){
        listItem.style.backgroundColor = '#EDDC5C'
        listParagraphNode.href = challenge.githubUrl
    }
    else{
        listItem.style.backgroundColor = '#EB695B'
        listParagraphNode.style.textDecorationLine = 'none'
    }
    
    const detailItem = document.createElement('details')
    const detailSummary = document.createElement('summary')

    challenge.topics.forEach((topic) => {
        const detailParagraph = document.createElement('p')
        detailParagraph.textContent = topic
        detailItem.appendChild(detailParagraph)
    })
    

    detailSummary.textContent = challenge.name.substring(challenge.name.indexOf('Of') + 2, challenge.name.length)
    detailItem.appendChild(detailSummary)

    const statusNode = document.createElement('p')
    statusNode.textContent = status
    statusNode.style.textDecorationLine = 'none'
    statusNode.style.textAlign = 'right'

    listItem.appendChild(listParagraphNode)
    listItem.appendChild(detailItem)
    listItem.appendChild(statusNode)

    unorderedListNode.appendChild(listItem)
    return listItem;
})

const authorNode = document.createElement('h1')
authorNode.textContent = asabenehChallenges2020.author.firstName + ' ' + asabenehChallenges2020.author.lastName

const authorBioNode = document.createElement('p')
authorBioNode.textContent = asabenehChallenges2020.author.bio
//authorBioNode.style.margin = '0 20% 0 20%'

const competenciesNode = document.createElement('div')
competenciesNode.style.display = 'flex'
competenciesNode.style.justifyContent = 'space-between'
competenciesNode.style.textAlign = 'left'
//competenciesNode.style.margin = '0 25% 0 25%'
competenciesNode.style.padding = '3%'

const titlesNode = document.createElement('p')
titlesNode.textContent = 'Titles'
titlesNode.style.fontWeight = 'bold'
asabenehChallenges2020.author.titles.forEach((title) =>{
    const titleNode = document.createElement('p')
    titleNode.style.fontWeight = 'normal'
    titleNode.textContent = title.join(' ')
    titlesNode.appendChild(titleNode)
})
competenciesNode.appendChild(titlesNode)

const skillsNode = document.createElement('p')
skillsNode.textContent = 'Skills'
skillsNode.style.fontWeight = 'bold'
asabenehChallenges2020.author.skills.forEach((skill) =>{
    const skillNode = document.createElement('p')
    skillNode.style.fontWeight = 'normal'
    skillNode.textContent = skill
    skillsNode.appendChild(skillNode)
})
competenciesNode.appendChild(skillsNode)

const qualificationsNode = document.createElement('p')
qualificationsNode.textContent = 'Qualifications'
qualificationsNode.style.fontWeight = 'bold'
asabenehChallenges2020.author.qualifications.forEach((qualification) =>{
    const qualificationNode = document.createElement('p')
    qualificationNode.style.fontWeight = 'normal'
    qualificationNode.textContent = qualification
    qualificationsNode.appendChild(qualificationNode)
})
competenciesNode.appendChild(qualificationsNode)

const keywordsNode = document.createElement('div')
const keywordsParagraphNode = document.createElement('p')
keywordsParagraphNode.textContent = 'Keywords'
keywordsParagraphNode.style.fontWeight = 'bold'
keywordsParagraphNode.style.fontSize = '120%'
keywordsParagraphNode.style.textAlign = 'left'
keywordsNode.appendChild(keywordsParagraphNode)

const keywordsFlex = document.createElement('div')
keywordsFlex.style.textAlign = 'left'
keywordsFlex.style.display = 'flex'
keywordsFlex.style.flexWrap = 'wrap'
keywordsFlex.style.justifyContent = 'flex-start'

asabenehChallenges2020.keywords.forEach((keyword) =>{
    const color = randomHexaNumberGenerator()
    const keywordNode = document.createElement('p')
    const randomMarginValue = Math.floor(Math.random() * 5) + 1
    keywordNode.textContent = '#' + keyword.replace(' ', '_')
    keywordNode.style.fontWeight = 'bold'
    keywordNode.style.border = '10px solid ' + color
    keywordNode.style.borderRadius = '20px'
    keywordNode.style.backgroundColor = color
    keywordNode.style.fontSize = '110%'
    keywordNode.style.margin = '1% -3% 1% 5%'
    keywordNode.style.marginRight = '-' + randomMarginValue + '%'

    keywordsFlex.appendChild(keywordNode)
})
keywordsNode.appendChild(keywordsFlex)

wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.justifyContent = 'center'
wrapper.appendChild(h1Node)
wrapper.appendChild(h2Node)
wrapper.appendChild(dateNode)
wrapper.appendChild(unorderedListNode)
wrapper.appendChild(authorNode)
wrapper.appendChild(authorBioNode)
wrapper.appendChild(competenciesNode)
wrapper.appendChild(keywordsNode)

setInterval(updateYear, 1000, yearNode)
setInterval(updateTime, 1000, dateNode)