// items
var adams = 0;
var cursors = 0;
var puppies = 0;
var boyfriends = 0;
var concerts = 0;

// item cost
var cursorCost = 10;
var puppyCost = 100;
var boyfriendCost = 500;
var concertCost = 1000;

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

function buyConcert() {
    if (adams >= concertCost) {
        concerts = concerts + 1;
        adams = adams - concertCost;
        document.getElementById('concerts').innerHTML = concerts;
        document.getElementById('adams').innerHTML = adams;
        concertCost = Math.round(concertCost * 115 / 100);
    }
    document.getElementById('concertCost').innerHTML = concertCost;
};

window.setInterval(function(){
    getAdam(cursors + puppies * 10 + boyfriends * 50 + concerts * 100);
}, 1000);