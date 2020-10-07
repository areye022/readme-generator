// create variables necessary for readme generator
const fs = require("fs");
// need to install inquirer
const inquirer = require("inquirer");
const util= require("util");

const writeFileAsync= util.promisify(fs.writeFile);
inquirer.prompt([
    //license
    {
        type:'input',
        message:'What licenses do you have?',
        name:'license',
    },

    //Title
    {
        type:"input",
        message:"Enter a title for your project",
        name:'title'
    },

    //Description
    {
        type:"input",
        message:"Enter a description of your project ",
        name:'description'
    },

    //Installation
    {
        type:'input',
        message:'What do you need to install for this program to work?',
        name:'installation'
    },

    //Usage
    {
        type:'input',
        message:'Enter your usage info',
        name:'usage'

    },

    //Contribution
    {
        type:'input' ,
        message:'Enter your contribution guidelines',
        name:'contribution'
    },

    //Test
    {
        type:'input' ,
        message:'Enter your test instructions',
        name:'test'
    },

    //README Entitled Questions
    {
        type: 'input',
        message:'Enter your github username',
        name:"githubUsername"
    },
    
    {
        type: 'input',
        message:'Enter your github project name',
        name:"githubProjectName"
    },
    //Contact Info
    {
        type:'input' ,
        message:'Enter your email',
        name:'email',
    }

]).then(res => {
    // console.log(res)
    const {license, title, description, installation, usage, contribution, test, githubUsername,githubProjectName, email} =res;
    printREADME(license, title, description, installation, usage, contribution, test, githubUsername,githubProjectName, email);
});

function printREADME(license, title, description, installation, usage, contribution, test, githubUsername,githubProjectName, email){
    let readMe =`### ${license}
    
    ### ${title}
    <br>
    
    ### Description
    ${description}
    
    ### Table of Contents
    -Installation
    -Usage
    -Contribution
    -Test
    -Link
    -Contact
    
    ### Installation
    ${installation}
    
    ### Contribution
    ${contribution}
    
    ### Usage
    ${usage}
    
    ### Contribution
    ${contribution}
    
    ### Test
    ${test}
    
    ### README Entitled Questions
    Github.com/${githubUsername}/${githubProjectName}
    
    ### Contact Info
    ${email}`

    console.log(readMe);

    saveREADME(readMe);
}