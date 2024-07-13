// This const variable is assigned to the require shapes.js file which contains the classes for the shapes that will be used in the logo.
const { Triangle, Circle, Square } = require("./shapes.js");
// This function is called when the user answers the questions and then the logo will generate with the answers.
function generateSvgLogo(data) {
    let shapeInstance;

    // Create shape instance based on user selection
    if (data.Shape === "Triangle") {
        shapeInstance = new Triangle(data.ShapeColor);
    } else if (data.Shape === "Circle") {
        shapeInstance = new Circle(data.ShapeColor);
    } else if (data.Shape === "Square") {
        shapeInstance = new Square(data.ShapeColor);
    }

    // Apply text modifications based on user input
    let textStyle = "";
    if (data.TextSize) {
        textStyle += `font-size: ${data.TextSize}px; `;
    }
    if (data.TextBold) {
        textStyle += "font-weight: bold; ";
    }

    // Generate SVG code with modified text
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeInstance.render()}
        <text x="150" y="125" fill="${data.TextColor}" text-anchor="middle" style="${textStyle}">
            ${data.Text}
        </text>
    </svg>`;

    return svgCode;
}


module.exports = generateSvgLogo;