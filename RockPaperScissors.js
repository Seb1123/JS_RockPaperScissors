// Functions used inside of RPS_round()
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

function decideRoundOutcome(playerChoice,computerChoice) {
    if (playerChoice == 'Rock' && computerChoice == 'Scissor'){
        player += 1;
        return 'win'
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        player += 1;
        return 'win'
    } else if (playerChoice == 'Scissor' && computerChoice == 'Paper') {
        player += 1;
        return 'win'
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        comp += 1;
        return 'lose'
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissor') {
        comp += 1;
        return 'lose'
    } else if (playerChoice == 'Scissor' && computerChoice =='Rock') {
        comp += 1;
        return 'lose'
    }
    return 'tie'
}

function printRoundOutcome(playerChoice,computerChoice,outcome) {
    compMess.textContent = ("\n The computer chose... " + computerChoice + "! \n\n");
    playerMess.textContent = ("\n You chose... " + playerChoice + "! \n\n");
    if (outcome == 'win') {
        roundMessage.textContent = ("You " + outcome + "! " + playerChoice + " beats " + computerChoice + "."); 
    } else if (outcome == 'lose') {
        roundMessage.textContent = ("You " + outcome + "! " + computerChoice + " beats " + playerChoice + "."); 
    } else if (outcome == 'tie') {
        roundMessage.textContent = ("It's a " + outcome + "! No winners...");
    }
    gameScore.textContent = ("Player: " + player + "\nComp: " + comp);
}

function revealBattle(result,num1,num2) {
    const container = document.querySelector(".container");

    // If Player won the battle
    if (result == 'win' && num1 == 1) {
        battle(container, TrebiaTitle, TrebiaText, TrebiaImg);
    } else if (result == 'win' && num1 == 2) {
        battle(container, TrasimeneTitle, TrasimeneText, TrasimeneImg);
    } else if (result == 'win' && num1 == 3) {
        battle(container, CannaeTitle, CannaeText, CannaeImg);
    } else if (result == 'win' && num1 == 4) {
        battle(container, HerdoniaTitle, HerdoniaText, HerdoniaImg);
    } else if (result == 'win' && num1 == 5) {
        battle(container, UpperBaetisTitle, UpperBaetisText, UpperBaetisImg);
    }

    // If Comp won the battle
    if (result == 'lose' && num2 == 1) {
        battle(container, MetaurusTitle, MetaurusText, MetaurusImg);
    } else if (result == 'lose' && num2 == 2) {
        battle(container, IlipaTitle, IlipaText, IlipaImg);
    } else if (result == 'lose' && num2 == 3) {
        battle(container, CampiMagniTitle, CampiMagniText, CampiMagniImg);
    } else if (result == 'lose' && num2 == 4) {
        battle(container, ZamaTitle, ZamaText, ZamaImg);
    } else if (result == 'lose' && num2 == 5) {
        battle(container, SyracuseTitle, SyracuseText, SyracuseImg);
    }
}

function battle(section, battleTitle, battleText, battleImg) {
    // Create the elements to be appended in order of appearance
    const nextSection = document.createElement("div");
    const sectionTitle = document.createElement("h1");
    const sectionText = document.createElement("p");
    const sectionImg = document.createElement("img");

    // Fill the new elements with content
    sectionTitle.textContent = battleTitle;
    sectionText.textContent = battleText;
    sectionImg.src = battleImg;

    // Append the new elements into the DOM
    nextSection.appendChild(sectionTitle);
    nextSection.appendChild(sectionText);
    nextSection.appendChild(sectionImg);
    section.appendChild(nextSection);

    // Move messages and interactive content to the bottom
    section.appendChild(document.querySelector("#messages"));
    section.appendChild(document.querySelector(".interact-content"));

    // Style the new elements
    nextSection.style.cssText = " display: flex; flex-flow: column nowrap; align-items: center; align-self: center; color: black; box-sizing: content-box; text-align: center; margin: 25vh 0 5vh 0; max-width: 700px; height: 80vh; font-size: 20px; gap: 15px; background-color:#CD853F; border-radius: 20px;";
    sectionTitle.style.cssText = "align-self: flex-start; margin-left: 5px;";
    sectionImg.style.cssText = "width: 500px; height: 300px; border-radius: 20px; border: 5px solid black;"
    // section.style.cssText = "border: 10px solid blue;";

    nextSection.scrollIntoView({
        behavior: "smooth"
    });
}

function gameReset () {
    player = 0;
    comp = 0;
}

function showVictory () {
    // Create the elements to be appended in order of appearance
    const vicMsg = document.createElement("h1");
    const vicImg = document.createElement("img");
    
    // Fill the new elements with content
    vicMsg.textContent = "Hannibal has witheld his position against the Roman Empire!"
    vicImg.src = "./images/Hannibal_victory.jpg"
    
    // Append the new elements into the DOM
    document.querySelector(".container").appendChild(vicMsg);
    document.querySelector(".container").appendChild(vicImg);

    // Style the new elements
    vicMsg.style.cssText = "align-self: center";
    vicImg.style.cssText = "align-self: center; border-radius: 20px; border: 5px solid black;";

    // Update the game
    roundMessage.textContent = ("You beat the computer, congratulations!")

    setTimeout(() => {
        vicImg.scrollIntoView({
            behavior: "smooth"
        });
    }, 10);   
}

function showDefeat (){
    // Create the elements to be appended in order of appearance
    const defMsg = document.createElement("h1");
    const defImg = document.createElement("img");
    
    // Fill the new elements with content
    defMsg.textContent = "Scipio has successfully counter-attacked Carthage!"
    defImg.src = "./images/Scipio_victory.jpg";

    // Append the new elements into the DOM
    document.querySelector(".container").appendChild(defMsg);
    document.querySelector(".container").appendChild(defImg);

    // Style the new elements
    defMsg.style.cssText = "align-self: center";
    defImg.style.cssText = "align-self: center; border-radius: 20px; border: 5px solid black";

    // Update the game
    roundMessage.textContent = ("The computer won, try again!")

    setTimeout(() => {
        defImg.scrollIntoView({
            behavior: "smooth"
        });
    }, 10);    
}

function RPS_round(playerChoice) {

    // Get computer choice
    computerChoice = getComputerChoice();

    // outcome = decideRoundOutcome(playerChoice,computerChoice) - look at player and computer choices and decide winner/loser/tie
    let outcome = decideRoundOutcome(playerChoice,computerChoice);

    // printRoundOutcome(playerChoice,computerChoice,outcome) - prints message about the round outcome. 
    printRoundOutcome(playerChoice,computerChoice,outcome);

    // revealBattle(outcome,player,comp) - animation for the outcome of the battle
    revealBattle(outcome,player,comp);

    // determine whether the game is over and who won
    if (player == 5) {
        // gameReset() - resets the comp's and player's score
        gameReset();
        // showVictory() - shows victory animation
        showVictory();
        return null     
    } else if (comp == 5){
        gameReset();
        // showDefeat() - shows defeat animation
        showDefeat();
        return null
    }
}

const compMess = document.querySelector('div#computer-message');
const playerMess = document.querySelector('div#player-message');
const roundMessage = document.querySelector('div#game-message');
const gameScore = document.querySelector('div#result-message');
const messages = document.querySelector('#messages');
messages.style.cssText = "margin: 0  0 3vh 3vh; font-size: 20px; font-weight: 600;"

let player = 0;
let comp = 0;

// Carthaginian victories:
const TrebiaTitle = "The Battle of Trebia";
const TrebiaText = "The Battle of Trebia (218 BCE) was the first major clash of the Second Punic War, where Hannibal decisively defeated the Romans under Tiberius Sempronius Longus near the Trebia River in northern Italy. Hannibal lured the Romans into an ambush by provoking them to cross the icy river, leaving them cold and fatigued. Using a well-executed double-envelopment tactic, he deployed hidden forces led by his brother Mago to attack the Romans from the rear while his cavalry and infantry overwhelmed their flanks. The result was a devastating Carthaginian victory, with heavy Roman losses and a further boost to Hannibal’s reputation as a master tactician. This battle set the tone for Hannibal’s successful early campaigns in Italy.";
const TrebiaImg = "./images/battle_of_Trebbia.jpg";

const TrasimeneTitle = "The Battle of Trasimene";
const TrasimeneText = "The Battle of Lake Trasimene (217 BCE) was a pivotal encounter during the Second Punic War, where Hannibal orchestrated one of the largest and most successful ambushes in military history. The Carthaginian general lured the Roman army, led by Gaius Flaminius, into a narrow valley along the northern shore of Lake Trasimene in central Italy. Using the terrain to his advantage, Hannibal concealed his troops in the surrounding hills and attacked as the Romans marched into the trap. The Carthaginian forces quickly overwhelmed the Roman column, leaving little room for escape. Nearly the entire Roman force of approximately 30,000 soldiers was either killed or captured, with Flaminius himself falling in battle. This crushing defeat not only showcased Hannibal's tactical brilliance but also caused widespread panic in Rome and demonstrated the vulnerability of Roman forces to Hannibal’s unconventional warfare.";
const TrasimeneImg = "./images/Battle_of_Lake_Trasimene.jpg";

const CannaeTitle = "The Battle of Cannae";
const CannaeText = "The Battle of Cannae (216 BCE) was one of Hannibal’s most famous victories and a masterclass in military strategy during the Second Punic War. Facing a Roman army of around 86,000 troops under consuls Lucius Aemilius Paullus and Gaius Terentius Varro, Hannibal, with a smaller force of approximately 50,000, executed a brilliant double-envelopment maneuver. Hannibal placed his weaker infantry at the center, luring the Romans into overextending their lines, while his elite cavalry defeated the Roman cavalry and attacked from the flanks and rear. Encircled and unable to escape, the Roman army suffered catastrophic losses, with an estimated 50,000–70,000 killed or captured. The battle marked a devastating blow to Roman morale and military power, cementing Hannibal’s reputation as one of history's greatest generals.";
const CannaeImg = "./images/battle_of_Cannae.jpg";

const HerdoniaTitle = "The Battle of Herdonia";
const HerdoniaText = "The Battle of Herdonia (212 BCE) was a significant victory for Hannibal during the Second Punic War, occurring in southern Italy near the town of Herdonia (modern-day Ordona). The Roman consul Gnaeus Fulvius Centumalus led an army to relieve a Roman garrison in the region, but Hannibal, using his superior knowledge of the terrain, set a trap for the Roman forces. Hannibal's troops ambushed the Romans in a narrow pass, surrounding them with a combination of infantry and cavalry. The Carthaginians decisively defeated the Romans, inflicting heavy casualties and forcing the remainder of the Roman force to retreat. This victory further solidified Hannibal's control over much of southern Italy and showcased his ability to exploit the Roman army's vulnerabilities, despite being far from his home base in Carthage.";
const HerdoniaImg = "./images/battle_of_Herdonia.jpg";

const UpperBaetisTitle = "The Battle of Upper Baetis";
const UpperBaetisText = "The Battle of Upper Baetis (211 BCE) was a critical engagement in the Second Punic War, fought in the Iberian Peninsula between Carthaginian forces, led by Hasdrubal Barca, and Roman forces commanded by the Scipio brothers, Publius and Gnaeus Cornelius Scipio. The Carthaginians used superior coordination and numerical advantage to divide and defeat the Roman armies in two separate battles near the Baetis River (modern-day Guadalquivir). Both Scipio brothers were killed, leading to a catastrophic Roman defeat and the collapse of their campaign in Spain. The victory temporarily solidified Carthaginian control over the region and allowed Hasdrubal to prepare for his eventual march into Italy to reinforce his brother Hannibal.";
const UpperBaetisImg = "./images/battle_of_UpperBaetis.jpg";

// Roman victories:
const MetaurusTitle = "The Battle of Metaurus";
const MetaurusText = "The Battle of Metaurus (207 BCE) was a decisive turning point in the Second Punic War, where Roman forces, led by consuls Marcus Livius Salinator and Gaius Claudius Nero, defeated Hasdrubal Barca’s Carthaginian army in northern Italy. Hasdrubal had crossed the Alps to reinforce his brother Hannibal but was intercepted before the two could unite. Using superior coordination and strategic deception, the Romans concealed Nero’s forces until the battle began, giving them the advantage. Hasdrubal’s army was outmaneuvered, and he was killed in the fighting. His head was sent to Hannibal’s camp as a grim message. The victory shattered Carthaginian hopes of combining their forces in Italy, marking a turning point in the war in favor of Rome.";
const MetaurusImg = "./images/battle_of_Metaurus.jpg";

const IlipaTitle = "The Battle of Ilipa";
const IlipaText = "The Battle of Ilipa (206 BCE) was a decisive Roman victory during the Second Punic War, where Scipio Africanus crushed a much larger Carthaginian army near modern-day Seville in Spain. Facing a force commanded by Hasdrubal Gisco and Mago Barca, Scipio used innovative tactics to outmaneuver his opponents. After days of feigned deployments, Scipio surprised the Carthaginians by reversing the positions of his strongest troops to the flanks, where they quickly overwhelmed the Carthaginian forces. The Roman victory effectively ended Carthaginian control in Iberia, depriving Hannibal of critical resources and reinforcements. This battle cemented Scipio’s reputation as a brilliant commander and paved the way for Rome’s eventual dominance in the war.";
const IlipaImg = "./images/battle_of_Ilipa.jpg";

const CampiMagniTitle = "The Battle of Campi Magni";
const CampiMagniText = "The Battle of Campi Magni (203 BCE) was a crucial engagement during the later stages of the Second Punic War, fought in North Africa between Roman forces led by Scipio Africanus and a Carthaginian army under Hasdrubal Gisco and Syphax, the king of the Numidians. Scipio, employing his superior tactical skills, decisively defeated the Carthaginian-Numidian alliance. He used a combination of well-drilled Roman legions and Numidian cavalry loyal to Rome to rout the enemy forces, destroying much of Carthage's remaining military strength. The defeat weakened Carthage's position significantly, forcing them to recall Hannibal from Italy and setting the stage for the decisive Battle of Zama. This victory demonstrated Scipio’s ability to adapt his strategies to different theaters of war.";
const CampiMagniImg = "./images/battle_of_CampiMagni.jpg";

const ZamaTitle = "The Battle of Zama";
const ZamaText = "The Battle of Zama (202 BCE) marked the climactic end of the Second Punic War, where Scipio Africanus, leading Roman and allied Numidian forces, defeated Hannibal Barca on Carthaginian soil. Hannibal, recalled from Italy, commanded a large army that included war elephants and seasoned troops. Scipio countered Hannibal’s tactics with disciplined formations, exploiting gaps created by the elephants and using superior cavalry led by the Numidian king Masinissa to flank and rout the Carthaginian forces. Hannibal’s army suffered a devastating defeat, with tens of thousands killed or captured. This Roman victory forced Carthage to sue for peace, ending its status as a major Mediterranean power and securing Rome’s dominance in the ancient world.";
const ZamaImg = "./images/battle_of_Zama.jpg";

const SyracuseTitle = "The Siege of Syracuse";
const SyracuseText = "The Siege of Syracuse (214–212 BCE) was a critical conflict during the Second Punic War, where Roman forces under Marcus Claudius Marcellus captured the wealthy and strategically important city of Syracuse in Sicily. The city, allied with Carthage, resisted Rome with the help of advanced defenses designed by the famed mathematician and engineer Archimedes, who devised war machines like giant claws and mirrors to repel Roman attacks. Despite these innovations, the Romans eventually breached the city's walls through a surprise night assault. The capture of Syracuse solidified Roman control over Sicily, but the siege is also remembered for the tragic death of Archimedes, reportedly killed by a Roman soldier despite orders to spare him. This victory bolstered Rome’s position in the Mediterranean.";
const SyracuseImg = "./images/battle_of_Syracuse.jpg";


const b1 = document.querySelector('.infantry');
b1.addEventListener('click', () => RPS_round('Rock'));

const b2 = document.querySelector('.cavalry');
b2.addEventListener('click', () => RPS_round('Paper'));

const b3 = document.querySelector('.archery');
b3.addEventListener('click', () => RPS_round('Scissor'));

