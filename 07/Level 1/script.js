//1 - Nie Ogarnia function overloading, jest doslownie uzywane zaslanianie funkcji nawet jak nie maja tych samych argumentów
    function fullName(){
        console.log("PKow")
    }
//2
    function fullName(firstName, lastName){
        return firstName + ' ' + lastName
    }

//3
    function addNumbers(x, y){
        return x + y;
    }
//4
    function areaOfRectangle(length, width){
        return length * width
    }
//5
    function perimeterOfRectangle(length, width){
        return 2 * (length + width)
    }
//6
    function volumeOfRectPrism(length, width, height){
        return length * width * height
    }
//7
    function areaOfCircle(radius){
        return Math.PI * radius ** 2
    }
//8
    function circumOfCircle(radius){
        return 2 * Math.PI * radius
    }
//9 
    function density(mass, volume){
        return mass / volume
    }
//10
    function speed(distance, time){
        return distance / time
    }
//11
    function weight(mass){
        return mass * 9.81
    }
//12
    function convertCelsiusToFahrenheit(oC){
        return (oC * 9 / 5) + 32
    }
//13
    function bmi(weight, height){
        let value = weight / (height ** 2)
        if(value < 18.5)
            console.log("Underweight")
        else if(value <= 24.9)
            console.log("Normal weight")
        else if(value <= 29.9)
            console.log("Overweight")
        else
            console.log("Obese")
        return value
    }
//14
    function checkSeason(month){
        month = month.toLowerCase()
        switch(month){
            case "september":
            case "october":
            case "november":
                return "Season is Autumn"
                break;
            case "december":
            case "january":
            case "february":
                return "Season is Winter"
                break;
            case "march":
            case "april":
            case "may":
                return "Season is Spring"
                break;
            case "june":
            case "july":
            case "august":
                return "Season is Spring"
                break;
            default:
                return "This is not a Season"
                break;
        }
    }
//15
    function findMax(x,y,z){
        if(x > y && x > z)
            return x;
        if(y > x && y > z)
            return y;
        return z
    }
    