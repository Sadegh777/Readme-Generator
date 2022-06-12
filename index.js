const inquirer = require ('inquirer');
const fs  = require ('fs');

// inquirer to generate questions
 
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is project title?',
            name:'title',
            validate: (value) => {
                if(value){return true}else {return'A valid answer is required!'}
                }
        },
        {
            type: 'input',
            message: 'Write a description of your project.',
            name:'description',
            validate: (value) => {
                if(value){return true}else {return'A valid answer is required!'}
                }
        },
        {
            type: 'input',
            message: 'User Story.',
            name:'story',
            validate: (value) => {
                if(value){return true}else {return'A valid answer is required!'}
                }
        },
        {
            type: 'input',
            message: 'What is this project usage for?',
            name:'usage',
            validate: (value) => {
                if(value){return true}else {return'A valid answer is required!'}
                }
        },
        {
            type: 'input',
            message: 'Who are the contributors of this projects?',
            name:'contribution',
            validate: (value) => {
                if(value){return true}else {return'A valid answer is required!'}
                }
        },
        {
            type: 'list',
            message: 'What license did you used?',
            name:'license',
            choices: ['The MIT license', 'The GPL license', 'Apache License', 'GNU license', 'N/A'],
            validate: (value) => {
                if(value){return true}else {return'A valid answer is required!'}
                }
        },
        {
            type: 'input',
            message: 'If applicable, describe the steps required to install your project for the Installation section.',
            name:'installation',
            validate: (value) => {
                if(value){return true}else {return'A valid answer is required!'}
                }
        },
        {
            type: 'input',
            message: 'GitHub username:',
            name:'git',
            validate: (value) => {
                if(value){return true}else {return'A valid answer is required!'}
                }
        },
        {
            type: 'input',
            message: 'LinkedIn Account',
            name:'linkedin',
            validate: (value) => {
                if(value){return true}else {return'A valid answer is required!'}
                }
        },
        {
            type: 'input',
            message: 'E-mail',
            name:'email',
            validate: (value) => {
                if(value){return true}else {return'A valid answer is required!'}
                }
        },
    ]
).then(({
    title,
    description,
    story, 
    usage,
    installation,
    license,
    git,
    email,
    linkedin,
    contribution
}) => {
    const template = `# ${title}

    * [Description](#description)
    * [Usage](#usage)
    * [Contribution](contribution])
    * [License](#license)
    * [Story](#story)
    
    # Description
    ${description}

    ## Story
    ${story}

    # Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contribution
    ${contribution}
    
    ## License 
    ${license}

    # Contact
    * Github :${git}
    * Linkedin :${linkedin}
    * E-mail :${email}`;
    createNewFile(title,template);
}
);

function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err) =>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}
