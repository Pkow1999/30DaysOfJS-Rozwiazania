//1
    const score = 99
    if(score > 79){
        console.log("A")
    }else if(score > 69){
        console.log("B")
    }else if(score > 59){
        console.log("C")
    }else if(score > 59){
        console.log("D")
    }else{
        console.log("F")
    }

//2
    const month = "MaRCh".toLowerCase()
    if(month === "september" || 
        month === "october" || 
        month === "november" )
        {
            console.log("Season is Autumn")
        }
    else if(month === "december" || 
        month === "january" || 
        month === "february" )
        {
            console.log("Season is Winter")
        }
    else if(month === "march" || 
        month === "april" || 
        month === "may" )
        {
            console.log("Season is Spring")
        }
    else if(month === "june" || 
        month === "july" || 
        month === "august" )
        {
            console.log("Season is Summer")
        }
    else
    {
        console.log("This is not month")
    }

//3

    const day = "fRIDay".toLowerCase()
    if(day === "saturday" || day === "sunday"){
        console.log(`${day.replace(day.charAt(0), String.fromCharCode(day.charCodeAt(0) - 32))} is a weekend`)
    }else{
        console.log(`${day.replace(day.charAt(0), String.fromCharCode(day.charCodeAt(0) - 32))} is a work day`)
    }
