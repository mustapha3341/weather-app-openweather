const myForm = document.getElementById("myForm");
const inputField = myForm.querySelector("input");

const getWeatherData = async (event) => {
  event.preventDefault();
  const city = inputField.value;
  // perform api request to the server to get
  // weather data

  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city }),
    };

    const response = await fetch("/", options);
    const weather_data = await response.json();

    console.log(weather_data);
  } catch (error) {
    console.log(error);
  }
};

myForm.addEventListener("submit", getWeatherData);
