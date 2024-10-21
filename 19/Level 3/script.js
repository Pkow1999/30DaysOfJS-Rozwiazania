//1
    function personAccount(){
        let firstName = "John"
        let lastName = "Nash"
        let incomes = {
            courses: 2000,
            salary: 2300,
            tutoring: 1800
        }
        let expenses = {
            rent: 1200,
            bill: 400,
            saloon: 150
        }


        function addIncome(income){
            if(Object.keys(income).length > 1)
                return
            let desc = Object.keys(income)[0]
    
            if(typeof income[desc] !== 'number')
                return
            let value = Object.values(income)[0]
            
            incomes[desc] = value 
        }

        function addExpense(expense){
            if(Object.keys(expense).length > 1)
                return
            let desc = Object.keys(expense)[0]

            if(typeof expense[desc] !== 'number')
                return
            let value = Object.values(expense)[0]

            
            expenses[desc] = value
        }

        function accountBalance(){
            return totalIncome() - totalExpenses()
        }

        function showIncome(){
            let result = '['
            for(const [desc, value] of Object.entries(incomes))
                result += `${desc} : ${value}, `
            return result.substring(0, result.length - 2) + ']'
        }

        function showExpenses(){
            let result = '['
            for(const [desc, value] of Object.entries(expenses))
                result += `${desc} : ${value}, `
            return result.substring(0, result.length - 2) + ']'
        }

        function totalIncome(){
            return Object.keys(incomes).reduce((total, income) => total + incomes[income], 0)
        }

        function totalExpenses(){
            return Object.keys(expenses).reduce((total, expense) => total + expenses[expense], 0)
        }

        function accountInfo(){
            return `${firstName} ${lastName}, Balance: ${accountBalance()}\
                    Incomes: ${showIncome()} for sum of: ${totalIncome()}\
                    Expenses: ${showExpenses()} for sum of ${totalExpenses()}`
        }

        return {
            addIncome:addIncome,
            addExpense:addExpense,
            accountInfo:accountInfo
        }
    }
    const pA = personAccount()
    
    console.log(pA.accountInfo());
    pA.addExpense({hulajnoga : 200})
    pA.addIncome({życie : 50})
    console.log(pA.accountInfo());
