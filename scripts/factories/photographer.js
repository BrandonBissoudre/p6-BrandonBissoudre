function photographerFactory(data) {
    const { name, portrait, city, country, tagline, id, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const lien = document.createElement('a')
        lien.setAttribute("href", "photographer.html?id=" + id)
        lien.setAttribute('class', 'test')
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        const p = document.createElement('p');
        p.textContent = city + country
        p.setAttribute('class', 'p1')
        article.appendChild(p)
        const p2 = document.createElement('p');
        p2.textContent = tagline
        p2.setAttribute('class', 'p2')
        article.appendChild(p2)
        const p3 = document.createElement('p');
        p3.textContent = price
        p3.setAttribute('class', 'p3')
        article.appendChild(p3)


        lien.appendChild(article)

        return (lien);
    }

    return { name, picture, getUserCardDOM }
}

// Profil photographer.html //
function profil(data) {
    const { name, portrait, city, country, tagline, } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        const img = document.getElementById('photograph-header-img');
        img.setAttribute("src", picture)
        const info = document.getElementById('photograph-header-info');
        const h2 = document.createElement('h2');
        h2.textContent = name;
        info.appendChild(h2);
        const p = document.createElement('p');
        p.textContent = city + country
        p.classList.add("textp1")
        info.appendChild(p)
        const p2 = document.createElement('p');
        p2.textContent = tagline
        p2.classList.add("textp2")
        info.appendChild(p2)

        return [img, info];
    }

    return { name, picture, getUserCardDOM }

}

function mediaFactory(data) {
    const { id, title, image, video, likes, date } = data;

    const picturePath = `assets/photo/${image}`;
    const videoPath = `assets/photo/${video}`;
    let isLiked = false;

    function getCardDOM() {

        const card = document.createElement('div');
        
        card.classList.add("photograph-card")
        if (image) {
            const img = document.createElement('img');
            img.setAttribute('tabindex', 0)
            img.setAttribute("src", picturePath)
            card.appendChild(img);
        } else if (video) {
            const video = document.createElement('video');
            video.setAttribute('tabindex', 0)
            video.setAttribute("src", videoPath)
            video.autoplay = true;
            video.loop = true;
            card.appendChild(video);
        }
        const info = document.createElement('div')
        info.classList.add("card-info")
        const titleSpan = document.createElement('span');
        titleSpan.textContent = title
        info.appendChild(titleSpan);
        const likeContainer = document.createElement('div');
        const likesSpan = document.createElement('span');
        likesSpan.innerText = likes
        const heartSvg = document.createElement('img');
        likeCountDom = document.querySelector(".like-count");
        heartSvg.addEventListener("click", (ev) => {
            isLiked = !isLiked;
            if (isLiked === true) {
                heartSvg.setAttribute("src", "assets/icons/heart_liked.svg")
                likesSpan.innerText = Number(likesSpan.innerText) + 1
                likeCountDom.innerText = Number(likeCountDom.innerText) + 1
            } else {
                heartSvg.setAttribute("src", "assets/icons/heart.svg")
                likesSpan.innerText = Number(likesSpan.innerText) - 1
                likeCountDom.innerText = Number(likeCountDom.innerText) - 1
            }
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
        })
        heartSvg.setAttribute("src", "assets/icons/heart.svg")
        heartSvg.classList.add('heart-icon')
        likeContainer.style.display = 'flex';
        likeContainer.appendChild(likesSpan)
        likeContainer.appendChild(heartSvg)
        likesSpan.classList.add("likes")
        info.appendChild(likeContainer)
        card.appendChild(info)

        return (card);
    }

    function getSlide() {
        const slide = document.createElement('div');
        slide.classList.add('slide');

        if (image) {
            const img = document.createElement('img');
            img.setAttribute("src", picturePath)
            slide.appendChild(img);
        } else if (video) {
            const video = document.createElement('video');
            video.setAttribute("src", videoPath)
            video.autoplay = true;
            video.loop = true;
            slide.appendChild(video);
        }
        return slide
    }

    return { name, picture: picturePath, getCardDOM, getSlide }

}