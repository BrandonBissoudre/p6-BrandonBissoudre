//Mettre le code JavaScript lié à la page photographer.html
window.addEventListener('load', () => {

    let media = [];
    let photographersContentSection

    async function init() {
        // Récupération de l'id
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const photographId = urlParams.get('id');

        // Display Content
        displayHeader(photographId);
        displayContent(photographId);

        // Filter init
        initFilters();
    };

    async function displayHeader(photographId) {
        const photograph = await getPhotographerById(photographId);

        const photographersSection = document.querySelector(".photograph-header");
        const photographerModel = profil(photograph);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    };

    async function displayContent(photographId) {
        photographersContentSection = document.querySelector(".photograph-content");
        media = await getPhotographerContentById(photographId);
        // Render with asc popularity by default
        media = media.sort((a, b) => b.likes - a.likes)

        renderMedia();
    };

    function renderMedia() {
        photographersContentSection.innerHTML = "";
        media.forEach(x => {
            const card = contentCard(x);
            const cardDOM = card.getCardDOM();
            photographersContentSection.appendChild(cardDOM);
        })
    }

    async function getPhotographerById(id) {
        const response = await fetch("./data/photographers.json");
        const photographer = await response.json();
        return photographer.photographers.find(x => x.id === +id);
    }

    async function getPhotographerContentById(id) {
        const response = await fetch("./data/photographers.json");
        const photographer = await response.json();
        return photographer.media.filter(x => x.photographerId === +id);
    }

    function initFilters() {
        const filterMenu = document.getElementById('filter-menu')
        filterMenu.addEventListener('click', (x) => {
            const element = x.target;
            const isSelected = element.classList.length > 0;
            if (isSelected) {
                const isUp = element.classList[0].indexOf('dd-button-selected-up') === 0;
                if (isUp) {
                    element.classList.remove('dd-button-selected-up');
                    element.classList.add('dd-button-selected-down');
                    // handle up 
                    filterMedia(element.id, false);
                } else {
                    element.classList.remove('dd-button-selected-down');
                    element.classList.add('dd-button-selected-up');
                    filterMedia(element.id, true);
                }
            } else {
                const items = filterMenu.getElementsByTagName("li");
                for (var i = 0; i < items.length; ++i) {
                    items[i].classList.remove('dd-button-selected-up');
                    items[i].classList.remove('dd-button-selected-down');
                }
                element.classList.add('dd-button-selected-up');
                filterMedia(element.id, true);
            }
        })
    }

    function filterMedia(filter, isUp) {
        switch (filter) {
            case 'popularity':
                if (isUp) {
                    media = media.sort((a, b) => b.likes - a.likes)
                    renderMedia();
                } else {
                    media = media.sort((a, b) => a.likes - b.likes)
                    renderMedia();
                }
                break;
            case 'date':
                if (isUp) {
                    media = media.sort((a, b) => new Date(b.date) - new Date(a.date))
                    renderMedia();
                } else {
                    media = media.sort((a, b) => new Date(a.date) - new Date(b.date))
                    renderMedia();
                }
                break;
            case 'title':
                if (isUp) {
                    media = media.sort((a, b) => a.title.localeCompare(b.title))
                    renderMedia();

                } else {
                    media = media.sort((a, b) => b.title.localeCompare(a.title))
                    renderMedia();
                }
                break;
        }
    }

    init();
})