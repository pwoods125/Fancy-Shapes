const {Circle, Triangle, Square} = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What text would you like for your logo? Maximum of 3 characters!',
        name: 'logoText',
      }
    ,  {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'logoTextColor',
      }
    , 
    {
        type: 'list',
        message: 'What shape would like?',
        name: 'logoShape',
        choices: ['Circle', 'Triangle', 'Square']
      }
    ,
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'logoShapeColor',
      }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
}

function init() {
    inquirer.prompt(questions)
    .then(data => {
        let {logoShape, logoShapeColor, logoTextColor, logoText} = data
        let shape;  
        if (logoShape === 'Circle'){
            shape = new Circle(logoShapeColor);
        } else if (logoShape === 'Triangle'){
          shape = new Triangle(logoShapeColor);
        } else if (logoShape === 'Square'){
          shape = new Square(logoShapeColor);
        }
        if (logoText.length > 3){
          console.log('ERROR: Text cannot exceed 3 characters!')
          return false;
        }

        let finalOuput = shapeWithText(shape.render(), logoTextColor, logoText)
        console.log(finalOuput);
       writeToFile('./examples/logo.svg', finalOuput);
    });
}

function shapeWithText(shapeString, logoTextColor, logoText){
  return `
  <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    ${shapeString}
    <text x="30" y="55" fill='${logoTextColor}'>${logoText}</text>
  </svg>
  `
}

init();