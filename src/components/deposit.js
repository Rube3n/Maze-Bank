import getElementById from "./getId";

let transacSold = getElementById("transac-sold");
let transacValide = getElementById("transac-valide");

// get button deposit

const depositeSold = () => {
  let dep = parseInt(transacSold.value);
  curentSold += dep;
  transacValide.classList.add("block");
  transacValide.textContent = "Transaction effecuter";
  return curentSold;
};

export default depositeSold;
