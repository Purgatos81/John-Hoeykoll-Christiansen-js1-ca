//index js

const BrewResults = document.querySelector(".brewResults");
const BrewURL = "https://api.openbrewerydb.org/breweries";


console.log(BrewURL);
console.log(BrewResults);

async function getBreweries() {
    try {
        const response = await fetch(BrewURL);
        const jsonres = await response.json();
        console.log(jsonres);
        BrewResults.innerHTML = "";
        const Breweries = jsonres;

        for (let i = 0; i < Breweries.length; i++) {
            BrewResults.innerHTML += `<a href="details.html?id=${Breweries[i].id}">
            <h2>Name: ${Breweries[i].name}</h2>
            <p>City: ${Breweries[i].city}</p>
            <p>Country: ${Breweries[i].country}</p>
            <p>Brewery Type: ${Breweries[i].brewery_type}</p>
            </a>
            `
        }

    }
    catch(error) {
        console.log(error);
        BrewResults.innerHTML ="Obs, something whent wrong!"
    }
}

getBreweries();


