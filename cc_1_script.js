let bill = 100
let tip = bill <= 300 && bill >= 50 ? '.15' : '.2';
function calcTip(bill){
    return bill * tip
};
calcTip(100)
let total = bill + calcTip(100)
console.log("The bill was $" + bill + ", the tip was $" + calcTip(100) + ", and the total was $" + total + ".");
