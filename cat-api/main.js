console.log('Hello world!');

const API_URL = 'https://api.thecatapi.com/v1/images/search';

//Ejercicio hecho con fetch

// fetch(API_URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img')
//         img.src = data[0].url
//     })

//Ejercicio hecho con async y await

async function reload() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
}

reload();