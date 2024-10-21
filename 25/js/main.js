document.querySelector('.subtitle').textContent = `Currently, we have ${countries_data.length} countries`
const graphLocation = document.querySelector('#stat');


function clearGraph(){
    while(graphLocation.firstChild)
        graphLocation.removeChild(graphLocation.lastChild);
}

function generatePopulationGraph(){
    clearGraph();

    document.querySelector('.graph-title').textContent = `10 Most populated countries in the world`;

    const populationCounter = [["World", 0]];
    countries_data.forEach((country) =>{
        populationCounter.push([country.name, country.population])
        populationCounter[0][1] += country.population;
    });
    const topTenPopulations = populationCounter
    .sort((a,b) => b[1] - a[1])
    .slice(0,11);

    generateGraph(topTenPopulations)
}

function generateLanguagesGraph(){
    clearGraph();

    document.querySelector('.graph-title').textContent = `10 Most spoken languages in the world`;

    const languagesCounter = new Map();
    countries_data.forEach((country) =>{
        for(language of country.languages){
            if(languagesCounter.has(language)){
                const languageValue = languagesCounter.get(language);
                languagesCounter.set(language, languageValue + 1);
            }
            else{
                languagesCounter.set(language, 1);
            }
        }
    })
    const topTenPopularLanguages = Array.from(languagesCounter)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

    generateGraph(topTenPopularLanguages)
}

function generateGraph(arrOfValues){
    const max = arrOfValues.at(0).at(1);

    for(let i = 0; i < arrOfValues.length; ++i){
        const name = arrOfValues.at(i).at(0);
        const value = arrOfValues.at(i).at(1);

        const row = document.createElement('tr');
        row.setAttribute('class', 'graphRow')
        row.setAttribute('id', i);

        const valueName = document.createElement('td');
        const graphGraphic = document.createElement('td');
        graphGraphic.setAttribute('class', 'graph-cell');
        const graphValue = document.createElement('td');

        valueName.textContent = name;
        graphValue.textContent = numberWithCommas(value);

        const graphic = document.createElement('div');
        graphGraphic.appendChild(graphic);
        graphic.setAttribute('class', 'graph-rectangle')
        graphic.style.width = (value / max * 95) + '%'

        row.appendChild(valueName);
        row.appendChild(graphGraphic);
        row.appendChild(graphValue);

        graphLocation.appendChild(row);
    }   
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.querySelector('.population').addEventListener('click', generatePopulationGraph)
document.querySelector('.languages').addEventListener('click', generateLanguagesGraph)
