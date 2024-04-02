let score = {
  Win : 0,
  Lost : 0,
  Draw : 0,
};
function genrateCompChoice() {
    let randomNumb = Math.random() * 3; //this will genrate random numb bw 0-3
    if (randomNumb > 0 && randomNumb <= 1) {
      return "Bat";
    } else if (randomNumb > 1 && randomNumb <= 2) {
      return "Ball";
    } else {
      return "Stump";
    }
  }

  function getResult(userMove, CompMove) {
    if (userMove === "Bat") {
      if (CompMove === "Ball") {
        score.Win++;
        return "user won";
      } else if (CompMove === "Bat") {
        score.Draw++
        return "Draw";
      } else {
        score.Lost++;
        return "computer won";
      }
    } else if (userMove === "Ball") {
      if (CompMove === "Ball") {
      score.Draw++;
        return "Draw";
      } else if (CompMove === "Bat") {
        score.Lost++
        return "Computer won";
      } else {
        score.Win++;
        return "user won";
      }
    } else {
      if (CompMove === "Stump") {
        score.Draw++;
        return "Draw";
      } else if (CompMove === "Ball") {
        score.Lost++;
        return "Computer won";
      } else {
        score.Win++;
        return "User won";
      }
    }
  }
  

  function showResult(userMove , CompMove , result){
    document.querySelector('#score').innerText =`Win = ${score.Win} , Loss = ${score.Lost} , Draw = ${score.Draw}`;
    alert(`You have chossen ${userMove}. Computer choice is ${CompMove} and ${result}`);
  }
  
  