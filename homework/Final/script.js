
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DIRECTION POSSIBILITIES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function movePossibility(box) {

    function checkDirectionPossibility(nextI, nextJ) {
        return !!(document.getElementById("box_" + nextI + "_" + nextJ) != null &&
        document.getElementById("box_" + nextI + "_" + nextJ).innerHTML.indexOf('nbsp') > 0);
    }

    if (checkDirectionPossibility((parseInt(boxIndexes(box)[0]) + 1), (parseInt(boxIndexes(box)[1])))) {
        return "down";
    } else if (checkDirectionPossibility(parseInt(boxIndexes(box)[0]) - 1, (parseInt(boxIndexes(box)[1])))) {
        return "up";
    } else if (checkDirectionPossibility(parseInt(boxIndexes(box)[0]), parseInt(boxIndexes(box)[1]) - 1)) {
        return "left";
    } else if (checkDirectionPossibility(parseInt(boxIndexes(box)[0]), parseInt(boxIndexes(box)[1]) + 1)) {
        return "right";
    } else {
        return ("no");
    }

}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DIRECTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function swapHTML(box1, box2) {
    var tempHTML = document.getElementById(box1).innerHTML;
    document.getElementById(box1).innerHTML = document.getElementById(box2).innerHTML;
    document.getElementById(box2).innerHTML = tempHTML;
}

function move(box, dirrection) {

    var nextI, nextJ;

    function doMove(nextI, nextJ) {
        var box2 = "box_" + nextI + "_" + nextJ;
        swapHTML(box, box2);
        hideArrows(box2);
        checker();
        incMoveCounter();
    }

    switch (dirrection) {
        case "down":
        {
            nextI = parseInt(boxIndexes(box)[0]) + 1;
            nextJ = parseInt(boxIndexes(box)[1]);
            doMove(nextI, nextJ);
            break;
        }
        case "up":
        {
            nextI = parseInt(boxIndexes(box)[0]) - 1;
            nextJ = parseInt(boxIndexes(box)[1]);
            doMove(nextI, nextJ);
            break;
        }
        case "left":
        {
            nextI = parseInt(boxIndexes(box)[0]);
            nextJ = parseInt(boxIndexes(box)[1]) - 1;
            doMove(nextI, nextJ);
            break;
        }
        case "right":
        {
            nextI = parseInt(boxIndexes(box)[0]);
            nextJ = parseInt(boxIndexes(box)[1]) + 1;
            doMove(nextI, nextJ);
            break;
        }
        default :
        {
            break;
        }

    }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ACTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function actionOnOver() {
    switch (movePossibility(this.id)) {
        case ("down"):
        {

            document.getElementById(this.id).children[0].style.visibility = "visible";
            break;
        }

        case ("up"):
        {
            document.getElementById(this.id).children[1].style.visibility = "visible";
            break;
        }

        case ("left"):
        {
            document.getElementById(this.id).children[2].style.visibility = "visible";
            break;
        }

        case ("right"):
        {
            document.getElementById(this.id).children[3].style.visibility = "visible";
            break;
        }
        default :
        {
            break;
        }
    }
}

function actionOnOut() {
    hideArrows(this.id);
}

function hideArrows(id) {
    if (document.getElementById(id).children.length > 0) {
        for (var i = 0; i <= 3; i++) {
            document.getElementById(id).children[i].style.visibility = "hidden";
        }
    }
}


function actionOnClick() {

    switch (movePossibility(this.id)){
        case "down":{
            move(this.id, "down");
            break;
        }

        case "up":{
            move(this.id, "up");
            break;
        }

        case "left":{
            move(this.id, "left");
            break;
        }

        case "right":{
            move(this.id, "right");
            break;
        }
    }


    save();

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~COUNTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var moveCounter = 0;

function incMoveCounter() {
    moveCounter++;
    document.getElementById("counterLabel").innerHTML = "Moves: " + moveCounter;
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CHECKERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var checkArray = [];

function checkArrayFill() {
    for (var i = 1; i <= 15; i++) {
        checkArray.push(i);
    }
    checkArray.push("&nbsp;");
}

function currentField() {
    var currentArray = [];
    for (var i = 0; i <= document.getElementById('container').children.length - 1; i++) {
        if (document.getElementById('container').children[i].innerHTML.split("<")[0] == "&nbsp;") {
            currentArray.push("&nbsp;");
        } else {
            currentArray.push(parseInt(document.getElementById('container').children[i].innerHTML.split("<")[0]));
        }
    }
    return currentArray;
}

function checker() {
    var currentArray = currentField();
    var counter = 0;
    for (var i = 0; i < currentArray.length; i++) {
        if (currentArray[i] != checkArray[i]) {
            counter++;
        }
    }
    document.getElementById("counterLabel").innerHTML = "Moves: " + moveCounter;

    if (counter == 0) {
        document.getElementById("resultLabel").innerHTML = "State: SORTED";
        return true;
    }
    else {
        document.getElementById("resultLabel").innerHTML = "State: UNSORTED";
        return false;
    }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CONTROLS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



function Box(i, j, name) {
    this.tag = "div";
    this.className = "box";
    this.id = "box_" + i + "_" + j;
    this.innerHTML = name;
}


function newGame(array) {

    while (document.getElementById("container").childNodes[0]) {
        document.getElementById("container").removeChild(document.getElementById("container").childNodes[0]);
    }
    fill(array);

}

function startNewRandomGame() {
    Array.prototype.shuffle = function () {
        return this.sort(function () {
            return 0.5 - Math.random();
        });
    };
    var shuffleArray = checkArray.slice();
    newGame(shuffleArray.shuffle());
    moveCounter = 0;
    checker();
}

function sort() {
    newGame(checkArray);
    moveCounter = 0;
    checker();
}


function createBox(box) {
    var b;
    b = document.createElement(box.tag);
    b.className = box.className;
    b.id = box.id;
    b.innerHTML = box.innerHTML;
    return b;
}

function boxIndexes(box_id) {
    return box_id.split("_").splice(1, 2);
}


function createField() {

    checkArrayFill();
    var board = document.createElement('div');
    board.className = "board";
    board.id = "board";
    document.body.appendChild(board);

    var container = document.createElement('div');
    container.className = "container";
    container.id = "container";
    board.appendChild(container);

    var resultDesk = document.createElement('div');
    resultDesk.className = "resultDesk";
    resultDesk.id = "resultDesk";
    board.appendChild(resultDesk);

    var resultLabel = document.createElement('div');
    resultLabel.className = "resultLabel";
    resultLabel.id = "resultLabel";
    resultDesk.appendChild(resultLabel);

    var counterLabel = document.createElement('div');
    counterLabel.className = "counterLabel";
    counterLabel.id = "counterLabel";
    counterLabel.innerHTML = "Moves: 0";
    resultDesk.appendChild(counterLabel);

    var newGameButton = document.createElement('button');
    newGameButton.className = "newGameButton";
    newGameButton.id = "newGameButton";
    newGameButton.type = "button";
    newGameButton.innerHTML = "NEW GAME";
    newGameButton.addEventListener("click", startNewRandomGame);
    resultDesk.appendChild(newGameButton);

}

function fill(array) {

    function addBox(box) {
        document.getElementById('container').appendChild(createBox(box));
        document.getElementById("box_" + i + "_" + j).addEventListener("mouseover", actionOnOver);
        document.getElementById("box_" + i + "_" + j).addEventListener("mouseout", actionOnOut);
        document.getElementById("box_" + i + "_" + j).addEventListener("click", actionOnClick);
        document.getElementById("box_" + i + "_" + j).appendChild(downArrow());
        document.getElementById("box_" + i + "_" + j).appendChild(upArrow());
        document.getElementById("box_" + i + "_" + j).appendChild(leftArrow());
        document.getElementById("box_" + i + "_" + j).appendChild(rightArrow());
    }

    var box;


    var k = 0;
    for (var i = 0; i <= parseInt(Math.sqrt(array.length + 1)); i++) {
        for (var j = 0; j < parseInt(Math.sqrt(array.length + 1)); j++) {

            if (k == array.length) {
                break;
            }
            box = new Box(i, j, array[k]);
            addBox(box);
            k = k + 1;
        }

    }

}


function save() {
    localStorage.setItem("field", currentField());
    localStorage.setItem("moves", moveCounter);

}

function load() {

    newGame(localStorage.getItem("field").split(","));
    moveCounter = parseInt(localStorage.getItem("moves"));
    checker();
}

function downArrow() {
    var b = document.createElement('div');
    b.className = 'down';
    return b;
}


function upArrow() {
    var b = document.createElement('div');
    b.className = 'up';
    return b;
}


function leftArrow() {
    var b = document.createElement('div');
    b.className = 'left';
    return b;
}


function rightArrow() {
    var b = document.createElement('div');
    b.className = 'right';
    return b;
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


createField();
window.onload = load();
checker();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~