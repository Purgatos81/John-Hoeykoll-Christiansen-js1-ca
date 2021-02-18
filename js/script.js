const BrewResults = document.querySelector(".brewResults")
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
            BrewResults.innerHTML += `<h2>Name: ${Breweries[i].name}</h2>`
        }

    }
    catch(error) {
        console.log(error);
        //Remember to put error message on index page.
    }
}

getBreweries();