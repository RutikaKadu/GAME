let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const uchoice = document.querySelector("#uchoice");
const cchoice = document.querySelector("#cchoice");


const drawGame = () =>{
    console.log("game is draw.");
}

const getCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win..");
        msg.innerText=("You Win 😊");
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose..");
         msg.innerText=("You Lose ☹");
         msg.style.backgroundColor = "red";
    }
}
const playGame=(userChoice=>{
    console.log("user choice = ",userChoice);
    const compChoice=getCompChoice();
    console.log("computer choice = ",compChoice);
    

    if(userChoice===compChoice){
        drawGame();
         msg.innerText=("Game is draw..");
         msg.style.backgroundColor = "rgb(10, 13, 11)";

         uchoice.innerText=userChoice;
         cchoice.innerText=compChoice;
    }
    else{
        let userwin = true;
        if(userChoice==="rock"){
            userwin = compChoice ==="paper" ? false:true;
            uchoice.innerText="rock";
            cchoice.innerText=compChoice;
        }else if(userChoice==="paper"){
            userwin = compChoice ==="scissors" ? false:true;
            uchoice.innerText="paper";
            cchoice.innerText=compChoice;
        }else{
            userwin = compChoice ==="rock" ? false:true;
            uchoice.innerText="scissors";
            cchoice.innerText=compChoice;
        }

        showWinner(userwin,userChoice,compChoice);
    }
})


choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    })
})



    


