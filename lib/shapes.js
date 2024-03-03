class Shapes {
    constructor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
};

class Circle extends Shapes{
    render(){
        return `<circle cx="50" cy="50" r="50" fill='${this.color}' />`
    }
};

class Triangle extends Shapes{
    render(){
        return `<polygon points="45,5 5,85 90,85" style='fill:${this.color}' />`
    }
};

class Square extends Shapes{
    render(){
        return `<rect x="10" y="10" width="80" height="80" fill='${this.color}' />`
    }
};

module.exports = {Circle, Triangle, Square};