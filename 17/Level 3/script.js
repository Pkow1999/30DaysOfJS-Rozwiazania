localStorage.clear()
//1
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

            if(typeof income.desc !== 'number')
                return
            let value = Object.values(income)[0]
            
            this.incomes[desc] = value 
        }

        addExpense(expense){
            if(Object.keys(expense).length > 1)
                return
            let desc = Object.keys(expense)[0]

            if(typeof expense.desc !== 'number')
                return
            let value = Object.values(expense)[0]
            
            this.expense[desc] = value
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
    const personAccount = new PersonAccount();
    for([key, value] of Object.entries(personAccount)){
        if(typeof value === 'object')
            localStorage.setItem(key, JSON.stringify(Object.entries(value), undefined, 0))
        else
            localStorage.setItem(key, value)
            
    }