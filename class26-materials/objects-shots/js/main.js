//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink);
let drinkVal = 0;

function getDrink() {

    let drink = document.querySelector('input').value;
    

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.drinks);
        document.querySelector("h2").innerText = data.drinks[drinkVal].strDrink;
        document.querySelector("h3").innerText = data.drinks[drinkVal].strInstructions;
        document.querySelector('img').src = data.drinks[drinkVal].strDrinkThumb;

        if (drinkVal < data.drinks.length - 1) {
            drinkVal++;
        } else {
            drinkVal = 0;
        }
        
    })
    .catch(err => {
        console.log(`Error = ${err}`)
    })

}





