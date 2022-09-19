import getElementById from "./getId";

let curentSold = 900;
let transacError = getElementById("transac-error");
let retirSold = getElementById("retir-sold");
let spanDepo = getElementById("curent-sold");
let btnRetire = getElementById("btn-retirer");

const withdrawSold = () => {
  let retir = parseInt(retirSold.value);
  curentSold -= retir;
  spanDepo.textContent = curentSold;
  transacError.classList.add("block");
  transacError.textContent = "Transaction Invalide";
  return curentSold;
};
btnRetire.addEventListener("click", withdrawSold);

export default withdrawSold;
