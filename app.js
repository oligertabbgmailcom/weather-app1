const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const result = document.getElementById("weatherResult");
searchBtn.addEventListener("click", () => {
const city = cityInput.value.trim(); 
if (!MOCK_WEATHER[city]) {
result.innerHTML = "<p>Staden finns inte i systemet.</p>";
result.classList.remove("hidden");
return;
}
const data = MOCK_WEATHER[city];
currentCity = city;
result.innerHTML = `
<h2>${city}</h2>
<p>${data.icon} ${data.description}</p>
<p>${data.tempC}°C</p>
<small>Uppdaterad: ${data.updated}</small>
`;
result.classList.remove("hidden");
});
let currentCity = null;

function updateWeather() {
  if (!currentCity) return; 

  const data = MOCK_WEATHER[currentCity];

  if (!data) return;

  
  const now = new Date();
  const time = now.getHours().toString().padStart(2, "0") + ":" +
               now.getMinutes().toString().padStart(2, "0");

  data.updated = time;

  document.getElementById("weatherResult").innerHTML = `
    <h2>${currentCity}</h2>
    <p>${data.icon} ${data.description}</p>
    <p>${data.tempC}°C</p>
    <small>Uppdaterad: ${data.updated}</small>
  `;
}
setInterval(updateWeather, 10000); 
