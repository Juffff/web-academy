var field = [];



function Box(i, j, name) {
    this.tag = "div";
    this.className = "box";
    this.id = "box_" + i+"_"+j;
    this.innerHTML = name;
}

function actionOnOver(){
console.log(this.id);
}

function actionOnClick(){

}

function createBox(box) {
    var b;
    b = document.createElement(box.tag);
    b.className = box.className;
    b.id = box.id;
    b.innerHTML = box.innerHTML;
    return b;
}

function boxIndexes(box_id){
    return box_id.split("_").splice(1,2);
}

function moveDownPossibility(box){
    var nextI = parseInt(boxIndexes(box)[0])+1;
    var nextJ = parseInt(boxIndexes(box)[1]);
    if (document.getElementById("box_" + nextI + "_" + nextJ)!=null &&
        document.getElementById("box_" + nextI + "_" + nextJ).innerHTML == ""){
        return true;
    }else {
        return false;
    }
}


function moveUpPossibility(box){
    var nextI = parseInt(boxIndexes(box)[0])-1;
    var nextJ = parseInt(boxIndexes(box)[1]);
    if (document.getElementById("box_" + nextI + "_" + nextJ)!=null &&
        document.getElementById("box_" + nextI + "_" + nextJ).innerHTML == ""){
        return true;
    }else {
        return false;
    }
}

function moveRightPossibility(box){
    var nextI = parseInt(boxIndexes(box)[0]);
    var nextJ = parseInt(boxIndexes(box)[1])+1;
    if (document.getElementById("box_" + nextI + "_" + nextJ)!=null &&
        document.getElementById("box_" + nextI + "_" + nextJ).innerHTML == ""){
        return true;
    }else {
        return false;
    }
}

function moveLeftPossibility(box){
    var nextI = parseInt(boxIndexes(box)[0]);
    var nextJ = parseInt(boxIndexes(box)[1])-1;
    if (document.getElementById("box_" + nextI + "_" + nextJ)!=null &&
        document.getElementById("box_" + nextI + "_" + nextJ).innerHTML == ""){
        return true;
    }else {
        return false;
    }
}



function createField() {
    var container = document.createElement('div');
    container.className = "container";
    container.id = "container";
    document.body.appendChild(container);
    var box;
    var k = 0;
    for (var i = 0; i <= 4; i++) {
        for (var j = 0; j < 4; j++) {
            k = k + 1;
            if (k == 16) {
                break;
            }
            box = new Box(i, j, k);
            field.push(box);
            document.getElementById('container').appendChild(createBox(box));
            document.getElementById("box_"+i+"_"+j).addEventListener("mouseover", actionOnOver);
            document.getElementById("box_"+i+"_"+j).addEventListener("click", actionOnClick);
        }
        if (k == 16) {
            box = new Box(i, j, "");
            field.push(box);
            document.getElementById('container').appendChild(createBox(box));
            document.getElementById("box_"+i+"_"+j).addEventListener("mouseover", actionOnOver);
            document.getElementById("box_"+i+"_"+j).addEventListener("click", actionOnClick);
            break;
        }
    }

}


createField();

