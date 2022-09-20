// IMPORT

import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/js/all";
import getElementById from "./components/getId";
import depositeSold from "./components/deposit";
import withdrawSold from "./components/withDrwan";
import overDrafte from "./components/overDraft";
import addUser from "./components/addUser";

// Get Input
let inputName = getElementById("input-name");
let inputSold = getElementById("input-sold");
let inputIban = getElementById("input-iban");

// get span
let depName = getElementById("dep-name");
let depIban = getElementById("dep-iban");
let depSold = getElementById("dep-sold");

// get button deposit

let btnDeposit = getElementById("btn-deposit");
let btnRetire = getElementById("btn-retirer");
let btnSubmit = getElementById("btn-submit");

// depose

btnDeposit.addEventListener("click", () => depositeSold());

// retirer

btnRetire.addEventListener("click", () => withdrawSold());

// Découvert

overDrafte();

// class user

btnSubmit.addEventListener("click", () => addUser());


