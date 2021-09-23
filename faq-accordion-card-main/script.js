const arrows = document.querySelectorAll('.arrow');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');


questions.forEach(function(question, index) {

    let linkedAnswer = answers[index];
    let linkedArrow = arrows[index];

  
        question.addEventListener('mouseover', () => {
            
            question.classList.add('question-hover');
            
        });

        question.addEventListener('mouseleave', () => {
            
            question.classList.remove('question-hover');
            
        })
    


    question.addEventListener('click', () => {
        
        
        
        linkedAnswer.classList.toggle('visible');
        question.classList.toggle('bold');
        linkedArrow.classList.toggle('rotation');
        

    })
})

