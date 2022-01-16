const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.post("/", async (req, res) => {
  const city = req.body.city;

  const APP_ID = `631ec2e7878fae2b6484732472d64ee2`;
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`;

  try {
    const response = await axios.get(BASE_URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => console.log("Server is up...."));
