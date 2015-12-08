var field = [];

function Box(id, name) {
    this.tag = "div";
    this.className = "box";
    this.id = "box_" + id;
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



function createField() {
    var container = document.createElement('div');
    container.className = "container";
    container.id = "container";
    document.body.appendChild(container);
    var box;
    for (var i = 0; i <= 14; i++) {
        box = new Box(i, i+1);
        field.push(box);
        document.getElementById('container').appendChild(createBox(box));
    }
    box = new Box("empty", "");
    field.push(box);
    document.getElementById('container').appendChild(createBox(box));
}

createField();

document.getElementById("box_1").addEventListener("click", action);
