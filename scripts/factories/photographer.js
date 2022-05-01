// function photographerFactory(data) {
//     const { name, portrait } = data;

//     const picture = `assets/photographers/${portrait}`;

//     function getUserCardDOM() {
//         const article = document.createElement( 'article' );
//         const img = document.createElement( 'img' );
//         img.setAttribute("src", picture)
//         const h2 = document.createElement( 'h2' );
//         h2.textContent = name;
//         article.appendChild(img);
//         article.appendChild(h2);
//         return (article);
//     }
//     return { name, picture, getUserCardDOM }
// }


function photographerFactory(data)  {
    const { name, portrait, city, country, tagline, id, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const lien = document.createElement ('a')
        lien.setAttribute("href", "photographer.html?id="+id)
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        const p = document.createElement('p');
        p.textContent = city + country + tagline
        article.appendChild(p)

        lien.appendChild(article)
        
        return (lien);
    }

    return { name, picture, getUserCardDOM }     
}


// Profil photographer.html //
function profil(data){
    const { name, portrait, city, country, tagline, } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
       
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        const p = document.createElement('p');
        p.textContent = city + country + tagline
        article.appendChild(p)
 
        return (article);
    }

    return { name, picture, getUserCardDOM }     
}