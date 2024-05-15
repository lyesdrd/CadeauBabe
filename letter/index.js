const alertBox = document.querySelector('.alert');
const closeButton = document.querySelector('.closebtn');
closeButton.addEventListener('click', () => {
    alertBox.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.container').addEventListener('mouseenter', function () {
        document.querySelector('.card').style.transition = 'top 0.5s ease';
        document.querySelector('.card').style.top = '-90px';
        document.querySelector('.card').style.backgroundColor = "#eae2b7";

    });

    document.querySelector('.container').addEventListener('mouseleave', function () {
        document.querySelector('.card').style.transition = 'top 1s ease';
        document.querySelector('.card').style.top = '0';
        document.querySelector('.card').style.backgroundColor = "#c6bd8b";
    });
    // document.querySelector('.error').addEventListener('click', function () {

    // })
    document.querySelector('.container').addEventListener('click', function () {
        var div = document.getElementById('env');
        var alerte = document.getElementById('non');
        div.classList.add('hidden');
        setTimeout(function () {
            // Change content
            div.innerHTML = `<div class="letter">
                                    <div class="Message">
                                        <div class="text2 fadeout">Haqlejkfhefkhjry !</div>
                                        </br>
                                        <div class="text2 fadeout">Uafaffasfasdfasfsafafasfasfasftielle,</br>
                                        ------____________rthrhhsgsdgsdgdsfgdsgés.</br>
                                        sdqwdfwrfeqwrqiwerhiohrikikkk,</br>
                                        qr23417n o jrf2'r'3421k'1;'jj.</br>
                                        </br>
                                        q;n9458puqre;qoiu[q]ra'sdfmq;aaef,</br>
                                        @#$@#%^&%@#&@%&@dl,akhfl;44l</br>
                                        Aujourd'hui,fweqfhjq j ql;ejhrkhjjj==r,</br>
                                        kqehdfklsdjhf_____---3oej2lklj .</br>
                                        </br>
                                        lqkjefl;jkw l;ewkfjq;ljfkqkl;j  f9909qf</br>
                                        qkljh e qklejhrlj  qlkj ___#$)3)$  .</br>
                                        fqkljhefjghd f df m,hfjkdjkls   lsdkfjs</br>
                                        Mais __QEFklqwehfjqwl;f 32-=  r2io3 .</div>
                                    </div>
                            </div>`;

            alerte.innerHTML = `<div class="alert">
                                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                    Oh non on dirait que ta lettre a ete endomagée.</br>
                                    Essaie de te connecter sur le serveur pour acceder a l'original
                                    <a href="../connexion/connexion.html">clique ici</a>

                                
                                </div>`

            // Remove the 'hidden' class to reveal the new content with fade-in effect
            div.classList.remove('hidden');
            div.classList.add('non');

        }, 500); // Adjust the timeout to match the duration of the transition
    });
    document.querySelector('.alert').addEventListener('click', function () {
        window.location = '/connexion/conexion.html'
    })
});
