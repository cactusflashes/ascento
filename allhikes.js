const logo = document.querySelector('#np-logo');
const header = document.querySelector('#header-container');
const text = document.querySelector('#text-container');
const button = document.querySelector('#button');



function animateElements(){

    logo.classList.add('animate__animated', 'animate__zoomIn');


    setTimeout(function(){
        header.classList.remove('hidden');
        header.classList.add('animate__animated', 'animate__fadeInUp')
    }, 500);

    setTimeout(function(){
        text.classList.remove('hidden');
        text.classList.add('animate__animated', 'animate__fadeInUp');
    }, 1000);

    setTimeout(function(){
        button.classList.remove('hidden');
        button.classList.add('animate__animated', 'animate__fadeInUp');
    }, 1500);

}

animateElements();

function buttonPress() {
    button.classList.remove('animate__fadeInUp');
    button.classList.add('animate__fadeOut');

    logo.classList.remove('animate__zoomIn');
    logo.classList.add('animate__zoomOut');

    header.classList.remove('animate__fadeInUp');
    header.classList.add('animate__fadeOut');

    text.classList.remove('animate__fadeInUp');
    text.classList.add('animate__fadeOut');

    setTimeout(function(){
        window.location.href = "alldata.html";
    }, 1000);
}