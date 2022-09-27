import user from "./user";
import getElementById from "./getId";

let inputName = getElementById("input-name");
let inputSold = getElementById("input-sold");
let inputIban = getElementById("input-iban");

let newUser;
let depName = getElementById("dep-name");
let depIban = getElementById("dep-iban");
let depSold = getElementById("dep-sold");

const addUser = () => {
  depName.textContent = inputName.value;
  depSold.textContent = inputSold.value;
  depIban.textContent = inputIban.value;
  newUser = new user(inputName.value, inputSold.value, inputIban.value);
};

export default addUser;
