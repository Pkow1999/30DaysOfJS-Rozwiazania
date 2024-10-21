const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]

//1
    for(let {name, scores, skills, age} of users){
        console.log(`name: ${name}`);
        console.log(`scores: ${scores}`);
        console.log(`skills: ${skills.join(', ')}`);
        console.log(`age: ${age}\n\n`)
    }
//2
    const findPerson = (users) =>{
        const result = users.slice(0, users.length)
        return result.sort((a, b) => a.skills.length - b.skills.length).filter(({skills}) => skills.length < 2)
    }
    console.log(findPerson(users));