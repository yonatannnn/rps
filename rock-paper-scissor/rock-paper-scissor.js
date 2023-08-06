score = {
    win : 0,
    loss: 0,
    tie: 0
}

function computerChoice(){
    let a = Math.random();
    console.log(a);
    if(a < 1/3){
        document.querySelector('.computerChoice').innerHTML= '<img class = "choiceImage" src = "images/rock.jpg">'
        return 'rock'
    }
    else if(a < 2/3){
        document.querySelector('.computerChoice').innerHTML= '<img class = "choiceImage" src = "images/paper.jpg">'
        return 'paper'
    }
    else if(a < 1){
        document.querySelector('.computerChoice').innerHTML= '<img class = "choiceImage" src = "images/scissor.png">'
        return 'scissor'
    }
}




function showChoice(type){
    if(type == 'rock'){
        document.querySelector('.myChoice').innerHTML = '<img class = "choiceImage" src = "images/rock.jpg">'
    }
    if(type == 'paper'){
        document.querySelector('.myChoice').innerHTML = '<img class = "choiceImage" src = "images/paper.jpg">'
    }
    if(type == 'scissor'){
        document.querySelector('.myChoice').innerHTML = '<img class = "choiceImage" src = "images/scissor.png">'
    }

}

function result(myChoice,computerChoice){
    if(myChoice == 'rock'){
        if(computerChoice == 'rock'){
            document.querySelector('.announcer').innerHTML = "tie";
            score.tie += 1;
            document.querySelector('.score').innerHTML = `won : ${score.win}\nloss : ${score.loss}\n tie : ${score.tie}`;
        }

        else if(computerChoice == 'paper'){
            document.querySelector('.announcer').innerHTML = "you lose";
            score.loss ++;
            document.querySelector('.score').innerHTML = `won : ${score.win}\nloss : ${score.loss}\n tie : ${score.tie}`;
        }

        else if(computerChoice == 'scissor'){
            document.querySelector('.announcer').innerHTML = "you won";
            score.win ++ ;
            document.querySelector('.score').innerHTML = `won : ${score.win}\nloss : ${score.loss}\n tie : ${score.tie}`;
        }

    }

    if(myChoice == 'paper'){
        if(computerChoice == 'rock'){
            document.querySelector('.announcer').innerHTML = "you won";
            score.win ++ ;
            document.querySelector('.score').innerHTML = `won : ${score.win}\nloss : ${score.loss}\n tie : ${score.tie}`;
        }

        else if(computerChoice == 'paper'){
            document.querySelector('.announcer').innerHTML = "tie";
            score.tie += 1;
            document.querySelector('.score').innerHTML = `won : ${score.win}\nloss : ${score.loss}\n tie : ${score.tie}`;
        }

        else if(computerChoice == 'scissor'){
            document.querySelector('.announcer').innerHTML = "you loss";
            score.loss ++;
            document.querySelector('.score').innerHTML = `won : ${score.win}\nloss : ${score.loss}\n tie : ${score.tie}`;
        }

    }


    if(myChoice == 'scissor'){
        if(computerChoice == 'rock'){
            document.querySelector('.announcer').innerHTML = "lose";
            score.loss ++;
            document.querySelector('.score').innerHTML = `won : ${score.win}\nloss : ${score.loss}\n tie : ${score.tie}`;
        }

        else if(computerChoice == 'paper'){
            document.querySelector('.announcer').innerHTML = "you won";
            score.win ++ ;
            document.querySelector('.score').innerHTML = `won : ${score.win}\nloss : ${score.loss}\n tie : ${score.tie}`;
        }

        else if(computerChoice == 'scissor'){
            document.querySelector('.announcer').innerHTML = "tie";
            score.tie += 1;
            document.querySelector('.score').innerHTML = `won : ${score.win}\nloss : ${score.loss}\n tie : ${score.tie}`;
        }

    }








}