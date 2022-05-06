let numbers = [ 1, 2, 3 ];
numbers.forEach(function(number){
    console.log(number)                   
})            

function profit(){
    return this.revenue - this.expenses
}

const tacoTruck = {
    revenue: 300,
    expenses: 100,
    profit: profit
}

const lemonadeStand = {
    revenue: 50,
    expenses: 15,
    profit: profit
}

console.log(tacoTruck.profit())
console.log(lemonadeStand.profit())

let myNumbers = [ 1, 2, 3 ]
myNumbers.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}
myNumbers.forEach(function(element){
    console.log(element)
})