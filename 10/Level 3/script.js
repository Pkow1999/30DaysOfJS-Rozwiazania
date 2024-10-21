//1
    const allLanguage = new Set(countries.map(country => country.languages).flat(1))
    console.log(allLanguage.size)
//2
    function mostSpokenLanguage(countriesArray, max){
        const result = new Map()
        countriesArray.map(country => country.languages)
        .forEach(languages => {
            languages.forEach((language) =>{
                if(result.has(language)){
                    result.set(language, result.get(language) + 1)
                }
                else{
                    result.set(language, 1)
                }
            })
        })
        return new Map([...result.entries()].sort((a,b) => b[1] - a[1]).filter((value, index) => index < max))
    }
console.log(mostSpokenLanguage(countries, 3));