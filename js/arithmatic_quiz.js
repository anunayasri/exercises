var score = 0;
var x;
var y;
var questionArr = [];
var correctAns = [];
var yourAns = [];
var counter = 0;

function populate(){
    x = Math.floor((Math.random() * 20) + 1);
    y = Math.floor((Math.random() * 20) + 1);

    ques = x + " + " + y;
    questionArr.push(ques);

    document.getElementById("question").innerHTML = ques;
}

function evaluate1(){

    var ans = document.getElementById("answer").value;
    yourAns.push(ans);
    correctAns.push(x + y);

    if (ans == x + y){
        score++;
    }
    else{
        score--;
    }

    document.getElementById("score").innerHTML = score;

    counter++;
    
    if (counter >= 4) {
        output = "";
        for (i=0; i<counter;i++){
            output += questionArr[i] + " > Your answer: " + yourAns[i] + " : Correct answer: " + correctAns[i] + "<br />"; 
        }

        document.getElementById("result").innerHTML = output;
        document.getElementById("click").disabled = true;
    }
    else{
        populate();
    }
}