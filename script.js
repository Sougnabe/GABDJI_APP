// Weather API Function
async function getWeather() {
    const city = document.getElementById('city').value;
    const weatherResult = document.getElementById('weatherResult');
    
    if (!city) {
        weatherResult.textContent = "Please enter a city.";
        return;
    }

    weatherResult.textContent = "Loading...";
    
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c4c67f80b86a4a84915155044242311&q=${city}`);
        
        if (!response.ok) {
            throw new Error("City not found or an error occurred.");
        }

        const data = await response.json();

        // Extract relevant data
        const locationName = data.location.name;
        const temp = data.current.temp_c;
        const condition = data.current.condition.text;

        // Update the result display
        weatherResult.textContent = `Weather in ${locationName}: ${temp}°C, ${condition}`;
    } catch (error) {
        // Display a user-friendly error message
        weatherResult.textContent = "An error occurred while fetching the weather data. Please check the city name and try again.";
        console.error(error); // Log error for debugging
    }
}

        // Exchange Rate API Function
        async function getExchangeRate() {
            const fromCurrency = document.getElementById('fromCurrency').value;
            const toCurrency = document.getElementById('toCurrency').value;
            const exchangeResult = document.getElementById('exchangeResult');
            exchangeResult.textContent = "Loading...";
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/db2d018d935ba8a6cd0ce4a6/latest/${fromCurrency}`);
                const data = await response.json();
                const rate = data.conversion_rates[toCurrency];
                exchangeResult.textContent = `1 ${fromCurrency} = ${rate} ${toCurrency}`;
            } catch (error) {
                exchangeResult.textContent = "An error occurred while fetching the exchange rate.";
            }
        }

        // Quotes API Function
        async function getQuote() {
            const quoteResult = document.getElementById('quoteResult');
            quoteResult.textContent = "Loading...";
            try {
                const response = await fetch('https://api.quotable.io/random');
                const data = await response.json();
                quoteResult.textContent = `"${data.content}" - ${data.author}`;
            } catch (error) {
                quoteResult.textContent = "An error occurred while fetching the quote.";
            }
        }