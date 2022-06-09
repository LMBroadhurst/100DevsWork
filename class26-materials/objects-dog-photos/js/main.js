//Get a dog photo from the dog.ceo api and place the photo in the DOM


fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.message);
        console.log(data.status)
        document.querySelector('img').src = data.message;
    })
    .catch(err => {
        console.log(`Error = ${err}`)
    });