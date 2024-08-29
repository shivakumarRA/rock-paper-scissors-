let userScore=0;
let compscore=0;

const chocies = document.querySelectorAll(".chocie");
const msg=document.querySelector("#msg1");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");

const genComputerChoic = () =>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissors
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showwiner=(userwin)=>{
    if(userwin){
        userScore++;
        usersc.innerText=userScore;
      console.log("you win");
      msg.innerText="you win";
      msg.style.background="green";
    }else{
        compscore++;
        compsc.innerText=compscore;
        console.log("compuer win");
        msg.innerText="you lose";
        msg.style.background="red";
    }
}

const draw=()=>{
    console.log("drawn");
    msg.innerText="game draw";
    msg.style.background="#081b31";
}


const playGame =(userChoice)=>{
   console.log("user choice=",userChoice);
   //generate computer chocie -> modular
      const compchoic=genComputerChoic();
      console.log("computer choice",compchoic);
      if(userChoice === compchoic){
        draw();
      }else{
      let userwin=true;
      if(userChoice === "rock"){
        userwin=compchoic === "paper" ? false : true;

      } else if(userChoice === "paper"){
        userwin=compchoic === "scissors" ? false : true;    
      } else{
        userwin=compchoic === "rock" ? false : true; 
      }
      showwiner(userwin);
    }

};

chocies.forEach((chocie) =>{
    
    chocie.addEventListener("click",()=>{
        const userChoice=chocie.getAttribute("id");
    playGame(userChoice);
    });
});


