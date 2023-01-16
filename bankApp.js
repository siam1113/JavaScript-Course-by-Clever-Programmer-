/**
 * Application Name : SudoBank
 *
 */
// 1

let cash = 100; // 100
let loan = 0; // 0
let customer = [];
var totalCustomer = customer.length;
let isBankrupt = false;

// Add customer
function addCustomer(name, age, profession) {
  customer.push({
    name,
    profession,
    age,
    cash: 0,
  });
  console.log("Customer added : ", customer[customer.length]);
}

// Lend money
function lendMoney(customerId, cashAmount) {
  // Checking bank balance and verifying customer
  if (cash >= cashAmount) {
    // Verifying customer identity
    if (-1 < customerId && customerId < totalCustomer) {
      // Reducing the lend amount from Bank's balance
      cash -= cashAmount;
      // Adding lend amount to customer cash amount
      customer[customerId].cash += cashAmount;
      console.log(
        `${cashAmount} BDT lend successfully to ${customer[customerId].name}`
      );
    } else {
      console.log("Sorry ,Invalid customer id provided");
    }
  } else {
    console.log("Not enough cash in the bank");
  }
}

// Get or Return money
function returnMoney(customerId, cashAmount) {
  // Verifying customer
  if (-1 < customerId && customerId < totalCustomer) {
    // Adding the returned amount in Bank's balance
    cash += cashAmount;
    // Reducing return amount from customers cash amount
    customer[customerId].cash -= cashAmount;
    console.log(
      `${customer[customerId].name} returned ${cashAmount} BDT. Left ${customer[customerId].cash} BDT`
    );
  } else {
    console.log("Sorry ,Invalid customer id provided");
  }
}

// Bank operation
function operateBank() {
  // Display bank status
  console.log(`Bank Balance : ${cash} || Lend : ${loan}`);
  console.log(customer);

  // Update customer count
  totalCustomer = customer.length;
  console.log("Total Customer : ", totalCustomer);

  // Action options
  alert("Welcome SUDOBANK");
  let action = Number(
    prompt(
      "What do you want to do ? \n1. Add Customer \n2. Lend Money \n3. Return Money"
    )
  );
  // Action
  if (action == 1) {
    let name = prompt("Customer name : ");
    let age = prompt("Customer age : ");
    let profession = prompt("Customer profession : ");

    addCustomer(name, age, profession);
  } else if (action == 2) {
    let customerId = Number(prompt("Customer id : "));
    let cashAmount = Number(prompt("Cash amount : "));
    lendMoney(customerId, cashAmount);
  } else if (action == 3) {
    let customerId = Number(prompt("Customer id : "));
    let cashAmount = Number(prompt("Cash amount : "));
    returnMoney(customerId, cashAmount);
  } else {
    console.log("Choose correct action");
  }

  // Checking bankruptcy
  if (cash <= 0) {
    console.log("We got bankrupt");
    isBankrupt = true;
  }
}

// Operating the bank
while (!isBankrupt) {
  operateBank();
}
