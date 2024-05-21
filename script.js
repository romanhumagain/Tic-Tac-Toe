let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_button");
let msg = document.querySelector(".msg");
let msg_cont = document.querySelector(".msg-container");



let turnO = true;
let turnX = false;

let count = 0;

const winningPatters = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const disableBtn = ()=>{
for(box of boxes){
  box.disabled = true;
}
}

const enableBtn = ()=>{
  for(box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const gameBtn = ()=>{
    turnO = true;
    msg.innerText = "";
    resetBtn.innerText = "Reset";
    enableBtn()
    showDefaultTextColor();

}

const showWinner = (winner)=>{
msg.innerText = `Congratulation, Winner is Player${winner}`;
msg_cont.classList.remove("hide");
resetBtn.innerText="New Game";
disableBtn()
}

const showDefaultTextColor = () => {
  for (let box of boxes) {
    box.style.color = "red";
  }
};


const checkWinner = ()=>{
  for (pattern of winningPatters){
    let pos1Player = boxes[pattern[0]].innerText;
    let pos2Player = boxes[pattern[1]].innerText;
    let pos3Player = boxes[pattern[2]].innerText;

    if (pos1Player !== "" && pos2Player !=="" && pos3Player !==""){
      if (pos1Player === pos2Player && pos2Player === pos3Player){
        showWinner(pos1Player)
        boxes[pattern[0]].style.color = "green";
        boxes[pattern[1]].style.color = "green";
        boxes[pattern[2]].style.color = "green";

        turnO = false;
        turnX = false;
      }
    }
  }
};

for(let box of boxes){
  box.addEventListener("click", ()=>{
    if (turnO){
    box.innerText = "O";
    turnO = false;
    turnX = true;
    count++
    }
    else if(turnX){
      box.innerText = "X";
      turnO = true;
      turnX = false;
      count++
    }
    box.disabled = true;
    if(count>=5){
      checkWinner()
    }
  });
}

resetBtn.addEventListener("click", gameBtn)
