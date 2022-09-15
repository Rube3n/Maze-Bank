// *IMPORT*
import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/js/all";

// Get Input
let inptut1 = document.getElementById("input-1");
let inptut2 = document.getElementById("input-2");
let addSold = document.getElementById("add-sold");

// ****get button****
let btnDepose = document.getElementById("btn-depose");
let btnRetire = document.getElementById("btn-retirer");

let transacSold = document.getElementById("transac-sold");
let retirSold = document.getElementById("retir-sold");
let spanDepo = document.getElementById("curent-sold");
let transacValide = document.getElementById("transac-valide");
let transacError = document.getElementById("transac-error");
let curenIban = "FR45166841";
let curentSold = 900;
document.getElementById("curent-iban").innerHTML = curenIban;
document.getElementById("curent-sold").innerHTML = curentSold;

// ***Function depose sold***
const deposeeSold = () => {
  let dep = parseInt(transacSold.value);
  curentSold += dep;
  spanDepo.textContent = curentSold;
  transacValide.classList.add("block");
  transacValide.textContent = "Transaction effecuter";
  console.log(curentSold);
  return curentSold;
};
btnDepose.addEventListener("click", deposeeSold);

// ****Function retire sold****
const retireeSold = () => {
  let retir = parseInt(retirSold.value);
  curentSold -= retir;
  spanDepo.textContent = curentSold;
  transacError.classList.add("block");
  transacError.textContent = "Transaction Invalide";
  console.log(curentSold);
  return curentSold;
};
btnRetire.addEventListener("click", retireeSold);

// -------Découvert------

//********/ transefert***************

// addSold.addEventListener("click", () => a());
// const transfert = () => {
//   let results1 = parseInt(inptut1.value);
//   let results2 = parseInt(inptut2.value);
//   let b = results1 + results2;
//   console.log(b);
// };
