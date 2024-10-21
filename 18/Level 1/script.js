//1
	fetch(countriesAPI)
	.then(response => response.json())
	.then(countries => {
		for(country of countries){
			const name = country.name;
			const capital = country.capital;
			const languages = country.languages.map(languageObject => languageObject.name);
			const population = country.population;
			const area = country.area;
			console.log(name, capital, languages, population, area);
		}
	})
	.catch(error => console.error(error))
