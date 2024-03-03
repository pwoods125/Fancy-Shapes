const {Circle, Triangle, Square} = require('./shapes');

describe('Shapes', () => {

    describe('Circle', () => {
        it('Should display selected shape and color', () => {
            const circle = new Circle();
            circle.setColor(`${this.color}`);
            expect(circle.render()).toEqual(`<circle cx="50" cy="50" r="50" fill='${this.color}' />`);
            });
        });
    describe('Triangle', () => {
        it('Should display selected shape and color', () => {
            const triangle = new Triangle();
            triangle.setColor(`${this.color}`);
            expect(triangle.render()).toEqual(`<polygon points="45,5 5,85 90,85" style='fill:${this.color}' />`);
            });
        });
    describe('Square', () => {
        it('Should display selected shape and color', () => {
            const Square = new Circle();
            Square.setColor(`${this.color}`);
            expect(Square.render()).toEqual(`<rect x="10" y="10" width="80" height="80" fill='${this.color}' />`);
            });
        });
});