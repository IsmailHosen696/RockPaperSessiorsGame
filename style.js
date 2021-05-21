const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
let forText = document.getElementById('for_text');
let youScrore = document.querySelector('.you_scrore');
let compScrore = document.querySelector('.comp_scrore');
let finalComp = document.getElementById('finalComp');
let finalUser = document.getElementById('finalUser');
let music = new Audio('./music/music.mp3');
let move = new Audio('./music/move.mp3');
let user = 0;
let comp = 0;

function game(byUser) {
    let compturn = [ 'rock', 'paper', 'scissors' ];
    let randomTurn = () => {
        return compturn[ Math.floor(Math.random() * compturn.length) ]
    };
    let computerTurn = randomTurn();
    if (computerTurn === byUser) {
        finalComp.src = `images/${computerTurn}.png`;
        finalUser.src = `images/${byUser}.png`;
        forText.textContent = `its a tie! you chose ${byUser} and computer turn is ${computerTurn}`
    }
    else if (computerTurn === 'rock' && byUser === 'paper') {
        finalComp.src = `images/${computerTurn}.png`;
        finalUser.src = `images/${byUser}.png`;
        user = user + 1;
        youScrore.innerHTML = user;
        forText.textContent = `You win ! your choose ${byUser} and computer turn is ${computerTurn}`
    }
    else if (computerTurn === 'paper' && byUser === 'rock') {
        finalComp.src = `images/${computerTurn}.png`;
        finalUser.src = `images/${byUser}.png`;
        comp = comp + 1;
        compScrore.innerHTML = comp;
        forText.textContent = `You lose ! your choose ${byUser} and computer turn is ${computerTurn}`
    }
    else if (computerTurn === 'paper' && byUser === 'scissors') {
        finalComp.src = `images/${computerTurn}.png`;
        finalUser.src = `images/${byUser}.png`;
        user = user + 1;
        youScrore.innerHTML = user;
        forText.textContent = `You Win ! your choose ${byUser} and computer turn is ${computerTurn}`
    }
    else if (computerTurn === 'scissors' && byUser === 'paper') {
        finalComp.src = `images/${computerTurn}.png`;
        finalUser.src = `images/${byUser}.png`;
        comp = comp + 1;
        compScrore.innerHTML = comp;
        forText.textContent = `You lose ! your choose ${byUser} and computer turn is ${computerTurn}`
    }
    else if (computerTurn === 'rock' && byUser === 'scissors') {
        finalComp.src = `images/${computerTurn}.png`;
        finalUser.src = `images/${byUser}.png`;
        comp = comp + 1;
        compScrore.innerHTML = comp;
        forText.textContent = `You lose ! your choose ${byUser} and computer turn is ${computerTurn}`
    }
    else if (computerTurn === 'scissors' && byUser === 'rock') {
        finalComp.src = `images/${computerTurn}.png`;
        finalUser.src = `images/${byUser}.png`;
        user = user + 1;
        youScrore.innerHTML = user;
        forText.textContent = `You win ! your choose ${byUser} and computer turn is ${computerTurn}`
    }
    if (user === 20) {
        user = 0;
        comp = 0;
        alert(`You win the match`)
        location.reload()
    }
    else if (comp === 20) {
        user = 0;
        comp = 0;
        alert(`computer win the match`)
        location.reload()
    }
}
function main() {
    rockBtn.addEventListener('click', () => {
        music.play();
        game('rock');
        move.play()
    })
    paperBtn.addEventListener('click', () => {
        music.play();
        game('paper');
        move.play();
    })
    scissorsBtn.addEventListener('click', () => {
        game('scissors');
        music.play();
        move.play();
    })
}
main();