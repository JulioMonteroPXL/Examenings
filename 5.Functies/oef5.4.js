function startMetHallo (a) {
    if(a.startsWith("Hallo")) {
        return a ;
    } else {
        let eersteLetter = a.charAt(0).toLowerCase()
        let restZin = zin.slice(1);
        return "Hallo, " + eersteLetter + restZin;
    }

}

let zin = prompt("geen een zin in");

let result = startMetHallo(zin)

console.log(result);