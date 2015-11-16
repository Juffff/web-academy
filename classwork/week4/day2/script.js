'use strict';

var a = 2;
var b = 3;
f = function (x, y) {
    //debugger;
    var c, d;
    c = d = 10;
    console.log(x, y);
};
f(a, b);

var g;
g = function (a, b) {
    f(a, b);
};

g(a, b);