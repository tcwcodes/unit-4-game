$(document).ready(function() {

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

$("#start-button").one("click", function(){

    // Create a new div called charAll and add class "charAllClass"
    var charAll = $("<div>");
    charAll.addClass("charAllClass");
    var chooseCharacters = $("<h2>" + "Choose your character" + "</h2>");
    $("#charDiv").append(chooseCharacters);
 
    for (var i = 0; i < characters.length; i++) {

    // Inside the charAll div, create a new div for each character, add class "ppls" to all,
    // add unique name class, attributes and image to each
    var character = $("<div>");
    character.addClass("ppls");
    character.addClass(characters[i].name);
    character.attr("name", characters[i].name);
    character.attr("attackPower", characters[i].attackPower);
    character.attr("counterAttackPower", characters[i].counterAttackPower);
    character.append('<img src=' + characters[i].image + '>');

    // Create a new div for each character's name inside of its character's div
    var charName = $("<div>");
    charName.addClass("name");
    charName.text(characters[i].display);
    character.append(charName);

    // Create a new div for each character's points inside of its character's div
    var charPoints = $("<div>");
    charPoints.addClass("healthPoints");
    charPoints.text(characters[i].healthPoints);
    character.append(charPoints);
    
    // Append character divs to charallClass div
    $(".charAllClass").append(character);

    // Append character divs to charDiv in html
    $("#charDiv").append(character);
};

$("body").one("click", ".ppls", function(){
    var enemyCharacters = $("<h2>" + "Your opponents" + "</h2>");
    $("#enemyCharDiv").append(enemyCharacters);
    $("#enemyCharDiv").append($(".ppls"));

    var chosenCharacter = $("<h2>" + "Your character" + "</h2>");
    $("#charPickedDiv").append(chosenCharacter);
    $("#charPickedDiv").append(this);

    $("#charDiv").empty();
})




});

});