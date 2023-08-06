//dynamic welcome message
function getGreeting() {
    const currentHour = new Date().getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning,";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon,";
    } else if (currentHour >= 18 && currentHour < 21) {
      return "Good Evening,";
    } else {
      return "Good Night,";
    }
  }
  
const greeting = getGreeting();

const welcomeText = document.querySelector('#welcome');
welcomeText.innerHTML = `${greeting} Josh.`

function getCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString(undefined, options);
  }
  
const currentDate = getCurrentDate();

const dateText = document.querySelector('#date');
dateText.innerHTML = `${currentDate}`


//animation properties

const backgroundImage = document.querySelector('#bg');
const welcomeMessage = document.querySelector('#welcome-message');
const ascentoTitle = document.querySelector('#ascento-title');
const buttonOne = document.querySelector('#button-1');
const buttonTwo = document.querySelector('#button-2');
const buttonThree = document.querySelector('#button-3');
const colophon = document.querySelector('#colophon');

//mountain ani in
backgroundImage.classList.add('animate__animated', 'animate__fadeInDown', 'animate__slow')

setTimeout(function(){
    welcomeMessage.classList.remove('hidden');
    welcomeMessage.classList.add('animate__animated', 'animate__fadeInDown', 'animate__delay-1s');
}, 400);

setTimeout(function(){
    ascentoTitle.classList.remove('hidden');
    ascentoTitle.classList.add('animate__animated', 'animate__fadeInRight');
}, 1800);

setTimeout(function(){
    buttonOne.classList.remove('hidden');
    buttonOne.classList.add('animate__animated', 'animate__fadeInUp');
}, 2000);

setTimeout(function(){
    buttonTwo.classList.remove('hidden');
    buttonTwo.classList.add('animate__animated', 'animate__fadeInUp');
}, 2400);

setTimeout(function(){
    buttonThree.classList.remove('hidden');
    buttonThree.classList.add('animate__animated', 'animate__fadeInUp');
}, 2800);

setTimeout(function(){
    colophon.classList.remove('hidden');
    colophon.classList.add('animate__animated', 'animate__fadeInUp');
}, 3200);


function goNp() {
    buttonOne.classList.remove('animate__fadeInUp');
    buttonOne.classList.add('animate__fadeOutRight');

    setTimeout(function(){
        window.location.href = 'nationalparks.html';
        console.log("clicked.");
    
    }, 1000);

}

function goLocal() {
  buttonTwo.classList.remove('animate__fadeInUp');
  buttonTwo.classList.add('animate__fadeOutRight');

  setTimeout(function(){
      window.location.href = 'localhikes.html';
      console.log("clicked.");
  
  }, 1000);

}


function goAll() {
  buttonThree.classList.remove('animate__fadeInUp');
  buttonThree.classList.add('animate__fadeOutRight');

  setTimeout(function(){
      window.location.href = 'allhikes.html';
      console.log("clicked.");
  
  }, 1000);

}