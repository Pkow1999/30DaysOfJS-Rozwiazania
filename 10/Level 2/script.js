const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

//1
    let c = [...a, ...b]
    c = new Set(c)
    console.log(c);
//2
    const A = new Set(a)
    const B = new Set(b)
    c = new Set(
        a.filter(value => B.has(value))
    )
    console.log(c);
//3
    console.log([...a, ...b]);