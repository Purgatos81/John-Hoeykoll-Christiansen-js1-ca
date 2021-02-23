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
        <p>Type: ${BrewerieDetails.brewery_type}</p>
        <p>Country: ${BrewerieDetails.country}</p>
        <p>State: ${BrewerieDetails.state}</p>
        <p>City: ${BrewerieDetails.city}</p>
        <p>Street: ${BrewerieDetails.street}</p>
        <p>Phone: ${BrewerieDetails.phone}</p>
        <a href="${BrewerieDetails.website_url}">${BrewerieDetails.website_url}</a>
        `

    }
    catch(error) {
        console.log(error);
        ResultContainer.innerHTML = "Obs, something whent wrong!";
    }
}

fetchBrewerie()