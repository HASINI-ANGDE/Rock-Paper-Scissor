let userscore=0;
let compscore=0;
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const genCompChoice=()=>{
    const opt=["rock","paper","scissors"];
   const randidx=Math.floor(Math.random()*3);
   return opt[randidx];
}
const draw=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw.Play again!";
    msg.style.backgroundColor="black";
}
const showwinner=(userwin,choiceid,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText="you won! "+choiceid+" beats "+compchoice;
        msg.style.backgroundColor="green";
    }
    else {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText="you lost! "+compchoice+" beats your "+choiceid;
        msg.style.backgroundColor="red";
    }
};
const playgame=(choiceid)=>{
     console.log("user choice:",choiceid);
     const compchoice= genCompChoice();
     console.log("comp choice:",compchoice);
     if(choiceid===compchoice){
        draw();
     }
     else{
        let userwin=true;
        if(choiceid==="rock"){
             userwin= compchoice==="paper"?false:true;
        }
        else if(choiceid==="paper"){
             userwin= compchoice==="scissors"?false:true;
        }
        else {
             userwin= compchoice==="rock"?false:true;
        }
        showwinner(userwin,choiceid,compchoice);
     }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
        playgame(choiceid);
    })
})