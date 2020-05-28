
// first Part

// (function(){

//     function Question(question, Options, correct){
//         this.question = question;
//         this.Option = Options;
//         this.correct=correct;
//     }
    
//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);
    
//         for(var i=0; i< this.Option.length;i++){
//             console.log(i+' : '+this.Option[i]);
//         }
//     }
    
//     Question.prototype.checkAnswer = function(answer){
//         if(answer === this.correct){
//             console.log('Correct Answer');
//         }
//         else{
//             console.log('Incorrect Answer, Try Again');
//         }
//     }
//     var q1 = new Question('Is JavaScript the coolest Language?',['yes', 'no'], 0);
    
//     var q2 = new Question('What is the name of this Course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    
//     var q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Interesting'], 2);
    
//     var questions = [q1, q2, q3];
//     var n = Math.floor(Math.random() * questions.length);
    
//     questions[n].displayQuestion();
    
//     var answer = parseInt(prompt('Please Select the Correct Answer'));
    
//     questions[n].checkAnswer(answer);

// })();

// Expert Level

(function(){

    function Question(question, Options, correct){
        this.question = question;
        this.Option = Options;
        this.correct=correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for(var i=0; i< this.Option.length;i++){
            console.log(i+' : '+this.Option[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(answer, callback){
        
        if(answer === this.correct){
            console.log('Correct Answer');
            sc = callback(true);
        }
        else{
            console.log('Incorrect Answer, Try Again');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log('your current Score is' + score);
        console.log('---------------------------------------');
    }

    var q1 = new Question('Is JavaScript the coolest Language?',['yes', 'no'], 0);
    
    var q2 = new Question('What is the name of this Course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    
    var q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Interesting'], 2);
    
    var questions = [q1, q2, q3];

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion(){
        
        var n = Math.floor(Math.random() * questions.length);
    
        questions[n].displayQuestion();
    
        var answer = prompt('Please Select the Correct Answer');
    
        

        if(answer !== 'exit'){

            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
        
    }

    nextQuestion();

    

})();