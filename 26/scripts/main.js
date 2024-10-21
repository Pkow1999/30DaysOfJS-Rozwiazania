function checked(){
    checkInputStr();
}

function generateCountries(filterFunction, word, reversed){
    while(wrapperNode.lastChild)
        wrapperNode.removeChild(wrapperNode.firstChild);

    let counter = 0;

    if(reversed)
        countriesList = countriesList.reverse();
    else
    countriesList = countriesList.sort()

    for(country of countriesList){
        if(filterFunction(country, word))
        {
            const countryNode = document.createElement('div');
            const countryText = document.createElement('div');
            countryText.textContent = country;
            countryText.setAttribute('class', 'country-node text')
            countryNode.setAttribute('class', 'country-node');
            countryNode.appendChild(countryText);
            wrapperNode.appendChild(countryNode);
            ++counter;
        }
    }
    return counter;
}

function checkInputStr(){
    const searchWord = inputStrNode.value;
    const reverseNode = document.querySelector("#toggleReverse");
    while(countriesFilterWayNode.lastChild)
        countriesFilterWayNode.removeChild(countriesFilterWayNode.firstChild)

    if(searchWord)
    {
        countriesFilterValueNode.textContent = searchWord;
        if(startingWordNode.checked == 1)
        {
            countriesFilterWayNode.textContent = 'Countries start with '
            countriesFilterCounterNode.textContent = generateCountries(filterStartsWord, searchWord, reverseNode.checked)
    
        }
        else
        {
            countriesFilterWayNode.textContent = 'Countries containing '
            countriesFilterCounterNode.textContent = generateCountries(filterContainsWord, searchWord, reverseNode.checked)
        }
        const node = document.createElement('span');
        node.textContent = " are ";
        countriesFilterWayNode.appendChild(countriesFilterValueNode);
        countriesFilterWayNode.appendChild(node);
        countriesFilterWayNode.appendChild(countriesFilterCounterNode);
    }
    else
    {
        generateCountries(filterContainsWord, "", reverseNode.checked);
    }
}

function filterContainsWord(dataStr, word){
    return dataStr.toLowerCase().includes(word.toLowerCase());
}

function filterStartsWord(dataStr, word){
    return dataStr.toLowerCase().startsWith(word.toLowerCase());
}

document.querySelector('.number-of-countries').textContent = countries.length;

document.querySelectorAll(".toggle").forEach((radio) => radio.addEventListener('change', checked));


const startingWordNode = document.querySelector('#toggleStart');
const searchWithWordNode = document.querySelector('#toggleWord');
const countriesFilterWayNode = document.querySelector('.countries-filter');
const countriesFilterValueNode = document.createElement('span');
const countriesFilterCounterNode = document.createElement('span');
const inputStrNode = document.querySelector('.search-country');
const wrapperNode = document.querySelector('.wrapper');


countriesList = countries.slice();

generateCountries(filterContainsWord, "", false);

countriesFilterValueNode.setAttribute('class', 'filter-value');
countriesFilterCounterNode.setAttribute('class', 'filter-counter');
inputStrNode.addEventListener('input', checkInputStr);
