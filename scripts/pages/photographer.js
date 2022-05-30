//Mettre le code JavaScript lié à la page photographer.html
window.addEventListener('load', () => {

    let media = [];
    let photographersContentSection
    let isSliderDisplayed = false;
    let curSlide = 0;

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

    function initSlider() {
        document.getElementById('close').addEventListener('click', () => {
                toggleSlider();
            })
            // const slides = document.querySelectorAll(".slide");

        // // loop through slides and set each slides translateX
        // slides.forEach((slide, indx) => {
        //     slide.style.transform = `translateX(${indx * 100}%)`;
        // });

        const nextSlide = document.querySelector(".btn-next");

        // current slide counter
        // maximum number of slides
        let maxSlide = slides.length - 1;

        // add event listener and navigation functionality
        nextSlide.addEventListener("click", function() {
            // check if current slide is the last and reset current slide
            if (curSlide === maxSlide) {
                curSlide = 0;
            } else {
                curSlide++;
            }

            //   move slide by -100%
            slides.forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
            });
        });

        // select next slide button
        const prevSlide = document.querySelector(".btn-prev");

        // add event listener and navigation functionality
        prevSlide.addEventListener("click", function() {
            console.log('krrrrrrrr');
            // check if current slide is the first and reset current slide to last
            if (curSlide === 0) {
                curSlide = maxSlide;
            } else {
                curSlide--;
            }

            //   move slide by 100%
            slides.forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
            });
        });

    }

    function toggleSlider() {
        const body = document.getElementsByTagName('body')[0];
        const slider = document.getElementById('slider');
        if (isSliderDisplayed) {
            body.style = '';
            slider.style = 'display: none'
        } else {
            window.scrollTo(0, 0);
            body.style = 'overflow: hidden';
            slider.style = 'display: block'
        }

        isSliderDisplayed = !isSliderDisplayed;
    }

    function renderMedia() {
        photographersContentSection.innerHTML = "";
        document.getElementById('slider-content').innerHTML = "";

        media.forEach((x) => {
            const media = mediaFactory(x);
            const cardDOM = media.getCardDOM();
            const sliderDOM = media.getSlide();

            const sliderContent = document.getElementById('slider-content');
            sliderContent.appendChild(sliderDOM)
            photographersContentSection.appendChild(cardDOM);
        })

        console.log('Changing media');
        const slides = document.querySelectorAll('.slide');

        photographersContentSection.childNodes.forEach((el, index) => {
            el.addEventListener('click', () => {
                slides.forEach((slide, indx) => {
                    console.log(index);
                    curSlide = index;
                    slide.style.transform = `translateX(${100 * (indx - index)}%)`;
                });

                toggleSlider();
            })
        })

        initSlider();
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