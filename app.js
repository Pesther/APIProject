

// event listener to search button and prevent default- call API

const resetbtn = document.querySelector("#reset");
const hideB = document.querySelector("#hideB");
const card = document.querySelector('#outcome');

function search(event) {
  const city = document.querySelector("#search").value;
  const aKey = `a0c7bd525cd602ac4980f1c014671f2f`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${aKey}&units=metric`;
  console.log(apiUrl);

  fetch(apiUrl).then((res) => {
    const jsonPromise = res.json();
    jsonPromise
      .then((data) => {
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const description = data.weather[0].description;

        hideB.classList.remove("hide");
        card.classList.remove("outcard");

        document.getElementById("outcome").innerHTML = `<br>
      </div>
        <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
          <div class="card-body">
            <h4 class="card-title" >Your location weather:</h4>
            <p class="card-text text-capitalize">The temperature in ${city} is ${temperature}°. </p>
            <p class="card-text">It feels like ${feelsLike}° in ${city}. </p>
            <p class="card-text"> It can be described as ${description}. </p>
          </div>
        </div>`;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  event.preventDefault();
}



// local Storage
const form = document.querySelector("#wrapper");
const inputField = document.querySelector(".inputField");
const sbtn = document.querySelector("#btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("inputF", inputField.value);
  search(event);
});



// Clear input field at the click of reset button

const empty = document.querySelector("empty");

resetbtn.addEventListener("click", (event) => {
  inputField.value = "";
  event.preventDefault();
  card.remove;

});



// when field is empy alert

// function() => {
//   if (document.querySelector('#search'). value.length === 0) {
//   alert ("Opps, please enter a location");
//    } else console.log();
//  }

//  function checkempty () {
//    if(document.getElementById('search').value === ''){
//      alert ('please enter your location');
//      return false;
//      checkempty;
//    }
//  }
//  checkempty;
