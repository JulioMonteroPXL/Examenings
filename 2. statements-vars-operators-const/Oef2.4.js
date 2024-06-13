let koek = "Ik wil een koekje";

let nieuweZin = koek.replace('koekje' , 'Lasagna van PXL-Catering').toUpperCase()

let pNode = document.createElement("p")

let textNode = document.createTextNode(nieuweZin);
pNode.appendChild(textNode);

document.body.appendChild(pNode);




console.log(nieuweZin);