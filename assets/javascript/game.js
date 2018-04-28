$(document).ready(function() {
    restart();
    function restart() {
    
        // Set up characters and selection toggles
        var mario = {
            name: "mario",
            display: "Mario",
            healthPoints: 80,
            attackPower: 13,
            counterAttackPower: 13,
            image: "assets/images/mario.png",
        };

        var luigi = {
            name: "luigi",
            display: "Luigi",
            healthPoints: 120,
            attackPower: 11,
            counterAttackPower: 11,
            image: "assets/images/luigi.png",
        };

        var peach = {
            name: "peach",
            display: "Princess Peach",
            healthPoints: 160,
            attackPower: 9,
            counterAttackPower: 9,  
            image: "assets/images/peach.png",
        };

        var yoshi = {
            name: "yoshi",
            display: "Yoshi",
            healthPoints: 200,
            attackPower: 7,
            counterAttackPower: 7,
            image: "assets/images/yoshi.png",
        };

        var characters = [mario, luigi, peach, yoshi];

        var characterSelected = false;
        var opponentSelected = false;
        var wins = 0;
        var round = 0;


        // Hide the attack button on load
        $("#attack-button").hide();

        // When you click the start button ...
        $("#start-button").one("click", function(){

            // Hide start button
            $("#start-button").hide();

            // Create a new div called charAll and add class "charAllClass"
            var charAll = $("<div>");
            charAll.addClass("charAllClass");
            var chooseCharacters = $("<h3>" + "Choose your character" + "</h3>");
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
            charPoints.text("HP: " + characters[i].healthPoints);
            character.append(charPoints);

            // Create a new div for each character's attack power inside of its character's div
            var charAttack = $("<div>");
            charAttack.addClass("attackPower");
            charAttack.text("Attack: " + characters[i].attackPower);
            character.append(charAttack);

            // Create a new div for each character's counterattack power inside of its character's div
            var charCounter = $("<div>");
            charCounter.addClass("counterAttackPower");
            charCounter.text("Counterattack: " + characters[i].counterAttackPower);
            character.append(charCounter);
            
            // Append character divs to charAll div (changed from .charAllClass) 
            $(".charAll").append(character);

            // Append character divs to charDiv in html
            $("#charDiv").append(character);
            };
        });

        //When you click a character in the original character div
        $("body").on("click", ".ppls", function(){

            // If a char hasn't been selected, all chars move to other character div and get class potential opponent
            if (characterSelected === false) {
            var otherCharacters = $("<h3>" + "Choose your opponent" + "</h3>");
            $("#otherCharDiv").append(otherCharacters);
            $("#otherCharDiv").append($(".ppls"));
            $(".ppls").addClass("potentialOpponent");

            // Character you clicked moves to character picked div, gets class your char and loses opponent class
            var chosenCharacter = $("<h3>" + "Your character" + "</h3>");
            $("#charPickedDiv").append(chosenCharacter);
            $("#charPickedDiv").append(this);
            $(this).addClass("yourChar");
            $(this).removeClass("potentialOpponent");
            characterSelected = true;
            console.log("Character selected? " + characterSelected);
            $("#charDiv").empty();
            } else {
            }
        })

        // When you click your opponent ...
        $("body").on("click", ".potentialOpponent", function(){
            if (opponentSelected === true) {
            }
            else {
            $("#opponentDiv").empty;
            var chosenOpponent = $("<h3>" + "Your opponent" + "</h3>");
            $("#opponentDiv").append(chosenOpponent);
            $("#opponentDiv").append(this);
            $(this).addClass("opponent");
            $(this).removeClass("potentialOpponent");
            opponentSelected = true;
            console.log("Opponent selected? " + opponentSelected)
            $("#attack-button").show();
            if (wins === 2) {
                $("#otherCharDiv").empty();
                }
            }
        })

        // When you click to launch a shell
        $("body").on("click", "#attack-button", function(){

            if (opponentSelected === true) {
                var attackPower = $(".yourChar").attr("attackPower")
                var enemyHealth = $(".opponent").attr("healthPoints") - attackPower;
                var yourHealth = $(".yourChar").attr("healthPoints") - $(".opponent").attr("attackPower");
                $(".opponent").attr("healthPoints", enemyHealth);
                console.log("Enemy health: " + enemyHealth);
                $('.opponent > .healthPoints').text("HP: " + enemyHealth);
                $(".yourChar").attr("healthPoints", yourHealth);
                console.log("Your health: " + yourHealth);
                $('.yourChar > .healthPoints').text("HP: " + yourHealth);
                round++;
                console.log("Round: " + round);
            }

            if (yourHealth <= 0) {
                alert("You wiped out! Try again!");
                $("#start-button").show();
                $("#attack-button").hide();
                $("#opponentDiv").empty();
                $("#otherCharDiv").empty();
                $("#charPickedDiv").empty();
                $("#charDiv").empty();
                $("#start-button").on("click", restart());
            }

            if (enemyHealth <= 0) {
                opponentSelected = false;
                console.log("Opponent selected? " + opponentSelected)
                $(this).addClass("beatenOpponent");
                $(this).removeClass("opponent");
                $("#opponentDiv").empty();
                $("#attack-button").hide();
                wins++;
                console.log("Wins: " + wins);
            }

            if (wins === 3){
                opponentSelected = false;
                alert("You won! Click 'Start' to play again!");
                $("#start-button").show();
                $("#attack-button").hide();
                $("#opponentDiv").empty();
                $("#otherCharDiv").empty();
                $("#charPickedDiv").empty();
                $("#charDiv").empty();
                $("#start-button").on("click", restart());
            }
                

            else {}
        
        });
    };
});