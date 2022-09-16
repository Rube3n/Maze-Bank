// *IMPORT*
import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/js/all";
import getElementById from "./components/getId";

// Get Input
let inptut1 = getElementById("input-1");
let inptut2 = getElementById("input-2");
let addSold = getElementById("add");
// ****get button deposit****
let btnDeposit = getElementById("btn-deposit");

let btnRetire = getElementById("btn-retirer");

let transacSold = getElementById("transac-sold");
let retirSold = getElementById("retir-sold");
let spanDepo = getElementById("curent-sold");
let transacValide = getElementById("transac-valide");
let transacError = getElementById("transac-error");
let curenIban = "FR45166841";
let curentSold = 900;
getElementById("curent-iban").innerHTML = curenIban;
getElementById("curent-sold").innerHTML = curentSold;

// ***Function deposit sold***
const depositeSold = () => {
  let dep = parseInt(transacSold.value);
  curentSold += dep;
  spanDepo.textContent = curentSold;
  transacValide.classList.add("block");
  transacValide.textContent = "Transaction effecuter";
  return curentSold;
};
btnDeposit.addEventListener("click", depositeSold);

// ****Function retire sold****
const retireeSold = () => {
  let retir = parseInt(retirSold.value);
  curentSold -= retir;
  spanDepo.textContent = curentSold;
  transacError.classList.add("block");
  transacError.textContent = "Transaction Invalide";
  return curentSold;
};
btnRetire.addEventListener("click", retireeSold);

// refresh

// -------Découvert------

//********/ transefert***************

// addSold.addEventListener("click", () => a());
// const transfert = () => {
//   let results1 = parseInt(inptut1.value);
//   let results2 = parseInt(inptut2.value);
//   let b = results1 + results2;
//   console.log(b);
// };
