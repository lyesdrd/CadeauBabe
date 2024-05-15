
const timerEl = document.getElementById("timer");


let startTime = 0;
let elapsedTime = 0;
let timerInterval;
const targetDate = new Date(2024, 4, 16, 23, 59);

//////////////////////////////////////////////
//////////////////////////////////////////////


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
        if (usernameInput.value.trim() === '') {
            errorMessage.style.display = 'none';
            errorMessage2.style.display = 'none';
        } else {
            if (usernameInput.value.toLowerCase() !== 'baby') {
                errorMessage.style.display = 'block';
                errorMessage2.style.display = 'none';
            } else {
                errorMessage.style.display = 'none';
                errorMessage2.style.display = 'block';
            }

        }
    });

    // Redirect to quiz page
    forgottenPasswordButton.addEventListener('click', function () {
        window.location.href = '../forgottenPasword/forgottenPassword.html'; // Change the URL to your quiz page
    });

    // Validate login form
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = usernameInput.value.toLowerCase();
        const password = passwordInput.value;

        if (username === 'baby' && password === 'I_love_you_to_the_moon_and_back') {
            // Redirect to profile page
            window.location.href = '../profile/profile.html'; // Change the URL to your profile page
        } else {
            // Show error message
            alert('Invalid username or password!');
        }
    });
});


//////////////////////////////////////////////
//////////////////////////////////////////////


function startTimer() {
    maintenant = new Date().getTime();
    elapsedTime = targetDate - maintenant;

    updateTimer(); // Mettre à jour le temps dès le démarrage
    timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
    if (elapsedTime <= 0) {
        clearInterval(timerInterval);
        elapsedTime = 0;
        timerEl.textContent = "00.00:00:00.00";
    } else {
        elapsedTime = targetDate - Date.now();
        timerEl.textContent = formatTime(elapsedTime);
    }
}

function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    return (
        (days > 0 ? "0" + days + ":" : "")
        +
        (hours < 10 ? "0" + hours : hours) +
        ":" +
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds) +
        "." +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds)
    );
}

function connexion() {

}

window.onload = startTimer

// function afficherCompteARebours() {
//     const maintenant = new Date().getTime();
//     const tempsRestant = dateCible - maintenant;

//     // Calcul des jours, heures, minutes et secondes restantes
//     const jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
//     const heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
//     const secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);

//     // Affichage du compte à rebours
//     console.log(`Temps restant : ${jours} jours, ${heures} heures, ${minutes} minutes et ${secondes} secondes`);
// }