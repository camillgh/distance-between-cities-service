const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const haversine = require("haversine-distance");

dotenv.config();

app.get("/api/city", async (req, res) => {
  try {
    const apiKey = process.env.CITY_API_KEY;
    const cityName = req.query.name;
    const apiUrl = `https://api.api-ninjas.com/v1/city?name=${cityName}`;

    const response = await fetch(apiUrl, {
      headers: { "X-Api-Key": apiKey },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/distance", async (req, res) => {
  try {
    const cityOne = req.query.cityOne;
    const cityTwo = req.query.cityTwo;

    const dataCityOne = await fetchCityData(cityOne);
    const dataCityTwo = await fetchCityData(cityTwo);

    const distance = haversine(
      [dataCityOne[0].latitude, dataCityOne[0].longitude],
      [dataCityTwo[0].latitude, dataCityTwo[0].longitude]
    );

    console.log(distance);
    res.json({ distance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

async function fetchCityData(cityName) {
  const apiKey = process.env.CITY_API_KEY;
  const apiUrl = `https://api.api-ninjas.com/v1/city?name=${cityName}`;

  const response = await fetch(apiUrl, {
    headers: { "X-Api-Key": apiKey },
  });

  const data = await response.json();
  return data;
}
