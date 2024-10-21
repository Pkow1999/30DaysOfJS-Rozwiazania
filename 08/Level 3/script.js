//1
    const personAccount = {
        firstName: 'John',
        lastName: 'Nash',        
        incomes: {
            courses: 2000,
            salary: 2300,
            tutoring: 1800
        },
        expenses: {
            rent: 1200,
            bill: 400,
            saloon: 150
        },
        totalIncome : function(){
            let total = 0;
            for(const income of Object.keys(this.incomes)){
                total += this.incomes[income]
            }
            return total
        },
        totalExpenses : function(){
            let total = 0;
            for(const expense of Object.keys(this.expenses)){
                total += this.expenses[expense]
            }
            return total
        },
        accountInfo : function(){
            return `${this.firstName} ${this.lastName}, Balance: ${this.accountBalance()}`
        },
        addIncome : function(income){
            if(Object.keys(income).length > 1)
                return
            let desc = Object.keys(income)[0]

            if(typeof income.desc !== 'number')
                return
            let value = Object.values(income)[0]
            
            this.incomes[desc] = value 
        },
        addExpense : function(expense){
            if(Object.keys(expense).length > 1)
                return
            let desc = Object.keys(expense)[0]

            if(typeof expense.desc !== 'number')
                return
            let value = Object.values(expense)[0]
            
            this.expanse[desc] = value
        },
        accountBalance : function(){
            return this.totalIncome() - this.totalExpenses()
        }
    }
    console.log(personAccount.accountInfo())
//2
    //a
    const userIdGenerator = () => {
        const numberOfCharacters = 6
        let id = ''
        for(i = 0; i < numberOfCharacters; ++i){
            let randomChar
            if(Math.floor(Math.random() * 2) == 0)
                randomChar = String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48))
            else 
                randomChar = String.fromCharCode(Math.floor(Math.random() * (123 - 97)) + 97)
            id += randomChar
        }
        return id
    }
    function showDateTime(){
        const date = new Date()
        
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate().toString() 
        const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1).toString() 
        const year = date.getFullYear() 
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours().toString() 
        const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString() 

        return `${day}/${month}/${year} ${hour}:${minute}`
    }

    const signUp = (username, email, password) =>{//this is so unefficient....
        for(user of users){
            if(user.username === username || user.email === email){
                console.log(`User with this username or email already exists`)
                return false
            }
        }
        newUser = {
            _id : userIdGenerator(),
            username : username,
            email : email,
            password : password,
            createdAt : showDateTime(),
            isLoggedIn : false
        }
        users.push(newUser)
        console.log(`User created sucessfully`)//log dziala na samym koncu!!!!!!!!
        return true
    }
    console.log(signUp("pkow","ddas","dsadsa"))
    console.log(users)
    
    //b
    function signIn(username, password){
        for(user of users){//this is so unefficient....
            if(user.username === username && user.password === password){
                user.isLoggedIn = true
                console.log("Logged in!")
                return true;
            }
        }
        console.log("User does not exist")
        return false;
    }
    console.log(signIn("pkow","dsadsa"))
    console.log(users)
//3
    //a
    const rateProduct = (productId, userId, rate) =>{
        for(const product of products){
            if(product._id === productId){
                if(typeof rate === 'number'){
                    product.ratings.push({userId : userId, rate : rate})
                    console.log(`Product: ${product.name} rated: ${rate}`)
                    return true
                }
                else{
                    console.log("Rating is not a number")
                    return false
                }
            }
        }
        console.log("Product does not exist")
        return false;
    }
    console.log(rateProduct("eedfcf", "IDpekowa", "5.5"))
    //b
    function averageRating(productId){
        let sumOfRating = 0
        for(const product of products){
            if(product._id === productId){
                for(rating of product.ratings){
                    sumOfRating += rating.rate
                }
                console.log(product.ratings)
                console.log(`Average rating: ${sumOfRating / product.ratings.length}`)
                return sumOfRating / product.ratings.length
            }
        }
        console.log("Product does not exist")
        return -1
    }
    console.log(averageRating("eedfcf"))
//4
    const likeProduct = (productId, userId) =>{
        for(const product of products){
            if(product._id === productId){
                const index = product.likes.indexOf(userId)
                if(index > -1){
                    console.log(`${userId} removed like`)
                    product.likes.splice(index, 1)
                }
                else{
                    console.log(`${userId} liked`)
                    product.likes.push(userId)
                }
                return true;
            }
        }
        console.log("Product does not exist")
        return false;
    }
    console.log(likeProduct("aegfal", "pkow"))
    console.log(products)