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