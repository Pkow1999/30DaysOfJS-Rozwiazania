console.group("Regular for loop");
    console.time('Regular for loop');
    for(let i = 0; i < countries.length; ++i)
        console.table(countries[i]);
    console.timeEnd('Regular for loop');
console.groupEnd();

console.group("For of loop");
    console.time('For of loop');
    for(country of countries)
        console.table(country);
    console.timeEnd('For of loop');
console.groupEnd();


console.group("ForEach loop");
    console.time('ForEach loop');
        countries.forEach(country => console.table(country))
    const t = console.timeEnd('ForEach loop');
console.groupEnd();