function getComputerChoice() {
    let x = Math.floor(Math.random() * (3) + 1);
    if (x == 1) {
        return 'Rock';
    }
    else if (x == 2) {
        return 'Scissor';
    };
    return 'Paper';
}

function getPlayerChoice() {
    let x = prompt("Please type your move (Rock, Paper, or Scissor): ", '');
    if (x.toLowerCase() == 'rock') {
        return 'Rock';
    }
    else if (x.toLowerCase() == 'scissor') {
        return 'Scissor';
    }
    else if (x.toLowerCase() == 'paper') {
        return 'Paper';
    }

    alert("Invalid input. Please try again.")
}

function RPS(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    b = playerSelection;
    a = computerSelection;
    console.log("The computer chose... " + a + "!");
    let x;

    if (b == 'Rock' && a == 'Scissor'){
        x = 'win';
        return ("You " + x + "! " + b + " beats " + a + ".")
    } else if (b == 'Paper' && a == 'Rock') {
        x = 'win';
        return ("You " + x + "! " + b + " beats " + a + ".")
    }  else if (b == 'Scissor' && a == 'Paper') {
        x = 'win';
        return ("You " + x + "! " + b + " beats " + a + ".")
    }
    
    else if (b == 'Rock' && a == 'Paper'){
        x = 'lose'; 
        return ("You " + x + "! " + a + " beats " + b + ".")
    } else if (b == 'Paper' && a == 'Scissor'){
        x = 'lose'; 
        return ("You " + x + "! " + a + " beats " + b + ".")
    } else if (b == 'Scissor' && a =='Rock') {
        x = 'lose'; 
        return ("You " + x + "! " + a + " beats " + b + ".")
    }

    else if (b == 'Paper' && a == 'Paper') {
        x = 'tie';
        return ("It's a " + x + "!")
    } else if (b == 'Scissor' && a == 'Scissor') {
        x = 'tie';
        return ("It's a " + x + "!")
    } else if (b == 'Rock' && a == 'Rock') {
        x = 'tie';
        return ("It's a " + x + "!")
    }

    alert("Invalid input. Please try again.");
}

function game(){
    Player = 0;
    Computer = 0;

    g1 = RPS();
    /* Game 1*/
    if (g1.includes('win')) {
        Player += 1;
        console.log(g1);
    } else if (g1.includes('lose')) {
        Computer += 1;
        console.log(g1);
    } else if (g1.includes('tie')) {
        Player += 1;
        Computer += 1;
        console.log(g1);
    }

    g2 = RPS();
    /* Game 2*/
    if (g2.includes('win')) {
        Player += 1;
        console.log(g2);
    } else if (g2.includes('lose')) {
        Computer += 1;
        console.log(g2);
    } else if (g2.includes('tie')) {
        Player += 1;
        Computer += 1;
        console.log(g2);
    }
    
    g3 = RPS();
    /* Game 3*/
    if (g3.includes('win')) {
        Player += 1;
        console.log(g3);
    } else if (g3.includes('lose')) {
        Computer += 1;
        console.log(g3);
    } else if (g3.includes('tie')) {
        Player += 1;
        Computer += 1;
        console.log(g3);
    }

    g4 = RPS();
    /* Game 4*/
    if (g4.includes('win')) {
        Player += 1;
        console.log(g4);
    } else if (g4.includes('lose')) {
        Computer += 1;
        console.log(g4);
    } else if (g4.includes('tie')) {
        Player += 1;
        Computer += 1;
        console.log(g4);
    }

    g5 = RPS();
    /* Game 5*/
    if (g5.includes('win')) {
        Player += 1;
        console.log(g5);
    } else if (g5.includes('lose')) {
        Computer += 1;
        console.log(g5);
    } else if (g5.includes('tie')) {
        Player += 1;
        Computer += 1;
        console.log(g5);
    }

    /* Final Outcome */
    if (Player > Computer) {
        return ("You had the most wins (" + Player + ") out of five rounds! Congratulations, you beat the computer!")
    } else if (Player < Computer) {
        return ("The computer had the most wins (" + Computer + ") out of five rounds. Sorry, you lost.")
    }
    return ("You have the same score as the computer. This is a tie!")
}

console.log(game());