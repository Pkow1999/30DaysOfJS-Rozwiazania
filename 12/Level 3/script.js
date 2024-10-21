//1
    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    const cleanText = (str) =>{
        return str.replace(/[^\w\s,\.\?!]/gi, '')
    }

    console.log(cleanText(sentence))
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
    console.log(tenMostFrequentWords(cleanText(sentence)));