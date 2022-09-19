// *IMPORT*
import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/js/all";
import getElementById from "./components/getId";
import depositeSold from "./components/deposit";
import withdrawSold from "./components/withDrwan";
import overDrafte from "./components/overDraft";
// Get Input
let inptut1 = getElementById("input-1");
let inptut2 = getElementById("input-2");
let addSold = getElementById("add");

// get current
let curentSold = 900;
let spanDepo = getElementById("curent-sold");
let curenIban = "FR45166841";

// ****get button deposit****
let btnDeposit = getElementById("btn-deposit");
let btnRetire = getElementById("btn-retirer");

getElementById("curent-iban").innerHTML = curenIban;
getElementById("curent-sold").innerHTML = curentSold;

// depose
btnDeposit.addEventListener("click", () => depositeSold());

// retirer
btnRetire.addEventListener("click", () => withdrawSold());

// -------Découvert------
overDrafte();


//transefert

// addSold.addEventListener("click", () => a());
// const transfert = () => {
//   let results1 = parseInt(inptut1.value);
//   let results2 = parseInt(inptut2.value);
//   let b = results1 + results2;
//   console.log(b);
// };
