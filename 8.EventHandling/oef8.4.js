let groterKnop = document.getElementById("groterKnop");
let kleinerKnop = document.getElementById("kleinerKnop");
let titel = document.getElementById("titel");
let para= document.querySelectorAll('.paragraph-group p')


groterKnop.addEventListener("click", e => {
    titel.style.fontSize = '48px';

    para.forEach(function (paragraaf){
        paragraaf.style.fontSize = '24px';
    })
});

kleinerKnop.addEventListener("click", e => {
    titel.style.fontSize = '22px';

    para.forEach(function (paragraaf){
        paragraaf.style.fontSize = '14px';
    })
})