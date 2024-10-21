localStorage.clear()
//1
    let Student = {
        firstName : 'P',
        lastName : 'Kow',
        age : 25,
        skills : ['Qt','Java','C++','Python','JavaScript'],
        country : 'Poland',
        enrolled : false
    }
    for([key, value] of Object.entries(Student)){
        if(!Array.isArray(value))
            localStorage.setItem(key, value)
        else
            localStorage.setItem(key, JSON.stringify(value, undefined, 0))
    }