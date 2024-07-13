// The required exports for this file.
const inquirer = require("inquirer");
const fs = require("fs");
const generateSvgLogo = require("./lib/svg_generator.js");

const questions = [
    {
      type: "input",
      name: "Text",
      message: "What three characters do you want on your logo?",
      validate: function (value) {
        if (value.length === 3) {
          return true;
        } else {
          return "Please enter exactly three characters.";
        }
      },
    },
    {
      type: "input",
      name: "TextColor",
      message: "Enter a hexadecimal color value or a color for the text color:",
    },
    {
      type: "input",
      name: "TextSize",
      message: "Enter the font size for the text (in pixels):",
    },
    {
      type: "confirm",
      name: "TextBold",
      message: "Do you want the text to be bold?",
      default: false,
    },
    {
      type: "list",
      name: "Shape",
      message: "What shape do you want the logo to be?",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "ShapeColor",
      message: "Enter a hexadecimal color value or a color for the background color:",
    },
    {
      type: "input",
      name: "FileName",
      message: "Enter the file name for the SVG (without extension):",
    },
];

 // This is the function that will be called when the user answers the questions and then the logo will generate with the answers
 function writeToFile(data, fileName) {
    fs.writeFile(`./examples/${fileName}.svg`, data, (err) => {
      if (err) {
        console.log(err);
      } else if (data) {
        console.log(`Generated ${fileName}.svg!`);
      } else {
        console.log("No data to save.");
      }
    });
}

  // This is the function that initializes the application and then prompts the user with the questions array, and then calls the write to file function with the data from the answers.
  function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const data = generateSvgLogo(answers);
        console.log(data);
        writeToFile(data, answers.FileName);
    });
}
  // This exports the init function so that it can be called in the index.js file.
 init();