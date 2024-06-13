let zin1, zin2, zin3;

zin1 = "Dit is de eerste zin";
zin3 = "Dit is de derde zin";
zin2 = "Dit is de tweede zin";

let fullSentence = zin1 + ". " + zin2 + ". " + zin3;

alert(fullSentence);

let pNode = document.createElement("p");
pNode.id = "volleZin";
let tekstNode = document.createTextNode(fullSentence);

pNode.appendChild(tekstNode);
document.getElementsByTagName('body')[0].appendChild(pNode);