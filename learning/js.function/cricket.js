

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
        return "user won";
      } else if (CompMove === "Bat") {
        return "Draw";
      } else {
        return "computer won";
      }
    } else if (userMove === "Ball") {
      if (CompMove === "Ball") {
        return "Draw";
      } else if (CompMove === "Bat") {
        return "Computer won";
      } else {
        return "user won";
      }
    } else {
      if (CompMove === "Stump") {
        return "Draw";
      } else if (CompMove === "Ball") {
        return "Computer won";
      } else {
        return "User won";
      }
    }
  }

  function showResult(userMove , CompMove , result){
    alert(`You have chossen ${userMove}. Computer choice is ${CompMove} and ${result}`);
  }