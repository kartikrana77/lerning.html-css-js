let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
   score = scoreStr ? JSON.parse(scoreStr):{
    Win : 0,
    Lost : 0,
    Draw : 0,
  };
  
  
  score.displayScore = function(){
    return `Win ${score.Win} , Lost ${score.Lost} , Draw ${score.Draw}`
  };
  showResult();
}
;

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
        return "User won";
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
        return "User won";
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
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('#score').innerText = score.displayScore();
    document.querySelector('#user-move').innerText = 
    userMove !==undefined ?`User move =${userMove}`: userMove = '0';
    document.querySelector('#comp-move').innerText = 
    CompMove !== undefined ?`Computer move =${CompMove}`: CompMove = '0';
    document.querySelector('#result').innerText = result || '0';
  }
  
 