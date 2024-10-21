function randomHexaNumberGenerator() {
    const decNr = Math.floor(Math.random() * (256 ** 3) )
    let hexNr = decNr.toString(16)
    if(hexNr.length < 6)
        hexNr = '0'.repeat(6 - hexNr.length) + hexNr 
    return `#${hexNr}`
}

function updateTitle(duration){
    const titleNode = document.querySelector(".title");
    const emojiNode = document.querySelector(".emoji");
    const titlesArray = asabenehChallenges2020.author.titles;
    emojiNode.textContent = titlesArray.at(titleCounter).at(0);
    titleNode.textContent = titlesArray.at(titleCounter).at(1);
    titleNode.animate(
        [
            {transform: "translateX(-20px)", opacity: "0", easing: "ease-out"},
            {transform: "translateX(80px)", opacity: "1"},
        ],
        {
            duration: duration,
            iterations: 1
        }
    ).play();
    titleCounter = (titleCounter + 1)%titlesArray.length;
}

function updateTech(){
    if(challenge !== undefined)
    {
        const techNode = document.querySelector(".technologies");
        techNode.style.color = randomHexaNumberGenerator();
        techNode.textContent = challenge.topics.at(techCounter);
        techCounter = (techCounter + 1) % challenge.topics.length;
        techNode.animate(
            [{opacity: "0"}, {opacity :" 1", offset: 0.8}],
            {
                duration: 2000
            }
        ).play();
    }
}

function changeTech(Node){
    if(techTimer !== undefined)
        clearInterval(techTimer);

    challenge = asabenehChallenges2020.challenges
    .filter((challenge) =>{
        if(!challenge.name
            .replace(/\s/g,"")
            .toLowerCase()
            .localeCompare(Node.textContent
                .replace(/\s/g,"")
                .toLowerCase()
            )
        )
            return challenge;
    })

    if(challenge.length === 0)
        challenge = asabenehChallenges2020.challenges.at(1);
    else
        challenge = challenge.at(0);

    techCounter = 0;
    updateTech();
    techTimer = setInterval(updateTech, 3000)
}

const titleDurationMs = 4000;
let challenge = undefined;
let techTimer = undefined;
let techCounter = 0;
let titleCounter = 0;
changeTech(document.querySelector(".button.text-content"));
updateTitle(titleDurationMs);
setInterval(updateTitle, titleDurationMs, titleDurationMs);
