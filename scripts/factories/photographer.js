function photographerFactory(data) {
    const { name, portrait, city, country, tagline, id, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const lien = document.createElement('a')
        lien.setAttribute("href", "photographer.html?id=" + id)
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        const p = document.createElement('p');
        p.textContent = city + country
        article.appendChild(p)
        const p2 = document.createElement('p');
        p2.textContent = tagline
        article.appendChild(p2)
        const p3 = document.createElement('p');
        p3.textContent = price
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

        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        const p = document.createElement('p');
        p.textContent = city + country
        p.classList.add("textp1")
        article.appendChild(p)
        const p2 = document.createElement('p');
        p2.textContent = tagline
        p2.classList.add("textp2")
        article.appendChild(p2)


        return (article);
    }

    return { name, picture, getUserCardDOM }

}

function contentCard(data) {
    const { id, title, image, video, likes, date } = data;

    const picturePath = `assets/photo/${image}`;
    const videoPath = `assets/photo/${video}`;

    function getCardDOM() {

        const card = document.createElement('div');
        card.classList.add("photograph-card")
        if (image) {
            const img = document.createElement('img');
            img.setAttribute("src", picturePath)
            card.appendChild(img);

        } else if (video) {
            const video = document.createElement('video');
            video.setAttribute("src", videoPath)
            video.autoplay = true;
            card.appendChild(video);
        }
        const info = document.createElement('div')
        info.classList.add("card-info")
        const titleSpan = document.createElement('span');
        titleSpan.textContent = title
        info.appendChild(titleSpan);
        const likesSpan = document.createElement('span');
        likesSpan.innerText = likes
        const heartSvg = document.createElement('img');
        heartSvg.setAttribute("src", "assets/icons/heart.svg")
        heartSvg.classList.add('heart-icon')
        likesSpan.appendChild(heartSvg)
        likesSpan.classList.add("likes")
        info.appendChild(likesSpan)
        card.appendChild(info)

        return (card);
    }

    return { name, picture: picturePath, getCardDOM }

}