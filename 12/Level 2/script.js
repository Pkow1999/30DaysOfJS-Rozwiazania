//1
    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    function tenMostFrequentWords(par, range = 10){
        const words = par.toLowerCase().match(/\w+/g)
        const result = new Map()
        words.forEach((word) => {
            if(result.has(word)){
                result.set(word, result.get(word) + 1);
            }
            else{
                result.set(word, 1)
            }
        })
        return new Map([...result.entries()].sort((a,b) => b[1] - a[1]).filter((value, index) => index < range))
    }
    console.log(tenMostFrequentWords(paragraph, 3))
    