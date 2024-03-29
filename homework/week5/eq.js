
function eq(a, b, c) {

    if (validator(a) && validator(b) && validator(c)) {
        if (a == 0 && b == 0 && c == 0) {
            alert("0=0! Input data!");
        } else if (a == 0 && b == 0 && c != 0 || (a == undefined && b == undefined)) {
            alert("Invalid input data! Check a and b!");
        } else {
            var d, x1, x2;
            if (a == 0) {
                x1 = -c / b;
                x2 = x1;
            } else {
                d = Math.pow(b, 2) - 4 * a * c;
                if (d >= 0) {
                    x1 = (-b + Math.sqrt(d)) / (2 * a);
                    x2 = (-b - Math.sqrt(d)) / (2 * a);
                } else if (d < 0) {
                    var negativeSqr = Math.sqrt(Math.abs(d));
                    x1 = -b / (2 * a) + " + " + negativeSqr / (2 * a) + "i";
                    x2 = -b / (2 * a) + " - " + negativeSqr / (2 * a) + "i";
                }
            }
            console.log("x1 = " + x1);
            console.log("x2 = " + x2);
        }
    } else {
        alert("Invalid input data!");
    }
}
function validator(a) {
    return !(!isFinite(a) || a == null || (a!=0&&(Math.abs(a) < Number.MIN_VALUE)) || a > Number.MAX_VALUE);

}
