document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');
    const quizResult = document.getElementById('quizResult');

    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Check answers
        const answer1 = document.getElementById('question1').value.trim();
        const answer2 = document.getElementById('question2').value.trim();
        const answer3 = document.getElementById('question3').value.trim();
        const answer4 = document.getElementById('question4').value.trim();
        // Add more answers as needed

        let message = '';

        if (answer1 === '14/04/2021') {
            document.getElementById('question1').classList.remove('error');
            message += 'Question 1: Correct! ';
        } else {
            document.getElementById('question1').classList.add('error');
            message += 'Question 1: Incorrect! ';
        }

        if (answer2.toLowerCase() === 'margerite') {
            document.getElementById('question2').classList.remove('error');
            message += 'Question 2: Correct!';
        } else {
            document.getElementById('question2').classList.add('error');
            message += 'Question 2: Incorrect!';
        }

        if (answer3.toLowerCase() === 'violet') {
            document.getElementById('question1').classList.remove('error');
            message += 'Question 1: Correct! ';
        } else {
            document.getElementById('question1').classList.add('error');
            message += 'Question 1: Incorrect! ';
        }

        if (answer4.toLowerCase() === 'ski') {
            document.getElementById('question2').classList.remove('error');
            message += 'Question 2: Correct!';
        } else {
            document.getElementById('question2').classList.add('error');
            message += 'Question 2: Incorrect!';
        }
        // Add more conditions for additional questions

        if (answer1 === '14/04/2021' && answer2.toLowerCase() === 'margerite' && answer4.toLowerCase() === 'ski' && answer3.toLowerCase() === 'violet') {
            quizResult.textContent = 'Your password is: I_love_you_to_the_moon_and_back'; // Add your password here
            quizResult.style.color = 'green';
        } else {
            quizResult.textContent = message;
            quizResult.style.color = 'red';
        }
    });
});
