import getElementById from "./getId";
import newUser from "./classUser";

let inputName = getElementById("input-name");
let inputSold = getElementById("input-sold");
let inputIban = getElementById("input-iban");
let depName = getElementById("dep-name");
let depIban = getElementById("dep-iban");
let depSold = getElementById("dep-sold");

const addUser = () => {
    depName.textContent = inputName.value;
    depSold.textContent = inputSold.value;
    depIban.textContent = inputIban.value;
  return new newUser(inputName.value, inputSold.value, inputIban.value);
};

export default addUser;
