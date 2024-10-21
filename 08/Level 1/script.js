//1
    const dog = {}
//2
    console.log(dog)
//3
    dog.name = 'Rex'
    dog.legs = 4
    dog.colos = 'Black'
    dog.age = 3
    dog.bark = function(){
        return 'bark bark';
    }
//4
    for(key of Object.keys(dog)){
        if(typeof dog[key] === 'function')
            console.log(`${key}: ${dog[key]()}`)
        else console.log(`${key}: ${dog[key]}`)
    }
//5
    dog.breed = 'mutt'
    dog.getDogInfo = function(){   
        let str = ''
        for(key of Object.keys(dog)){
            if(key === 'getDogInfo')
                continue;
            if(typeof dog[key] === 'function')
                str +=`${key}: ${dog[key]()}\n`
            else str +=`${key}: ${dog[key]}\n`
        }
        return str;
    }
    console.log(dog.getDogInfo())
