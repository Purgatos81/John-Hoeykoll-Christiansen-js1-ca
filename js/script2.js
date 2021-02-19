//details js

const ResultContainer = document.querySelector(".thisBrewerie");
console.log(ResultContainer);

const QueryString = document.location.search;

const Params = new URLSearchParams(QueryString);

const id = Params.get("id");

console.log(id);

const ThisURL = "https://api.openbrewerydb.org/breweries/" + id;

console.log(ThisURL);

async function fetchBrewerie() {

}

fetchBrewerie()