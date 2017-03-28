function getTriangleArea(a,h) {
    if ((a <= 0) || (h <= 0)) {
        alert('Nieprawidłowe dane');
    } else {
        return a*h/2;
    }
}
console.log( getTriangleArea(10,6));

var getTriangleArea1 = getTriangleArea(4,8);
console.log( getTriangleArea1 );
var getTriangleArea2 = getTriangleArea(6,8);
console.log( getTriangleArea2 );
var getTriangleArea3 = getTriangleArea(8,12);
console.log( getTriangleArea3 );