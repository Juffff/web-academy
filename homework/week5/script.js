'use strict';

var a, b, c, d, x1, x2;

function readAndGo() {

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;

    if (!validator("a", "b", "c")) {
        return;
    }

    if (a == 0) {
        eqCalcA0(b, c);
    } else {
        eqCalc(a, b, c);
    }
}

function eqCalc(a, b, c) {

    d = b * b - 4 * a * c;

    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('c = ' + c);
    console.log('d = ' + d);

    if (d < 0) {
        var negativeSqr = Math.sqrt(Math.abs(d)) / (2 * a);
        printResult((-b).toString() + "+" + "i" + negativeSqr.toFixed(4).toString(),(-b).toString() + "-" + "i" + negativeSqr.toFixed(4).toString());
    } else {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        printResult(x1,x2);
    }

    console.log('x1 = ' + x1);
    console.log('x2 = ' + x2);
}

function eqCalcA0(b, c) {
    x1 = -c / b;
    x2 = x1;
    printResult(x1,x2);
}

function validStr(str) {

    if (isNaN(document.getElementById(str).value)) {
        document.getElementById(str).setAttribute("style", "background: red");
        document.getElementById("result").setAttribute("style", "visibility: hidden");
        return false;
    } else {
        document.getElementById(str).setAttribute("style", "background: none");
        return true;
    }
}

function validator(str1, str2, str3) {
    if (validStr(str1) & validStr(str2) & validStr(str3)) {
        document.getElementById(str1).setAttribute("style", "background: none");
        document.getElementById(str2).setAttribute("style", "background: none");
        document.getElementById(str3).setAttribute("style", "background: none");
        return true;
    }
    else {
        return false;
    }
}

function printResult(str1, str2){

    document.getElementById("result").setAttribute("style", "visibility: visible");
    document.getElementById("x1").textContent = str1;
    document.getElementById("x2").textContent = str2;
}



