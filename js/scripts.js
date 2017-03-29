function getTriangleArea(a,h) {
    if (isNaN(a,h) == true) {
        alert('Nieprawidłowe dane');
    } else if ((a <= 0) || (h <= 0)) {
        alert('Nieprawidłowe dane');
    } else {
        return a*h/2;
    }
}
console.log(getTriangleArea(10,6));

var getTriangleArea1 = getTriangleArea(4,6);
console.log( getTriangleArea1 );
var getTriangleArea2 = getTriangleArea(5,10);
console.log( getTriangleArea2 );
var getTriangleArea3 = getTriangleArea('b','c');
console.log( getTriangleArea3 );
