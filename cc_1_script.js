//initialize bill
let bill = 100
//calculate tip percentage
let tip = bill <= 300 && bill >= 50 ? '.15' : '.2';
//create calcTip function to calculate the tip from the bill
function calcTip(bill){
    return bill * tip
};
calcTip(100)
//find the total
let total = bill + calcTip(100)
//output the bill, tip, and total
console.log("The bill was $" + bill + ", the tip was $" + calcTip(100) + ", and the total was $" + total + ".");
//make arrays for bill, tip, and total
let bills = [275,40,430,125,555,44];
let tips = bills.map(x => calcTip(x));
let totals = tips.map(function(x,y){return x + bills[y];});
