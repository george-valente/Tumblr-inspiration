/* navegue - abrir div */
const ad = document.querySelector("#ad"); 
const fullAd = document.querySelector("#full-ad"); 
const ellipsisOne = document.querySelector("#ellipsis-one"); 
const boxFollow = document.querySelector(".box-copy-follow"); 

console.log(boxFollow)


ad.addEventListener("mouseover", () => {
    fullAd.classList.add('active');
    fullAd.classList.remove('inative'); 
})

ad.addEventListener("mouseout", () => {
    fullAd.classList.remove('active'); 
    fullAd.classList.add('inative'); 
})


/* toggle ao clicar no ellipsis, abre uma aba de parar de seguir, bloquear, etc. */

ellipsisOne.addEventListener("click", (e) => {
    e.preventDefault(); /* objeto do evento */

    boxFollow.classList.toggle('active');
})