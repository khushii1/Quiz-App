const questions=[
    {
        question:"which is largest animal in the world?",
        answers:[
            { text:"Shark",correct: false},
            { text:"Blue Whale",correct: true},
            { text:"Elephant",correct: false},
            { text:"Giraffe",correct: false},

            
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            { text:"Asia",correct: false},
            { text:" Australia",correct: true},
            { text:"Arctic",correct: false},
            { text:"Africa",correct: false},

             ]
    },

];
const question=document.getElementById("question");
const ansbtn=document.getElementById("ans-btn");
const nxtbtn=document.getElementById("nxt-btn");

let currentquesindex=0;
let score=0;
function startQuiz(){
    currentquesindex=0;
    score=0;
    nxtbtn.innerHTML="Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentques=questions[currentquesindex];
    let  quesno=currentquesindex+1;
    question.innerHTML = quesno + "." + currentques.question;
    
    currentques.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn1");
        ansbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectans);
    });
   

}
function resetState(){
    nxtbtn.style.display="none";
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild);
    }
}
function selectans(e){
    const selectedbtn = e.target;
    const iscorrct = selectedbtn.dataset.correct === 'true';
    if(iscorrct){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(ansbtn.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nxtbtn.style.display="block";
}
function showscore(){
    resetState();
    question.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nxtbtn.innerHTML = "play again";
    nxtbtn.style.display ="block";
}
function handlenextbtn(){
    currentquesindex++;
    if(currentquesindex<questions.length){
        showQuestion();
        }
        else{
            showscore();
        }
}
nxtbtn.addEventListener( "click",()=>{
    if(currentquesindex<questions.length){
        handlenextbtn();
    }else{
        startQuiz();
    }
})
startQuiz();

