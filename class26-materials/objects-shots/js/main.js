//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(response => response.json())
    .then(data => {
        console.log(data.drinks);
        document.querySelector("h2").innerText = data.drinks[0].strDrink;
        document.querySelector("h3").innerText = data.drinks[0].strInstructions;
    })
    .catch(err => {
        console.log(`Error = ${err}`)
    })