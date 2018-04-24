$(document).ready(function() {

var charPicked;

var mario = {
    name: "mario",
    display: "Mario",
    healthPoints: "120",
    attackPower: "10",
    counterAttackPower: "10",
    image: "assets/images/mario.png",
};

var luigi = {
    name: "luigi",
    display: "Luigi",
    healthPoints: "100",
    attackPower: "10",
    counterAttackPower: "10",
    image: "assets/images/luigi.png",
};

var peach = {
    name: "peach",
    display: "Princess Peach",
    healthPoints: "150",
    attackPower: "10",
    counterAttackPower: "10",  
    image: "assets/images/peach.png",
};

var yoshi = {
    name: "yoshi",
    display: "Yoshi",
    healthPoints: "180",
    attackPower: "10",
    counterAttackPower: "10",
    image: "assets/images/yoshi.png",
};

var characters = [mario, luigi, peach, yoshi];

$("#start-button").on("click", function(){
    for (var i = 0; i < characters.length; i++) {
    $("#charDiv").append('<img src=' + characters[i].image + '>');
    $("#charDiv").addClass("floatChar");
};

    // $("#charDiv").append('<img src="assets/images/mario.png"/>');
    // $("#charDiv").('<img src="'+ mario.image + '" class="image"')
    // $("#charDiv").append("hi!");
});

// function newCharDiv() {
// var newCharDiv = "hi!";
// $("#charDiv").append("hi!");
// };

// newCharDiv();

});