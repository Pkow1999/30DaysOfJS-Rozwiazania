//1
	console.group("Countries Array:")
	console.table(countries)
	console.groupEnd()
//2
	console.group("Country object:")
	countries.forEach(country => console.table(country))
	console.groupEnd()
//3 ^