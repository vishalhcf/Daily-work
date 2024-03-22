// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


///////////////////////////////////////
// render Country
function renderCountry(data,className='')
{
  let languages = '';
          for (const lang in data.languages) {
            languages += `${data.languages[lang]} `;
          }
        let cCur='';
        for(const cur in data.currencies)
        {
            cCur=data.currencies[cur].name;
        }
      
          const html = `
            <article class="country ${className}">
              <img class="country__img" src="${data.flags?.png}" || src="${data.flag}"  />
              <div class="country__data">
                <h3 class="country__name">${data.name?.common}</h3>
                <h4 class="country__region">${data?.region}</h4>
                <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}M</p>
                <p class="country__row"><span>🗣️</span>${languages}</p>
                <p class="country__row"><span>💰</span>${cCur}</p> <!-- Assuming currencies is an array -->
              </div>
            </article>`;
      
          countriesContainer.insertAdjacentHTML('beforeend', html);
          countriesContainer.style.opacity = 1;



}
// //  get country

// function getCountry(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // Use the 'country' parameter here
//   request.send();

//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText)?.[1]; // Change to [0] instead of [1]
//     console.log(data);

//     renderCountry(data);

//     // For neighbor country (assuming 'borders' contains neighboring countries)
//     if (data && data.borders && data.borders.length > 0) {

//         data.borders.forEach(neighborCountry => {
//           console.log(neighborCountry);
//           const request2 = new XMLHttpRequest();
//           request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighborCountry}`);
//           request2.send();
    
//           request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText)?.[0];
//             console.log(data2);
//             renderCountry(data2,'neighbour');
//         });

//       // const neighborCountry = data.borders[0];// Assuming the first border is a neighboring country
//       });
//     }
//   });
// }
// getCountry('india');
// document.getElementById('country').addEventListener('change',function(){
//   countriesContainer.innerHTML='';
//   const country=document.getElementById('country').value;
//   getCountry(country);

// })

// //let a=createorder()
// .then(function(response){
// //console.log(response);
// }).catch(function(err){
//     //console.log(err);
// })


// function createorder(){
//     let pr=new Promise (function  (resolve,reject){
//         //database call orderid
//         let orderid=1234;
//         if(orderid){
//             resolve(873485995545556)
//         }
//         else{
//             reject('pro is not fulfilled')
//         }

//     })
//     return pr;
// }

function getCountry(country){
    let pr=fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then (function(response){
        console.log(response);
        if(!response.ok){
            throw new Error(`Neighbour country not found ${response2.status}`);
        }
         return response.json()
       // console.log(response.json())
    }).then (function(data){
        console.log(data[1])
        renderCountry(data[1])

        let neighbour=data[1].borders[1];
        console.log(neighbour);
        return fetch (`https://restcountries.com/v3.1/alpha/${neighbour}`)
    }).then(function(response2){
        return response2.json()
       
    }).then(function(data){
        console.log(data[0]);
        renderCountry(data[0])
    })
    .catch(function(errormsg){
        console.log(errormsg);
        alert(errormsg);
    })
}
getCountry(`india`)