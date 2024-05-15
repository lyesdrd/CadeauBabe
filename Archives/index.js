document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    const closeButton = document.querySelector('.close');
    const button2 = document.getElementById('button2');
    const closeButton2 = document.querySelector('.close2');

    button.addEventListener('click', function () {
        hintPopup.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        hintPopup.style.display = 'none';
    });

    button2.addEventListener('click', function () {
        hintPopup2.style.display = 'block';
    });

    closeButton2.addEventListener('click', function () {
        hintPopup2.style.display = 'none';
    });
})