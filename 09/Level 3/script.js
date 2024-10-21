//1
    console.log(countries.slice(0, countries.length)
    .sort((countryA, countryB) =>{
        return countryA.name.localeCompare(countryB.name)
    }
    ));
    console.log(countries.slice(0, countries.length)
    .sort((countryA, countryB) =>{
        return countryA.capital.localeCompare(countryB.capital)
    }
    ));
    console.log(countries.slice(0, countries.length)
    .sort((countryA, countryB) =>{
        return countryB.population - countryA.population
        }
    ));
//2
    function mostSpokenLanguage(countriesArray, max){
        const result = []
        countriesArray.map(country => country.languages)
        .forEach(languages => {
            languages.forEach((language) =>{
                const index = result.findIndex((languageCounter) => languageCounter.language === language)
                 if(index < 0){
                        result.push({language : language, counter : 1})
                    }
                    else
                        result[index].counter++
            })
        })
        return result.sort((a,b) => b.counter - a.counter).filter((value, index) => index < max)
    }
    console.log(mostSpokenLanguage(countries, 10));
//3
    const mostPopulatedCountries = (countriesArray, max) =>{
        return countriesArray.slice(0, countriesArray.length)
        .map(country => {return {name : country.name, population : country.population}})
        .sort((countryA, countryB) =>{
            return countryB.population - countryA.population
        })
        .filter((value, index) => index < max)
    }
    console.log(mostPopulatedCountries(countries, 3));
//4
    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    const statistics ={
        count : function(){
            return this.ages.length
        },
        sum : function(){
            return this.ages.reduce((sum, value) => sum + value, 0)
        },
        min : function(){
            return this.ages.reduce((min, value) => {
                if(value < min){
                    min = value
                }
                return min
            })
        },
        max : function(){
            return this.ages.reduce((max, value) => {
                if(value > max){
                    max = value
                }
                return max
            })
        },
        range : function(){
            return this.max() - this.min()
        },
        mean : function(){
            return this.sum() / this.count()
        },
        median : function(){
            return this.ages.slice(0, this.count()).sort().filter((number, index) => {
                const half = this.count() / 2
                if(half % 1 === 0)//parzysta
                {
                    switch(index){
                        case Math.floor(half) - 1:
                        case Math.floor(half):
                            return true;
                        default:
                            return false
                    }
                }
                //nieparzysta
                if(index === Math.floor(half))
                    return true;
                return false
            }).reduce((sum, value, index, array) => {
                if(array.length > 1)
                    sum += value / 2
                else
                    sum += value
                return sum
            }, 0)
        },
        mode : function(){
            const result = []
            this.ages.forEach(number =>{
                const index = result.findIndex((numberCounter) => number === numberCounter.mode)
                if(index < 0){
                    result.push({mode : number, count : 1})
                }
                else
                    result[index].count++
            })
            return result.sort((a,b) => b.count - a.count)[0]
        },
        var : function(){
            return this.ages.map(value => (value - this.mean()) ** 2).reduce((sum, value) => sum + value) / this.count()
        },
        std : function(){
            return Math.sqrt(this.var())
        },
        freqDist : function(){
            const result = []

            this.ages.forEach(number =>{
                const index = result.findIndex((numberCounter) => number === numberCounter.mode)
                if(index < 0){
                    result.push({mode : number, count : 1})
                }
                else
                    result[index].count++
            })
            return result.sort((a,b) => b.count - a.count).map(value => { return `(${Math.floor(this.std() * value.count)}, ${value.mode})`})
        },
        describe : function(){
            return `Count: ${this.count()}\n`+ // 25
            `Sum: ${this.sum()}\n`+ // 744
            `Min: ${this.min()}\n`+ // 24
            `Max: ${this.max()}\n`+ // 38
            `Range: ${this.range()}\n`+ // 14
            `Mean: ${this.mean()}\n`+ // 30
            `Median: ${this.median()}\n`+ // 29
            `Mode: (${this.mode().mode}, ${this.mode().count})\n`+ // {'mode': 26, 'count': 5}
            `Variance: ${this.var()}\n`+ // 17.5
            `Standard Deviation: ${this.std()}\n`+ // 4.2
            `Frequency Distribution: ${this.freqDist()}\n` //[(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
        }
    }
    console.log(statistics.describe())
