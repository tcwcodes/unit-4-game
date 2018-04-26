$(document).ready(function() {

    var mario = {
        name: "mario",
        display: "Mario",
        healthPoints: 120,
        attackPower: 10,
        counterAttackPower: 10,
        image: "assets/images/mario.png",
    };

    var luigi = {
        name: "luigi",
        display: "Luigi",
        healthPoints: 100,
        attackPower: 10,
        counterAttackPower: 10,
        image: "assets/images/luigi.png",
    };

    var peach = {
        name: "peach",
        display: "Princess Peach",
        healthPoints: 150,
        attackPower: 10,
        counterAttackPower: 10,  
        image: "assets/images/peach.png",
    };

    var yoshi = {
        name: "yoshi",
        display: "Yoshi",
        healthPoints: 1800,
        attackPower: 10,
        counterAttackPower: 10,
        image: "assets/images/yoshi.png",
    };

    var characters = [mario, luigi, peach, yoshi];

    var opponentSelected = false;

    // Hide the attack button
    $("#attack-button").hide();

    $("#start-button").one("click", function(){

        // Hide start button
        $("#start-button").hide();

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
        character.attr("healthPoints", characters[i].healthPoints);
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

        // Create a new div for each character's attack power inside of its character's div
        var charAttack = $("<div>");
        charAttack.addClass("attackPower");
        charAttack.text(characters[i].attackPower);
        character.append(charAttack);

        // Create a new div for each character's attack power inside of its character's div
        var charCounter = $("<div>");
        charCounter.addClass("counterAttackPower");
        charCounter.text(characters[i].counterAttackPower);
        character.append(charCounter);
        
        // Append character divs to charallClass div
        $(".charAllClass").append(character);

        // Append character divs to charDiv in html
        $("#charDiv").append(character);
        };
    });
    //When you click a character in the original character div
    $("body").one("click", ".ppls", function(){

        // All characters move to other character div and get class potential opponent
        var otherCharacters = $("<h2>" + "Choose your opponent" + "</h2>");
        $("#otherCharDiv").append(otherCharacters);
        $("#otherCharDiv").append($(".ppls"));
        $(".ppls").addClass("potentialOpponent");

        // Character you clicked moves to character picked div, gets class your char and loses opponent class
        var chosenCharacter = $("<h2>" + "Your character" + "</h2>");
        $("#charPickedDiv").append(chosenCharacter);
        $("#charPickedDiv").append(this);
        $(this).addClass("yourChar");
        $(this).removeClass("potentialOpponent");
        var yourHealth = $(".yourChar").attr("healthPoints");
        console.log("Your health: " + yourHealth);
        var yourAttack = $(".yourChar").attr("attackPower");
        console.log("Your attack power: " + yourAttack);
        var yourCounterAttack = $(".yourChar").attr("counterAttackPower");
        console.log("Your counterattack power: " + yourCounterAttack);

        // Character div disappears
        $("#charDiv").empty();

            // When you click your opponent
            $("body").on("click", ".potentialOpponent", function(){
            if (opponentSelected === true) {
                alert("ya done picked one");
            }
            else {
            var chosenOpponent = $("<h2>" + "Your opponent" + "</h2>");
            $("#opponentDiv").append(chosenOpponent);
            $("#opponentDiv").append(this);
            $(this).addClass("opponent");
            $(this).removeClass("potentialOpponent");
            var enemyHealth = $(".opponent").attr("healthPoints");
            console.log("Enemy health: " + enemyHealth);
            var enemyAttack = $(".opponent").attr("attackPower");
            console.log("Enemy attack power: " + enemyAttack);
            var enemyCounterAttack = $(".opponent").attr("counterAttackPower");
            console.log("Enemy counterattack power: " + enemyCounterAttack);
            opponentSelected = true;
            $("#attack-button").show();
            }

            $("body").on("click", "#attack-button", function(){

                if (enemyHealth > 0) {
                // You attack
                var enemyNewHealth = enemyHealth - yourAttack;
                console.log("Enemy's new health: " + enemyNewHealth);
                enemyHealth = enemyNewHealth;
        
                // Enemy counters
                var yourNewHealth = yourHealth - enemyCounterAttack;
                console.log("Your new health: " + yourNewHealth);
                yourHealth = yourNewHealth;
                }

                if (enemyHealth === 0) {
                    alert("You beat this opponent! Select your next one!");
                    $("#opponentDiv").empty();
                    opponentSelected = false;
                    $(this).addClass("beatenOpponent");
                    $(this).removeClass("opponent");
                }
        
            })

        })

    })

        // var enemyDiv = ($(".opponent").children());
        // console.log(enemyDiv);
        // var enemyHealth = enemyDiv[2];
        // console.log(enemyHealth)
        // var playerAttackDiv = ($(".yourChar").children());
        // console.log(playerAttackDiv);
        // var playerAttack = playerAttackDiv[3];
        // console.log(playerAttack);
        // var newHealth = enemyHealth - playerAttack;
        // console.log(newHealth);


});