#! /usr/bin/env node
import inquirer from "inquirer";
// Currency object
const currency = {
    PKR: 277.69,
    USD: 1, // base currency
    EUR: 0.83, // Example exchange rate, actual rate may vary
    GBP: 0.72,
    INR: 83.37,
};
// take Currency Input
let CurrencyDataAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Convert Currency From :",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "INR"],
    },
    {
        name: "to",
        message: "Convert Currency From :",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "INR"],
    },
    {
        name: "amount",
        message: "Emter Amount :",
        type: "number",
    },
]);
//Data get
let fromCurrency = currency[CurrencyDataAnswer.from];
let toCurrency = currency[CurrencyDataAnswer.to];
// formulation
let baseAmt = CurrencyDataAnswer.amount / fromCurrency;
let convertedAmt = baseAmt * toCurrency;
//Print values
console.log(`Your Converted Amount is : ${convertedAmt.toFixed(2)} ${CurrencyDataAnswer.to}`);
