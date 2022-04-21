    async function getPhotographers() {

     const photographer = fetchphotographer().then(photographer => {
      console.log(photographer)
       return photographer;
      });

      return photographer
     
     }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        console.log (photographers)
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
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

  