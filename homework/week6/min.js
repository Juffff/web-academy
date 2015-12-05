
/**Реализовать поиск минимального элемента в массиве без использования for и forEach.
 * Будет плюсом реализация несколькими способами.*/

var array = [1, 5, 17, -3, 0, -3, 1000];

function minBySort(a) {
    a.sort(function compareElements(a, b) {
        return (a - b);
    });
    return a[0];
}

function minByRecursion(a) {
    var tempArray = a.slice();
    var min = tempArray[0];
    if (tempArray.length < 2) {
        if (min > tempArray[0]) {
            min = tempArray[0];
        }
        console.log("Min value = " + min);
        return min; //!!!!!!!! MAX, HELP! FUNCTION RETURNS UNDEFINED,RNS MIN VALUE!!!!!!!!!!!!
    }
    if (min > tempArray[1]) {
        min = tempArray[1];
        tempArray.push(min);
    }
    tempArray.splice(0, 1);

    minByRecursion(tempArray);

}

function minByMath(a){
    return Math.min.apply({},a);
}