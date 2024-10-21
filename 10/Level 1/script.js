const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
//1 
    let set = new Set()
//2
    for(let i = 0; i < 10; ++i)
        set.add(i)
//3
    set.delete(5)
//4
    set.clear()
//5
    const arr = countries.slice(0, countries.length)
    arr.push('Denmark', 'Iceland')
    set = new Set(arr)
//6
    const map = new Map()
    set.forEach(country => map.set(country, country.length))
