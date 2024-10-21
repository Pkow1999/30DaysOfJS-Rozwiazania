//1
    let month = "april".toLowerCase()
    switch(month){
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            console.log(`${month.replace(month.charAt(0), String.fromCharCode(month.charCodeAt(0) - 32))} has 31 days.`)
            break;
        case "april":
        case "june":
        case "september":
        case "november":
            console.log(`${month.replace(month.charAt(0), String.fromCharCode(month.charCodeAt(0) - 32))} has 30 days.`)
            break;
        case "february":
            console.log(`${month.replace(month.charAt(0), String.fromCharCode(month.charCodeAt(0) - 32))} has 28 days.`)
            break;
        default:
            console.log(`${month.replace(month.charAt(0), String.fromCharCode(month.charCodeAt(0) - 32))}  is not a month`)
            break;

    }
//2
    month = "april".toLowerCase()
    switch(month){
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            console.log(`${month.replace(month.charAt(0), String.fromCharCode(month.charCodeAt(0) - 32))} has 31 days.`)
            break;
        case "april":
        case "june":
        case "september":
        case "november":
            console.log(`${month.replace(month.charAt(0), String.fromCharCode(month.charCodeAt(0) - 32))} has 30 days.`)
            break;
        case "february":
            console.log(`${month.replace(month.charAt(0), String.fromCharCode(month.charCodeAt(0) - 32))} has 29 days.`)
            break;
        default:
            console.log(`${month.replace(month.charAt(0), String.fromCharCode(month.charCodeAt(0) - 32))}  is not a month`)
            break;

    }