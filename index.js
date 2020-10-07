// create variables necessary for readme generator
const fs = require("fs");
// need to install inquirer
const inquirer = require("inquirer");
const util= require("util");

const writeFileAsync= util.promisify(fs.writeFile);