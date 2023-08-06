let previousRandomIndex = -1;

fetch('allhikes.json')
  .then(response => response.json())
  .then(jsonData => {
    //random park func
    const parks = jsonData.all_hikes;
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * parks.length);
    } while (randomIndex === previousRandomIndex);

    previousRandomIndex = randomIndex;
    const randomPark = parks[randomIndex];

    // fetch weather api
    fetch(randomPark.weather.api_url)
      .then(response => response.json())
      .then(weatherData => {
        // Extract weather data
        const currentTemp = weatherData.main.temp;
        const currentConditions = weatherData.weather[0].description;

        // Display weather and location information
        console.log("Random Park:", randomPark.park_name);
        console.log("Location:", randomPark.location);
        console.log("Number of Hikes:", randomPark.hike_number);
        console.log("Current Temperature:", currentTemp, "°F");
        console.log("Current Conditions:", currentConditions);

        const parkNameText = document.querySelector('#parkNameData');
        const parkLocation = document.querySelector('#location');
        const parkWeather = document.querySelector('#weatherText');
        const parkHikeNumber = document.querySelector('#hikeText');
        const imageURL = `static/${randomPark.photo}`
        const parkPhotoHolder = document.querySelector('#park-photo');
    
        parkLocation.innerHTML = `${randomPark.location}`;
        parkNameText.innerHTML = `${randomPark.park_name}`;
        parkWeather.innerHTML = `${currentTemp.toFixed(0)}º<br>${currentConditions}`;
        parkHikeNumber.innerHTML = `${randomPark.hike_number}<br>hikes`;
        parkPhotoHolder.innerHTML = `<img src="${imageURL}" class="park-photo"/>`;

      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  })
  .catch(error => {
    console.error("Error fetching JSON data:", error);
  });


const header = document.querySelector('#parkNameData');
const locationHolder = document.querySelector('#locationHolder');
const doubleHolder = document.querySelector('#double-holder');
const pic = document.querySelector('#park-photo');
const backButton = document.querySelector('#backButton');

function animateData(){

    setTimeout(function(){
        header.classList.remove('hidden');
        header.classList.add('animate__animated', 'animate__fadeInUp');
    }, 500)

    setTimeout(function(){
        locationHolder.classList.remove('hidden');
        locationHolder.classList.add('animate__animated', 'animate__fadeInLeft');
    }, 1500);

    setTimeout(function(){
        doubleHolder.classList.remove('hidden');
        doubleHolder.classList.add('animate__animated', 'animate__fadeInRight')
    }, 2000);

    setTimeout(function(){
        pic.classList.remove('hidden');
        pic.classList.add('animate__animated', 'animate__fadeInUp');
    }, 2500);

    setTimeout(function(){
        backButton.classList.remove('hidden');
        backButton.classList.add('animate__animated', 'animate__fadeIn');
    }, 3500);
}

animateData();

function goBackButton(){
    window.location.href = "index.html";
}