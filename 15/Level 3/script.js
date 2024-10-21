//1
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    class Statistics {
        constructor(ages){
            this.ages = ages
        }
        count(){
            return this.ages.length
        }
        sum(){
            return this.ages.reduce((sum, value) => sum + value, 0)
        }
        min(){
            return this.ages.reduce((min, value) => {
                if(value < min){
                    min = value
                }
                return min
            })
        }
        max(){
            return this.ages.reduce((max, value) => {
                if(value > max){
                    max = value
                }
                return max
            })
        }
        range(){
            return this.max() - this.min()
        }
        mean(){
            return this.sum() / this.count()
        }
        median(){
            return this.ages.slice(0, this.count()).sort().filter((number, index) => {
                const half = this.count() / 2
                if(half % 1 === 0)//parzysta
                {
                    switch(index){
                        case Math.floor(half) - 1:
                        case Math.floor(half):
                            return true;
                        default:
                            return false
                    }
                }
                //nieparzysta
                if(index === Math.floor(half))
                    return true;
                return false
            }).reduce((sum, value, index, array) => {
                if(array.length > 1)
                    sum += value / 2
                else
                    sum += value
                return sum
            }, 0)
        }
        mode(){
            const result = []
            this.ages.forEach(number =>{
                const index = result.findIndex((numberCounter) => number === numberCounter.mode)
                if(index < 0){
                    result.push({mode : number, count : 1})
                }
                else
                    result[index].count++
            })
            return result.sort((a,b) => b.count - a.count)[0]
        }
        var(){
            return this.ages.map(value => (value - this.mean()) ** 2).reduce((sum, value) => sum + value) / this.count()
        }
        std(){
            return Math.sqrt(this.var())
        }
        freqDist(){
            const result = []

            this.ages.forEach(number =>{
                const index = result.findIndex((numberCounter) => number === numberCounter.mode)
                if(index < 0){
                    result.push({mode : number, count : 1})
                }
                else
                    result[index].count++
            })
            return result.sort((a,b) => b.count - a.count).map(value => { return `(${Math.floor(this.std() * value.count)}, ${value.mode})`})
        }
        describe(){
            return `Count: ${this.count()}\n`+ // 25
            `Sum: ${this.sum()}\n`+ // 744
            `Min: ${this.min()}\n`+ // 24
            `Max: ${this.max()}\n`+ // 38
            `Range: ${this.range()}\n`+ // 14
            `Mean: ${this.mean()}\n`+ // 30
            `Median: ${this.median()}\n`+ // 29
            `Mode: (${this.mode().mode}, ${this.mode().count})\n`+ // {'mode': 26, 'count': 5}
            `Variance: ${this.var()}\n`+ // 17.5
            `Standard Deviation: ${this.std()}\n`+ // 4.2
            `Frequency Distribution: ${this.freqDist()}\n` //[(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
        }
    }
    console.group("Zadanie 1")
        const stats = new Statistics(ages)
        console.log(stats.describe())
    console.groupEnd()

//2
    class PersonAccount {
        constructor(
            firstName = "John",
            lastName = "Nash",
            incomes = {
                courses: 2000,
                salary: 2300,
                tutoring: 1800
            },
            expenses = {
                rent: 1200,
                bill: 400,
                saloon: 150
            }
        ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.incomes = incomes;
            this.expenses = expenses;
        }

        totalIncome(){
            let total = 0;
            for(const income of Object.keys(this.incomes)){
                total += this.incomes[income]
            }
            return total
        }

        totalExpenses(){
            let total = 0;
            for(const expense of Object.keys(this.expenses)){
                total += this.expenses[expense]
            }
            return total
        }

        accountInfo(){
            return `${this.firstName} ${this.lastName}, Balance: ${this.accountBalance()}\
                    Incomes: ${this.showIncome()} for sum of: ${this.totalIncome()}\
                    Expenses: ${this.showExpenses()} for sum of ${this.totalExpenses()}`
        }

        addIncome(income){
            if(Object.keys(income).length > 1)
                return
            let desc = Object.keys(income)[0]

            if(typeof income[desc] !== 'number')
                return
            let value = Object.values(income)[0]
            
            this.incomes[desc] = value 
        }

        addExpense(expense){
            if(Object.keys(expense).length > 1)
                return
            let desc = Object.keys(expense)[0]

            if(typeof expense[desc] !== 'number')
                return
            let value = Object.values(expense)[0]
            
            this.expenses[desc] = value
        }

        accountBalance(){
            return this.totalIncome() - this.totalExpenses()
        }

        showIncome(){
            let result = '['
            for(const [desc, value] of Object.entries(this.incomes))
                result += `${desc} : ${value}, `
            return result.substring(0, result.length - 2) + ']'
        }

        showExpenses(){
            let result = '['
            for(const [desc, value] of Object.entries(this.expenses))
                result += `${desc} : ${value}, `
            return result.substring(0, result.length - 2) + ']'
        }
    }
    console.group("Zadanie 2")
            const personAccount = new PersonAccount()
            console.log(personAccount.accountInfo())
    console.groupEnd()