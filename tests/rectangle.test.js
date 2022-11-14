
const { getRectanglePerimeter, getRectangleArea, getRectangleInfo } = require('../js/rectangle');

test("calculate perim", () => {
    expect(getRectanglePerimeter(4, 5)).toEqual(18)
})
//4+5=9*2=18

test("calculate area", () => {
    const area = getRectangleArea(2, 4);
    expect(area).toEqual(8)
});
//2*4=8
test("calculate area 2", () => {
    const area = getRectangleArea(5, 4);
    expect(area).toEqual(20)
});
//5*4-20



test("get rectangle info", () => {
    const info = getRectangleInfo(3, 7)
    expect(info).toBe(`The perimeter of a rectangle is 20 and the area is 21`)
});
//3+7=10*2=20 3*7=21
