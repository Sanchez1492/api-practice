console.log('Hello world!');

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api-key=live_XSykOSHNW6kY0YL03SIvUIY9NWcefmN4hEHfuEqWQ9sMs8c4K7rQoBCCFWyKmquI';

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
    const picture1 = document.querySelector('#picture1');
    picture1.src = data[0].url;

    const picture2 = document.querySelector('#picture2');
    picture2.src = data[1].url;

    const picture3 = document.querySelector('#picture3');
    picture3.src = data[2].url;
}

reload();