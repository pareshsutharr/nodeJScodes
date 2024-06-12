// const chalk = require('chalk'); 
// const chalk = require("chalk"); 
const validator = require('validator');

// console.log(chalk.blue("hello world"));
// console.log(cholk.red('Hello', 'Cholk'))

console.log(validator.isEmail('fo@obar.com')); //=> true
