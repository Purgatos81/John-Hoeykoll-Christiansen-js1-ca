//details js

const ResultContainer = document.querySelector(".thisBrewerie");
const DetailTitle = document.querySelector(".detailsTitle");
console.log(ResultContainer);

const QueryString = document.location.search;

const Params = new URLSearchParams(QueryString);

const id = Params.get("id");

console.log(id);

const ThisURL = "https://api.openbrewerydb.org/breweries/" + id;

console.log(ThisURL);

async function fetchBrewerie() {
    try {
        const resp = await fetch(ThisURL);
        const BrewerieDetails = await resp.json();
        console.log(BrewerieDetails);

        DetailTitle.innerHTML = `${BrewerieDetails.name}`

        ResultContainer.innerHTML = `<h1>${BrewerieDetails.name}</h1>
        <p>${BrewerieDetails.brewery_type}</p>
        <p>${BrewerieDetails.country}</p>
        <p>${BrewerieDetails.state}</p>
        <p>${BrewerieDetails.city}</p>
        <p>${BrewerieDetails.street}</p>
        <p>${BrewerieDetails.phone}</p>
        <p>${BrewerieDetails.website_url}</p>
        `

    }
    catch(error) {
        console.log(error);
        ResultContainer.innerHTML = message("error", error);
    }
}

fetchBrewerie()