//2
    const users = {
        Alex: {
            email: 'alex@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript'],
            age: 20,
            isLoggedIn: false,
            points: 30
        },
        Asab: {
            email: 'asab@asab.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
            age: 25,
            isLoggedIn: false,
            points: 50
        },
        Brook: {
            email: 'daniel@daniel.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
            age: 30,
            isLoggedIn: true,
            points: 50
        },
        Daniel: {
            email: 'daniel@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        John: {
            email: 'john@john.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
            age: 20,
            isLoggedIn: true,
            points: 50
        },
        Thomas: {
            email: 'thomas@thomas.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        Paul: {
            email: 'paul@paul.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
            age: 20,
            isLoggedIn: false,
            points: 40
        }
    }
    let loggedUsers = 0;
    let userWithPointsGreaterThan50 = 0;
    for(const user of Object.keys(users)){
        const userObj = users[user]
        if(userObj.isLoggedIn)
            ++loggedUsers
        if(userObj.points > 50)
            ++userWithPointsGreaterThan50
    }
    console.log(`Logged in users: ${loggedUsers}`)
    console.log(`Users with points greater than 50: ${userWithPointsGreaterThan50}`)
//1 - po pierwsze... CO TO KURWA ZNACZY MANY SKILLS, po drugie... mam je wziac z tabelki nizej??? - ech... zalozmy ze chodzi o najmocniejszego gracza
    let max = 0
    let maxSkilledUser = undefined
    for(const user of Object.keys(users)){
        const userObj = users[user]
        if(Array.isArray(userObj.skills))
            if(userObj.skills.length > max){
                max = userObj.skills.length
                maxSkilledUser = user
            }
    }
    console.log(`${maxSkilledUser}`)
//3
    const peopleMERN = {}
    for(const user of Object.keys(users)){
        const userObj = users[user]
        if(Array.isArray(userObj.skills)){
            if(userObj.skills.includes('MongoDB') &&
                userObj.skills.includes('Express') &&
                userObj.skills.includes('React') &&
                userObj.skills.includes('Node'))
            peopleMERN[user] = userObj
        }
    }
    console.log(peopleMERN)
//4
    const usersCopy = Object.assign({}, users);
    usersCopy['P'] = {};
//5
    console.log(Object.keys(users))
//6
    console.log(Object.values(users))
//7
    for(country of countries){
        console.log(`Name: ${country.name}`)
        console.log(`Capital: ${country.capital}`)
        console.log(`Population: ${country.population}`)
        console.log(`Languages: ${country.languages.toString()}\n\n`)
    }
