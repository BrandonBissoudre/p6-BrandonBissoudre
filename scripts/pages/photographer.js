//Mettre le code JavaScript lié à la page photographer.html

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')
console.log(id);

async function getPhotographers() {

    const photographer = fetchphotographer().then(photographer => {
     console.log(photographer)
      return photographer;
     });

     return photographer
    
    }

   async function displayData(photographers) {
       const photographersSection = document.querySelector(".photograph-header");
       console.log (photographers)
    // refaire pour recup par id //
    //    photographers.forEach((photographer) => {
    //        const photographerModel = profil(photographer);
    //        const userCardDOM = photographerModel.getUserCardDOM();
    //        photographersSection.appendChild(userCardDOM);
    //    });
   };

   async function init() {
       // Récupère les datas des photographes
      const photographers = await getPhotographers();
       displayData(photographers);
   };
   
   init();
   
//fonction fetch 

   async function fetchphotographer(){
     const response = await fetch("./data/photographers.json");
     const photographer = await response.json();
     return photographer.photographers;
   }

 