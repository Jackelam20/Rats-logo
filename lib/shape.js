
class Shapes {
    constructor(shapeChoice,text, textColor, shapeColor) {
    this.shapeChoice = shapeChoice
    this.text = text
    this.textColor = textColor
    this.shapeColor = shapeColor
}

addText () {
return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> `
}
};


class Circle extends Shapes {
    constructor(shapeChoice,text, textColor, shapeColor) {
super(shapeChoice,text, textColor, shapeColor)
}
circleRender () {
return  `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
${this.addText()}
</svg>`
} 
}



class Triangle extends Shapes {
    constructor(shapeChoice,text, textColor, shapeColor) {
        super(shapeChoice,text, textColor, shapeColor)
        }
        triangleRender() {
           return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="150,7 296,170 7,170"
stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
${super.addText()}
</svg>`
        }

}

class Square extends Shapes {
    constructor(shapeChoice,text, textColor, shapeColor) {
        super(shapeChoice,text, textColor, shapeColor)
        }
        squareRender() {
return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="10" width="200" height="200"
stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
${super.addText()}
</svg>`
        }
}


// Exports code to index.js
module.exports = { Circle, Triangle, Square };