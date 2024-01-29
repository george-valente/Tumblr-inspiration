/* navegue - abrir div */
const ad = document.querySelector("#ad"); 
const fullAd = document.querySelector("#full-ad"); 

ad.addEventListener("mouseover", () => {
    fullAd.classList.add('active');
    fullAd.classList.remove('inative'); 
})

ad.addEventListener("mouseout", () => {
    fullAd.classList.remove('active'); 
    fullAd.classList.add('inative'); 
})


