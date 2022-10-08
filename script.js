'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');



// const renderErr = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;

// };


// const renderCountry = function (data, className = '') {
//     const html = `
//         <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//         `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     // countriesContainer.style.opacity = 1;
// };
// ///////////////////////////////////////

// //old way
// // const getCountryData = function (country) {
// //     const request = new XMLHttpRequest();
// //     request.open('GET', `https://restcountries.com/v2/name/${country}`);
// //     request.send();


// //     request.addEventListener('load', function () {
// //         const [data] = JSON.parse(this.responseText);
// //         console.log(data);
// //         const html = `
// //         <article class="country">
// //           <img class="country__img" src="${data.flag}" />
// //           <div class="country__data">
// //             <h3 class="country__name">${data.name}</h3>
// //             <h4 class="country__region">${data.region}</h4>
// //             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
// //             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //           </div>
// //         </article>
// //         `;
// //         countriesContainer.insertAdjacentHTML('beforeend', html);
// //         countriesContainer.style.opacity = 1;
// //     });
// // };

// // getCountryData('portugal');
// // getCountryData('usa');
// // getCountryData('russia');



// const getCountryAndNeighbor = function (country) {
//     //ajax call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         // console.log(data);

//         //render country 1
//         renderCountry(data);

//         //get neighbor country
//         const neighbor = data.borders?.[0];

//         if (!neighbor) return;

//         //ajax call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//         request2.send();

//         request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText);
//             renderCountry(data2, 'neighbour')
//         })

//     });
// };

// // getCountryAndNeighbor('usa');



// //promises
// //     const request = new XMLHttpRequest();
// //     request.open('GET', `https://restcountries.com/v2/name/${country}`);
// //     request.send();

// // const request = fetch(`https://restcountries.com/v2/name/portugal`);
// // console.log(request);

// const getJSON = function (url, errorMessage = 'Something went wrong') {
//     return fetch(url).then(
//         response => {
//             if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

//             return response.json();
//         });
// };


// // // const getCountryData = function (country) {
// // //     //country 1
// // //     fetch(`https://restcountries.com/v2/name/${country}`)
// // //         .then(response => {
// // //             console.log(response);

// // //             if (!response.ok)
// // //                 throw new Error(`Country not found ${response.status}`)
// // //             return response.json();
// // //         })
// // //         .then(data => {
// // //             renderCountry(data[0]);
// // //             const neighbor = data[0].borders?.[0];

// // //             if (!neighbor) return;

// // //             //country 2
// // //             return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
// // //         })
// // //         .then(response => response.json())
// // //         .then(data => renderCountry(data, 'neighbor'))

// // //         .catch(err => {
// // //             console.log(`${err} ☻♥♠♦♣◘`);
// // //             renderErr(`Something went wrong   ${err.message}. Try again`)
// // //         })
// // //         .finally(() => {
// // //             countriesContainer.style.opacity = 1;
// // //         })

// // // };


// const getCountryData = function (country) {
//     //country 1
//     getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found.')

//         .then(data => {
//             renderCountry(data[0]);
//             const neighbor = data[0].borders?.[0];

//             if (!neighbor) throw new Error('No neighbor found!');

//             //country 2
//             return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`, 'Country not found.');
//         })
//         .then(data => renderCountry(data, 'neighbor'))
//         .catch(err => {
//             console.log(`${err} ☻♥♠♦♣◘`);
//             renderErr(`Something went wrong   ${err.message}. Try again`)
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })

// };

// // btn.addEventListener('click', getCountryData(country));


// const whereAmI = function (lat, lng) {

//     return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
//         .then(response => {

//             // console.log(response);
//             if (response.status != 200)
//                 throw new Error(`Error with reverse geocoding, response status: ${response.status}`);
//             // console.log(response.json());
//             return response.json();
//         })
//         .then(data => {
//             getCountryData(data.countryName)
//             console.log(`You are in ${data.city}, ${data.countryName}`)


//         })
//         .catch(err => console.log(`${err}`))





// };

// whereAmI(31.6904, -106.4245);


// const lotteryPromise = new Promise(function (resolve, reject) {

//     console.log('Lottery draw is happening');

//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You Win!!');
//         } else {
//             reject(new Error('You lost your money!'));
//         }

//     }, 2000)
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //promisifying settimeout


// wait(2).then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
// }).then(() => console.log('I waited for 1 second'));




// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(
//         //     position => {
//         //         resolve(position),
//         //             err => reject(err);
//         //     });

//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };

// getPosition().then(pos => console.log(pos));



const container = document.querySelector('.images');

function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const image = document.createElement('img');;
        image.src = imgPath;

        image.addEventListener('load', () => {
            container.append(image);
            resolve(image)
        });

        image.addEventListener('error', function () {
            // console.log('Error');
            reject('Failed to load image');
        });

    });
};

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000)
    });

};

let currentImg;

createImage('img/img-1.jpg')
    .then(image => {
        currentImg = image;
        console.log('Image 1 loaded');
        return wait(3);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg')
    })
    .then(image => {
        currentImg = image;
        console.log('Image 2 loaded');
        return wait(3);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-3.jpg');
    })
    .then(image => {
        currentImg = image;
        console.log('Image 3 loaded');
        return wait(3);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.error(err))
