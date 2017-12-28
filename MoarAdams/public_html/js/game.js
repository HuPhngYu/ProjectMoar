// items
var adams = 0;
var cursors = 0;
var puppies = 0;
var boyfriend = 0;

// item cost
var cursorCost = 10;
var puppyCost = 100;
var boyfriendCost = 500;

function getAdam(number) {
    adams = adams + number;
    document.getElementById('adams').innerHTML = adams;
};

function buyCursor() {
    if (adams >= cursorCost) {
        cursors = cursors + 1;
        adams = adams - cursorCost;
        document.getElementById('cursors').innerHTML = cursors;
        document.getElementById('adams').innerHTML = adams;
        cursorCost = Math.round(cursorCost * 115 / 100);
    }
    document.getElementById('cursorCost').innerHTML = cursorCost;
};