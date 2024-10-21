//1
    const objectFromJSON = JSON.parse(txt)
    console.table(objectFromJSON);
//2
    let skillsLength = 0;
    let mostSkilledPersonKey = undefined;
    console.time('for')
    for([key, value] of Object.entries(objectFromJSON))
    {
        if(skillsLength < value['skills'].length)
        {
            skillsLength = value['skills'].length;
            mostSkilledPersonKey = key;
        }
    }
    console.timeEnd('for')

    console.time('reduce')
    const mostSkilledPerson = Object.entries(objectFromJSON).reduce(([maxKey, maxValue], [currentKey, currenetValue]) => {
        if(maxValue['skills'].length < currenetValue['skills'].length){

            maxKey = currentKey;
            maxValue = currenetValue;
        }
        return [maxKey, maxValue]
    })
    console.timeEnd('reduce')

    console.log(mostSkilledPerson[0], mostSkilledPerson[1]);
    console.log(mostSkilledPersonKey, objectFromJSON[mostSkilledPersonKey]);