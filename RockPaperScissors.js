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

function battle(section, battle) {
    const nextSection = document.createElement("div");
    nextSection.textContent = battle;
    section.appendChild(nextSection);
    section.appendChild(document.querySelector(".interact-content"));
    nextSection.style.cssText = " display: flex; align-items: center; color: black; box-sizing: content-box; text-align: center; margin: 25vh 0 10vh 0; width: 100vw; height: 50vh; border: 2px solid red";
    nextSection.scrollIntoView({
        behavior: "smooth"
    });
}

function revealBattle(result,num1,num2) {
    const container = document.querySelector(".container");

    // If Player won the battle
    if (result == 'win' && num1 == 1) {
        battle(container, Trebia);
    } else if (result == 'win' && num1 == 2) {
        battle(container, Trasimene);
    } else if (result == 'win' && num1 == 3) {
        battle(container, Cannae);
    } else if (result == 'win' && num1 == 4) {
        battle(container, Herdonia);
    } else if (result == 'win' && num1 == 5) {
        battle(container, UpperBaetis);
    }

    // If Comp won the battle
    if (result == 'lose' && num2 == 1) {
        battle(container, Metaurus);
    } else if (result == 'lose' && num2 == 2) {
        battle(container, Ilipa);
    } else if (result == 'lose' && num2 == 3) {
        battle(container, CampiMagni);
    } else if (result == 'lose' && num2 == 4) {
        battle(container, Zama);
    } else if (result == 'lose' && num2 == 5) {
        battle(container, Syracuse);
    }
}

function decideWin () {

}

const compmess = document.querySelector('div#computer-message');
const message = document.querySelector('div#game-message');
const result = document.querySelector('div#result-message');

let player = 0;
let comp = 0;

// Carthaginian victories:
let Trebia = "The Battle of Trebia (218 BCE) was the first major clash of the Second Punic War, where Hannibal decisively defeated the Romans under Tiberius Sempronius Longus near the Trebia River in northern Italy. Hannibal lured the Romans into an ambush by provoking them to cross the icy river, leaving them cold and fatigued. Using a well-executed double-envelopment tactic, he deployed hidden forces led by his brother Mago to attack the Romans from the rear while his cavalry and infantry overwhelmed their flanks. The result was a devastating Carthaginian victory, with heavy Roman losses and a further boost to Hannibal’s reputation as a master tactician. This battle set the tone for Hannibal’s successful early campaigns in Italy.";
let Trasimene = "The Battle of Lake Trasimene (217 BCE) was a pivotal encounter during the Second Punic War, where Hannibal orchestrated one of the largest and most successful ambushes in military history. The Carthaginian general lured the Roman army, led by Gaius Flaminius, into a narrow valley along the northern shore of Lake Trasimene in central Italy. Using the terrain to his advantage, Hannibal concealed his troops in the surrounding hills and attacked as the Romans marched into the trap. The Carthaginian forces quickly overwhelmed the Roman column, leaving little room for escape. Nearly the entire Roman force of approximately 30,000 soldiers was either killed or captured, with Flaminius himself falling in battle. This crushing defeat not only showcased Hannibal's tactical brilliance but also caused widespread panic in Rome and demonstrated the vulnerability of Roman forces to Hannibal’s unconventional warfare.";
let Cannae = "The Battle of Cannae (216 BCE) was one of Hannibal’s most famous victories and a masterclass in military strategy during the Second Punic War. Facing a Roman army of around 86,000 troops under consuls Lucius Aemilius Paullus and Gaius Terentius Varro, Hannibal, with a smaller force of approximately 50,000, executed a brilliant double-envelopment maneuver. Hannibal placed his weaker infantry at the center, luring the Romans into overextending their lines, while his elite cavalry defeated the Roman cavalry and attacked from the flanks and rear. Encircled and unable to escape, the Roman army suffered catastrophic losses, with an estimated 50,000–70,000 killed or captured. The battle marked a devastating blow to Roman morale and military power, cementing Hannibal’s reputation as one of history's greatest generals.";
let Herdonia = "The Battle of Herdonia (212 BCE) was a significant victory for Hannibal during the Second Punic War, occurring in southern Italy near the town of Herdonia (modern-day Ordona). The Roman consul Gnaeus Fulvius Centumalus led an army to relieve a Roman garrison in the region, but Hannibal, using his superior knowledge of the terrain, set a trap for the Roman forces. Hannibal's troops ambushed the Romans in a narrow pass, surrounding them with a combination of infantry and cavalry. The Carthaginians decisively defeated the Romans, inflicting heavy casualties and forcing the remainder of the Roman force to retreat. This victory further solidified Hannibal's control over much of southern Italy and showcased his ability to exploit the Roman army's vulnerabilities, despite being far from his home base in Carthage.";
let UpperBaetis = "The Battle of Upper Baetis (211 BCE) was a critical engagement in the Second Punic War, fought in the Iberian Peninsula between Carthaginian forces, led by Hasdrubal Barca, and Roman forces commanded by the Scipio brothers, Publius and Gnaeus Cornelius Scipio. The Carthaginians used superior coordination and numerical advantage to divide and defeat the Roman armies in two separate battles near the Baetis River (modern-day Guadalquivir). Both Scipio brothers were killed, leading to a catastrophic Roman defeat and the collapse of their campaign in Spain. The victory temporarily solidified Carthaginian control over the region and allowed Hasdrubal to prepare for his eventual march into Italy to reinforce his brother Hannibal.";

// Roman victories:
let Metaurus = "The Battle of Metaurus (207 BCE) was a decisive turning point in the Second Punic War, where Roman forces, led by consuls Marcus Livius Salinator and Gaius Claudius Nero, defeated Hasdrubal Barca’s Carthaginian army in northern Italy. Hasdrubal had crossed the Alps to reinforce his brother Hannibal but was intercepted before the two could unite. Using superior coordination and strategic deception, the Romans concealed Nero’s forces until the battle began, giving them the advantage. Hasdrubal’s army was outmaneuvered, and he was killed in the fighting. His head was sent to Hannibal’s camp as a grim message. The victory shattered Carthaginian hopes of combining their forces in Italy, marking a turning point in the war in favor of Rome.";
let Ilipa = "The Battle of Ilipa (206 BCE) was a decisive Roman victory during the Second Punic War, where Scipio Africanus crushed a much larger Carthaginian army near modern-day Seville in Spain. Facing a force commanded by Hasdrubal Gisco and Mago Barca, Scipio used innovative tactics to outmaneuver his opponents. After days of feigned deployments, Scipio surprised the Carthaginians by reversing the positions of his strongest troops to the flanks, where they quickly overwhelmed the Carthaginian forces. The Roman victory effectively ended Carthaginian control in Iberia, depriving Hannibal of critical resources and reinforcements. This battle cemented Scipio’s reputation as a brilliant commander and paved the way for Rome’s eventual dominance in the war.";
let CampiMagni = "The Battle of Campi Magni (203 BCE) was a crucial engagement during the later stages of the Second Punic War, fought in North Africa between Roman forces led by Scipio Africanus and a Carthaginian army under Hasdrubal Gisco and Syphax, the king of the Numidians. Scipio, employing his superior tactical skills, decisively defeated the Carthaginian-Numidian alliance. He used a combination of well-drilled Roman legions and Numidian cavalry loyal to Rome to rout the enemy forces, destroying much of Carthage's remaining military strength. The defeat weakened Carthage's position significantly, forcing them to recall Hannibal from Italy and setting the stage for the decisive Battle of Zama. This victory demonstrated Scipio’s ability to adapt his strategies to different theaters of war.";
let Zama = "The Battle of Zama (202 BCE) marked the climactic end of the Second Punic War, where Scipio Africanus, leading Roman and allied Numidian forces, defeated Hannibal Barca on Carthaginian soil. Hannibal, recalled from Italy, commanded a large army that included war elephants and seasoned troops. Scipio countered Hannibal’s tactics with disciplined formations, exploiting gaps created by the elephants and using superior cavalry led by the Numidian king Masinissa to flank and rout the Carthaginian forces. Hannibal’s army suffered a devastating defeat, with tens of thousands killed or captured. This Roman victory forced Carthage to sue for peace, ending its status as a major Mediterranean power and securing Rome’s dominance in the ancient world.";
let Syracuse = "The Siege of Syracuse (214–212 BCE) was a critical conflict during the Second Punic War, where Roman forces under Marcus Claudius Marcellus captured the wealthy and strategically important city of Syracuse in Sicily. The city, allied with Carthage, resisted Rome with the help of advanced defenses designed by the famed mathematician and engineer Archimedes, who devised war machines like giant claws and mirrors to repel Roman attacks. Despite these innovations, the Romans eventually breached the city's walls through a surprise night assault. The capture of Syracuse solidified Roman control over Sicily, but the siege is also remembered for the tragic death of Archimedes, reportedly killed by a Roman soldier despite orders to spare him. This victory bolstered Rome’s position in the Mediterranean.";

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
        revealBattle(x,player,comp);
        if (player == 5) {
            player = 0
            comp = 0
            const vicImg = document.createElement("img");
            const vicMsg = document.createElement("h1");
            vicImg.src = "./images/Hannibal_victory.jpg"
            vicMsg.textContent = "Hannibal has witheld his position against the Roman Empire!"
            document.querySelector(".container").appendChild(vicMsg);
            document.querySelector(".container").appendChild(vicImg);
            result.textContent = ("You beat the computer, congratulations!")
        }
    } else if (b == 'Paper' && a == 'Rock') {
        x = 'win';
        message.textContent = ("You " + x + "! " + b + " beats " + a + ".");
        player += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        revealBattle(x,player,comp);
        if (player == 5) {
            player = 0
            comp = 0
            const vicImg = document.createElement("img");
            const vicMsg = document.createElement("h1");
            vicImg.src = "./images/Hannibal_victory.jpg"
            vicMsg.textContent = "Hannibal has witheld his position against the Roman Empire!"
            document.querySelector(".container").appendChild(vicMsg);
            document.querySelector(".container").appendChild(vicImg);
            result.textContent = ("You beat the computer, congratulations!")
        }
    }  else if (b == 'Scissor' && a == 'Paper') {
        x = 'win';
        message.textContent = ("You " + x + "! " + b + " beats " + a + ".");
        player += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        revealBattle(x,player,comp);
        if (player == 5) {
            player = 0
            comp = 0
            const vicImg = document.createElement("img");
            const vicMsg = document.createElement("h1");
            vicImg.src = "./images/Hannibal_victory.jpg"
            vicMsg.textContent = "Hannibal has witheld his position against the Roman Empire!"
            document.querySelector(".container").appendChild(vicMsg);
            document.querySelector(".container").appendChild(vicImg);
            result.textContent = ("You beat the computer, congratulations!")
        }
        
    }
    
    else if (b == 'Rock' && a == 'Paper'){
        x = 'lose';
        message.textContent = ("You " + x + "! " + a + " beats " + b + ".");
        comp += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        revealBattle(x,player,comp);
        if (comp == 5) {
            player = 0
            comp = 0
            const defImg = document.createElement("img");
            const defMsg = document.createElement("h1");
            defImg.src = "./images/Scipio_victory.jpg";
            defMsg.textContent = "Scipio has successfully counter-attacked Carthage!"
            document.querySelector(".container").appendChild(defMsg);
            document.querySelector(".container").appendChild(defImg);
            result.textContent = ("The computer won, try again!")
        }
    } else if (b == 'Paper' && a == 'Scissor'){
        x = 'lose';
        message.textContent = ("You " + x + "! " + a + " beats " + b + ".");
        comp += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        revealBattle(x,player,comp);
        if (comp == 5) {
            player = 0
            comp = 0
            const defImg = document.createElement("img");
            const defMsg = document.createElement("h1");
            defImg.src = "./images/Scipio_victory.jpg";
            defMsg.textContent = "Scipio has successfully counter-attacked Carthage!"
            document.querySelector(".container").appendChild(defMsg);
            document.querySelector(".container").appendChild(defImg);
            result.textContent = ("The computer won, try again!")
        }
    } else if (b == 'Scissor' && a =='Rock') {
        x = 'lose';
        message.textContent = ("You " + x + "! " + a + " beats " + b + ".");
        comp += 1;
        result.textContent = ("Player: " + player + "\nComp: " + comp);
        revealBattle(x,player,comp);
        if (comp == 5) {
            player = 0
            comp = 0
            const defImg = document.createElement("img");
            const defMsg = document.createElement("h1");
            defImg.src = "./images/Scipio_victory.jpg";
            defMsg.textContent = "Scipio has successfully counter-attacked Carthage!"
            document.querySelector(".container").appendChild(defMsg);
            document.querySelector(".container").appendChild(defImg);
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

const b1 = document.querySelector('.infantry');
b1.addEventListener('click', () => RPS('Rock'));

const b2 = document.querySelector('.cavalry');
b2.addEventListener('click', () => RPS('Scissor'));

const b3 = document.querySelector('.archery');
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