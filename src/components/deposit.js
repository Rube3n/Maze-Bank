import getElementById from "./getId";
import newUser from "./classUser";

let transacSold = getElementById("transac-sold");
let transacValide = getElementById("transac-valide");
let test = getElementById("dep-sold");

// get button deposit

const depositeSold = () => {
  let dep = parseInt(transacSold.value);
  let test = parseInt(test);
  test += dep;
  transacValide.classList.add("block");
  transacValide.textContent = "Transaction effecuter";
  return;
};

export default depositeSold;
