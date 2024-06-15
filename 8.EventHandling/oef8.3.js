let toonKnop = document.getElementById("toonKnop");
let wissenKnop = document.getElementById("wissenKnop");
let tekstvak = document.getElementById("tekstvak");
let weergaveParagraaf = document.getElementById("weergaveParagraaf");


toonKnop.addEventListener("click", (e) => {
    let ingeveroerdeTekst = tekstvak.value;

    weergaveParagraaf.textContent = ingeveroerdeTekst;
});

wissenKnop.addEventListener("click", (e) => {
    weergaveParagraaf.textContent = weergaveParagraaf.value;
})
