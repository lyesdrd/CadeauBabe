
document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const hintButton = document.getElementById('showHint');
    const hintPopup = document.getElementById('hintPopup');
    const closeButton = document.querySelector('.close');
    const errorMessage = document.getElementById('errorMessage');
    const errorMessage2 = document.getElementById('errorMessage2');
    const forgottenPasswordButton = document.getElementById('forgottenPassword');
    const loginForm = document.getElementById('loginForm');

    // Show hint popup
    hintButton.addEventListener('click', function () {
        hintPopup.style.display = 'block';
    });

    // Close hint popup
    closeButton.addEventListener('click', function () {
        hintPopup.style.display = 'none';
    });

    // Show error message for username
    usernameInput.addEventListener('input', function () {
        if (usernameInput.value.toLowerCase() !== 'baby') {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            errorMessage2.style.display = 'block';

        }
    });

    // Redirect to quiz page
    forgottenPasswordButton.addEventListener('click', function () {
        window.location.href = 'quiz.html'; // Change the URL to your quiz page
    });

    // Validate login form
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = usernameInput.value.toLowerCase();
        const password = passwordInput.value;

        if (username === 'baby' && password === 'I_love_you_to_the_moon_and_back') {
            // Redirect to profile page
            window.location.href = 'profile.html'; // Change the URL to your profile page
        } else {
            // Show error message
            alert('Invalid username or password!');
        }
    });
});