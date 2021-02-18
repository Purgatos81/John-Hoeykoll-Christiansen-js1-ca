const BrewResults = document.querySelector(".brewResults")
const BrewURL = "https://api.openbrewerydb.org/breweries";


console.log(BrewURL);
console.log(BrewResults);

async function getBreweries() {
    try {
        const response = await fetch(BrewURL);
        const jsonres = await response.json();
        console.log(jsonres);
    }
    catch(error) {
        console.log(error);
        //Remember to put error message on index page.
    }
}

getBreweries();