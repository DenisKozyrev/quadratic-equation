module.exports = function solveEquation(equation) {

    let roots = [];

    let quadraticEquation = equation.split(' ');

    let a = +quadraticEquation[0];
    let b = +(quadraticEquation[3] + quadraticEquation[4]);
    let c = +(quadraticEquation[7] + quadraticEquation[8]);

    let discriminant = b * b - 4 * a * c;
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    roots.push(x1.toFixed());
    roots.push(x2.toFixed());
    return roots.sort(function(a, b) {
        return a - b;
    });
}