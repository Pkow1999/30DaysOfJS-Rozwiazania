//1
    const text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`
    const arrMatch = text.match(/\d+/gi)
    console.log(Number.parseInt(arrMatch[0]) * 12 + Number.parseInt(arrMatch[1]) + Number.parseInt(arrMatch[2]) * 12);
//2
    const text2 = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.`
    const result2 = text2.match(/-?\d+/gi).map(value => Number.parseInt(value)).sort((a,b) => a-b)
    console.log(Math.abs(result2.shift() - result2.pop()));

//3
    const is_valid_variable = (str) =>{
        return /^[^\d+][A-Za-z0-9_$]+$/.test(str)
    }
    console.log(is_valid_variable('first_name')) // True
    console.log(is_valid_variable('first-name')) // False
    console.log(is_valid_variable('1first_name')) // False
    console.log(is_valid_variable('firstname')) // True