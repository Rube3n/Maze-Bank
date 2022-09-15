import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/js/all";

let inptut1 = document.getElementById("input-1");
let inptut2 = document.getElementById("input-2");
let addSold = document.getElementById("add-sold");
let deposeSold = document.getElementById("depose-sold");
let btnDepose = document.getElementById("btn-depose");
let btnRetire = document.getElementById("btn-retirer")
let spanDepo = document.getElementById("curent-sold")
let curentSold = 900;
let curenIban = "FR45166841";

document.getElementById("curent-iban").innerHTML = curenIban ;
document.getElementById("curent-sold").innerHTML = curentSold;

const deposeeSold = () => {
    let dep = parseInt(deposeSold.value)
    curentSold += dep;
    spanDepo.textContent=curentSold
    console.log(curentSold);
    return curentSold;
};
btnDepose.addEventListener("click", deposeeSold)

const retireeSold = () => {
    let retir = parseInt(deposeSold.value)
    curentSold -= retir;
    spanDepo.textContent=curentSold
    console.log(curentSold);
    return curentSold;
};
btnRetire.addEventListener("click", retireeSold)




//******* */ transefert***************

// addSold.addEventListener("click", () => a());
// const transfert = () => {
//   let results1 = parseInt(inptut1.value);
//   let results2 = parseInt(inptut2.value);
//   let b = results1 + results2;
//   console.log(b);
// };