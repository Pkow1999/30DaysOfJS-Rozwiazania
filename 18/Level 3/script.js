//1
    async function catsData(){
        try{
            const response = await fetch(catsAPI)
            const cats = await response.json()
            const catMetric = cats.map(catObject => {
                return {name : catObject.name, averageWeight : catObject.weight.metric}
            })
            console.group('Zadanie 1')
                console.log(catMetric);
            console.groupEnd()

        }catch(err){
            console.error(err);
        }
    }
    catsData()
//2
    fetch(countriesAPI)
    .then(response => response.json())
    .then(countries => {
        const largestCountries = countries
                                .sort((countryA, countryB) => countryB.area - countryA.area)
                                .filter((country, index) => index < 10)
                                .map(country => country.name)
        console.group('Zadanie 2')
            console.log(largestCountries);
        console.groupEnd()

    })
    .catch(error => console.error(error))
//3
    async function countriesLanguages(){
        try{
            const response = await fetch(countriesAPI)
            const countries = await response.json()
            const usedLanguages =  countries
                                    .reduce((languagesCounterMap, country) =>{
                                        const languagesInCountry = country.languages;
                                        for(language of languagesInCountry){
                                            if(!languagesCounterMap.has(language.name)){
                                                languagesCounterMap.set(language.name, 1);
                                            }
                                            else{
                                                languagesCounterMap.set(language.name, languagesCounterMap.get(language.name) + 1);
                                            }
                                        }
                                        return languagesCounterMap
                                    }, new Map())
            console.group('Zadanie 3')
                console.log(usedLanguages);
            console.groupEnd()

        }catch(err){
            console.error(err);
        }
    }
    countriesLanguages()