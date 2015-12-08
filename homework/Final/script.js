var field = [];
var fieldArray = [];



function Box(i, j, name) {
    this.tag = "div";
    this.className = "box";
    this.id = "box_" + i+"_"+j;
    this.innerHTML = name;
}

function action(){
    document.getElementById("box_1").innerHTML = Date();
}

function createBox(box) {
    var b;
    b = document.createElement(box.tag);
    b.className = box.className;
    b.id = box.id;
    b.innerHTML = box.innerHTML;
    return b;
}

function moveDown(){}



function createField() {
    var container = document.createElement('div');
    container.className = "container";
    container.id = "container";
    document.body.appendChild(container);
    var box;
   /* for (var i = 0; i <= 14; i++) {
        box = new Box(i, i+1);
        field.push(box);
        document.getElementById('container').appendChild(createBox(box));
    }*/
    var k=0;
    for (var i=0; i<=4; i++){
        for(var j=0; j<4; j++){
            k=k+1;
            if (k==16){
                break;}
            box = new Box(i,j, k);
            field.push(box);
            document.getElementById('container').appendChild(createBox(box));
        }
        if (k==16){
            box = new Box(i,j, "");
            field.push(box);
            document.getElementById('container').appendChild(createBox(box));
            break;}
    }

   /* box = new Box("empty","", "");
    field.push(box);
    document.getElementById('container').appendChild(createBox(box));*/
}

createField();

document.getElementById("box_1").addEventListener("click", action);
