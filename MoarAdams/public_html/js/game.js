// items
var adams = 0;
var cursors = 0;
var puppies = 0;
var boyfriends = 0;

// item cost
var cursorCost = 10;
var puppyCost = 100;
var boyfriendCost = 300;

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

function buyPuppy() {
    if (adams >= puppyCost) {
        puppies = puppies + 1;
        adams = adams - puppyCost;
        document.getElementById('puppies').innerHTML = puppies;
        document.getElementById('adams').innerHTML = adams;
        puppyCost = Math.round(puppyCost * 115 / 100);
    }
    document.getElementById('puppyCost').innerHTML = puppyCost;
};

function buyBoyfriend() {
    if (adams >= boyfriendCost) {
        boyfriends = boyfriends + 1;
        adams = adams - boyfriendCost;
        document.getElementById('boyfriends').innerHTML = boyfriends;
        document.getElementById('adams').innerHTML = adams;
        boyfriendCost = Math.round(boyfriendCost * 115 / 100);
    }
    document.getElementById('boyfriendCost').innerHTML = boyfriendCost;
};

window.setInterval(function(){
    getAdam(cursors);
    getAdam(puppies * 5);
    getAdam(boyfriends * 20);
}, 1000);