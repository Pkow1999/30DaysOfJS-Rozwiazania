//1
    for(let {name, capital, population, languages} of countries){
        console.log(name, capital, population, languages);   
    }
//2
    const studentDavid = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    let [name, skills, [, ,jsScore, reactScore]] = studentDavid
    console.log(name, skills, jsScore, reactScore)
//3

    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
    ]
    function convertArrayToObject(arr){
        return arr.map(([name, skills, scores]) => {return {name : name, skills : skills, scores : scores}})
    }
    console.log(convertArrayToObject(students))
//4
    const student = {
        name: 'David',
        age: 25,
        skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
        }
    }
    const newStudent = {...student}
    newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 9}),
    newStudent.skills.backEnd.push({skill: 'Express', level: 9}),
    newStudent.skills.dataBase.push({skill: 'SQL', level: 8}),
    newStudent.skills.dataScience.push('Bootstrap')
    console.log(newStudent);
