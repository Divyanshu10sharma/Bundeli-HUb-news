var nav = document.querySelector("nav")
    

nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()

    tl.to(".nav-bottom", {
        height: "21vh",
        duration: 0.5
    })
    tl.to(".flex h5", {
        display: "block",
        duration: 0.1

    })
    tl.to(".flex h5 span", {
        y: 0,
        // duration:0.3,
        stagger: {
            amount: 0.5
        }
    })
})
nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".flex h5 span", {
        y: 25,
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".flex h5", {
        display: "none",
        duration: 0.1
    })
    tl.to(".nav-bottom", {
        height: 0,
        duration: 0.2
    
    })
})





const API_KEY = "525df41349d8426aa56305a999380f4d";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load',() => fetchNews("India"));

async function fetchNews (query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("card-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
       fillDataInCard(cardClone,article);
        cardsContainer.appendChild(cardClone);
    });
    function fillDataInCard(cardClone, article) {
        const newsImg = cardClone.querySelector("#news-image");
        const newsTitle = cardClone.querySelector("#news-title");
        const newsSource = cardClone.querySelector("#news-source");
        const newsDesc = cardClone.querySelector("#news-desc");
    
        newsImg.src = article.urlToImage;
        newsTitle.innerHTML = article.title;
        newsDesc.innerHTML = article.description;
       
     

        newsSource.innerHTML = `${article.source.name} `;
        cardClone.firstElementChild.addEventListener("click", () => {
            window.open(article.url, "_blank");
        });
    }
}
let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}
const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});


 var tl = gsap.timeline()
    tl.from("h1", {
      y:-10,
      opacity: 0,
      duration:1,
      delay: 0.2,

    })
    tl.from("li",{
        y:-20,
        opacity: 0,
        duration:1,
        stagger: 0.3
    })
  
    tl.from("input ,button",{
        y:-20,
        opacity: 0,
        duration:1,
        stagger: 0.3
    })
    tl.from("h5",{
        y:20,
        opacity: 0,
        duration:1,
        stagger: 0.2
    })

  