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

const compmess = document.querySelector('div#computer-message');
const message = document.querySelector('div#game-message');
const result = document.querySelector('div#result-message');

let player = 0;
let comp = 0;

function RPS(z) {
    b = z;   
    a = getComputerChoice();
    compmess.textContent = ("\n The computer chose... " + a + "! \n\n");
    let x;
    
    if (b == 'Rock' && a == 'Scissor'){
        x = 'win';
        message.textContent = ("You " + x + "! " + b + " beats " + a + ".");
        player += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        if (player == 5) {
            player = 0
            comp = 0
            const vicImg = document.querySelector("img");
            const vicMsg = document.querySelector("h2.title");
            vicImg.src = "./images/Hannibal_victory.jpg"
            vicMsg.textContent = "Hannibal has defeated the Roman Empire!"
            result.textContent = ("You beat the computer, congratulations!")
        }
    } else if (b == 'Paper' && a == 'Rock') {
        x = 'win';
        message.textContent = ("You " + x + "! " + b + " beats " + a + ".");
        player += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        if (player == 5) {
            player = 0
            comp = 0
            const vicImg = document.querySelector("img");
            const vicMsg = document.querySelector("h2.title");
            vicImg.src = "./images/Hannibal_victory.jpg"
            vicMsg.textContent = "Hannibal has defeated the Roman Empire!"
            result.textContent = ("You beat the computer, congratulations!")
        }
    }  else if (b == 'Scissor' && a == 'Paper') {
        x = 'win';
        message.textContent = ("You " + x + "! " + b + " beats " + a + ".");
        player += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        if (player == 5) {
            player = 0
            comp = 0
            const vicImg = document.querySelector("img");
            const vicMsg = document.querySelector("h2.title");
            vicImg.src = "./images/Hannibal_victory.jpg";
            vicMsg.textContent = "Hannibal has defeated the Roman Empire!"
            result.textContent = ("You beat the computer, congratulations!")
        }
        
    }
    
    else if (b == 'Rock' && a == 'Paper'){
        x = 'lose';
        message.textContent = ("You " + x + "! " + a + " beats " + b + ".");
        comp += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        if (comp == 5) {
            player = 0
            comp = 0
            const defImg = document.querySelector("img");
            const defMsg = document.querySelector("h2.title");
            defImg.src = "./images/Scipio_victory.jpg";
            defMsg.textContent = "Scipio has successfully counter-attacked Rome!"
            result.textContent = ("The computer won, try again!")
        }
    } else if (b == 'Paper' && a == 'Scissor'){
        x = 'lose';
        message.textContent = ("You " + x + "! " + a + " beats " + b + ".");
        comp += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        if (comp == 5) {
            player = 0
            comp = 0
            const defImg = document.querySelector("img");
            const defMsg = document.querySelector("h2.title");
            defImg.src = "./images/Scipio_victory.jpg";
            defMsg.textContent = "Scipio has successfully counter-attacked Rome!"
            result.textContent = ("The computer won, try again!")
        }
    } else if (b == 'Scissor' && a =='Rock') {
        x = 'lose';
        message.textContent = ("You " + x + "! " + a + " beats " + b + ".");
        comp += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        if (comp == 5) {
            player = 0
            comp = 0
            const defImg = document.querySelector("img");
            const defMsg = document.querySelector("h2.title");
            defImg.src = "./images/Scipio_victory.jpg";
            defMsg.textContent = "Scipio has successfully counter-attacked Rome!"
            result.textContent = ("The computer won, try again!")
        }
    }

    else if (b == 'Paper' && a == 'Paper') {
        x = 'tie';
        message.textContent = ("It's a " + x + "! No winners...");
        result.textContent = ("Player: " + player + "\nComp: " + comp);
    } else if (b == 'Scissor' && a == 'Scissor') {
        x = 'tie';
        message.textContent = ("It's a " + x + "! No winners...");
        result.textContent = ("Player: " + player + "\nComp: " + comp);
    } else if (b == 'Rock' && a == 'Rock') {
        x = 'tie';
        message.textContent = ("It's a " + x + "! No winners...");
        result.textContent = ("Player: " + player + "\nComp: " + comp);
    }
}

const container = document.querySelector('.container');

const b1 = document.querySelector('button#rock');
b1.addEventListener('click', () => RPS('Rock'));

const b2 = document.querySelector('button#scissor');
b2.addEventListener('click', () => RPS('Scissor'));

const b3 = document.querySelector('button#paper');
b3.addEventListener('click', () => RPS('Paper'));


/*
buttons = Array.from(document.querySelectorAll('id'));
buttons.forEach(app());
*/

/*
function game(){
    Player = 0;
    Computer = 0;

    g1 = RPS();
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

    if (Player > Computer) {
        return ("You had the most wins (" + Player + ") out of five rounds! Congratulations, you beat the computer!")
    } else if (Player < Computer) {
        return ("The computer had the most wins (" + Computer + ") out of five rounds. Sorry, you lost.")
    }
    return ("You have the same score as the computer. This is a tie!")
}
*/

/*
console.log(game());
*/