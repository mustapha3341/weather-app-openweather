const myForm = document.getElementById("myForm");
const inputField = myForm.querySelector("input");

const getWeatherData = (event) => {
  event.preventDefault();
  const city = inputField.value;
  // perform api request to the server to get
  // weather data
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ city })
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
};

myForm.addEventListener("submit", getWeatherData);
