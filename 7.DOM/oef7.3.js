let red = document.getElementById("red");
let deletePara = document.getElementById("weg");


let header = document.querySelector('header');
let nodeH1 = document.createElement("h1");
let h1Text = document.createTextNode("Welkom Pandix");



nodeH1.appendChild(h1Text);
header.appendChild(nodeH1);
deletePara.remove();
red.style.color = "red";

let main = document.getElementById('main');
let aside = document.createElement('aside');

aside.innerHTML = `
        <h2>Adresgegevens Hogeschool PXL</h2>
        <p>Elfde-Liniestraat 24, 3500 Hasselt, België</p>
        <p>Tel: +32 11 77 55 55</p>
        <p>Email: info@pxl.be</p>
    `;

main.appendChild(aside);

