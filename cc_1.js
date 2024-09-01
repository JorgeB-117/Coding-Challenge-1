// Task 1: Variables and Data Types

let employeeName = "Jesus Vazquez";
const employeeID = 117;
var isActive = false;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));

// Task 2: Compound Data Types

let products = ["Monitor", "Mouse", "Keyboard"];
const productDetails = {
    inStock: 3,
    name: products,
    price: 957.00,
}

console.log(products, productDetails);

// Task 3: Assignment Operators

let accountBalance = 2000;
console.log("Initial Balance", accountBalance);

// Deposit 500
accountBalance += 500;
console.log("After Deposit 500:", accountBalance);

// Withdraw 250
accountBalance -= 250;
console.log("After Withdraw 250:", accountBalance);

// Loan
accountBalance *= 2;
console.log("After Loan 2250:", accountBalance);

// Purchase
accountBalance /= 2;
console.log("After purchase 2250:", accountBalance);

// Transaction Fee
accountBalance %= 1000;
console.log("After transaction fee modulo 1000:", accountBalance);
