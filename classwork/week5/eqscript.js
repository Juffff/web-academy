/**
 * Created by juff on 22.11.15.
 */
var a, b, c, x1, x2, d;
function equ(a, b, c){
    d=(b*b)-4*a*c;
    x1=(-b+Math.sqrt(d))/(2*a);
    x2=(-b-Math.sqrt(d))/(2*a);
    console.log(x1.toFixed(5),x2.toFixed(5));


}